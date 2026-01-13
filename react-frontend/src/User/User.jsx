import React, { useEffect, useState } from "react";
import { createUser, deleteUser, fetchUsers, updateUser } from "./UserService";
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase/firebase';


export default function User() {
    const [users, setUsers] = useState([]);
    const [usersFirebase, setUsersFirebase] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [form, setForm] = useState({
        name: "",
        zipCode: "",
        latitude: "",
        longitude: "",
        timezone: "",
    });
    const [error, setError] = useState("");

    const retrieveUsers = (async ()=>{
        const fetchedUsers = await fetchUsers();
        console.log("Fetched users:", fetchedUsers);
        setUsers(fetchedUsers || []);
        });

    useEffect(() => {
        retrieveUsers();
    }, []);

      useEffect(() => {
    const userRef = ref(database, 'users');
    
    // Subscribe to real-time updates
    const unsubscribe = onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert the JSON object from Firebase into an array for React state
        const usersArray = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setUsersFirebase(usersArray);
      } else {
        setUsersFirebase([]);
      }
    });

    // Cleanup the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

    function resetForm() {
        setEditingId(null);
        setForm({
            name: "",
            zipCode: "",
            latitude: "",
            longitude: "",
            timezone: "",
        });
        setError("");
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
    }

    function validate(f) {
        if (!f.name.trim()) return "Name is required";
        if (!f.zipCode.trim()) return "Zip code required";
        if (f.latitude !== "" && Number.isNaN(Number(f.latitude))) return "Latitude must be a number";
        if (f.longitude !== "" && Number.isNaN(Number(f.longitude))) return "Longitude must be a number";
        return "";
    }

    const getPosition = () => {
    return new Promise((resolve, reject) => {
      // Check if the Geolocation API is supported
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported by your browser'));
      }
      // Call the standard method with resolve and reject as callbacks
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

    async function handleSubmit(e) {
        e.preventDefault();
        const v = validate(form);
        if (v) {
            setError(v);
            return;
        }
        const userPayload = {
            id: editingId || "",
            name: form.name.trim(),
            zipCode: form.zipCode.trim(),
            timezone: form.timezone,
        };
        if (navigator.geolocation) {
            const position = await getPosition();
            userPayload.latitude = position.coords.latitude;
            userPayload.longitude = position.coords.longitude;
        } else {
        setError('Geolocation is not supported by your browser.');
        }
    if (editingId) {
        try{
        setIsLoading(true); 
        await updateUser(editingId, userPayload);
        }catch(err){
        console.error('Error updating user:', err);
        setError('Failed to update user. Please try again.');
        }
        finally{
        setIsLoading(false);
        }

    } else {
         try{
        setIsLoading(true); 
        await createUser(editingId, userPayload);
        }catch(err){
        console.error('Error Create user:', err);
        setError('Failed to Create user. Please try again.');
        }
        finally{
        setIsLoading(false);
        }
    }
    resetForm();
    }

    function handleEdit(id) {
        const u = users.find((x) => x.id === id);
        if (!u) return;
        setEditingId(id);
        setForm({
            name: u.name || "",
            zipCode: u.zipCode || "",
            latitude: u.latitude == null ? "" : String(u.latitude),
            longitude: u.longitude == null ? "" : String(u.longitude),
            timezone: u.timezone || "",
        });
        setError("");
    }

    function handleDelete(id) {
        if (!window.confirm("Delete this user?")) return;
        deleteUser(id);
        if (editingId === id) resetForm();
    }

    return (
        <div style={{ padding: 20, fontFamily: "Arial, sans-serif", maxWidth: 1200, minWidth: 500, margin: "0 auto" }}>
            <h2>User CRUD</h2>

            <form onSubmit={handleSubmit} style={{ marginBottom: 20, border: "1px solid #eee", padding: 12 }}>
                <h3>{editingId ? "Edit User" : "Create User"}</h3>

                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <label>
                        Name
                        <input name="name" value={form.name} onChange={handleChange} style={{ width: "100%" }} />
                    </label>
                    <label>
                        Zip Code
                        <input name="zipCode" value={form.zipCode} onChange={handleChange} style={{ width: "100%" }} />
                    </label>
                </div>
                {error && <div style={{ color: "crimson", marginTop: 8 }}>{error}</div>}
                <div style={{ marginTop: 10 }}>
                    <button type="submit" style={{ padding: "6px 12px", marginRight: 8 }}>
                        {editingId ? "Update" : "Create"}
                    </button>
                    <button type="button" onClick={resetForm} style={{ padding: "6px 12px" }}>
                        Cancel
                    </button>
                </div>
            </form>
        <div style={{ display: "flex", gap: 40 }}>
            <div>
                <div style={{ display: "flex", gap: 40 }}>
                <h3>Users  - API CALL({users.length})</h3>
                <button  style={{ padding: "6px 10px", border: "1px solid rgb(255, 255, 255)" }} onClick={()=>{retrieveUsers()}}>Refresh</button>
                </div>
                <div style={{ border: "1px solid #eee", padding: 8 }}>
                    {users.length === 0 && <div>No users</div>}
                    {users.map((u) => (
                        <div key={u.id} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #f4f4f4" }}>
                            <div>
                                <div style={{ fontWeight: 600 }}>{u.name}</div>
                                <div style={{ fontWeight: 600 }}>{u.zipCode}</div>
                                <div style={{ fontWeight: 600 }}>lat: {u.latitude}</div>
                                <div style={{ fontWeight: 600 }}>lon: {u.longitude}</div>
                                <div style={{ fontWeight: 600 }}>timezone: {u.timezone}</div>
                                <div style={{ fontSize: 11, color: "#999", marginTop: 4 }}>id: {u.id}</div>
                            </div>

                            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                                <button onClick={() => handleEdit(u.id)} style={{ padding: "6px 10px" }}>
                                    Edit
                                </button>
                                <button onClick={() => handleDelete(u.id)} style={{ padding: "6px 10px", background: "rgb(156, 8, 8)", border: "1px solid rgb(255, 255, 255)" }}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h3>Users  - Firebase Realtime Database({users.length})</h3>
                <div style={{ border: "1px solid #eee", padding: 8 }}>
                    {usersFirebase.length === 0 && <div>No users</div>}
                    {usersFirebase.map((u) => (
                        <div key={u.id} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #f4f4f4" }}>
                            <div>
                                <div style={{ fontWeight: 600 }}>{u.name}</div>
                                <div style={{ fontWeight: 600 }}>{u.zipCode}</div>
                                <div style={{ fontWeight: 600 }}>lat: {u.latitude}</div>
                                <div style={{ fontWeight: 600 }}>lon: {u.longitude}</div>
                                <div style={{ fontWeight: 600 }}>timezone: {u.timezone}</div>
                                <div style={{ fontSize: 11, color: "#999", marginTop: 4 }}>id: {u.id}</div>
                            </div>

                            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                                <button onClick={() => handleEdit(u.id)} style={{ padding: "6px 10px" }}>
                                    Edit
                                </button>
                                <button onClick={() => handleDelete(u.id)} style={{ padding: "6px 10px", background: "rgb(156, 8, 8)", border: "1px solid rgb(255, 255, 255)" }}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div> 
    </div>
    );
}

export { User };
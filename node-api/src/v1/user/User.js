const { usersRef } = require("../firebase/firebase");

const create = (user)=>{
    const id = usersRef.push();
    user.id = id.key;
    usersRef.child(user.id).set({
    name: user.name,
    zipCode: user.zipCode,
    latitude: user.latitude,
    longitude: user.longitude,
    timezone: user.timezone,
    openWeatherData: user.openWeatherData
});
    return user;
}

const findById = async (id)=>{
    const snapshot = await usersRef.child(id).get();
    return snapshot.val();
}

const findAll = async ()=>{
    const snapshot = await usersRef.get();
    if (snapshot.exists()) {
    return snapshot.val();
    } else {
    return [];
    }
}         


const update = (user)=>{
    usersRef.child(user.id).set({
  id: user.id,
  name: user.name,
  zipCode: user.zipCode,
  latitude: user.latitude,
  longitude: user.longitude,
  timezone: user.timezone,
  openWeatherData: user.openWeatherData
});
    return user;
}

const deleteUser = (user)=>{
    usersRef.child(user.id).remove();
    return user;
}


module.exports = {create, findById, findAll, update, deleteUser};
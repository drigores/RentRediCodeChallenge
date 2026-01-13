const API_BASE =  'http://localhost:3000/api/v1';
const USERS_ENDPOINT = `${API_BASE}/users`;

async function request(url, options = {}) {
    const res = await fetch(url, options);
    if (!res.ok) {
        let errText;
        try {
            const json = await res.json();
            errText = json.message || JSON.stringify(json);
        } catch (e) {
            errText = await res.text();
        }
        throw new Error(errText || res.statusText);
    }
    if (res.status === 204) return null;
    return res.json();
}

/**
 * Fetch all users
 * @returns {Promise<Array>}
 */
export async function fetchUsers() {
    return request(USERS_ENDPOINT);
}


/**
 * Create a new user
 * model:
 * {
 *   id: "123asdas123",
 *   name: "John Doe",
 *   email: "johndoe@johndow.com",
 *   zipCode: "12345",
 *   latitude: 40.7128,
 *   longitude: -74.006,
 *   timezone: "America/New_York",
 * }
 *
 * @param {Object} user
 * @returns {Promise<Object>}
 */
export async function createUser(user) {
    return request(USERS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    });
}

/**
 * Update an existing user by id
 * @param {string} id
 * @param {Object} user
 * @returns {Promise<Object>}
 */
export async function updateUser(id, user) {
    return request(`${USERS_ENDPOINT}/${encodeURIComponent(id)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    });
}

/**
 * Update an existing user by id
 * @param {string} id
 * @returns {Promise<Object>}
 */
export async function deleteUser(id) {
    return request(`${USERS_ENDPOINT}/${encodeURIComponent(id)}`, {
        method: 'DELETE',
    });
}

export default {
    fetchUsers,
    createUser,
    updateUser,
};
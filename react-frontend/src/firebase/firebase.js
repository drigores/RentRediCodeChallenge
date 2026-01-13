// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'; // Import Realtime Database module

const firebaseConfig = {
  apiKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC8EII1W+EQjwR2\nfDx/onugZV+cC2b0Qyz4U979S1OpE5kAkwmrJ6cG9PPf5l/Zcs0leh2OsUEt2qHs\nSLMUnqew/Y1RjB5N0H6XfN/bBftF4JLjrmZIH17JpH3hn/edV9tsFPJu7mqJ5RJp\nf5jv3BtLw6TUikXRTD/mjgCvwlxg/HacB++xXPfy+jnC3avWwUz08W/iYm67YXou\n7Hqj+T73wn/vy+wF02jb/HIBsnD+u+YSdTLy01RZ9iAAEMOz/Q9D/NBtEqfpNSlL\n/DlpwQhuOM5fo2xtB+msHOYzJHKddilG2mO5RLnIjKEdmeqr9FsBbBUSzM6HZzh7\n7DB8tE1rAgMBAAECggEAKWL+rKx0GrdGlaagj7wbtcApasdNmGqiHmIivB5UImzI\nKoqxQYO/67WDZ94kcM+lWt6FW64heGxZXwzesCZ8I+SgsXYDAz/jZAYco3AtDIMw\nAEAUjUGuE/UJqNoR3YQEq0Pu2D/KnV8WjrYAW6TWMvWys/1cAQPlOiE9AHDm8Iat\n51pRpkhnaKAyN/gEz4wMEdxSJzbwzjxNXxGljeM4dP5OUz9MVb3zxwyGP/aMny2q\nuNH6y0r96xI+kdFLZaubD2Y6XJhN3J4AV/v0a6pboUar+bQG2KQi76XJDfHrzgLv\nVCyG7xxMn/O2hgeeo1B+RqNQPfYu/ugE6HJDdwSISQKBgQDrp3p39ZJYicqIZwjd\ngh7LIsvdTqWkmBSEnyR+aiKtE2xa/lfC8GPOGaZ8XDcHHi9Hhj6dISOQeoUZlhCF\nCifAVIaN6fWlyjncoD1b4luaXSqXcY6tFkpSkhIS6JZ0Du8dmQjOla8d6sNT+qBt\n8ufzMQjZ7JnaFVdCwsPqG49DqQKBgQDMTS75rgjFZTwsgW428ryo4+8rHs6wrmNX\nEuQ9u1r4YHwI9ZQVHT2qGFsjI9begjYpH13LBR8CgLKgcGAphhNikR2IFiti93au\nRQ5nrONjTIECLdkY9vYvVHZucLV1B9YAKoh1mEBVXhqxz4CfygqzLamabTNWVeAA\npichsar08wKBgQC767SIEPcBT/CI0dGKAwfXago0k1EYboZ+NAKAJNc+Oe0Aqy8F\nL3oHkwDmzwq6zGFbojwwRYr83hdiDf9ieHS2tTEP3nCcIyX9QHNt4Ja4BG/AkTf7\n43ilXAK5vWytZHNeoPka9NbO/rWBNK3WwAwkLQgn8LvH45jQjkx5Vjzq8QKBgC9x\nYQ5ENu84EiA3slN6TQtfWyQFVHQ9Gv6WeYBIaNiy9zrRZKD+mFpOq6NeaEBltpQY\nH5zMxKW9Iz4UupAJ/ahvEI+QrmSeGOZhTPYQdQGTO4Y5BWhBuWvGTnZZIBpcRnrl\nZakBQTdR0hsml7UDozZ2zSL6ZuiOqqUb8IxniM63AoGAfogzMVEYXWJTSzREJXUj\nhG8PmNaf5E2ro8pz/mmJmkaJTAS3hjHi8Pkus0ZniO8l+PGV/LpjGs4h6sisX5UO\nNjPCk4fGIFqwzrI/o33FSOtENHkxuhhcAPXlg65h43TBZaMKZv9IQAh6tPKaJaBU\n5m2Rwb8FKeHb509DRXLBD2w=\n-----END PRIVATE KEY-----\n",
  authDomain: "https://accounts.google.com/o/oauth2/auth",
  projectId: "rentredi-57402",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "rentredi-57402",
  databaseURL: "https://rentredi-57402-default-rtdb.firebaseio.com", // Make sure this is included for non us-central1 locations
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);


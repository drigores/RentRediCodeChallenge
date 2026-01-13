// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'; // Import Realtime Database module

const firebaseConfig = {
  apiKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC5QhQcM7euYr1k\nZzCL/OgDexY4bUVZ+OnA6rMg6Ko4FRZ74MthyDYDi1ubgFCAS40hXtgDGc2Yx7w7\npqPRgTlfDGMFSGdz6/vvkNCgVwJ7GppkFYYHrDTB4n1EyYbNapAWjFgQy/C/2XrJ\nKefb68byJCEsafYHS8Do9GRduWEJRDlT98l2T7fbh3BDxtS/lCyCL3fdM/aDARVl\nfjn+EyBHPcOWKNgdIwSC8tRdkQfZ0G9Dl3ViDWnDeQVoMJklgOH7Jvhp7SlzqEB+\nTtC6/wB07v7KcF8JaWsPrUrz2PTIcPSKAY/SuJH3ybkFz8A6MUNpjMqfWxYdND2b\nKjs1+4/TAgMBAAECggEADQ5pJTh7E4efjW0jilol1K9e3rv+Wg7yFBSQBBu7RpfF\n4K+N5ea0V9LOGMsV4VTYLdsY7wicgs36dPT5/d2Ia5IPg7AzClDXwQe8JfC756Bb\n85diVzWw9veKMi55zHRcLBqlm9lwe2gaZtI7P9A07AMIpRat4WnA8l1DzY8ve/WV\najy6c77Qhj920Qp8Y4mGVnE6PqrkNu94zNim0okpAeJACUQWdV/BuaB20owdLq3j\nnTj/Ig8BU1fSOkRfMiUwQihTzieJ+j24pclJiwRv7XaxbmQo7UFQGXYPC2phdklu\nZSTZVyo3fMz6ZfnmSMh7nQY/VXZzOPRWe1ini13rgQKBgQDk75PY9ZMMcvLpOC/u\nGukhXA/DpJIc2VLRe9zf/pF3EYKh5iYInoyS6tJkfjKHjBHGUhVlsfJoBg3nPRh4\nSu5WIGB43cSVqIh+9RmZG2iTuC8QwXTTJCheKcADFIM+IiiKGY0jdgee995Ea1Em\ni7n4adcIrCpoiz8LnSoYBlaSIQKBgQDPKKfgEhTevYPc7VJFcSY0zwTRViqi3hYg\nHLgBeREmafusdLLbkBFtgTbe3ggHrPkg+mL7JOQJWOEWYbXxn+kqUcwWUqm747SU\nfbov9TAlMwm6t6Px+kfIFUYWxbGJ1CA0maUJuc8FMH28I2x5B/3HKE+7fghEmtP+\nSVavY8CLcwKBgQC87m6APWImgvKuv3zmrnS44CXuWnFut3cehG7quEbKEbxR6gJ3\nWIlAceRBpNgEfvboSTN5YppfeKeerw/zrjr0/vE+rh4fOB+1TobakQED75t/43eL\nDCr4UtIweIw7CauVFLMikbSGX56hrkMhYWyPcqFQeezhrBDSf9iOTSTCoQKBgQCp\nYeKx0dcCsQ6qi9mjMfs9Xq/fwoamGNUaeKDzg1xEfo/r2JeN82RslySYYg9Kx2IE\nVvarxuQ1yFhzBn3QDSKHGc63yetC19KFP7AHGoG9SNgBtbn1VuFudgaTBB5ARhP3\nLlHFfAoLgjSsqoI9DA2y1AEtmsWD4tzHpIueaP+8hQKBgB1dQ8ik7tTzAA9ncjvu\nue+/sjV9aXy7vJ+OpYoTvN5RYRAGuLT37gA6bov6TAohO7g2PSv6c8m39OkH91Y4\nhjVO4f0nSwB9jv0IE4anakQQlBV9zFrUpdeGgb2+qmPloLTLv1t10/2SjQTgcR7z\nC+mkYSuiPwZrJHyVT5B6ze61\n-----END PRIVATE KEY-----\n",
  authDomain: "https://accounts.google.com/o/oauth2/auth",
  projectId: "rentredi-57402",
  appId: "rentredi-57402",
  databaseURL: "https://rentredi-57402-default-rtdb.firebaseio.com", // Make sure this is included for non us-central1 locations
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);


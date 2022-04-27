import { getAuth, onAuthStateChanged } from "firebase/auth";

// Credit to Gaute Meek Olsen for the function below.
// https://dev.to/gautemeekolsen/vue-guard-routes-with-firebase-authentication-f4l

// function that returns the current firebase user using a promise
// ensure you use the 'await' keyword when calling this function
const userSignedIn = () => {

var auth = null;

try {
    auth = getAuth();
} catch {
    console.error('An error occured when obtaining a reference to the auth service.',
    'Are you sure the firebase app and auth service have been initialized?');
}

return new Promise((resolve, reject) => {
    // unsubscribe method - see onAuthStateChanged return type in Firebase 9 Docs 
    const unsubscribe = onAuthStateChanged(auth, (user) => {
    unsubscribe();
    resolve(user);
    }, reject);
});
};

export default userSignedIn;
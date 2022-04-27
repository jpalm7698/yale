# Yet Another Login Example
Yet Another Login Example using Vuejs and Firebase.

## Project setup
### Frontend
```
npm install
```

### Firebase
1. Ensure `firebase` and `firebase-tools` are installed:
    ```
    npm install firebase firebase-tools
    ```

1. Create a Firebase account and create a new project in the [Firebase Console](https://console.firebase.google.com).

1. Create a new web app in your project and import the your provided `firebaseConfig` object into your local repository:
   
    Create a new file named `firebase-config.js` at the project root with the following code below:
    
    ```js
    const firebaseConfig = {
        // make sure to add your firebaseConfig members here!

        // apiKey:
        // authDomain:
        // etc...
    };

    export function getFirebaseConfig() {
        return firebaseConfig;
    };
    ```

1. Initialize Firebase and Auth Emulator
    ```
    firebase init
    ```
    Select your existing project, auth emulator, and configure emulator setup using the prompts provided.


### Frontend Compiles and hot-reloads for development
```
npm run serve
```

### Start Firebase Auth Emulator
```
firebase emulators:start
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

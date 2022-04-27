<template>
  <router-view/>
</template>

<script lang="js">
// firebase configuration key and firebase dependencies
import { getFirebaseConfig } from '../firebase-config';
import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';

  // firebase init logic is executed in the root (this) component, during the 'created' lifecycle hook
  export default {
    name: 'app',
    created() {
      const app = initializeApp(getFirebaseConfig());

      // init firebase auth and get a reference to the service
      const auth = getAuth(app);

      // connect to local authentication emulator
      connectAuthEmulator(auth, "http://localhost:9099");

      // if there's no user signed in: redirect to the authui view
    }
  }
</script>
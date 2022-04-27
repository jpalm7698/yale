<template>
  <div id="user-account-information">
    <h2>Hello, {{ displayName }}:</h2>
    <h5>User Account Properties:</h5>
    <p>Email address: {{ email }}</p>
    <p>Email Verified?: {{ emailVerified }}</p>
    <p>User Unique ID: {{ uid }}</p>

  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: 'HelloWorld',
  data: () => ({
    userSignedIn: false,
    displayName: '',
    email: '',
    emailVerified: null,
    uid: null,
  }),
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      // Note: if there is no user, the router will redirect the browser to the login page.
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // display user attributes
        this.displayName = user.displayName;
        this.email = user.email;
        this.emailVerified = user.emailVerified;
        this.uid = user.uid;
        this.userSignedIn = true;
      } 
    }); 
  },
}
</script>
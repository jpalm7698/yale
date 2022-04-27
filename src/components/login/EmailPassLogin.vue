<template>
<div id="email-pass-login">
<!-- Prevent the onSubmit event from triggering (see JS - preventDefault) -->
<!-- Call 'registerUser' method instead -->
<p v-if="firebaseAuthError !== ''">{{ firebaseAuthError }}</p>
<form @submit.prevent="signInUser" > 
    <h2>Login with Email and Password:</h2>
    <div>
        <label for="email">Email Address:</label>
        <input type="text" v-model="email" name="email" required>
    </div>
    <br>
    <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" name="password" required>
    </div>
    <input type="submit" value="Login">
</form>
</div>
</template>

<script>
import { signInWithEmailAndPassword, getAuth } from "firebase/auth"
import { signInErrorMessage } from "../../mixins/firebaseErrors.js"

export default {
    name: 'EmailPassLogin',
    data: () => ({
        email: '',
        password: '',
        firebaseAuthError: '',
    }),
    methods: {
    async signInUser() {

        // email/password validation

        // clear firebase related errors from the previous attempt (if any)
        this.firebaseAuthError = '';

        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
            // User is signed in. Redirect browser to the home page.
            this.$router.push({ path: '/' });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("An error occured while signing in an existing user: ", errorCode, "\n", errorMessage);
            // Display error message to user.
            this.firebaseAuthError = signInErrorMessage(errorCode);
        });

    }
    },
}
</script>
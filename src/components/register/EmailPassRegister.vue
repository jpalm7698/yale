<template>
<div id="email-pass-register">
<!-- Prevent the onSubmit event from triggering (see JS - preventDefault) -->
<!-- Call 'registerUser' method instead -->
<form @submit.prevent="registerUser" > 
    <h2>Register with Email and Password:</h2>
    <div>
        <label for="email">Email Address:</label>
        <input type="text" v-model="v$.email.$model" name="email" required>
        <p v-for="error of v$.email.$errors" :key="error.$uid">
            {{ error.$message }}
        </p>
    </div>
    <br>
    <div>
        <label for="password">Password:</label>
        <input type="password" v-model="v$.password.$model" name="password" required>
        <p v-for="error of v$.password.$errors" :key="error.$uid">
            {{ error.$message }}
        </p>
    </div>
    <br>
    <div>
        <label for="password-confimation">Confirm Password:</label>
        <input type="password" v-model="v$.passwordConfirmation.$model" name="password-confirmation" required>
        <p v-for="error of v$.passwordConfirmation.$errors" :key="error.$uid">
            {{ error.$message }}
        </p>
    </div>

    <input type="submit" value="Sign Up">
</form>
</div>
</template>

<script>
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import useVuelidate from '@vuelidate/core'
import { email, required, minLength, sameAs, helpers } from '@vuelidate/validators'

export default {
    name: 'EmailPassRegister',
    data: () => ({
        email: '',
        password: '',
        passwordConfirmation: '',
    }),
    setup: () => ({ v$: useVuelidate() }),
    validations() {
        return {
            email: { 
                email: helpers.withMessage("Invalid email address.", email), 
                required: helpers.withMessage("An email address is required.", required),
                $lazy: true
            },
            password: { 
                required: helpers.withMessage("A password is required.", required), 
                minLength: helpers.withMessage("Password must be at least 6 characters long.", minLength(6)),
                $lazy: true,
            },
            passwordConfirmation: { 
                // password confirmation field doesn't need a min. length requirement;
                // the password field already has that requirement.
                sameAsPassword: helpers.withMessage(
                    "Those passwords didn't match.", 
                    sameAs(this.password)
                    ),
                $lazy: true,
            },
        };
    },
    methods: {
        async registerUser() {
            
            const isFormCorrect = await this.v$.$validate();

            // cancel operation if there are errors
            if ( !isFormCorrect ) return;

            // email/password validation
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.email, this.password)
            .then(() => {
                // User is registered and signed in. Redirect browser to the home page.
                this.$router.push({ path: '/' });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("An error occured while creating and signing in a new user: ", errorCode, "\n", errorMessage);
            });
        }
    },
}
</script>
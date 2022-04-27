<!-- Use landing/login page like Instagram's -->

<template>
    <div id="email-pass-access">
        <EmailPassLogin v-show="showLogin"/>
        <EmailPassRegister v-show="!showLogin"/>
        <button @click="swapEmailPassAccess">{{ this.accessLabel }}</button>
    </div>
    <!-- Swap between EmailPass Login and Register Components -->
    <!-- Always present OAuth Logins beneath -->
</template>

<script>
import EmailPassLogin from "./login/EmailPassLogin.vue"
import EmailPassRegister from "./register/EmailPassRegister.vue"

export default {
    name: "AuthUI",
    components: { EmailPassRegister, EmailPassLogin },
    data: () => ({
        showLogin: true,
        accessLabel: 'Register',
    }),

    methods: {
        async swapEmailPassAccess() {
            this.showLogin = !this.showLogin;
            this.accessLabel = this.showLogin ? 'Register' : 'Login';
        }
    }
}
</script>
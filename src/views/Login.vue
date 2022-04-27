<template>
    <div class="login">
        <AuthUI/>
    </div>
</template>

<script>
import AuthUI from '../components/AuthUI.vue';

export default {
    name: 'Login',
    components: {
        AuthUI,
    },
}
</script>
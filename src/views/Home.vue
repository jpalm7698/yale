<template>
  <div class="home">
    <HelloWorld/>
    <button id="logout-user" @click="signOutUser">Logout</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getAuth, signOut } from "firebase/auth";

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    signOutUser() {
      const auth = getAuth();
      signOut(auth).then(() => {
        console.log("Sign out successful.");
        this.$router.push({ path: '/login' });
      })
    }
  },
}
</script>

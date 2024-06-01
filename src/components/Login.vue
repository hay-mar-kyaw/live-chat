<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="login">
            <input type="email" placeholder="Email" v-model="email">
            <input type="password" placeholder="******" v-model="password">
            <button>Login</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup () {
        let displayName=ref("");
        let email=ref("");
        let password=ref("");
        let login=()=>{
            console.log(email.value,password.value);
        }

        return {
            displayName,
            email,
            password,
            login
        }
    }
}
</script>

<style scoped>

</style>
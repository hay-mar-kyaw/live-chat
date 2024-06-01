<template>
    <div>
        <h2>Sign Up</h2>
        <form @submit.prevent="signUp">
            <input type="text" placeholder="Display Name" v-model="displayName">
            <input type="email" placeholder="Email" v-model="email">
            <input type="password" placeholder="******" v-model="password">
            <button>Sign Up</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import { auth } from '@/firebase/config';
export default {
    setup () {
        let displayName=ref("");
        let email=ref("");
        let password=ref("");
        let signUp=async()=>{
            let res = await auth.createUserWithEmailAndPassword(email.value,password.value);
            console.log(res.user);
        }

        return {
            displayName,
            email,
            password,
            signUp
        }
    }
}
</script>

<style scoped>

</style>
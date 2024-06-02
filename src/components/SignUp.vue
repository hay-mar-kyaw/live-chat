<template>
    <div>
        <h2>Sign Up</h2>
        <form @submit.prevent="signUp">
            <input type="text" placeholder="Display Name" v-model="displayName">
            <input type="email" placeholder="Email" v-model="email">
            <input type="password" placeholder="******" v-model="password">
            <div v-if="error" class="error">{{ error }}</div>
            <button>Sign Up</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import useSignUp from '../composables/useSignUp'
export default {
    setup (props,context) {
        let displayName=ref("");
        let email=ref("");
        let password=ref("");
        
        let {error,createAccount}=useSignUp()
        let signUp=async()=>{
            let res =await createAccount(email.value,password.value,displayName.value);
            if(res){
                context.emit("enterChatroom")
            }
            
        }

        return {
            displayName,
            email,
            password,
            signUp,
            error
        }
    }
}
</script>

<style scoped>

</style>
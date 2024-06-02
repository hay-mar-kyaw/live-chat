<template>
    <div class="welcome container">
        <div v-if="showSignUp">
            <SignUp @enterChatroom="enterChatroom"></SignUp>
            <p>Already Member ? <span @click="showSignUp=!showSignUp">Login</span></p>
        </div>
        <div v-else>
            <Login @enterChatroom="enterChatroom"></Login>
            <p>not a member ? <span @click="showSignUp=!showSignUp">Sign Up</span></p>
        </div>
        
    </div>
</template>

<script>
import {ref} from   'vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import { useRouter } from 'vue-router'
export default {
  components: {
    Login, SignUp },
    setup () {
        
        let showSignUp=ref(true)
        let router =useRouter()
        let enterChatroom=()=>{
            router.push({name:"chatroom"})
        }
        return {
            showSignUp,
            enterChatroom
        }
    }
}
</script>

<style>
    .welcome{
        text-align: center;
        padding: 20px 0;
    }
    .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  /* .welcome label {
    display: block;
    margin: 20px 0 10px;
  } */
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }
</style>
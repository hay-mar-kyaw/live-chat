<template>
    <div>
        <nav>
            <div>
                <p>Hi display name</p>
                <p class="email">logged in email</p>
                
            </div>
            <button @click="logout">logout</button>
        </nav>
    </div>
</template>

<script>
import {auth} from '../firebase/config'
import {ref} from 'vue'
export default {
    setup () {
        let error=ref(null)
        let logout=async()=>{
            try{
                await auth.signOut()
                console.log('you are logout');
            }catch(err){
                error.value=err.message;
            }
                
               }
        return {
            error,
            logout
        }
    }
}
</script>

<style>
    nav{
        display: flex;
        justify-content: space-between;
        align-content: center;
        padding: 20px;
        border-bottom: 1px solid #eee;
    }
    nav p {
        margin: 2px auto;
        font-size:16px;
        color: #444;
    }
    nav p .email{
        font-size: 14px;
        color: #999;
    }
</style>
<template>
    <div>
        <nav v-if="user">
            <div>
                <p>Hi {{ user.displayName }}</p>
                <p class="email">logged in as {{ user.email }}</p>
            </div>
            <button @click="logout">logout</button>
        </nav>
    </div>
</template>

<script>
import getUser from '@/composables/getUser'
import useLogout from '@/composables/useLogout';
// import { useRouter } from 'vue-router';
export default {
    setup () {
        
        // let router = useRouter()
        //getting user composables
        let {user}=getUser();
        
        let {error,logout}=useLogout();
        
        // let signOut=()=>{
        //     logout();
        //     router.push({name:"welcome"})
        // }
            
        return {
            error,
            logout,
            user,
            
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
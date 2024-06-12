<template>
    <div class="container">
        <Navbar></Navbar>
        <ChatWindow></ChatWindow>
        <NewChatroomForm></NewChatroomForm>
    </div>
</template>

<script>
import ChatWindow from '../components/ChatWindow.vue'
import NewChatroomForm from '../components/NewChatroomForm.vue'
import { watch } from 'vue';
import Navbar from '../components/Navbar.vue'
import getUser from '@/composables/getUser';
import { useRouter } from 'vue-router';
export default {
  components: {
    ChatWindow,
    NewChatroomForm, Navbar },
    setup () {
        let router = useRouter();
        let {user} = getUser();

        watch(user,()=>{
            if(!user.value){
                router.push({name:"welcome"})
            }
        })

        return {}
    }
}
</script>

<style>
    
</style>
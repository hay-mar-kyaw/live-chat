<template>
    <div>
        <form>
            <textarea 
                v-model="message" 
                placeholder="Chat here and hit enter" 
                @keypress.enter="holdSubmit">
            </textarea>
        </form>
    </div>  
</template>

<script>
import { ref } from 'vue'
import getUser from '@/composables/getUser'
import { timestamp } from '@/firebase/config'
import useCollection from '@/composables/useCollection'

export default {
    setup () {
        
        let message = ref("")
        let {user} = getUser();
        let {error,addDoc} = useCollection("messages")
        let holdSubmit=async()=>{
            let chat={
                message:message.value,
                name:user.value.displayName,
                created_at:timestamp()
            }
            await addDoc(chat)
            message.value=""
        }

        return {
            message,
            holdSubmit
        }
    }
}
</script>

<style scoped>
    form{
        margin: 10px;
    }
    textarea{
        width: 100%;
        max-width: 100%;
        padding: 10px;
        margin-bottom: 6px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
    }
</style>
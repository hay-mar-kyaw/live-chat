import {ref} from 'vue'
import { auth } from '@/firebase/config';
let error=ref("")
let signIn=async(email,password)=>{
    try{
        let res =await auth.signInWithEmailAndPassword(email,password)
        if(!res){
            throw new Error("Does not Login")
        }
        return res;
    }catch(err){
        error.value=err.message
    }
}
let useLogin=()=>{
    return {error,signIn}
}

export default useLogin
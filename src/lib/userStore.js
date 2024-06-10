// // for making state change using zustand
import { doc,getDoc } from 'firebase/firestore';
import { create } from 'zustand'
import { db } from './firebase';

export const useUserStore = create((set) => ({
  currentUser: null,
  isLoading:true,
  fetchUserInfo: async (uid) =>{
    if(!uid) return set({currentUser:null,isLoading:false});

    try {

        const doRef = doc(db, "users",uid);
        const doSnap = await getDoc(doRef);

        if(doSnap.exists()){
            set({currentUser:doSnap.data(), isLoading:false});
        }else{
            set({currentUser:null,isLoading:false})
        }
        
    } catch (err) {
        console.log(err)
        return set({currentUser:null,isLoading:fasle})
    }
  }
}));
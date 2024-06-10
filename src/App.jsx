import List from "./component/list/List";
import Detail from "./component/detail/Detail";
import Chat from "./component/chat/Chat";
import Login from "./component/Login/Login";
import Notification from "./component/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useEffect } from "react";
import { useUserStore } from "./lib/userStore";
// import { useEffect } from "react";

// import { useEffect } from "react";


const App = () =>{
  const {currentUser,isLoading,fetchUserInfo} = useUserStore()

  
  // fetching imformation of log user from firebase
  useEffect(()=>{
    const unSub = onAuthStateChanged(auth,(user)=>{
     
      // for logout we have used (?) condition
      fetchUserInfo(user?.uid);
    })
    // clean up function
    return () =>{
      unSub();
    };

  },[fetchUserInfo]);
  console.log(currentUser);

  

  if(isLoading) return <div className="loading">Loading...</div>

  return (

    <div className='container'>

      {/* for login we have used this user condition if the user is login in account then information of app will show and if user is not login into account then login interface will be shown and user should do login using login and password */}
      {currentUser ? (
        <>
          <List/>
          <Chat/>
          <Detail/>
        </>       
      ) : (
        <Login/>
      )}
      <Notification/>
    </div>
  );
};

export default App;
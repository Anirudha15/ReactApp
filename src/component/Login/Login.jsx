import { useState } from "react";
import "./Login.css";
import { toast } from "react-toastify";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import {doc ,setDoc} from "firebase/firestore";
import upload from "../../lib/upload";


const Login = () => {
  // condition for avatar if user will not select any profile picture
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  // userstate for button

  const [loading,setLoading] = useState(false)

  // To display profile picture in create account menu immediatily
  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  // to handle login success when the user press on submit button it will dispaly message in corner.
  const handleLogin = async (e)=>{
   e.preventDefault();
    setLoading(true);
    
    const fromData = new FormData(e.target);
    const {email,password} = Object.fromEntries(fromData);
   try {
      await signInWithEmailAndPassword(auth,email,password);
   } catch (err) {
    console.log(err);
    toast.error(err.message);
   }finally{
    setLoading(false);
   }
  };

  const handleRegister = async (e)=>{
    e.preventDefault();
    setLoading(true)
    const fromData = new FormData(e.target);
    
    const {username, email, password} = Object.fromEntries(fromData);
    
    try {
      
    const res = await createUserWithEmailAndPassword(auth,email,password)

    const imgUrl = await upload(avatar.file)

      // for storage of user data
      // refer from firebase documentation
    await setDoc(doc(db,"users",res.user.uid),{
      username,
      email,
      avatar: imgUrl,
      id:res.user.uid,
      blocked:[],
    });

    // to store chats 
    await setDoc(doc(db,"userchats",res.user.uid),{
      chats:[]
    });

    // Account success notification
    toast.success("Account created, You can login now");

     } catch (err) {

      console.log(err)
      toast.error(err.message)
    }finally{
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="item">
          <h2>Welcome back</h2>
          <form onSubmit={handleLogin}>
             <input type="text" placeholder="Email" name="email" />
             <input type="password" placeholder="Password" name="password" />
             <button disabled={loading}>{loading ? "Loading":"Sign In"}</button>
          </form>
      </div>

      <div className="separator"></div>
      <div className="item">
         <h2>Create an Account</h2>
         <form onSubmit={handleRegister}>
              <label htmlFor="file">
                 {/* to display profile picture */}
                  <img src={avatar.url || "./avatar.png"} alt="" />
                  Upload an Image
              </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button disabled={loading}>{loading ? "Loading" : "Sign Up"}</button>
         </form>
      </div>
    </div>
  );
};

export default Login;

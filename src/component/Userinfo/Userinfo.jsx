
import "./userInfo.css"

const Userinfo = () =>{
    return(
        <div className="userInfo">
            <div className="user">
                <img src="./avatar.png" alt=""/>
                <h2>Anirudha</h2>
            </div>
            <div className="icons">
                <img src="./more.png" alt=""/>
                <img src="./video.png"/>
                <img src="./edit.png"/>
            </div>
        </div>
    )
}

export default Userinfo;
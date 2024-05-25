
import ChatList from "../ChatList/ChatList";
import Userinfo from "../Userinfo/Userinfo";
import "./list.css";



const List = () => {
    return (
        <div className="list">
            <Userinfo></Userinfo>
            <ChatList></ChatList>
        </div>
    )
}

export default List;
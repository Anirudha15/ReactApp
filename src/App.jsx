import List from "./component/list/List"
import Detail from "./component/detail/Detail"
import Chat from "./component/chat/Chat"
import Login from "./component/Login/Login"
import Notification from "./component/notification/Notification"


const App = () => {

  const user = false
  return (
    <div className='container'>

      {/* for login we have used this user condition if the user is login in account then information of app will show and if user is not login into account then login interface will be shown and user should do login using login and password */}
      {user ? (
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
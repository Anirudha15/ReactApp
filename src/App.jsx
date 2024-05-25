import List from "./component/list/List"
import Detail from "./component/detail/Detail"
import Chat from "./component/chat/Chat"

const App = () => {
  return (
    <div className='container'>
      <List/>
      <Chat/>
      <Detail/>
    </div>
  )
}

export default App
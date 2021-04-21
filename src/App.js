import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed/ChatFeed';
import './App.css';

const App=()=>{
  return(
    <ChatEngine
      height="100vh"
      projectID="683dde57-f5f8-4bdc-827b-b331c409474e"
      userName="Kajal_Meghani"
      userSecret="123123"
      renderChatFeed={(chatappprops)=><ChatFeed {...chatappprops}/>}
    />
  );
}

export default App;
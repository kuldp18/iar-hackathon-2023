import ChatBox from './components/ChatBox';
import Info from './components/Info';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <div className="w-full min-h-screen p-4">
        <Navbar />
        {/* <Info /> */}
        <ChatBox />
      </div>
    </>
  );
}

export default App;

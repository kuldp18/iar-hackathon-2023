import { useState } from 'react';
import { getResponse } from '../chat';

const ChatBox = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //get response from backend
    const responseObj = getResponse(query);
    setSuccess(responseObj.success);
    if (success) {
      setResponse(responseObj.response);
    }
    setResponse('Sorry, I did not understand that.');
  };

  return (
    <>
      <div className="parent mt-5 flex flex-col">
        <div className="top bg-[#000000e6] text-white mt-5">
          <form className="w-ful text-black" onSubmit={handleSubmit}>
            <input
              type="text"
              required
              className="w-[80%] px-5 py-2 border-none outline-none"
              placeholder="What do you want to know?"
              autoComplete="off"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="w-[20%] px-5 py-2 text-white">
              Search
            </button>
          </form>
        </div>
        <div
          className={`${
            response
              ? 'bottom mt-[50px] bg-[#000000c9] text-white p-5'
              : 'hidden'
          } `}
        >
          <div className="content text-justify">
            <p>{response !== null && response}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;

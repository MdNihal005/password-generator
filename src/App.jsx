import { useState, useCallback, useEffect } from "react";
import "./App.css";

const App = () => {
  // variable requeired to store
  const [password, setPassword] = useState("");
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [characterAllowed, setcharacterAllowed] = useState(false);
  const [Length, setLength] = useState(8);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTWXYZabcdefghijklmnopqrstuvwxyz"; // string to generate password
    if (numberAllowed) string += "1234567890";
    if (characterAllowed) string += "~!@$%^&*()";
    for (let i = 0; i < Length; i++) {
      let ind = Math.floor(Math.random() * string.length);
      pass += string.charAt(ind);
    }
    setPassword(pass); // updating password
  }, [Length, numberAllowed, characterAllowed]); //dependencies

  useEffect(
    () => passwordGenerator(), // call function on changes
    [numberAllowed, characterAllowed, Length] //dependencies
  );

  return (
    <div className="container  max-w-md">
      <div className="overflow-hidden">
        <h1 className="heading">Password Generator</h1>
        <div className="flex items-center gap-x-1">
          <input
            type="text"
            className="h-8 ml-3 rounded-md bg-red-200"
            style={{ width: "70%" }}
            value={password}
            readOnly
          />

          <button
            className="ml-5 hover:bg-blue-900 bg-blue-700 px-3 py-1 rounded-xl"
            onClick={() => window.navigator.clipboard.writeText(password)}
          >
            Copy
          </button>
        </div>
        <div className="flex items-center gap-x-2 m-3 w-96 flex-nowrap">
          <div className="flex items-center gap-2">
            <input
              className="w-20"
              type="range"
              name=""
              id=""
              value={Length}
              max={20}
              min={8}
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="">Length:{Length}</label>
          </div>
          <div className="ml-2">
            <input
              type="checkbox"
              name=""
              id=""
              onChange={() => setnumberAllowed(!numberAllowed)}
            />
            <label htmlFor="" className="p-1">
              Numbers
            </label>
          </div>
          <div className="ml-2">
            <input
              type="checkbox"
              name=""
              id=""
              onChange={() => setcharacterAllowed(!characterAllowed)}
            />
            <label htmlFor="" className="p-1">
              Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

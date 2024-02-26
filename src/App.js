import { useEffect, useRef } from "react";
import { useCallback } from "react";
import { useState } from "react"
import Output from "./component/Output";
//import { InputBox } from "./component/InputBox";

function App() {

  const [len , setLen] = useState(6);
  const [char , setChar] = useState(true);
  const [number , setNumber] = useState(true);
  const [password , setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(()=>{

    let pass = "";

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(number)
    {
      str = str+"0123456789";
    }
    if(char){
      str = str+"!@#$%^&";
    }

    for(let i=0; i<len; i++)
    {
      let index = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(index);
    }
    setPassword(pass);

  },[len , char , number , setPassword]);

  useEffect(()=> generatePassword() , [len , char , number , generatePassword]);

  const copyclickboard = useCallback(()=>{
    passwordRef.current?.select();
    //console.log(passwordRef)
    window.navigator.clipboard.writeText(password);
  },[password])
 

  return (
    <div className="w-[100%] h-screen bg-slate-700 flex justify-center">
      <div className="w-[50%] bg-slate-950  h-[25%] ">
            <h1 className="text-[white] text-center text-[30px]">Password Generator</h1>

            <Output password={password} passwordRef={passwordRef} copyclickboard={copyclickboard}/>
            {/* <InputBox setLen = {setLen()} len = {len} /> */}
          <div className="pl-[5%] pt-5 flex">
             <div>
              <input type="range"
              value={len}
              max={100}
              min={6}
              onChange={(e)=>{setLen(e.target.value)}}
              />

              <label className="text-[white] pl-4 text-[20px]">Length : {len}</label>
            
            </div>
            <div className="ml-8">
              <input type="checkbox"
              defaultChecked={char}
              className="w-[20px] h-[20px]"
              onChange={(prev)=>{setChar(!prev)}}
              />

              <label className="text-[white] pl-4 text-[20px]">Character </label>
            
            </div>

            <div className="ml-8">
              <input type="checkbox"
              defaultChecked={number}
              className="w-[20px] h-[20px]"
              onChange={(prev)=>{setNumber(!prev)}}
              />

              <label className="text-[white] pl-4 text-[20px]">Number</label>
            
            </div>
          </div>
           
      </div>
      
    </div>
  )
}

export default App

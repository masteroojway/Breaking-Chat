import React, { useState } from 'react'

const Login = () => {
  const [curr, setcurr] = useState("signup");
  const [name, setname] = useState(""); 
  const [email, setemail] = useState(""); 
  const [pass, setpass] = useState("");
  const [submit, setsubmit] = useState(false);  
  return (
    <div className='grid grid-cols-2 backdrop-blur-md rounded-2xl 
    border border-gray-600 overflow-hidden h-screen items-center justify-center'>
        <div className='flex items-center justify-center'>
          <img src='token.svg' className='w-[max(30vw,300px)] bg-white/50 rounded-3xl'/>
        </div>
        <div className='flex flex-col items-center justify-center m-5'>
          <div className='flex m-5'>
            <button type="button" className={`cursor-pointer bg-white/30 font-bold text-[20px] p-3
              ${curr == "signup" && 'bg-white/60'} rounded-l-xl`} onClick={()=>setcurr("signup")}>
              Break Bad</button>
            <button type="button" className={`cursor-pointer bg-white/30 font-bold text-[20px] p-3
              ${curr == "login" && 'bg-white/60'} rounded-r-xl`} onClick={()=>setcurr("login")}>Say My Name</button>
          </div>
          <form className='flex items-center justify-center bg-white/30 p-5 rounded-xl w-4/5'>
            {curr === "signup" && (
              <div>
              <input type="text" onChange={(e)=>setname(e.target.value)} value={name}
              className='bg-white/60 w-full rounded-xl p-2 m-2' placeholder='Alias' required/>
              <input type="email" onChange={(e)=>setemail(e.target.value)} value={email}
              className='bg-white/60 w-full rounded-xl p-2 m-2' placeholder='Email' required/>
              <input type="password" onChange={(e)=>setpass(e.target.value)} value={pass}
              className='bg-white/60 w-full rounded-xl p-2 m-2' placeholder='Password' required/>
              <input type="password" className='bg-white/60 w-full rounded-xl p-2 m-2' placeholder='Re-Type Password' required/>
              <button type="submit" className='cursor-pointer bg-gray-600/40 font-bold p-3 rounded-xl hover:bg-gray-700/60 p-2 m-2'>Register</button>
              </div>
            )}
            {curr == "login" && (
              <div>
                <input type="text"
                  className='bg-white/60 w-full rounded-xl p-2 m-2' placeholder='Alias' required/>
                <input type="password"
                  className='bg-white/60 w-full rounded-xl p-2 m-2' placeholder='Say Your Password' required/>
                <button type="submit" className='cursor-pointer bg-gray-600/40 font-bold p-3 rounded-xl hover:bg-gray-700/60 p-2 m-2'>Enter Empire</button>
              </div>
            )
            }
          </form>
        </div>
    </div>
  )
}

export default Login
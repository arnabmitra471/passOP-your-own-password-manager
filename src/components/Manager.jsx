import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

const Manager = () => {
    // Creating a ref and initializing it with null value
    const ref = useRef()
    const [form,setForm] = useState({siteName: "",username: "", password: ""})
    const [passwordArray,setPasswordArray] = useState([])
    /* Whenever the manager component mounts check that whether any password is available
    in localStorage or not. If yes, then update the copy of passwordArray state by adding the passwords in the
    array while keeping the existing passwords as it is */
    useEffect(()=>{
            const passwords = localStorage.getItem("passwords")
            if(passwords)
            {
                setPasswordArray([...passwordArray,JSON.parse(passwords)])
            }
    },[])

    const showPassword = ()=>{
        alert("Show the Password")
        if(ref.current.src.includes("icons/eye_show.png"))
        {
            ref.current.src = "icons/eye_cross.svg"
        }
        else
        {
            ref.current.src = "icons/eye_show.png"
        }
    }

    const handleFormChange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const addPasswordToLS = ()=>{
        setPasswordArray([...passwordArray,form])
        localStorage.setItem("password",JSON.stringify([...passwordArray,form]))
        console.log([...passwordArray,form])

    }
    return (
        <>
            <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-green-100 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
            <div className="mypass-container"> {/* Main UI container */}
                <h1 className="text-4xl font-bold text-center underline decoration-orange-500">
                    <span className="text-green-500">&lt;</span>
                    Pass
                    <span className="text-green-500 uppercase">Op/&gt;</span>
                </h1>
                <p className="text-green-900 text-center text-lg underline my-3">Your own password manager</p>

                <div className="flex flex-col my-4 p-4 gap-8 items-center">
                    <input type="text" id="siteName" name="siteName"  value={form.siteName} placeholder="Enter your site url" className="rounded-full px-4 py-1 my-3 border border-green-400 w-full" onChange={handleFormChange} />
                    <div className="flex gap-8 justify-around w-full">
                        <input type="email" id="email" name="username"  value={form.username} placeholder="Enter your username" className="rounded-full px-4 py-1 my-3 border border-green-400 w-full" onChange={handleFormChange}/>
                        <div className="relative flex items-center w-full">
                            <input type="text" id="password " name="password" value={form.password} placeholder="Enter your password" className="rounded-full px-4 py-1 my-3 border border-green-400 w-full" onChange={handleFormChange} />
                            <span className="absolute top-[15px] right-[3px] cursor-pointer" onClick={showPassword}>
                                <img src="icons/eye_show.png" ref={ref} alt="eye" width={30}  className="p-1"/>
                            </span>
                        </div>
                    </div>
                    <button type="button" className="bg-emerald-600 text-white rounded-full px-5 py-2 w-fit flex items-center hover:bg-emerald-400 hover:font-bold hover:text-green-900 gap-2 border border-solid border-green-900" onClick={addPasswordToLS}>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>
                        Add Password</button>
                </div>
            </div>
        </>
    )
}

export default Manager

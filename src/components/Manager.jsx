import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

const Manager = () => {
    // Creating a ref and initializing it with null value
    const ref = useRef()
    const [form, setForm] = useState({ siteName: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])
    /* Whenever the manager component mounts check that whether any password is available
    in localStorage or not. If yes, then update the copy of passwordArray state by adding the passwords in the
    array while keeping the existing passwords as it is */
    useEffect(() => {
        const passwords = localStorage.getItem("password")
        if (passwords) {
            setPasswordArray([...passwordArray, JSON.parse(passwords)])
        }
    }, [])

    const showPassword = () => {
        // alert("Show the Password")
        if (ref.current.src.includes("icons/eye_show.png")) {
            ref.current.src = "icons/eye_cross.svg"
        }
        else {
            ref.current.src = "icons/eye_show.png"
        }
    }
    const handleFormChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const addPasswordToLS = () => {
        setPasswordArray([...passwordArray, form])
        localStorage.setItem("password", JSON.stringify([...passwordArray, form]))
        console.log([...passwordArray, form])
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
                    <input type="text" id="siteName" name="siteName" value={form.siteName} placeholder="Enter your site url" className="rounded-full px-4 py-1 my-3 border border-green-400 w-full" onChange={handleFormChange} />
                    <div className="flex gap-8 justify-around w-full">
                        <input type="email" id="email" name="username" value={form.username} placeholder="Enter your username" className="rounded-full px-4 py-1 my-3 border border-green-400 w-full" onChange={handleFormChange} />
                        <div className="relative flex items-center w-full">
                            <input type="password" id="password " name="password" value={form.password} placeholder="Enter your password" className="rounded-full px-4 py-1 my-3 border border-green-400 w-full" onChange={handleFormChange} />
                            <span className="absolute top-[15px] right-[3px] cursor-pointer" onClick={showPassword}>
                                <img src="icons/eye_show.png" ref={ref} alt="eye" width={30} className="p-1" />
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
            <div className="passwords flex flex-col justify-center items-center bg-gradient-to-r from-green-100 via-orange-100 to-slate-200">
                <h2 className="text-xl font-bold my-4">Your Passwords</h2>
                {(passwordArray.length === 0) ? <p>No Passwords to show. Add some passwords and you will see them here ...</p>: 
                <table className="table-auto w-full rounded-md overflow-hidden">
                    <thead className="bg-green-800 text-white">
                        <tr>
                            <th className="py-4">Site Name</th>
                            <th className="py-4">Username</th>
                            <th className="py-4">Password</th>
                            <th className="py-4">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-green-100">
                        {passwordArray.map((rec,index)=>{
                            return(
                        <tr key={index} className="hover:bg-green-500 hover:text-white hover:font-bold">
                            <td className="text-center min-w-32 py-4 border border-solid border-slate-400"><a href={rec.siteName} target="_blank">{rec.siteName}</a></td>
                            <td className="text-center min-w-32 py-4 border border-solid border-slate-400">{rec.username}</td>
                            <td className="text-center min-w-32 py-4 border border-solid border-slate-400">{rec.password}</td>
                            <td>
                                <button type="button" className="bg-blue-600 p-4 mx-4 my-3 rounded-md hover:bg-blue-500 hover:text-gray-100 hover:transition-colors hover:scale-90 transition-transform duration-200">Edit</button>
                                <button type="button" className="bg-red-600 p-4 mx-4 my-3 rounded-md hover:bg-red-500 hover:text-gray-100 hover:transition-colors hover:scale-90 transition-transform duration-200">Delete</button>
                            </td>
                        </tr>
                            )
                        })}
                    </tbody>
                </table>}
            </div>
        </>
    )
}

export default Manager

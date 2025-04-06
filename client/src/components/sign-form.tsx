import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

export default function SignForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation()

  const handleOnSubmit = () => {
    if (pathname.toLocaleLowerCase().includes("admin")) {
      console.log(pathname)
      navigate(`/admin/dashboard`)
    } else {
      navigate(`/user/dashboard`)
    }
  }

  return (
    <form
      style={{ height: "calc(100vh - 10rem)" }}
      className="flex flex-col justify-center items-center"
      onSubmit={e => {
        e.preventDefault()
        handleOnSubmit();
      }}
    >
      <div className="flex flex-col bg-gray-200 p-6 gap-4 rounded-md w-[20rem]">
        <label htmlFor="email">Email <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="" id="email"
          className="px-4 py-2 outline-1 rounded-md"
          onChange={e => setEmail(e.target.value)}
          defaultValue={email}
          value={email}
        />

        <label htmlFor="pwd">Password <span className="text-red-500">*</span></label>
        <input type="password" name="" id="pwd" className="px-4 py-2 outline-1 rounded-md" value={password} defaultValue={password} onChange={e => setPassword(e.target.value)} />

        <button type="submit" className="bg-black p-2 text-white font-semibold text-lg">Sign In</button>
      </div>
    </form >
  )
}
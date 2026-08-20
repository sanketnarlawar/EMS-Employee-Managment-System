import LoginLeftSide from './LoginLeftSide'
import { ArrowLeftIcon, EyeIcon, EyeOffIcon, Loader2Icon } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginForm = ({ role, title, subtitle }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showpassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
  }


  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LoginLeftSide/>
      <div className="flex flex-col justify-center items-center  md:w-1/2 p-6 sm:p-12 bg-white">
      <div className="w-full max-w-md animate-fade-in ">
        
        <Link to="/login" className="inline-flex item-center gap-2 text-slate-400 hover:text-slate-700 text-sm mb-10 transition-colors">
          <ArrowLeftIcon size={16} />back to portals    
        </Link>
        
        <div className="mb-8">
          <h1 className='text-2xl sm:text-3xl font-medium text-zinc-800'>{title}</h1>
          <p className='text-slate-500 text-sm sm:text-base mt-2'>{subtitle} </p>
        </div>
        {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 p-4 text-sm rounded-xl relative mb-6 flex item-start gap-3" >
              <div className='w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0'/>
              {error}
            </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-700">Email Address</label>
            <input
              type="email"    
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required placeholder="john@example.com"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
           <div>
            <label htmlFor="password" className="block text-sm font-medium text-zinc-700">Password</label>
            <div className="relative">
              <input
              type={showpassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="pr-11"
              placeholder="********"
            />
            <button type='button' onClick={() => setShowPassword(!showpassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors ">
              {showpassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} /> }
            </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-linear-to-r from-indigo-600 to-indigo-500 text-white rounded-md text-sm font-semibold hover:to-indigo-600 disabled:opacity-50 transition-all duration-200 shadow-lg shadow-indigo-500/25 active:scale-[0.98] flex item-center justify-center "
            disabled={loading}
          >
            {loading && <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />}
            sign in
          </button>
        </form>
      </div>
      </div>
    </div>
  )
}
export default LoginForm
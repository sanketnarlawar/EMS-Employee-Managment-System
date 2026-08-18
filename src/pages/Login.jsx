import LoginLeftSide from "../component/LoginLeftSide"
import { Link } from 'react-router-dom'
import { ArrowRightIcon, ShieldIcon, UserIcon } from 'lucide-react'

const Login = () => {


  const portalOptions=[
    {
      to:"/login/admin",
      title:"Admin Portal",
      description:"Manage employees, department, payroll, and system configurations",
      icon: ShieldIcon
    },
     {
      to:"/login/employee",
      title:"Employee Portal",
      description:"Access your personal information, view payslips, and manage your profile",
      icon: UserIcon
    },
  ]



  return (
    <div className=" min-h-screen flex flex-col md:flex-row">
    <LoginLeftSide/>
      <div className="flex flex-col items-center justify-center relative w-full min-h-screen overflow-y-auto bg-white p-6 sm:p-12 md:w-1/2 lg:p-16">
        <div className="relative z-10 w-full max-w-md animate-fade-in">

          {/*header part*/}
          <div className="mb-10 text-center md:text-left">
          <h2 className="text-slate-900 text-3xl font-medium tracking-tight mb-3">Welcome Back!</h2>
          <p className="text-slate-500" >
            Select your portal to securely access the system.
          </p>
          </div>
          {/*Portal lists*/}
          <div className="space-y-4">
          {portalOptions.map((portal)=>(
            <Link key={portal.to} to={portal.to}
             className="group block rounded-lg border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:border-indigo-400 hover:bg-indigo-50 sm:p-6">
             <div className="relative z-10 flex items-center justify-between gap-4 sm:gap-5">
              <div>
                <h3 className="mb-1 text-lg font-medium text-slate-800 transition-colors group-hover:text-indigo-600">{portal.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{portal.description}</p>
              </div>
              <ArrowRightIcon className="text-slate-400 w-4 h-4 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all duration-300" />
             </div>
            </Link>
          ))}

          </div>

          {/*Footer*/}

          <div className="mt-10 text-center text-sm text-slate-400">
            <p className="text-slate-400">© {new Date().getFullYear()} sanket narlawar. All rights reserved.</p>
          </div>

        </div>
     </div>

    </div>
  )
}

export default Login
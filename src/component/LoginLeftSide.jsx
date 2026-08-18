
const LoginLeftSide = () => {


  return (
    <div className="relative flex w-full md:w-1/2 min-h-screen overflow-hidden border-r border-slate-200 bg-indigo-950">
      <div className="absolute -top-30 -left-30 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="relative z-10 flex h-full w-full flex-col items-start justify-center p-12 lg:p-20">
        <h1 className="mb-6 text-4xl font-medium leading-tight tracking-tight text-white lg:text-5xl">
          Employee <br /> Management System
        </h1>
        <p className="max-w-md text-lg leading-relaxed text-slate-400">
          Streamline your workflow operations, track attendance, manage payroll, and empower your team securely.
        </p>
      </div>
    </div>
  )
}

export default LoginLeftSide
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Attendance from './pages/Attendance.jsx'
import Setting from './pages/Setting.jsx'
import Layout from './pages/Layout.jsx'
import Leaves from './pages/Leaves.jsx'
import Printpayslip from './pages/PrintPaySlip.jsx'
import Payslip from './pages/Payslip.jsx'
import Employees from './pages/Employees.jsx'
import { Toaster } from 'react-hot-toast'
import LoginForm from './component/LoginForm.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <>
  <Toaster />
    <Routes>
      <Route path="/login" element={<Login/>} />


      <Route path="/login/admin" element={<LoginForm 
      role="admin" title="Admin Portal" 
      subtitle="Login to access the admin panel" />} />

      <Route path="/login/employee" element={<LoginForm 
      role="employee" title="Employee Portal" 
      subtitle="Login to access your employee dashboard" />} />


      <Route element={<Layout/>}>
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/Employees" element={<Employees/>} />
      <Route path="/Attendance" element={<Attendance/>} />
      <Route path="/Leaves" element={<Leaves/>} />
      <Route path="/Payslip" element={<Payslip/>} />
      <Route path="/Settings" element={<Setting/>} />
      </Route>
      <Route path="/print/payslip/:id" element={<Printpayslip/>} />
      <Route path="*" element={<Navigate to="/Dashboard" replace />} />
    </Routes>
    </>
  </BrowserRouter>,
)   


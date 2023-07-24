import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import PaymentFail from './components/Payments/Paymentfail';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import Subscribe from './components/Payments/Subscribe';
import NotFound from './components/Layout/NotFound/NotFound';
import CoursePage from './components/Coursepage/CoursePage';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import Sidebar from './components/Admin/Sidebar';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Users from './components/Admin/Users/Users';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import CourseModal from './components/Admin/AdminCourses/CourseModal';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses';


function App() {

  //coursepage me video right click nii hogi means no download;
  window.addEventListener("contextMenu",(e)=>{
    e.preventDefault();
  })

  return (
 <Router>
  <Header />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/courses' element={<Courses />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/request' element={<Request />} />
    <Route path='/about' element={<About />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/forgetpassword' element={<ForgetPassword />} />
    <Route path='/resetpassword/:token' element={<ResetPassword />} />

    <Route path='/course/:id' element={<CoursePage />} />
    <Route path='/subscribe' element={<Subscribe />} />
    <Route path='/paymentsuccess' element={<PaymentSuccess />} />
    <Route path='/paymentfail' element={<PaymentFail />} />
    <Route path='*' element={<NotFound />} />

    <Route path='/profile' element={<Profile />} />\
    <Route path='/changepassword' element={<ChangePassword />} />
    <Route path='/updateprofile' element={<UpdateProfile />} />

    {/* Admin Routes */}
    <Route path='/admin/dashboard' element={<Dashboard />} />
    <Route path='/admin/createcourse' element={<CreateCourse />} />
    <Route path='/admin/courses' element={<AdminCourses />} />
    <Route path='/admin/users' element={<Users />} />
    <Route path='/sidebar' element={<Sidebar />} />
    <Route path='/admin/admincourses' element={<AdminCourses />} />
    <Route path='/admin/coursemodal' element={<CourseModal />} />

  </Routes>
   <Footer />
 </Router>
  );
}

export default App;

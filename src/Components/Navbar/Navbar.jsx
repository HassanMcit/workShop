import { useState } from 'react';
import logo from '../../assets/logo.jpg'
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [open, setopen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setopen(!open)
  };

  const handleDarkMode = (e) => {
    setDarkMode(e.target.checked);
  }
  

  return (
    <>
      <nav className={`${darkMode && 'dark bg-slate-800'} bg-green-400`}>
        <div className=" container flex justify-between items-center relative">
          <div className="bg-orange-400 flex justify-between ">
            <div className='w-28'>
                <Link to="" className='block'>
                    <img src={logo} alt="Logo" className='w-full' />
                </Link>
            </div>
            
          </div>
          <div className='order-2 flex space-x-5'>
               <button className='text-4xl text-white block md:hidden' onClick={handleToggle}><i className="fa-solid fa-bars"></i></button>
               <div className='text-4xl text-white w-10'>
                <label htmlFor="dark" className='cursor-pointer'>{darkMode ? <i className="fa-solid fa-sun text-yellow-500"></i> : <i className="fa-solid fa-moon"></i>}</label>
                <input type="checkbox" id='dark' hidden onChange={handleDarkMode}/>
               </div>
            </div>
          <div className={` fixed md:static top-0 end-0 ${open ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}  transition-transform duration-300 w-60 md:w-fit`}>
            <button className='text-3xl block md:hidden absolute top-3 end-3 cursor-pointer' onClick={handleToggle}><i className="fa-solid fa-x"></i></button>
            <ul className='bg-white/90 md:bg-transparent h-96 md:h-fit dark:md:text-white flex flex-col md:flex-row space-y-8 p-10 md:p-0  md:space-y-0 md:space-x-7 text-3xl'>
                <li><Link to="/home" className='block'>Home</Link></li>
                <li><Link to="/about" className='block'>About</Link></li>
                <li><Link to="/contact" className='block'>Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
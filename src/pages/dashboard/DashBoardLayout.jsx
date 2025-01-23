import { IoSettingsSharp } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import {Link, Outlet } from  "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { HiViewGridAdd } from 'react-icons/hi';
import {MdOutlineManageHistory} from "react-icons/md"
import { FaUserTie } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { FaStore } from "react-icons/fa6";



const DashboardLayout = () => {



    const handleLogout = () => {}
  return (
    <section className='flex md:bg-gray-100 min-h-screen overflow-hidden'>
        <aside className='hidden sm:flex sm:flex-col'>
            <a href="/" className='inline-flex items-center justify-center h-20 w-20 bg-purple-500 hover:bg-purple-600 focus:bg-purple-600'>
            <FaStore size={30} className="text-white" />
            </a>

            <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">   
                <nav className='flex flex-col mx-4 my-6 space-y-4'>
                    <a href="#" className='inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:bg-gray-700 rounded-lg'>
                        <span className='sr-only'>Folders</span>
                        <svg aria-hidden="true" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2v9a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'  />
                        </svg>
                    </a>
                    <Link to="/dashboard" className='inline-flex items-center justify-center py-3 text-purple-600 bg-white rounded-lg'>
                        <span className='sr-only'>Dashboard</span>
                        <svg aria-hidden="true" fill='none' viewBox='0 0 24 24' stroke='currentColor' className='h-6 w-6'>
                        <path strokeLinecap="round" strokeLinejoin='round' strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        
                    </Link>

                    <Link to="/dashboard/add-new-product" className='inline-flex items-center justify-center py-3 hover:text-gray-400 focus:bg-gray-700 rounded-lg'>
                        <span className='sr-only'>
                            Add Products
                        </span>
                        <HiViewGridAdd className='h-6 w-6'/>
                    </Link>
                    <Link to="/dashboard/manage-product" className='inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700  focus:bg-gray-700 focus:text-gray-700 rounded-lg'>
                        <span className='sr-only'>Documents</span>
                        <MdOutlineManageHistory className='h-6 w-6' />
                    </Link>
                </nav>

                <div className='inline-flex items-center justify-center h-20 w-20 border-t border-gray-700  '>
                    <button className='p-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg '>
                        <span className='sr-only'>Settings </span>
                            {/* setting */}
                            <IoSettingsSharp  size={30}/>
                    </button>
                </div>
            </div>
        </aside>
        <div className='flex-grow text-gray-800'>
            <header className='flex items-center h-20 px-6 py-4 sm:px-10 bg-white '>
                <button className='block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:text-gray-800 rounded-fu '>
                    <span className='sr-only'>Menu</span>
                    <svg aria-hidden="true" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </button>
                <div className='relative w-full max-w-md sm:-ml-2 flex items-center justify-center'>
                <CiSearch size={30} className='flex justify-between items-center ' />
                <input type="text" role='search' placeholder='search...' className='py-2 pl-10 pr-4 w-full border-4 border-transparent  placeholder-gray-400 focus:bg-gray-50 rounded-lg ' />
                </div>
                <div className='flex flex-shrink-0 items-center ml-auto'>
                    <button className='inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg'>
                        <span className='sr-only'>User Menu</span>
                        <div className='hidden md:flex md:flex-col md:items-end md:leading-tight'>
                            <span className='font-semibold'>Admin</span>
                            <span className='text-sm text-gray-600 '>Vendor</span>

                        </div>
                        <span className='h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center'>
                        <FaUserTie size={30} />
                        </span>
                        <IoIosArrowUp size={25} />
                    </button>
                    <div className='border-l pl-3 ml-3 space-x-1'>
                        <button className='relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 focus:bg-gray-100 focus:text-gray-600 rounded-lg'>
                            <span className='sr-only'>Notification</span>
                            <span className='absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full'></span>
                            <span className='absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping'></span>
                            <svg aria-hidden="true" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" d="M15 17h5l-1.405-1.405A2.302 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9 " />
                            </svg>
                        </button>
                        <button 
                        onClick={handleLogout}
                        className='relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded full'>
                            <span className='sr-only'>Log Out</span>
                            <IoIosLogOut size={25} />
                        </button>
                    </div>
                </div>
            </header>
            <main className='p-6 sm:p-10 space-y-6'>
                <div className='flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between  '>
                     <div className='mr-6'>
                        <h1 className='text-4xl font-semibold mb-2 '>Admin Dashboard</h1>
                        <h2 className='text-gray-600 ml-0.5'>Sparynx store inventory</h2>
                     </div>

                     <div className='flex flex-col md:flex-row items-start justify-end -mb-3'>
                        <Link to="/dashboard/manage-product" className='inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100  border border-purple-600 rounded-md mb-3 '>
                            <svg aria-hidden="true" fill='none' viewBox='0 0 24 24' stroke='currentColor'
                            className='felex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2'
                        >
                            <path
                            strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" 
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />        
                            </svg>
                            Manage Products
                        </Link>
                        <Link to="/dashboard/add-new-product" className='inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3 '>
                            <svg aria-hidden="true" fill='none' viewBox='0 0 24 24' stroke='currentColor'
                            className='flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2 '
                            >
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" 
                                d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                                />
                            </svg>
                            Add New Product
                        </Link>
                     </div>
                </div>
                <Outlet/>
            </main>
        </div>
    </section>
  )
}

export default DashboardLayout
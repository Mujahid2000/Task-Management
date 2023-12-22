'use client';



import { Link, Outlet } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";

import { MdLocalSee } from "react-icons/md";

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import AddTask from '../DashboardRoutes/AddTask';


const Dashboard = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
    <div >
        <Button onClick={() => setOpenModal(true)}>Add Task</Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <AddTask></AddTask>
        
        <Modal.Footer>
          
          
        </Modal.Footer>
      </Modal>
        <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only">Open sidebar</span>
        <IoMdMenu />
        <ul>
        </ul>
        </button>
        <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <Link to="/" className="flex items-center ps-2.5 mb-5">
        <img
            src="https://i.ibb.co/5F4g5ZR/35514495-green-eco-loop-leaf-check-mark.jpg"
            className="h-6 me-3 sm:h-7"
            alt="Logo"
        />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Task Manager
        </span>
        </Link>
        <div>
        <ul className="space-y-2 font-medium">
            
            
            <li>
            <Link
                to="/dashboard/task"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
                <MdLocalSee  className="w-7 h-7" />
                <span className="flex-1 ms-3 whitespace-nowrap">Show Task</span>
            </Link>
            </li>
            
        </ul>
        </div>
    </div>
    </aside>
        <div>
        <Outlet></Outlet>
        </div>
    </div>
  );
};

export default Dashboard;

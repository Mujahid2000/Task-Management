import React, { useContext } from 'react';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Config/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    };

    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="/">
                <img
                    src="https://i.ibb.co/5F4g5ZR/35514495-green-eco-loop-leaf-check-mark.jpg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite React Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Task Manage</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                {user ? (
                    <div className="md:flex md:order-2 items-center">
                        <Dropdown arrowIcon={false} inline label={<Avatar alt="User settings" img={user?.photoURL} rounded />}>
                            <Dropdown.Header>
                                <span className="block text-sm">{user?.displayName}</span>
                                <span className="block truncate text-sm font-medium">{user.email}</span>
                            </Dropdown.Header>
                            <Dropdown.Divider />
                            {user?.email ? <Dropdown.Item href="dashboard">Dashboard</Dropdown.Item> : <p>No dashboard</p>}
                            <Dropdown.Item onClick={handleLogOut}>LogOut</Dropdown.Item>
                        </Dropdown>
                    </div>
                ) : (
                    <div className="md:flex md:order-2 items-center">
                        <Link
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? 'pending'
                                    : isActive
                                    ? 'text-[#333333] underline font-medium text-lg'
                                    : ''
                            }
                        >
                            <button className="btn btn-info bg-purple-600 text-white px-3 py-2 rounded-lg">Login</button>
                        </Link>
                    </div>
                )}
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse className="md:flex md:items-center md:justify-end">
                <Navbar.Link href="/" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="/features">Features</Navbar.Link>
                <Navbar.Link href="/contact">Contact</Navbar.Link>
                {user && <Navbar.Link href="/dashboard">Dashboard</Navbar.Link>}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;

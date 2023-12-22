import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <img className='rounded-xl' src="https://i.ibb.co/1MKPHPf/12200966-4865557.jpg" alt="" />
            <Link to='/login'><Button className='absolute mt-[-200px] ml-20'>Let’s Explore</Button></Link>
        </div>
    );
};

export default Banner;
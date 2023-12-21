import React from 'react';

const UserType = () => {
    return (
        <div className='mt-8 mb-8'>
            <hr />
     <h2 className='text-3xl font-bold text-center mt-6 mb-5'>Task Management User</h2>
     <hr />
     <div className='grid grid-cols-3 gap-8 mt-6'>
        {/* card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center">
        <img
          className="w-16 h-16 rounded-full mr-4"
          src='https://i.ibb.co/NFwpHmJ/elegant-businessman-office.jpg'
          alt='user'
        />
        <div>
          <h2 className="text-xl font-semibold">Sergey Brin</h2>
          <p className="text-gray-600">Chairman, ARC Industries</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-700">Visionary businessman with a proven track record of strategic leadership and successful ventures. Adept at navigating market dynamics, fostering innovation, and building sustainable enterprises. Committed to excellence, integrity, and global business impact.</p>
      </div>
      
    </div>
    {/* card 2 */}
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center">
        <img
          className="w-16 h-16 rounded-full mr-4"
          src='https://i.ibb.co/3mqcshd/medium-shot-man-working-laptop.jpg'
          alt='user'
        />
        <div>
          <h2 className="text-xl font-semibold">Kevin Mitnick</h2>
          <p className="text-gray-600">Programmer</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-700">Passionate programmer with a knack for problem-solving and a love for clean code. Enthusiastic about technology, I enjoy creating innovative solutions. Continuous learner dedicated to mastering new languages and frameworks.</p>
      </div>
      
    </div>
    {/* card 3 */}

    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center">
        <img
          className="w-16 h-16 rounded-full mr-4"
          src='https://i.ibb.co/3mqcshd/medium-shot-man-working-laptop.jpg'
          alt='user'
        />
        <div>
          <h2 className="text-xl font-semibold">Elizabeth Blackwell</h2>
          <p className="text-gray-600">Professor, SHER-E-BANGLA Medical College Hospital</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-700">Dedicated physician committed to compassionate healthcare. With extensive medical expertise, I prioritize patient well-being. A lifelong learner, I stay abreast of advancements to deliver optimal care with empathy and professionalism.</p>
      </div>
      
    </div>
     </div>
        </div>
    );
};

export default UserType;
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { MdModeEdit } from 'react-icons/md';
import { AuthContext } from '../../Config/AuthProvider';
import { Button, Modal } from 'flowbite-react';
import { MdDelete } from "react-icons/md";

import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Task = () => {
  const [data, setData] = useState([]);
  const { user } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const apiURL = `http://localhost:5050/task/${user?.email}`;

  
    const fetchData = async () => {
      try {
        const response = await axios.get(apiURL);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    useEffect(() => {
      fetchData();
  }, [fetchData]);

  const handleDelete = (task) => {
    console.log('Deleting task:', task);
  
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5050/task/${task._id}`)
          .then((res) => {
            console.log(res.data);
            fetchData();

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            console.error('Error deleting task:', error);
          });
      }
    });
  };
  


  return (
    <div>
      <div className="container mx-auto mt-8">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Deadline</th>
              <th className="py-2 px-4 border-b">Time</th>
              <th className="py-2 px-4 border-b">Priority</th>
              <th className="py-2 px-4 border-b">Location</th>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Update</th>
              <th className="py-2 px-4 border-b">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((task) => (
              <tr key={task._id} className="text-center">
                <td className="py-2 px-4 border-b">{task.taskName}</td>
                <td className="py-2 px-4 border-b">{task.deadlines}</td>
                <td className="py-2 px-4 border-b">{task.time}</td>
                <td className="py-2 px-4 border-b">{task.priority}</td>
                <td className="py-2 px-4 border-b">{task.location}</td>
                <td className="py-2 px-4 border-b ">
                  <button
                    onClick={() => {
                      setSelectedTask(task);
                      setOpenModal(true);
                    }}
                    className="mr-[-24] bg-green-500 py-3 px-4 rounded-lg text-white"
                  >
                    Description
                  </button>
                </td>
                <td className="py-2 px-4 border-b">
                  <Link to={`/dashboard/updateTask/${task._id}`}>
                    <button className="bg-green-500 py-3 px-4 rounded-lg text-white">
                      <MdModeEdit />
                    </button>
                  </Link>
                </td>
                <td className="py-2 px-4 border-b"><button onClick={() => handleDelete(task)}><MdDelete className='w-7 h-8' /></button></td>
              </tr>
            ))}
          </tbody>
        </table>

        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          {selectedTask && (
            <>
              <Modal.Header>{selectedTask.description}</Modal.Header>
              <Modal.Footer>
                <Button onClick={() => setOpenModal(false)}>Close</Button>
              </Modal.Footer>
            </>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Task;

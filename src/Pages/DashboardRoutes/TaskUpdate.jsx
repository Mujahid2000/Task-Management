import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Config/AuthProvider";

const TaskUpdate = () => {
  const { _id } = useParams();
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    taskName: '',
    time: '',
    deadlines: '',
    priority: '',
    location: '',
    description: '',
  });

  useEffect(() => {
    if (data && data.task) {
      const { taskName, time, deadlines, priority, location, description } = data.task;
      setFormData({
        taskName,
        time,
        deadlines,
        priority,
        location,
        description,
      });
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      taskName: e.target.elements.name.value,
      time: e.target.elements.time.value,
      deadlines: e.target.elements.deadline.value,
      priority: e.target.elements.category.value,
      location: e.target.elements.location.value,
      description: e.target.elements.description.value,
    };

    try {
      const response = await axios.post('http://localhost:5050/task', formData);
      console.log(response.data);

      Swal.fire({
        title: 'Success!',
        text: 'Application submitted successfully',
        icon: 'success',
        confirmButtonText: 'OK',
      });

      navigate('/dashboard/task');
    } catch (error) {
      console.error('Error:', error);

      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };
    

    



    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Update Your Task</h2>
        <form onSubmit={handleSubmit} className="border px-10 py-20 rounded-xl">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="sm:col-span-2">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Name</label>
            <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required=""
                  value={formData.taskName}
                  onChange={(e) => setFormData({ ...formData, taskName: e.target.value })}
                />
        </div>
        <div className="w-full">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Time</label>
            <input type="text" name="time" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Time" required=""/>
        </div>
        <div className="w-full">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deadlines</label>
            <input type="date" name="deadline" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required=""/>
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Priority</label>
            <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option selected="">Select category</option>
                <option value="High">High</option>
                <option value="Moderate">Moderate</option>
                <option value="Low">Low</option>
                
            </select>
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
            <input type="text" name="location" id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Location" required=""/>
        </div> 
        <div className="sm:col-span-2">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <textarea id="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
        </div>
    </div>
    <button type="submit" className="inline-flex bg-sky-700 items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
        Add Task
    </button>
    </form>
    </div>
    </section>
    </div>
    );
};

export default TaskUpdate;
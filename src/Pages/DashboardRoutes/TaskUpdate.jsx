import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Config/AuthProvider";


const TaskUpdate = () => {
    const { _id } = useParams();
    console.log(_id);
  const { user } = useContext(AuthContext);
  const [data, setData] = useState({});
  console.log(data);
  
  useEffect(() => { if (user?.email)
    {
      axios
        .get(`https://todo-server-phi-three.vercel.app/task/${_id}/${user?.email}`)
        .then((res) => res.data)
        .then((fetchedData) => {
          setData(fetchedData);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [user]);



  const handleUpdate = async (e) => {
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
      const response = await axios.patch(`https://todo-server-phi-three.vercel.app/task/${_id}`, formData);
      const data = response.data;
      console.log(data);
      if (data.modifiedCount > 0) {
        Swal.fire({
          icon: 'success',
          title: formData.taskName,
          text: 'Job Updated successfully!',
        });
      }
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };
  


    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Update Your Task</h2>
        <form onSubmit={handleUpdate} className="border px-10 py-20 rounded-xl">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="sm:col-span-2">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Name</label>
            <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            defaultValue={data.taskName}
            required=""
          />

        </div>
        <div className="w-full">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Time</label>
            <input type="text" name="time" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  defaultValue={data.time} required=""/>
        </div>
        <div className="w-full">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deadlines</label>
            <input type="date" name="deadline" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  defaultValue={data.deadlines} required=""/>
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Priority</label>
            <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option defaultValue={data.priority}>{data.priority}</option>
                <option value="High">High</option>
                <option value="Moderate">Moderate</option>
                <option value="Low">Low</option>
                
            </select>
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
            <input type="text" name="location" id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  defaultValue={data.location} required=""/>
        </div> 
        <div className="sm:col-span-2">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <textarea id="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  defaultValue={data.description}></textarea>
        </div>
    </div>
    <button  type="submit" className="inline-flex bg-sky-700 items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
        Add Task
    </button>
    </form>
    </div>
    </section>
    </div>
    );
};

export default TaskUpdate;

import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Config/AuthProvider';

const AddTask = () => {
    const { user } = useContext(AuthContext);
    const username = (user?.email);
  const { handleSubmit, control } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const formData = {
      taskName: data.name,
      time: data.time,
      deadlines: data.deadline,
      priority: data.category,
      location: data.location,
      description: data.description,
      username,
    };

    try {
      const response = await axios.post('http://localhost:5050/task', formData);
      console.log(response.data);

      Swal.fire({
        title: 'Success!',
        text: 'Task added successfully',
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
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
        Add a new Task
        </h2>
        <form
        onSubmit={handleSubmit(onSubmit)}
        className="border px-10 py-20 rounded-xl"
        >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Task Name
            </label>
            <Controller
                name="name"
                control={control}
                render={({ field }) => (
                <input
                    {...field}
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type product name"
                    required=""
                />
                )}
            />
            </div>
            <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Time
            </label>
            <Controller
                name="time"
                control={control}
                render={({ field }) => (
                <input
                    {...field}
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Time"
                    required=""
                />
                )}
            />
            </div>
            <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Deadlines
            </label>
            <Controller
                name="deadline"
                control={control}
                render={({ field }) => (
                <input
                    {...field}
                    type="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="$2999"
                    required=""
                />
                )}
            />
            </div>
            <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Priority
            </label>
            <Controller
                name="category"
                control={control}
                render={({ field }) => (
                <select
                    {...field}
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                    <option selected="">Select category</option>
                    <option value="High">High</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Low">Low</option>
                </select>
                )}
            />
            </div>
            <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Location
            </label>
            <Controller
                name="location"
                control={control}
                render={({ field }) => (
                <input
                    {...field}
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Location"
                    required=""
                />
                )}
            />
            </div>
            <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Description
            </label>
            <Controller
                name="description"
                control={control}
                render={({ field }) => (
                <textarea
                    {...field}
                    id="description"
                    rows="8"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Your description here"
                />
                )}
            />
            </div>
        </div>
        <button
            type="submit"
            className="inline-flex bg-sky-700 items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
        >
            Add Task
        </button>
        </form>
    </div>
    </section>
    </div>
  );
};

export default AddTask;

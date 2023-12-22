

const Feature = () => {
    return (
        <div>
            <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Features for Task Management</h2>

        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Task Tracking</h3>
              <p className="text-gray-600">Keep track of your tasks with an intuitive interface.</p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Priority Management</h3>
              <p className="text-gray-600">Set priorities for tasks and stay organized.</p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-600">Collaborate with team members on shared tasks.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Feature;
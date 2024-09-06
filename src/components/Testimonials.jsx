import React from 'react';

function Testimonials() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          What Our Users Say
        </h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHVzZXJ8ZW58MHx8fHwxNjI2NDUxNTg4&ixlib=rb-1.2.1&q=80&w=400" alt="User 1" className="w-12 h-12 rounded-full mb-4" />
              <p className="text-gray-600">
                "This website saved my life during a medical emergency. Thank you!"
              </p>
              <h3 className="text-lg font-bold mb-2">
                John Doe
              </h3>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <img src="https://images.unsplash.com/photo-1656019674844-3040aba0350b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxiZ1VPcVk3YUtZY3x8ZW58MHx8fHx8" alt="User 2" className="w-12 h-12 rounded-full mb-4" />
              <p className="text-gray-600">
                "I was able to find a nearby hospital quickly and easily. Great resource!"
              </p>
              <h3 className="text-lg font-bold mb-2">
                Jane Smith
              </h3>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHx1c2VyfGVufDB8fHx8MTY0ODQ4MjYwMQ&ixlib=rb-1.2.1&q=80&w=400" alt="User 3" className="w-12 h-12 rounded-full mb-4" />
              <p className="text-gray-600">
                "The emergency guides were very helpful during a recent emergency. Thanks!"
              </p>
              <h3 className="text-lg font-bold mb-2">
                Bob Johnson
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

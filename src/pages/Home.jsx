import React from "react";

function Home() {
  return (
    <div className="bg-gradient-to-br from-teal-600 to-teal-700 px-6 py-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Document icon illustration */}
        <div className="absolute right-8 top-8 opacity-20">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-6 border-2 border-white rounded"></div>
              <div className="w-24 h-1 bg-white rounded"></div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 border-2 border-white rounded"></div>
              <div className="w-20 h-1 bg-white rounded"></div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-6 border-2 border-white rounded"></div>
              <div className="w-28 h-1 bg-white rounded"></div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 border-2 border-white rounded"></div>
              <div className="w-16 h-1 bg-white rounded"></div>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Unlock the Power of Your PDFs
        </h1>

        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Upload your documents and interact with them through chat or quizzes.
          Get instant insights and understanding.
        </p>

        <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
            <label
              class="block mb-3 text-sm font-semibold text-gray-800"
              for="file_input"
            >
              Upload File
            </label>

            <div class="relative">
              <input
                class="block w-full text-sm text-gray-700
                           file:mr-4 file:py-2 file:px-4 
                           file:rounded-lg file:border-0 
                           file:text-sm file:font-medium 
                           file:bg-blue-50 file:text-blue-700 
                           file:hover:bg-blue-100 file:cursor-pointer
                           border border-gray-300
                           rounded-lg cursor-pointer 
                           bg-gray-50
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                           hover:bg-gray-100
                           transition-colors duration-200"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
                accept=".pdf"
              />
            </div>

            <p
              class="mt-2 text-xs text-gray-500 dark:text-gray-400 flex items-center"
              id="file_input_help"
            >
              <svg
                class="w-4 h-4 mr-1 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              PDF (MAX. 10MB)
            </p>
        </div>
      </div>

      {/* Action buttons below hero */}
      <div className="max-w-4xl mx-auto flex justify-center space-x-4 mt-16">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
          Chat with PDF
        </button>
        <button className="bg-transparent border-2 border-gray-600 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-medium transition-colors">
          Create Quiz from PDF
        </button>
      </div>
    </div>
  );
}

export default Home;

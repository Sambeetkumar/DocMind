import React from 'react'

function Footer() {
  return (
    <footer className="bg-white py-5 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center space-x-12 mb-8">
          <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
            Contact Us
          </a>
        </div>
        
        <div className="text-center text-gray-400">
          <p>© 2024 DocuChat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
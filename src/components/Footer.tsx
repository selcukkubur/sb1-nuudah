import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">DevFound.io</h3>
            <p className="text-sm text-gray-400">Connecting developers with great opportunities.</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">For Job Seekers</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/jobs" className="hover:text-blue-400">Browse Jobs</Link></li>
              <li><a href="#" className="hover:text-blue-400">Create Profile</a></li>
              <li><a href="#" className="hover:text-blue-400">Job Alerts</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">For Employers</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400">Post a Job</a></li>
              <li><a href="#" className="hover:text-blue-400">Browse Candidates</a></li>
              <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
              <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          &copy; 2023 DevFound.io. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
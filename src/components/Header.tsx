import React from 'react'
import { Link } from 'react-router-dom'
import { Briefcase } from 'lucide-react'
import { Button } from './ui/button'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-blue-600 font-bold text-xl">
          <Briefcase size={24} />
          <span>DevFound.io</span>
        </Link>
        <nav>
          <ul className="flex items-center space-x-6">
            <li><Link to="/jobs" className="text-gray-600 hover:text-blue-600">Find Jobs</Link></li>
            <li><Link to="#" className="text-gray-600 hover:text-blue-600">For Employers</Link></li>
            <li><Button asChild><Link to="/auth">Sign In</Link></Button></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
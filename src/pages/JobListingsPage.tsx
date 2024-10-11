import React, { useState } from 'react'
import { Search, MapPin, DollarSign, Briefcase, Clock, User, MessageSquare, Compass, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Link } from 'react-router-dom'

const JobListingsPage: React.FC = () => {
  const [filters, setFilters] = useState({
    role: '',
    location: '',
    remote: false,
    experience: '',
  })

  const jobs = [
    { id: 1, title: 'Senior React Developer', company: 'TechCorp', location: 'San Francisco, CA', salary: '$120k - $160k', logo: 'https://logo.clearbit.com/techcorp.com', tags: ['React', 'JavaScript', 'Redux'] },
    { id: 2, title: 'Full Stack Engineer', company: 'StartupX', location: 'New York, NY', salary: '$100k - $140k', logo: 'https://logo.clearbit.com/startupx.com', tags: ['Node.js', 'React', 'MongoDB'] },
    { id: 3, title: 'DevOps Specialist', company: 'CloudSys', location: 'Remote', salary: '$110k - $150k', logo: 'https://logo.clearbit.com/cloudsys.com', tags: ['AWS', 'Docker', 'Kubernetes'] },
    { id: 4, title: 'Mobile App Developer', company: 'AppWorks', location: 'Los Angeles, CA', salary: '$90k - $130k', logo: 'https://logo.clearbit.com/appworks.com', tags: ['iOS', 'Swift', 'Android'] },
    { id: 5, title: 'Data Scientist', company: 'DataCo', location: 'Seattle, WA', salary: '$130k - $170k', logo: 'https://logo.clearbit.com/dataco.com', tags: ['Python', 'Machine Learning', 'SQL'] },
  ]

  return (
    <div className="flex">
      <nav className="w-64 bg-gray-100 h-screen p-6 space-y-4">
        <Link to="/" className="flex items-center text-gray-600 hover:text-blue-600">
          <Home size={18} className="mr-2" /> Home
        </Link>
        <Link to="/profile" className="flex items-center text-gray-600 hover:text-blue-600">
          <User size={18} className="mr-2" /> Profile
        </Link>
        <Link to="/jobs" className="flex items-center text-gray-600 hover:text-blue-600">
          <Briefcase size={18} className="mr-2" /> Jobs
        </Link>
        <Link to="/applied" className="flex items-center text-gray-600 hover:text-blue-600">
          <Clock size={18} className="mr-2" /> Applied
        </Link>
        <Link to="/messages" className="flex items-center text-gray-600 hover:text-blue-600">
          <MessageSquare size={18} className="mr-2" /> Messages
        </Link>
        <Link to="/discover" className="flex items-center text-gray-600 hover:text-blue-600">
          <Compass size={18} className="mr-2" /> Discover
        </Link>
      </nav>

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Find Jobs</h1>
        
        <div className="mb-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <Input
            type="text"
            placeholder="Job title, skills, or company"
            className="flex-grow"
            value={filters.role}
            onChange={(e) => setFilters({ ...filters, role: e.target.value })}
          />
          <Input
            type="text"
            placeholder="Location"
            className="flex-grow"
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          />
          <Button className="bg-blue-600 text-white hover:bg-blue-700">
            Search
          </Button>
        </div>

        <div className="space-y-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex">
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className="w-16 h-16 object-contain mr-6"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/64x64.png?text=Logo';
                }}
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
                <p className="text-gray-600 mb-2">{job.company}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <DollarSign size={16} className="mr-1" />
                    {job.salary}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button className="bg-blue-600 text-white hover:bg-blue-700">
                  Apply Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JobListingsPage
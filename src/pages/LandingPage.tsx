import React from 'react'
import { Link } from 'react-router-dom'
import { Search, Briefcase, Users, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const LandingPage: React.FC = () => {
  const featuredCompanies = [
    { name: 'Google', logo: 'https://logo.clearbit.com/google.com' },
    { name: 'Amazon', logo: 'https://logo.clearbit.com/amazon.com' },
    { name: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com' },
    { name: 'Apple', logo: 'https://logo.clearbit.com/apple.com' },
  ]

  return (
    <div className="space-y-16 py-16">
      <section className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Find your next job at a world-changing startup</h1>
        <p className="text-xl text-gray-600 mb-8">Connect with top tech companies and startups</p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <Input
            type="text"
            placeholder="Job title, skills, or company"
            className="w-full md:w-96"
          />
          <Button asChild>
            <Link to="/jobs">Search Jobs</Link>
          </Button>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why DevFound.io?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <TrendingUp size={48} className="mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Curated Startups</h3>
              <p className="text-gray-600">Discover opportunities at the most innovative and fast-growing companies.</p>
            </div>
            <div className="text-center">
              <Briefcase size={48} className="mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
              <p className="text-gray-600">Find roles that match your skills and career aspirations.</p>
            </div>
            <div className="text-center">
              <Users size={48} className="mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Network</h3>
              <p className="text-gray-600">Connect with founders, investors, and other tech professionals.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Featured Companies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {featuredCompanies.map((company) => (
            <div key={company.name} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="w-16 h-16 object-contain mb-4"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/64x64.png?text=Logo';
                }}
              />
              <h3 className="font-semibold">{company.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Next Opportunity?</h2>
          <p className="text-xl mb-8">Join thousands of developers who have found their dream jobs through DevFound.io</p>
          <Button asChild variant="secondary">
            <Link to="/jobs">Browse Jobs Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
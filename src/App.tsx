import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import JobListingsPage from './pages/JobListingsPage'
import AuthPage from './pages/AuthPage'

const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID' // Replace with your actual Google Client ID

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/jobs" element={<JobListingsPage />} />
              <Route path="/auth" element={<AuthPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GoogleOAuthProvider>
  )
}

export default App
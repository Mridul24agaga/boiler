'use client'

import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = 'https://bjlitydfbneliswbxism.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqbGl0eWRmYm5lbGlzd2J4aXNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3MjgxNDgsImV4cCI6MjA0MjMwNDE0OH0.tmiNi600lReYH0A-OIrUjbyuMODfVk-VADt_qd-VeLo'
const supabase = createClient(supabaseUrl, supabaseKey)

export default function AccessForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [paypalUsername, setPaypalUsername] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    if (!name || !email || !paypalUsername) {
      setMessage('Please fill in all fields')
      setLoading(false)
      return
    }

    try {
      // Insert record into Supabase table
      const { data, error } = await supabase
        .from('access_requests')
        .insert([
          { 
            name: name, 
            email: email, 
            paypal_username: paypalUsername 
          }
        ])

      if (error) throw error

      setMessage('Form submitted successfully! We\'ll verify your payment and grant access soon.')
      setName('')
      setEmail('')
      setPaypalUsername('')
    } catch (error) {
      console.error('Error:', error)
      setMessage('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Access Request Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email (for GitHub access)</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="paypalUsername" className="block text-sm font-medium text-gray-700">PayPal Username</label>
          <input
            type="text"
            id="paypalUsername"
            value={paypalUsername}
            onChange={(e) => setPaypalUsername(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {message && (
        <p className={`mt-4 text-center ${message.includes('error') ? 'text-red-600' : 'text-green-600'}`}>
          {message}
        </p>
      )}
    </div>
  )
}
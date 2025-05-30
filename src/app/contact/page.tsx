"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

interface FormData{
  name: String;
  email: String;
  message: String;
}

type FormStatus = "idle" | "loading" | "success" | "error";


export default function page() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  })

  const [status, setStatus] = useState<FormStatus>("idle")

  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async(e : React.FormEvent) => {
    e.preventDefault();
    setStatus("loading")
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      if(!response.ok) {
        throw new Error("Failed to send Message")
      }

      setStatus("success")
      setFormData({
        name: "",
        email: "",
        message: ""
      })
    } catch (error) {
      setStatus("error")
    }
  }
  return (
    <div className='container max-w-7xl mx-auto py-20'>
      <h1 className="text-4xl font-bold mb-20 text-center ">
      Contact Me
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* contact info side */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <p className="text-secondary md:w-2/3">I'm always open to discuss new projects, creative ideas or opportunities to be part of your visions</p>
        <div className="space-y-4" >
          <div className="flex items-center gap-4">
          <FaEnvelope className="w-6 h-6 text-primary"/>
          <div>
          <h3 className="text-semibold">
              Email:
            </h3>
            <Link href="mailto:mj.mwangijoseph@gmail.com" className="text-secondary hover:text-primary">mwangijoseph@gmail.com</Link>
          </div>
          </div>

          <div className="flex items-center gap-4">
          <FaPhone className="w-6 h-6 text-primary"/>
          <div>
          <h3 className="text-semibold">
              Phone:
            </h3>
            <Link href="tel:+254705045861" className="text-secondary hover:text-primary">+254 705 045 861</Link>
          </div>
          </div>

          <div className="flex items-center gap-4">
          <FaMapMarkerAlt className="w-6 h-6 text-primary"/>
          <div>
          <h3 className="text-semibold">
              Location:
            </h3>
            <p>Nairobi, KE</p>
          </div>
          </div>
          </div>
        </div>

        {/* contact form side */}
        <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input 
              required 
              type="text" 
              id="name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your name..."
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
              required
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your email..."
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none"/>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea 
              rows={4}
              required
              value={formData.message}
              onChange={handleChange} 
              id="message" 
              name="message"
              placeholder="Enter Your message..." 
              className="w-full px-4 py-2 rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none"/>
            </div>

            <button type="submit" className="w-full btn btn-primary">{status === "loading" ? "Sending..." : "Send Message" }</button>
            {
              status === "success" && (
                <p className="text-green-500 text-center">Message Sent Successfully.</p>
              )
            }

            {
              status === "error" && (
                <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
              )
            }
          </form>
        </div>
      </div>
    </div>
  )
}

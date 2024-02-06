"use client";
import SideNav from '@/components/sideNav'
import React from 'react'


const DashboardPage = () => {
  return (
    <div className="flex flex-row h-screen">
      <div>
        <SideNav name={''} />
      </div>
      <div>
        <h1>DashboardPage</h1>
      </div>
    </div>
  )
}

export default DashboardPage
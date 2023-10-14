import React from 'react'

const Dashboard = ({ children }) => {
  return (
    <div>
      <div>
        <title>College Coin</title>
        <h1 className='text-4xl'>College Coin</h1>
        <a href="/student/home">Home</a>
        &nbsp;
        <a href="/student/application">Application</a>
        &nbsp;
        <a href="/student/history">History</a>
      </div>
      {children}
      <footer></footer>
    </div>
  )
}

export default Dashboard
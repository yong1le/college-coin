import React from 'react'

const Dashboard = ({ children }) => {
  return (
    <div>
      <header></header>
      {children}
      <footer></footer>
    </div>
  )
}

export default Dashboard
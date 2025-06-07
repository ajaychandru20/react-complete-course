import React from 'react'

const year = new Date();
const Footer = () => {
  return (
    <footer>
        Copyrights &copy; {year.getFullYear()} 
    </footer>
    
  )
}

export default Footer
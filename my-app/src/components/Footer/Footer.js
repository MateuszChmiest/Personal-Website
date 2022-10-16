import React from 'react'

const Footer = () => {
  const footerDate = new Date();
  const currentYear = footerDate.getFullYear();
  return (
    <div className={"bg-backgroundColor flex items-center justify-center"}>
          <p className={"text-secondary text-xs md:text-base text-center p-4 text-opacity-80"}>Copyright © {currentYear} MateuszChmiest.pl, All rights reserved.</p>
    </div>
  )
}

export default Footer
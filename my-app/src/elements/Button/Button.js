import clsx from "clsx"
import React from "react"

const Button = ({ text, onClick, isDisabled, classes, href, type }) => (
  <button
    className={clsx("border-2 border-primary hover:bg-primary duration-200 text-whiteColor px-5 font-medium cursor-pointer z-30", classes)}
    onClick={onClick} disabled={isDisabled} type={type}
  >
    <a href={href}>{text}</a>
  </button>
)

export default Button


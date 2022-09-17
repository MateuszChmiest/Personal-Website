import clsx from "clsx"
import React from "react"

const Button = ({ text, onClick, isDisabled, classes, href }) => (
  <button
    className={clsx("border-2 border-primary hover:bg-primary duration-200 text-whiteColor px-5 font-medium cursor-pointer z-50", classes)}
    onClick={onClick} disabled={isDisabled}
  >
    <a href={href}>{text}</a>
  </button>
)

export default Button


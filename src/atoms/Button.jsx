import React from 'react'

const Button = ({text, bgColor, textColor, disabled, className, onClickHandler, ...props}) => {
  return (
    <button style={{display: props.display, backgroundColor: bgColor, color: textColor}} className={`${className}`} disabled={disabled} onClick={onClickHandler}>{text}</button>
  )
}

export default Button

import React from 'react'

const Card = ({ className,  heading ,description ,children}) => {
  return (
    <div className={className}>
                    <span>{children}</span>
                    <p className="text-2xl font-semibold">{heading}</p>
                    <p>{description}</p>
                </div>
  )
}

export default Card
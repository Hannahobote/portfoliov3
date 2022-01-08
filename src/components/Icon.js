import React from 'react'

function Icon (props) {
  const img = props.img
  const alt = props.alt

  return (
    <div>
      <img
        src={img}
        alt={alt}
        className='img-fluid img-responsive my-2'
        style={{
          width: '100px',
          height: '100px'
        }}
      ></img>
    </div>
  )
}

export default Icon

import React from 'react'

export default function IconButton(props) {
  const lable = props.lable
  const svg = props.svg
  const link = props.link

  return (
    <div>
      <a
        href={link} class="fs-5 mb-3 text-dark text-decoration-none"
        target='_blank'
        rel="noreferrer"
        className='my-primary-font-color'
        style={{ textDecoration: 'none'}}
      >
        {svg}
        {lable}
      </a>
    </div>
  )
}

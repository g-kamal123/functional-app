import React from 'react'

function PrintName(props) {
  return (
    <div>
        <h3>Print Name</h3>
        <h2>Hello {props.name}</h2>
    </div>
  )
}

export default PrintName
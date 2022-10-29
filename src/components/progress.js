import React from 'react'
import PropTypes from 'prop-types'

function Progress(props) {
    const containerStyles = {
        height: 5,
        width: '30%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 0
    }

    const fillerStyles = {
        height: '100%',
        width: `${props.completed}%`,
        backgroundColor: '#2BBF47',
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  )
}

Progress.propTypes = {

}

export default Progress;


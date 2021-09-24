import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends Component {
  constructor () {
    super()
    this.state = {
      hasError: false
    }
  }
  componentDidCatch () {
    this.setState({
      hasError: true
    })
  }
  render () {
    if (this.state.hasError) {
      return (
        <div
          style={{
            height: this.props.height,
            width: this.props.width
          }}
          className={`loader ${this.props.className}`}
        >
          {this.props.message }
        </div>
      )
    }
    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  message: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

ErrorBoundary.defaultProps = {
  height: '100%',
  width: '100%',
  className: '',
  message: 'Oops! Something went wrong.',
  children: null
}

export default ErrorBoundary

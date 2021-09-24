import React from 'react'
import PropTypes from 'prop-types'
import { Spinner } from 'react-bootstrap'
import ErrorBoundary from '../ErrorBoundary'

const Loader = (props) => {
  if (props.loading) {
    return (
      <div className='disp-flex center' style={{ height: props.height, width: props.width }}>
        <div>
          <Spinner animation="border" variant="secondary" /> Loading...
        </div>
      </div>
    )
  } else if (props.error) {
    return (
      <div
        style={{
          height: props.height,
          width: props.width
        }}
        className='disp-flex center'
      >
          Oops! There has been an issue. Re-try in some time.
      </div>
    )
  } else if (props.noData) {
    return <div className='disp-flex center' style={{ height: props.height, width: props.width }} >{props.message}</div>
  }
  return (
    <ErrorBoundary height={props.height} width={props.width} >
      {props.children}
    </ErrorBoundary>
  )
}

Loader.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  noData: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  message: PropTypes.string
}
Loader.defaultProps = {
  height: 'calc(100vh - 60px)',
  width: '100%',
  noData: false,
  children: null,
  message: 'No data found'
}

export default Loader

import React, { Suspense } from 'react';
import Loader from '../Loader'

const SuspenseCommon = ({ children, height = '90vh', ...rest }) => {
	const isServer = typeof window === "undefined"
	if (!isServer) {
		return (
			<Suspense fallback={<Loader {...rest} loading error={false} height={height}  />} >
				{children}
			</Suspense>
		)
	}
	return (
		<>
			{children}
		</>
	)
}

export default SuspenseCommon

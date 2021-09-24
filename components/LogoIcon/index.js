import React from 'react'
import {
  Image,
} from 'react-bootstrap';

const LogoIcon = ({ type }) => {
	if (type === 'white') {
	 return <Image src="/images/bwicon-white.png" style={{ width: 70, height: 70, background: '#fff', zIndex: 1 }} className="logo-position-absolute" roundedCircle />
	}
	return (
		<div className="text-center m-b-10" >
			<Image src="/images/bwicon-black.png" style={{ width: 70, height: 70, background: '#111D3C', zIndex: 1 }} roundedCircle />
		</div>
	)
}

export default LogoIcon

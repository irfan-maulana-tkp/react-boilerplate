import styled, { keyframes } from 'react-emotion';

// https://www.w3schools.com/howto/howto_css_modals.asp
export const Modal = styled.div`
	${props => props.show ? `display: block;` : `display: none;`}
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgb(0,0,0);
	background-color: rgba(0,0,0,0.4);
`;

export const animatetop = keyframes`
	from {top: -300px; opacity: 0}
	to {top: 200px; opacity: 1}
`;

export const ModalContent = styled.div`
	position: relative;
	z-index: 9;
	top: 200px;
	background-color: #fefefe;
	margin: auto;
	padding: 0;
	border: 0;
	border-radius: .25em;
	width: 40%;
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
	animation-name: ${animatetop};
	animation-duration: 0.4s
`;

export const ModalHeader = styled.div`
  padding: 2px 16px;
	background-color: #61dafb;
  color: white;
	border-radius: .25em .25em 0 0;
`;

export const ModalBody = styled.div`
	padding: 1em 16px;
`;

export const ModalFooter = styled.div`
	padding: 2px 16px;
`;

export const CloseButton = styled.span`
	color: #fff;
	float: right;
	font-size: 28px;
	font-weight: bold;
	margin-top: 15px;

	&:hover,
	&:focus {
		color: black;
		text-decoration: none;
		cursor: pointer;
	}
`;

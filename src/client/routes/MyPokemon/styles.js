import styled from 'react-emotion';

export const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	flex-shrink: 0;
	flex-basis: auto;
	justify-content: stretch;
	align-items: flex-start;
	flex: 1 0 auto;
	margin-top: 60px;
`;

export const WrapperFull = styled.div`
	width: 100%;
`;

export const Cover = styled.div`
	background-color: #282c34;
	color: #fff;
	padding-top: 95px;
	padding-bottom: 85px;
	margin-left: auto;
	margin-right: auto;
`;

export const Content = styled.div`
	padding-left: 20px;
	padding-right: 20px;
	margin-left: auto;
	margin-right: auto;

	@media (min-width: 1340px) {
    max-width: 1260px;
	}

	@media (min-width: 780px) {
		width: 90%;
	}

	> h1 {
		color: #61dafb;
    text-align: center;
    margin: 0;
    font-size: 45px;
		letter-spacing: 0.01em;

		@media (min-width: 1280px) {
    	font-size: 60px;
		}
	}

	> p {
		padding-top: 15px;
    text-align: center;
    font-size: 24px;
    letter-spacing: 0.01em;
		font-weight: 200;

		@media (min-width: 1280px){
			padding-top: 20px;
			font-size: 30px;
		}
	}
`;

export const ListWrapper = styled.div`
	margin-top: 2em;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	grid-auto-flow: row dense;
`;

export const CardWrapper = styled.div`
	width: 200px;
	text-align: center;
	font-size: 20px;
	margin-bottom: 15px;
	margin-right: 15px;
	font-size: 16px;
	background-color: #0c0d0e;
	color: #fff;
	border-radius: .25em;
	padding: 10px 25px;
	white-space: nowrap;
	text-decoration: none;
	text-transform: capitalize;

	&:hover{
		box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
		transition: 0.3s;
	}
`;

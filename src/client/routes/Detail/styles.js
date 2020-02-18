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
		text-transform: capitalize;

		@media (min-width: 1280px) {
    	font-size: 60px;
		}
	}

	> h2 {
    text-align: center;
    font-size: 20px;
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

export const ButtonWrapper = styled.div`
	margin-top: 2em;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	grid-auto-flow: row dense;

	> button {
		font-size: 20px;
		display: inline-block;
		font-size: 16px;
		background-color: #61dafb;
		color: #000;
		padding: 12px 25px;
		white-space: nowrap;
		text-decoration: none;
		border-radius: .25em;
		cursor: pointer;

		&:hover{
			box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
			transition: 0.3s;
		}
	}
`;

export const ImageWrapper = styled.div`
	margin-top: 2em;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	grid-auto-flow: row dense;

	> div {
		text-align: center;
		margin-right: 15px;
		background-color: #0c0d0e;
		color: #fff;
		border-radius: .25em;
		white-space: nowrap;
		cursor: pointer;

		&:hover{
			box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
			transition: 0.3s;
		}

		> img {
			width: 250px;
			height: auto;
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

	> a {
		width: 200px;
		text-align: center;
		margin-bottom: 15px;
		margin-right: 15px;
		font-size: 16px;
		background-color: #0c0d0e;
		color: #fff;
		border-radius: .25em;
		padding: 12px 25px;
		white-space: nowrap;
		text-decoration: none;
		cursor: pointer;

		&:hover{
			box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
			transition: 0.3s;
		}

		> div {
			text-transform: capitalize;
		}
	}
`;

export const FormNickName = styled.form`
	> input {
		padding: 12px 6px;
		margin-top: 8px;
		font-size: 17px;
		border: 1px solid grey;
		margin-right: .5em;
		border-radius: .25em;
		min-width: 300px;
	}
`;

export const ButtonSave = styled.button`
	font-size: 20px;
	display: inline-block;
	font-size: 16px;
	background-color: #61dafb;
	color: #000;
	padding: 12px 25px;
	white-space: nowrap;
	text-decoration: none;
	border-radius: .25em;
`;

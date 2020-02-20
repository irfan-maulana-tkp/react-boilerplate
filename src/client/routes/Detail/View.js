import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import getGraphqlQuery from '../../queries/pokemon.graphql';

import Modal from '../../components/Modal';

import calcProbability from '../../utils/probability';
import { get, set } from '../../utils/storage';
import constant from '../../utils/constant';

import { HomeContainer, WrapperFull, Cover, Content, ImageWrapper, ListWrapper, FormNickName, ButtonSave, ButtonWrapper } from './styles';

const Home = ({ match }) => {
	const { name = '' } = match.params;
	const [isShowModal, setShowModal] = useState(false);
	const [isGet, setIsGet] = useState(true);
	const [savePokemon, setSavePokemon] = useState(null);
	const inputEl = useRef(null);
	const [alreadyClick, setAlreadyClick] = useState(false);

	const { loading, data } = useQuery(getGraphqlQuery, {
		fetchPolicy: 'cache-first',
		variables: {
			name: name,
		},
	});

	const setFailed = () => {
		setIsGet(false);
		setSavePokemon(null);
	}

	const handleCatch = (pokemon) => {
		setIsGet(false);
		setAlreadyClick(false);
		const catched = calcProbability();

		setAlreadyClick(true);

		if (catched) {
			setIsGet(true);
			setSavePokemon(pokemon);
			setShowModal(true);
		} else {
			setFailed();
		}
	}

	const doSave = () => {
		const nickName = inputEl.current.value;

		if (nickName) {
			const myPokemonsData = get(constant.STORAGE_KEY) || [];
			const newData = [...myPokemonsData, { ...savePokemon, nick_name: nickName, timestamp: new Date().getTime() }]

			set(constant.STORAGE_KEY, newData);
			inputEl.current.value = '';
			setShowModal(false);
		}
	}

	const handleCloseModal = () => {
		setShowModal(false);
		inputEl.current.value = '';
	}

	return (
  <HomeContainer>
    <WrapperFull>
      <Cover>
        <Content>
          {!loading && data && (
          <h1>{data.pokemon.name}</h1>
						)}

          {!loading && data && (
          <ButtonWrapper>
            <button onClick={() => { handleCatch(data.pokemon) }}>Catch Me!</button>
            {(alreadyClick && !isGet) && <p>Failed get pokemon, please try again in a second</p>}
          </ButtonWrapper>
						)}

          {!loading && data && (
          <ImageWrapper>
            <div>
              <img src={data.pokemon.sprites.front_default} />
            </div>
            <div>
              <img src={data.pokemon.sprites.back_default} />
            </div>
          </ImageWrapper>
						)}

          <h2>Types</h2>
          {!loading && data && (
          <ListWrapper>
            {
									data.pokemon.types.map((i) => (
  <Link key={i.type.name} to={`#`}>
    <div>{i.type.name}</div>
  </Link>
									))
								}
          </ListWrapper>
						)}

          <h2>Abilities</h2>
          {!loading && data && (
          <ListWrapper>
            {
									data.pokemon.abilities.map((i) => (
  <Link key={i.ability.name} to={`#`}>
    <div>{i.ability.name}</div>
  </Link>
									))
								}
          </ListWrapper>
						)}

          <h2>Moves</h2>
          {!loading && data && (
          <ListWrapper>
            {
									data.pokemon.moves.map((i) => (
  <Link key={i.move.name} to={`#`}>
    <div>{i.move.name}</div>
  </Link>
									))
								}
          </ListWrapper>
						)}
        </Content>
      </Cover>
    </WrapperFull>
    <Modal title="Add Nickname" show={isShowModal} onClose={handleCloseModal}>
      <FormNickName onSubmit={(e) => { e.preventDefault() }}>
        <input required type="input" ref={inputEl} placeholder="Type nickname for this pokemon" />
        <ButtonSave onClick={doSave}>Save pokemon</ButtonSave>
      </FormNickName>
    </Modal>
  </HomeContainer>
	);
};

export default Home;

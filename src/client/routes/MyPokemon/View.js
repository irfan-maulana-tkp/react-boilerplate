import React, { useState } from 'react';
import { HomeContainer, WrapperFull, Cover, Content, ListWrapper, CardWrapper } from './styles';
import { get, set } from '../../utils/storage';
import constant from '../../utils/constant';

const MyPokemonView = () => {
	const [myPokemons, setMyPokemons] = useState(get(constant.STORAGE_KEY) || []);

	const onRelease = (timeStamp) => {
		const newData = myPokemons.filter(i => (i.timestamp !== timeStamp));

		set(constant.STORAGE_KEY, newData);
		setMyPokemons(newData);
	}

	return (
  <HomeContainer>
    <WrapperFull>
      <Cover>
        <Content>
          <h1>My Pokemons</h1>
          {myPokemons && myPokemons.length > 0 && (
          <ListWrapper>
            {
									myPokemons.map((i) => (
  <CardWrapper key={`${i.timestamp}`}>
    <div>{i.nick_name}</div>
    <img src={i.sprites.front_default} />
    <div>{i.name}</div>
    <button onClick={() => { onRelease(i.timestamp) }}>Release</button>
  </CardWrapper>
									))
								}
          </ListWrapper>
						)}
        </Content>
      </Cover>
    </WrapperFull>
  </HomeContainer>
	);
};

export default MyPokemonView;

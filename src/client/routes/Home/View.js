import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import getGraphqlQuery from '../../queries/pokemons.graphql';
import { HomeContainer, WrapperFull, Cover, Content, ListWrapper, PageWrapper } from './styles';

import placeholderImg from '../../assets/black-square.jpg';

const LIMIT  = 19;
const SHIMMERS  = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

const Home = () => {
	const [page, setPage] = useState(1);

	const { loading, data, refetch } = useQuery(getGraphqlQuery, {
		fetchPolicy: 'cache-first',
		variables: {
			limit: LIMIT,
			offset: 1
		},
	});

	const onNext = () => {
		if (data.pokemons.next) {
			const lastData = data.pokemons.results[data.pokemons.results.length - 1]
			const nextPage = lastData.id + 1;

			refetch({
				limit: LIMIT,
				offset: nextPage
			})
			setPage(page + 1);
		}
	}

	const onPrev = () => {
		if (data.pokemons.previous) {
			const firstData = data.pokemons.results[0]
			const prevPage = firstData.id - 1;

			refetch({
				limit: LIMIT,
				offset: page === 2 ? 1 : prevPage - (LIMIT),
			})
			setPage(page - 1);
		}
	}

	return (
  <HomeContainer>
    <WrapperFull>
      <Cover>
        <Content>
          <h1>Pokemon List</h1>
          {loading && (
          <ListWrapper>
            {
									SHIMMERS.map((i) => (
  <Link key={i} to={`#`}>
    <img src={placeholderImg} />
    <div />
  </Link>
									))
								}
          </ListWrapper>
						)}

          {!loading && data && (
          <ListWrapper>
            {
									data.pokemons.results.map((i) => (
  <Link key={i.id} to={`/${i.name}`}>
    <img src={i.image} />
    <div>{i.name}</div>
  </Link>
									))
								}
          </ListWrapper>
						)}

          {!loading && data && (
          <PageWrapper>
            <button onClick={onPrev} disabled={!data.pokemons.previous}>{`<<<`}</button>
            <button>Page {page}</button>
            <button onClick={onNext} disabled={!data.pokemons.next}>{`>>>`}</button>
          </PageWrapper>
						)}
        </Content>
      </Cover>
    </WrapperFull>
  </HomeContainer>
	);
};

export default Home;

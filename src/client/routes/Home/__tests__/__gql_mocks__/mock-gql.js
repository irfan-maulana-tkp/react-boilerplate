import graphqlQuery from '../../../../queries/pokemons.graphql';

export default [
	{
		request: {
			query: graphqlQuery,
			variables: {
				limit: 19,
				offset: 1,
			},
		},
		result: {
			"data": {
				"pokemons": {
					"count": 964,
					"next": "https://pokeapi.co/api/v2/pokemon/?offset=3&limit=3",
					"previous": null,
					"results": [
						{
							"url": "https://pokeapi.co/api/v2/pokemon/1/",
							"name": "bulbasaur",
							"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
						},
						{
							"url": "https://pokeapi.co/api/v2/pokemon/2/",
							"name": "ivysaur",
							"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
						},
						{
							"url": "https://pokeapi.co/api/v2/pokemon/3/",
							"name": "venusaur",
							"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
						}
					],
					"status": true,
					"message": ""
				}
			}
		},
	},
];

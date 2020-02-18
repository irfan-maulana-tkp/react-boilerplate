import loadable from '@loadable/component';

export const MyPokemonView = loadable(() => import(/* webpackChunkName: "my-pokemon-view" */ './View'));

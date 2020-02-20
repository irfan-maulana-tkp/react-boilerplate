import loadable from '@loadable/component';

export const HomeView = loadable(() => import(/* webpackChunkName: "home-view" */ './View'));

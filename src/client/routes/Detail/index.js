import loadable from '@loadable/component';

export const DetailView = loadable(() => import(/* webpackChunkName: "detail-view" */ './View'));

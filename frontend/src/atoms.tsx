import { atom } from 'recoil';
// import { localStorageEffect } from './utils/recentSearch';
import { recoilPersist } from 'recoil-persist';

export interface ISearch {
  text: string;
}
const { persistAtom } = recoilPersist();
export const searchState = atom<ISearch[]>({
  key: 'recent-search',
  default: [],
  effects_UNSTABLE: [persistAtom],
  //   effects: [localStorageEffect('recent-search')],
});

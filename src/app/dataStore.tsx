import { atom } from 'jotai';

export type ArticleType = {
    title: string;
}

export const articleDataAtom = atom<ArticleType[]>([])
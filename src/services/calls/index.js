import { catcher } from '../helpers'

export const getAll = ({ get }) => async () =>
  await catcher(get)('/pokemon?limit=30&offset=0')

export const getOne = ({ get }) => async url =>
  await catcher(get)(url)

import * as c from './ActionTypes'

export const getBurritoSuccess = (burritoList: BurritoObject[]): Action => ({
  type: c.GET_BURRITO_SUCCESS,
  burritoList: burritoList
})

export const getBurritoFailure = (error: string): Action => ({
  type: c.GET_BURRITO_FAILURE,
  error
})

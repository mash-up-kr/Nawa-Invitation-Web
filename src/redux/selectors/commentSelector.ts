/* Internal dependencies */
import { rootState } from 'redux/reducers'

export const getComments = (state: rootState) => state.comment.comments

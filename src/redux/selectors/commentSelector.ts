/* Internal dependencies */
import { RootState } from 'redux/reducers'

export const getComments = (state: RootState) => state.comment.comments

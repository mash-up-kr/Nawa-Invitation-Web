/* Internal dependencies */
import { RootState } from 'modules/reducers'

export const getComments = (state: RootState) => state.comment.comments

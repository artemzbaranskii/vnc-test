import {ActionReducerMap} from '@ngrx/store';

import * as fromConversation from '../conversation/conversation.reducer';

export interface State {
  conversationReducer: fromConversation.ConversationState,
}

export const reducers: ActionReducerMap<State> = {
  conversationReducer: fromConversation.reducer,
};

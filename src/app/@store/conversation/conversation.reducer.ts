import {Action, createReducer, on} from '@ngrx/store';
import {Conversation} from '../../interfaces/conversation.interface';

import * as conversationActions from './conversation.actions';

export interface ConversationState {
  conversation: Conversation;
}

const initialState: ConversationState = {
  conversation: {
    messages: [],
  },
};

const conversationReducer = createReducer(
  initialState,
  on(conversationActions.loadConversationSuccess, (state, { conversation }) => {
    return {
      ...state,
      conversation: { ...conversation },
    };
  })
);

export function reducer(state: ConversationState | undefined, action: Action) {
  return conversationReducer(state, action);
}

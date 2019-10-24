import {CONVERSATION__LOAD, CONVERSATION__LOAD_FAILURE, CONVERSATION__LOAD_SUCCESS,} from './conversation.types';
import {createAction, props} from '@ngrx/store';
import {Conversation} from '../../interfaces/conversation.interface';

export const loadConversationSuccess: any = createAction(
  CONVERSATION__LOAD_SUCCESS,
  props<{ conversation: Conversation }>()
);

export const loadConversationError: any = createAction(
  CONVERSATION__LOAD_FAILURE,
  props()
);

export const loadConversation: any = createAction(
  CONVERSATION__LOAD,
);

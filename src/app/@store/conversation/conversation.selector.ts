import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ConversationState} from './conversation.reducer';

export const conversationFeatureSelector = createFeatureSelector<ConversationState>('conversationReducer');

export const conversationSelector = createSelector(
  conversationFeatureSelector,
  ({ conversation }: ConversationState, props) => conversation
);

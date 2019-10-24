import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {ConversationService} from '../../services/conversation.service';
import {Conversation} from '../../interfaces/conversation.interface';

import * as conversationActions from '../conversation/conversation.actions';

@Injectable()
export class ConversationEffects {

  constructor(
    private actions$: Actions,
    private conversationService: ConversationService,
  ) {}

  loadConversation$: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType(conversationActions.loadConversation),
      switchMap(() => {
        return this.conversationService.getConversation()
          .pipe(
            map((conversation: Conversation) => {
              return conversationActions.loadConversationSuccess({conversation});
            }),
          );
      })
    )
  );
}

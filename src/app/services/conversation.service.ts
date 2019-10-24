import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Conversation} from '../interfaces/conversation.interface';
import {CONVERSATION} from '../constants/conversation';

@Injectable({
  providedIn: 'root',
})
export class ConversationService {

  getConversation(): Observable<Conversation> {
    const conversation = CONVERSATION;

    return of(conversation);
  }
}

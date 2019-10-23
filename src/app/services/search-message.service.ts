import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {MESSAGES} from '../constants/messages';
import {Message} from '../interfaces/message.interface';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SearchMessageService {

  searchMessages(keyword: string): Observable<Message[]> {
    const messages: Message[] = MESSAGES;

    return of(messages).pipe(
      map(res => res.filter((message: Message) => message.text.toLowerCase() === keyword.toLowerCase())),
    );
  }
}

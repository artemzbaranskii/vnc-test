import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {NetworkStatusService} from './services/network-status.service';
import {NumberService} from './services/number.service';
import {SearchMessageService} from './services/search-message.service';
import {Message} from './interfaces/message.interface';
import {map, switchMap} from 'rxjs/operators';
import {Conversation} from './interfaces/conversation.interface';
import {State} from './@store/reducers';
import {conversationSelector} from './@store/conversation/conversation.selector';

import * as conversationActions from './@store/conversation/conversation.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('searchMessages', {static: true}) searchMessages: ElementRef;
  @ViewChild('stylesToggle', {static: true}) stylesToggle: ElementRef;

  isUserLoggedIn$: Observable<boolean>;
  getNumbers$: Observable<number[]>;
  messages$: Observable<Message[]>;
  stylesToggle$: Observable<boolean>;
  conversation$: Observable<Conversation> = this.store$.pipe(select(conversationSelector));

  constructor(
    private readonly networkStatusService: NetworkStatusService,
    private readonly numberService: NumberService,
    private readonly searchMessageService: SearchMessageService,
    private readonly store$: Store<State>,
  ) {
    this.isUserLoggedIn$ = this.networkStatusService.getOnlineStatus();
    this.getNumbers$ = this.numberService.getListNumber();
  }

  ngOnInit(): void {
    this.messages$ = fromEvent(this.searchMessages.nativeElement, 'input').pipe(
      switchMap((event: any) => this.searchMessageService.searchMessages(event.target.value)),
      map(data => data)
    );

    this.stylesToggle$ = fromEvent(this.stylesToggle.nativeElement, 'input').pipe(
      map((event: any) => event.target.checked)
    );

    this.store$.dispatch(conversationActions.loadConversation());
  }
}

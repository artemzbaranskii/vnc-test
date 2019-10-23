import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Observable} from 'rxjs';
import {NetworkStatusService} from './services/network-status.service';
import {NumberService} from './services/number.service';
import {SearchMessageService} from './services/search-message.service';
import {Message} from './interfaces/message.interface';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('searchMessages', {static: true}) searchMessages: ElementRef;

  isUserLoggedIn$: Observable<boolean>;
  getNumbers$: Observable<number[]>;
  messages$: Observable<Message[]>;

  constructor(
    private readonly networkStatusService: NetworkStatusService,
    private readonly numberService: NumberService,
    private readonly searchMessageService: SearchMessageService,
  ) {
    this.isUserLoggedIn$ = this.networkStatusService.getOnlineStatus();
    this.getNumbers$ = this.numberService.getListNumber();
  }

  ngOnInit(): void {
    this.messages$ = fromEvent(this.searchMessages.nativeElement, 'input').pipe(
      switchMap((event: any) => this.searchMessageService.searchMessages(event.target.value)),
      map(data => data)
    );
  }
}

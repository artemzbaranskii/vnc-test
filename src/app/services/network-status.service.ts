import {Injectable} from '@angular/core';
import {fromEvent, merge, Observable, of} from 'rxjs';
import {mapTo} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class NetworkStatusService {

  getOnlineStatus(): Observable<boolean> {
    return merge(
      fromEvent(window, 'offline').pipe(mapTo(false)),
      fromEvent(window, 'online').pipe(mapTo(true)),
      of(navigator.onLine)
    );
  }
}

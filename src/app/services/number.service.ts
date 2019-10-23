import {Injectable} from '@angular/core';
import {interval, Observable, Subject} from 'rxjs';
import {bufferTime, map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class NumberService {
  myNumber$: Subject<number> = new Subject<number>();
  timerChangeNumber$ = interval(500).pipe(
    map(() => this.myNumber$.next(this.getRandomInt()))
  );

  getRandomInt = () => Math.floor(Math.random() * Math.floor(200));

  getListNumber(): Observable<number[]> {
    return this.timerChangeNumber$.pipe(
      switchMap(() => this.getNumber()),
      bufferTime(2000),
      map(list => list)
    );
  }

  getNumber(): Observable<number> {
    return this.myNumber$.asObservable();
  }
}

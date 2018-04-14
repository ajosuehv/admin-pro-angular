import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { filter, map, retry  } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor() {
    this.subscription = this.returnObservable().pipe(
      retry()
      ).subscribe(
        // obsCounter => console.log( 'Number: ', obsCounter ),
        // error => console.log(error),
        // () => console.log('Observer has ended')
      );
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  returnObservable(): Observable<any> {
    return new Observable( observer => {
      let counter = 0;
      let interval = setInterval( () => {
        counter += 1;
        let output = {
          value: counter
        };
        observer.next( output );
        if ( counter === 3 ) {
          clearInterval(interval);
          observer.complete();
        }
        // if ( counter === 2) {
        //   observer.error('Counter is greater than 3');
        // }
      }, 500);
    }).pipe(
      map( (output: any) => output.value )
    ).pipe(
      filter((output, index) => {
          if ( output % 2 === 1 ) {
            return true;
          } else {
            return false;
          }
      })
    );
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {
    this.promiseExample().then(
      message => console.log('Promise Ended with message:', message)
    )
    .catch(
      error => console.error('Promise error', error)
    );

  }

  ngOnInit() {
  }

  promiseExample(): Promise<boolean> {
    return new Promise( ( resolve, reject )  => {
      let counter = 0;
      let interval = setInterval( () => {
        counter += 1;
        console.log( counter );
        if ( counter === 3 ) {
          resolve(true);
          // reject('error message');
          clearInterval(interval);
        }
      }, 1000);
    });
  }

}

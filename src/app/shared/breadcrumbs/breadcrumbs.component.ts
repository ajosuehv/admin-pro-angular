import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  title_label: string = '';

  constructor(private _router: Router, public _title: Title) {
      this.getDataFromURL().subscribe( data => {
         this.title_label = data.title;
         _title.setTitle(this.title_label);
        }
      );
  }

  ngOnInit() {
  }

  getDataFromURL() {
    return this._router.events
    .pipe(
      filter(event =>  event instanceof ActivationEnd)
    )
    .pipe(
      filter((event: ActivationEnd) =>  event.snapshot.firstChild === null)
    )
    .pipe(
      map((event: ActivationEnd) =>  event.snapshot.data)
    );
  }


}

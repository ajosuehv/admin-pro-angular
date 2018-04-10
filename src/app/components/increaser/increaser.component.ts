import { Component, Input, Output, OnInit, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styles: []
})
export class IncreaserComponent implements OnInit {

  @Input() percent: number = 50;
  @Input() legend: string = 'Legend';

  @ViewChild('progressBox') progressBox: ElementRef;

  @Output() changerValue: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onChanges( newValue ) {

    if ( newValue >= 100 ) {
      this.percent = 100;
    } else if ( newValue <= 0 ) {
      this.percent = 0;
    } else {
      this.percent = newValue;
    }

    this.progressBox.nativeElement.value = this.percent;

    this.changerValue.emit(this.percent);
  }

  changeValue(value) {

    this.percent += value;

    if ( this.percent > 100) {
        this.percent = 100;
        return;
    }
    if ( this.percent < 0 ) {
      this.percent = 0;
      return;
    }
    this.changerValue.emit(this.percent);
  }

}

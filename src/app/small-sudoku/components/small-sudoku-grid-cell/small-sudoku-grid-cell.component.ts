import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-small-sudoku-grid-cell',
  templateUrl: './small-sudoku-grid-cell.component.html',
  styleUrls: ['./small-sudoku-grid-cell.component.scss'],
})
export class SmallSudokuGridCellComponent implements OnInit, OnDestroy, OnChanges {
  /**
   * members
   */
  @Input() row: number;
  @Input() col: number;
  @Input() val: number;

  @Output() valChanged: EventEmitter<number> = new EventEmitter<number>();

  /**
   * use a form control for the input
   */
  public control: FormControl;
  private controlSubscription$: Subscription;

  /**
   * wait time before trigger the event
   */
  private debounce: number = 1000;

  /**
   * constructor
   */
  constructor() {}

  /**
   * on changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'val': {
            // since the value is changed by the parent
            // set the formControl to proper value
            // and inform not to emit a new event
            //console.log('changed ' + changes[propName].currentValue);
            if (this.control) {
              this.control.setValue(changes[propName].currentValue, { emitEvent: false });
            }
          }
        }
      }
    }
  }

  /**
   * ng on init
   */
  ngOnInit(): void {
    // create the form control
    this.control = new FormControl(this.val);

    // subscribe to it
    this.controlSubscription$ = this.control.valueChanges
      .pipe(debounceTime(this.debounce), distinctUntilChanged())
      .subscribe((newVal) => {
        //console.log('subscription ' + newVal);
        this.valChanged.emit(newVal);
        // simulate a disable enable to remove focus
        this.control.disable();
        this.control.enable();
      });
  }

  /**
   * on destroy
   */
  ngOnDestroy(): void {
    // unsubscribe
    if (this.controlSubscription$ != null) {
      this.controlSubscription$.unsubscribe();
      this.controlSubscription$ = null;
    }
  }
}

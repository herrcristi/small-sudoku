import { Component, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { GridCell } from '../../grid-cell';

@Component({
  selector: 'app-small-sudoku-grid-cell',
  templateUrl: './small-sudoku-grid-cell.component.html',
  styleUrls: ['./small-sudoku-grid-cell.component.scss'],
})
export class SmallSudokuGridCellComponent implements OnInit, OnDestroy, OnChanges {
  /**
   * members
   */
  @Input() cell: GridCell;

  @Output() cellChanged: EventEmitter<GridCell> = new EventEmitter<GridCell>();

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
          case 'cell': {
            // since the value is changed by the parent
            // set the formControl to proper value
            // and inform not to emit a new event
            console.log('changed ' + JSON.stringify(changes[propName].currentValue));
            if (this.control) {
              const newCellVal = (changes[propName].currentValue as GridCell).val;
              this.control.setValue(newCellVal, { emitEvent: false });
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
    this.control = new FormControl(this.cell.val);

    // subscribe to it
    this.controlSubscription$ = this.control.valueChanges
      .pipe(debounceTime(this.debounce), distinctUntilChanged())
      .subscribe((newVal) => {
        console.log('input changed value ' + newVal);

        // trigger the change event
        this.onValChanged(+newVal);

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

  /**
   * on value changed
   */
  onValChanged(newVal: number): void {
    // check if is a good number
    newVal = isNaN(newVal) ? null : newVal;

    // trigger the change event
    const newCell: GridCell = new GridCell(this.cell.row, this.cell.col, newVal);
    this.cellChanged.emit(newCell);
  }
}

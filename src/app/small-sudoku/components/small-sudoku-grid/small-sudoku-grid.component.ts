import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GridCell } from '../../grid-cell';

/**
 * Small Sudoku Grid
 */
@Component({
  selector: 'app-small-sudoku-grid',
  templateUrl: './small-sudoku-grid.component.html',
  styleUrls: ['./small-sudoku-grid.component.scss'],
})
export class SmallSudokuGridComponent implements OnInit {
  /**
   * members
   */
  @Input() sudoku: Array<Array<GridCell>>;
  @Output() cellChanged: EventEmitter<GridCell> = new EventEmitter<GridCell>();

  /**
   * constructor
   */
  constructor() {}

  /**
   * ng on init
   */
  ngOnInit(): void {}

  /**
   * on new cell value
   */
  onNewVal(newVal: GridCell): void {
    this.cellChanged.emit(newVal);
  }
}

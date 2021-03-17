import { Component, OnInit } from '@angular/core';
import { GridCell } from '../../grid-cell';

/**
 * Main Small Sudoku component
 */
@Component({
  selector: 'app-small-sudoku',
  templateUrl: './small-sudoku.component.html',
  styleUrls: ['./small-sudoku.component.scss'],
})
export class SmallSudokuComponent implements OnInit {
  /**
   * members
   */
  public level: number = 3; // the sudoku grid level
  sudoku: Array<Array<GridCell>>;

  /**
   * constructor
   */
  constructor() {
    // create an array of array
    this.sudoku = [...new Array<Array<GridCell[]>>(this.level * this.level)].map((_, row) => {
      return [...new Array<GridCell[]>(this.level * this.level)].map((_, col) => {
        return new GridCell(row, col, null);
      });
    });
  }

  /**
   * ng on init
   */
  ngOnInit(): void {}

  /**
   * on new
   */
  onNew(val: number = null): void {
    // create an array of array
    this.sudoku.forEach((line, row) => {
      line.forEach((cell, col) => {
        this.sudoku[row][col] = new GridCell(row, col, val);
      });
    });
  }

  /**
   * on load
   */
  onLoad(): void {
    // TODO
  }

  /**
   * on save
   */
  onSave(): void {
    // TODO
  }

  /**
   * on undo
   */
  onUndo(): void {
    // TODO;
  }

  /**
   * on new cell value
   */
  onNewVal(newVal: GridCell): void {
    this.sudoku[newVal.row][newVal.col] = newVal;
    //console.log('received newVal ' + JSON.stringify(newVal));
  }
}

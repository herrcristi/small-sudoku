import { Component, OnInit } from '@angular/core';
import { GridCell } from '../../grid-cell';

/**
 * Main Small Sudoku component
 */
@Component({
  selector: 'app-small-sudoku-main',
  templateUrl: './small-sudoku-main.component.html',
  styleUrls: ['./small-sudoku-main.component.scss'],
})
export class SmallSudokuMainComponent implements OnInit {
  /**
   * members
   */
  public level: number = 3; // the sudoku grid level
  sudoku: Array<Array<GridCell>>;

  /**
   * undo sequence
   */
  undoSequence: Array<GridCell>;

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

    // create undo sequence
    this.undoSequence = [...new Array<GridCell>(0)];
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

    // reset the undo sequence too
    this.undoSequence = [...new Array<GridCell>(0)];
  }

  /**
   * on load
   */
  onLoad(): void {
    // TODO
    this.undoSequence = [...new Array<GridCell>(0)];
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
    if (this.undoSequence.length > 0) {
      const lastUndoCell = this.undoSequence[this.undoSequence.length - 1];
      this.sudoku[lastUndoCell.row][lastUndoCell.col] = new GridCell(lastUndoCell.row, lastUndoCell.col, null);

      this.undoSequence.pop();
    }
  }

  /**
   * on new cell value
   */
  onNewVal(newVal: GridCell): void {
    if (newVal) {
      // set the cell
      this.sudoku[newVal.row][newVal.col] = newVal;

      // if valid add to undo seq
      if (newVal.val) {
        this.undoSequence.push(new GridCell(newVal.row, newVal.col, newVal.val));
      }
      //console.log('received newVal ' + JSON.stringify(newVal));
    }
  }
}
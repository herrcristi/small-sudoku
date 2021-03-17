import { Component, Input, OnInit } from '@angular/core';

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
  @Input() sudoku: number;

  public gridLevel: number = 3; // the sudoku grid level
  public rows: number;
  public cols: number;

  /**
   * constructor
   */
  constructor() {}

  /**
   * ng on init
   */
  ngOnInit(): void {
    const levels = this.gridLevel * this.gridLevel;
    this.rows = levels;
    this.cols = levels;
  }

  /**
   * on new cell value
   */
  onNewVal(newVal): void {
    console.log('received newVal ' + newVal);
  }
}

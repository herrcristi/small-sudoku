import { Component, OnInit } from '@angular/core';

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
  sudoku: number = 0; // TODO make it a proper struct

  /**
   * constructor
   */
  constructor() {}

  /**
   * ng on init
   */
  ngOnInit(): void {}

  /**
   * on new
   */
  onNew(): void {
    this.sudoku = 1;
  }

  /**
   * on load
   */
  onLoad(): void {
    this.sudoku = 2;
  }

  /**
   * on save
   */
  onSave(): void {
    this.sudoku = 3;
  }

  /**
   * on undo
   */
  onUndo(): void {
    this.sudoku = 0;
  }
}

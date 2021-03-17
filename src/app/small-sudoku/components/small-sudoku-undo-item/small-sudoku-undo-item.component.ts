import { Component, Input, OnInit } from '@angular/core';
import { GridCell } from '../../grid-cell';

/**
 * Small Sudoku Undo Item component
 */
@Component({
  selector: 'app-small-sudoku-undo-item',
  templateUrl: './small-sudoku-undo-item.component.html',
  styleUrls: ['./small-sudoku-undo-item.component.scss'],
})
export class SmallSudokuUndoItemComponent implements OnInit {
  /**
   * members
   */
  @Input() level: number;
  @Input() item: GridCell;

  /**
   * constructor
   */
  constructor() {}

  /**
   * ng on init
   */
  ngOnInit() {}
}

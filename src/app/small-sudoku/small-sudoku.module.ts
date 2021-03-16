import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * import components
 */
import { SmallSudokuComponent } from './components/small-sudoku/small-sudoku.component';
import { SmallSudokuGridComponent } from './components/small-sudoku-grid/small-sudoku-grid.component';
import { SmallSudokuGridCellComponent } from './components/small-sudoku-grid-cell/small-sudoku-grid-cell.component';


/**
 * Small Sudoku Module
 * 
 * which contains all the components to help solve a sudoku
 * including the service to help with the remaining options
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SmallSudokuComponent,
    SmallSudokuGridComponent,
    SmallSudokuGridCellComponent
  ],
  exports:[
    SmallSudokuComponent
  ]
})
export class SmallSudokuModule { }

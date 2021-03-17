import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    // imports
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    // declarations
    SmallSudokuComponent,
    SmallSudokuGridComponent,
    SmallSudokuGridCellComponent,
  ],
  exports: [
    // exports
    SmallSudokuComponent,
  ],
})
export class SmallSudokuModule {}

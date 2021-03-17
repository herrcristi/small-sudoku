import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * import components
 */
import { SmallSudokuMainComponent } from './components/small-sudoku-main/small-sudoku-main.component';
import { SmallSudokuGridComponent } from './components/small-sudoku-grid/small-sudoku-grid.component';
import { SmallSudokuGridCellComponent } from './components/small-sudoku-grid-cell/small-sudoku-grid-cell.component';
import { SmallSudokuUndoItemComponent } from './components/small-sudoku-undo-item/small-sudoku-undo-item.component';

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
    SmallSudokuMainComponent,
    SmallSudokuGridComponent,
    SmallSudokuGridCellComponent,
    SmallSudokuUndoItemComponent,
  ],
  exports: [
    // exports
    SmallSudokuMainComponent,
  ],
})
export class SmallSudokuModule {}

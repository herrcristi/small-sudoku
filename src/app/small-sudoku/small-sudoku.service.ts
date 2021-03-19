import { Injectable } from '@angular/core';
import { GridCell } from './grid-cell';

/**
 * Small Sudoku Helper service
 */
@Injectable()
export class SmallSudokuService {
  /**
   * constructor
   */
  constructor() {}

  /**
   * validate cell
   */
  getValidatedCell(sudoku: Array<Array<GridCell>>, cell: GridCell): GridCell {
    // check if is a good number in proper range
    const newVal = isNaN(cell.val) || cell.val <= 0 || cell.val > sudoku.length ? null : cell.val;
    // create new cell
    let newCell = new GridCell(cell.row, cell.col, newVal);
    newCell.setPossibilities(sudoku[cell.row][cell.col].possibilities);
    newCell.setIsValidIfValIsInCurrentPossibilities();

    return newCell;
  }

  /**
   * update sudoku cell possibilities
   */
  updatePossibilities(sudoku: Array<Array<GridCell>>): void {
    sudoku.forEach((line, row) => {
      line.forEach((cell, col) => {
        // compute new possibilities only if not valid
        if (sudoku[row][col].isValid) {
          sudoku[row][col].setPossibilities(null);
        } else {
          // first add all
          let possibilities = [...new Array<number[]>(sudoku.length)].map((_, i) => {
            return i + 1;
          });

          // remove from same row
          this.removeOptionFromSameRow(sudoku, possibilities, row, col);

          // remove from same col
          this.removeOptionFromSameCol(sudoku, possibilities, row, col);

          // remove from same grid
          this.removeOptionFromSameGrid(sudoku, possibilities, row, col);

          // check if possibilities have changed
          sudoku[row][col] = new GridCell(row, col, cell.val);
          sudoku[row][col].setIsValid(false);
          sudoku[row][col].setPossibilities(possibilities);
        }
      });
    });
  }

  /**
   * utility functions
   */
  getAllPossibilities(lineLength: number): Array<Array<number[]>> {
    let allPossibilities: Array<Array<number[]>>;
    return allPossibilities;
  }

  /**
   * remove from same row
   */
  private removeOptionFromSameRow(
    sudoku: Array<Array<GridCell>>,
    possibilities: Array<number>,
    row: number,
    col: number
  ): void {
    for (let c = 0; c < sudoku.length; ++c) {
      // row
      if (sudoku[row][c].isValid && c != col) {
        const index: number = possibilities.indexOf(sudoku[row][c].val);
        if (index !== -1) {
          possibilities.splice(index, 1);
        }
      }
    }
  }

  /**
   * remove from same col
   */
  private removeOptionFromSameCol(
    sudoku: Array<Array<GridCell>>,
    possibilities: Array<number>,
    row: number,
    col: number
  ): void {
    for (let r = 0; r < sudoku.length; ++r) {
      // column
      if (sudoku[r][col].isValid && r != row) {
        const index: number = possibilities.indexOf(sudoku[r][col].val);
        if (index !== -1) {
          possibilities.splice(index, 1);
        }
      }
    }
  }

  /**
   * remove from same square
   */
  private removeOptionFromSameGrid(
    sudoku: Array<Array<GridCell>>,
    possibilities: Array<number>,
    row: number,
    col: number
  ): void {
    let level = Math.round(Math.sqrt(sudoku.length));
    let rmax = Math.floor((row + level) / level) * level;
    let cmax = Math.floor((col + level) / level) * level;

    for (let r = rmax - level; r < rmax; ++r) {
      for (let c = cmax - level; c < cmax; ++c) {
        // cell
        if (sudoku[r][c].isValid && (r != row || c != col)) {
          const index: number = possibilities.indexOf(sudoku[r][c].val);
          if (index !== -1) {
            possibilities.splice(index, 1);
          }
        }
      }
    }
  }
}

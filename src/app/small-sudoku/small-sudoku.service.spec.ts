/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SmallSudokuService } from './small-sudoku.service';

describe('Service: SmallSudoku', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmallSudokuService],
    });
  });

  it('should ...', inject([SmallSudokuService], (service: SmallSudokuService) => {
    expect(service).toBeTruthy();
  }));
});

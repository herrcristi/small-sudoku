/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmallSudokuUndoItemComponent } from './small-sudoku-undo-item.component';

describe('SmallSudokuUndoItemComponent', () => {
  let component: SmallSudokuUndoItemComponent;
  let fixture: ComponentFixture<SmallSudokuUndoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SmallSudokuUndoItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallSudokuUndoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

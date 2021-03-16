import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SmallSudokuModule } from './small-sudoku/small-sudoku.module';

@NgModule({
  declarations: [
    // declarations
    AppComponent,
  ],
  imports: [
    // imports
    BrowserModule,
    BrowserAnimationsModule,
    SmallSudokuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

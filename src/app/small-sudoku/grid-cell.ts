/**
 * class for a grid cell
 */
export class GridCell {
  /**
   * members
   */
  public row: number; //        row
  public col: number; //        col
  public val: number; //        the value of cell

  public isSet: boolean; //     if value is proper set
  public isValid: boolean; //   if the value is valid (even if it is set)

  public possibilities: number[]; //  the restricted possibilities from where to choose from (computed in the service)

  /**
   * constructor
   */
  constructor(row: number, col: number, val: number) {
    this.row = row;
    this.col = col;
    this.val = val;

    this.isSet = val != null;
    // isValid is computed in sudoku server
    this.isValid = false;
  }

  /**
   * set possibilities
   */
  setPossibilities(possibilities: number[]): void {
    //this.possibilities = [...possibilities];
    this.possibilities = possibilities;
  }

  /**
   * set is valid flag
   */
  setIsValid(isValid: boolean): void {
    this.isValid = isValid;
  }

  /**
   * set is valid only if current val is among the current possibilities
   */
  setIsValidIfValIsInCurrentPossibilities(): void {
    this.setIsValid(this.possibilities && this.possibilities.indexOf(this.val) !== -1 ? true : false);
  }
}

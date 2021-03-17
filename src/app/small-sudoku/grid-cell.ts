/**
 * class for a grid cell
 */
export class GridCell {
  /**
   * members
   */
  public row: number;
  public col: number;
  public val: number;

  /**
   * constructor
   */
  constructor(row: number, col: number, val: number) {
    this.row = row;
    this.col = col;
    this.val = val;
  }
}

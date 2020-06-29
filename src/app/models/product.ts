export interface Values{
  type: string;
  value: number;
}
export class Product {
  public id: number;
  public name: string;
  public description: string;
  public image: string;
  public values: Values;
  public sec_to_be_ready: number;
}

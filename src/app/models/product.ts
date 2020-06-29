export class Product {
  public id: number;
  public name: string;
  public description: string;
  public image: string;
  public value: {USD: number, EUR: number};
  public sec_to_be_ready: number;
}

import {Product} from "./product";

export class Order {

  public id: number;
  public product: Product;
    constructor(public productId: number = 0, public quantity: number = 0){

    }
}

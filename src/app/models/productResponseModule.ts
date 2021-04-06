import { ResponseModule } from './responseModule';
import { Product } from "./product";

export interface ProductResponseModule extends ResponseModule{
  data:Product[],


}

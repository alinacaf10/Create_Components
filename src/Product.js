import React,{Component} from "react";
import Price from "./Price";
import ProductName from "./ProductName";

class Product extends Component{
  render(){
    return(
      <>
      <ProductName/>
      <Price/>
      </>
    )
  }
}
export default Product
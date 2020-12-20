import React, {Component} from 'react';
import './App.css';
//import {Button} from './Components/Button';
import { connect } from 'react-redux';
import {Products} from "./Components/Products";
import Cart from "./Components/Cart"
import Filter from './Components/Filter';
import { productActions } from './action/productActions';

class App extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     products: data.items,
  //     onlyPastry : false,
  //     sort: ""
  //   } 
  //   console.log(this.state);
  // }
  render() {
      return (
        <div className='grid-container'>
        <header>
          <a href="/">Cake Shop</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter itmCount={this.props.item.length}
              size={this.props.size}
              sort={this.props.sort}  
              filterProducts={this.props.filterProducts}
              sortProducts={this.props.sortProducts}>   
              </Filter>
              <Products products={this.props.item} addToCartProp={this.props.updateCart}></Products>
            </div>
            <div className="sidebar">
              <Cart order={this.props.order} 
              createOrder={this.props.createOrder}
              removeFromCart={this.props.updateCart}
              checkout={this.props.checkout}>
              </Cart></div>
          </div>
        <div className="App">
          <div>
          Current count: <span>{this.props.count}</span>
          </div>  
        <hr />
        </div>
        </main>
        <footer>
          Enjoy
        </footer>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    order : state.order,
    item: state.item
  }
}

export default connect (mapStateToProps, productActions)(App) ;

import React, {Component} from 'react';
import './App.css';
//import {Button} from './Components/Button';
import { connect } from 'react-redux';
import {Products} from "./Components/Products";
import Cart from "./Components/Cart"
import Filter from './Components/Filter';

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
              <div className="main"><Products products={this.props.item} updateCount={this.props.changeCount}></Products></div>
            </div>
            <div className="sidebar"><Cart order={this.props.order}></Cart></div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    changeCount : (val) => dispatch({type:"UPDATE", value: val}),
    sortProducts: (event) => dispatch({type:"SORT", value:event}),
    filterProducts: (event) => dispatch({type:"FILTER", value:event})
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    order : state.order,
    item: state.item
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(App) ;

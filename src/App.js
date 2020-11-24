import React, {Component} from 'react';
import './App.css';
import {Button} from './Components/Button';
import { connect } from 'react-redux';

class App extends Component {
  render() {
      return (
        <div className='grid-container'>
        <header>
          <a href="/">Cake Shop</a>
        </header>
        <main>
        <div className="App">
          <div>
          Current count: <span>{this.props.count}</span>
          </div>  
        <hr />
          <div>
            <ul>
              <div className="col">
                <div><b>Items: </b></div>
                {this.props.item.map(it => (
                  <li className="listBtnClass" key={it.id} >
                    <div></div><Button sign= "+" identifier={this.props.item[it.id].id} updateCount={this.props.changeCount} />
                    <Button sign= "-" identifier={this.props.item[it.id].id} updateCount={this.props.changeCount} />
                  </li>
                ))}
              </div>
              <div className="col">
                <div><b>Order: </b></div>
                {this.props.order.map(it => 
                  <li className="listBtnClass" key={it.oid}>
                    {it.cartQuant} {it.itmName}
                  </li>
                )}
              </div>
            </ul>
          </div>
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
    changeCount : (val) => dispatch({type:"UPDATE", value: val})
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

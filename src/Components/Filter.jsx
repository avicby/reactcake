import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
        <div className="filter">    
            <div className="filter-result">{this.props.itmCount} products</div>
            <div className="filter-sort">
                Order {" "}
                <select value={this.props.sort} onChange={this.props.sortProducts}>
                    <option value="latest">Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
            <div className="filter-size">
                Filter
                <select value={this.props.size} onChange={this.props.filterProducts}>
                    <option value="">All</option>
                    <option value="pastry">pastry</option>
                    <option value="250gms">250gms</option>
                    <option value="750gms">750gms</option>
                </select>
            </div>
        </div>
        )
    }
}

import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  getStocks = () => {
    let stocks = this.props.stocks
    if (this.props.filter === "Tech") {
      stocks = stocks.filter(s => s.type === "Tech")
    } else if (this.props.filter === "Finance") {
      stocks = stocks.filter(s => s.type === "Finance")
    } else if (this.props.filter === "Sportswear") {
      stocks = stocks.filter(s => s.type === "Sportswear")
    }
    return stocks
  }

  getPortfolio = () => {
    let stocks = this.props.portfolio
    if (this.props.filter === "Tech") {
      stocks = stocks.filter(s => s.type === "Tech")
    } else if (this.props.filter === "Finance") {
      stocks = stocks.filter(s => s.type === "Finance")
    } else if (this.props.filter === "Sportswear") {
      stocks = stocks.filter(s => s.type === "Sportswear")
    }
    return stocks
  }

  render() {
    return (
      <div>
        <SearchBar handleSearch={this.props.handleSearch} handleSort={this.props.handleSort} checked={this.props.checked}
          handleFilter={this.props.handleFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.getStocks()} onClick={this.props.onClick}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.getPortfolio()} onClick={this.props.onClick}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

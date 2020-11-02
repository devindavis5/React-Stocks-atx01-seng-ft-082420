import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    const stocks = this.props.stocks.filter(s => s.type.includes(this.props.filter))
    const portfolio = this.props.portfolio.filter(s => s.type.includes(this.props.filter))
    return (
      <div>
        <SearchBar handleSearch={this.props.handleSearch} handleSort={this.props.handleSort} checked={this.props.checked}
          handleFilter={this.props.handleFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={stocks} onClick={this.props.onClick}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={portfolio} onClick={this.props.onClick}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

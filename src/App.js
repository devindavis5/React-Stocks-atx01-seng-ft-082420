import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'
const URL = 'http://localhost:3000/stocks'

class App extends Component {
  constructor() {
    super()

    this.state = {
      stocks: [],
      portfolio: [],
      search: '',
      sort: '',
      filter: ''
    }
  }

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(stocks => this.setState({stocks}))
  }

  onClick = (stock) => {
    if (this.state.stocks.includes(stock)) {
      this.state.portfolio.push(stock)
      this.setState({stocks: this.state.stocks.filter(s => s.id !== stock.id)})
    } else {
      this.state.stocks.push(stock)
      this.setState({portfolio: this.state.portfolio.filter(s => s.id !== stock.id)})
    }
  }

  handleSearch = (search) => {
    this.setState({search: search.toLowerCase()})
  }

  handleSort = (sort) => {
    this.setState({sort})
  }

  handleFilter = (filter) => {
    this.setState({filter})
  }

  getStocks = () => {
    let stocks = this.state.stocks
    if (this.state.sort === "Alphabetically") {
      stocks = this.state.stocks.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    } else if (this.state.sort === "Price") {
      stocks = this.state.stocks.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
    }
    return stocks
  }

  getPortfolio = () => {
    let stocks = this.state.portfolio
    if (this.state.sort === "Alphabetically") {
      stocks = this.state.portfolio.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    } else if (this.state.sort === "Price") {
      stocks = this.state.portfolio.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
    }
    return stocks
  }

  render() {
    const stocks = this.getStocks().filter(s => s.name.toLowerCase().includes(this.state.search))
    const portfolio = this.getPortfolio().filter(s => s.name.toLowerCase().includes(this.state.search))
    return (
      <div>
        <Header/>
        <MainContainer stocks={stocks} portfolio={portfolio} onClick={this.onClick} handleSearch={this.handleSearch}
        handleSort={this.handleSort} checked={this.state.sort} handleFilter={this.handleFilter} filter={this.state.filter}/>
      </div>
    );
  }
}

export default App;

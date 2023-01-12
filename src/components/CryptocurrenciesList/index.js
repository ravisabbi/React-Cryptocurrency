// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptoCurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CrypotocurrenciesList extends Component {
  state = {isLoading: true, coinsList: []}

  componentDidMount() {
    this.getCurrencyList()
  }

  getCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const UpdatedCoinsList = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({isLoading: false, coinsList: UpdatedCoinsList})
  }

  renderCurrencyList = () => {
    const {isLoading, coinsList} = this.state
    console.log(isLoading)
    return (
      <>
        <h1 className="main-heading">CryptoCurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image"
        />
        <ul className="currency-table">
          <div className="table-header">
            <p className="header">Coin Type</p>
            <div className="usd-euro-container">
              <p className="header usd">USD</p>
              <p className="header">EURO</p>
            </div>
          </div>
          {coinsList.map(eachItem => (
            <CryptoCurrencyItem itemData={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="cryptoCurrency-list">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCurrencyList()
        )}
      </div>
    )
  }
}

export default CrypotocurrenciesList

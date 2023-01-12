// Write your JS code here
import './index.css'

const CryptoCurrrencyItem = props => {
  const {itemData} = props
  const {currencyName, currencyLogo, usdValue, euroValue} = itemData
  return (
    <li className="currency-item">
      <div className="logo-name-container">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-euro-values-container">
        <p className=" currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptoCurrrencyItem

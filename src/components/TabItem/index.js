// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, clickTabItem} = props
  const {tabId, displayText} = tabDetails

  const activeButtonClass = isActive ? 'active-btn' : ''

  const buttonFunction = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-button ${activeButtonClass}`}
        onClick={buttonFunction}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

import './index.css'

const FaqItem = props => {
  const {faqItem, onClickFaqItem, activeId} = props
  const {id, answerText, questionText} = faqItem

  const buttonClicked = () => {
    onClickFaqItem(id)
  }

  const status = activeId.includes(id)

  const imageUrl = status
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const altName = status ? 'minus' : 'plus'

  return (
    <li className="faq-item-container ">
      <div className="small-container">
        <h1 className="question">{questionText}</h1>
        <button type="button" onClick={buttonClicked}>
          <img src={imageUrl} alt={altName} />
        </button>
      </div>
      {status && <p className="answer">{answerText}</p>}
    </li>
  )
}

export default FaqItem

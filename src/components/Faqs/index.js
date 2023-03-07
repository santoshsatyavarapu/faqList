// Write your code here.
import {Component} from 'react'

import './index.css'

import FaqItem from '../FaqItem/index'

const faqsList = [
  {
    id: 0,
    questionText: 'What is IRC?',
    answerText:
      'IRC is an Industry Ready Certification that represents your readiness for a job with the necessary skills.',
  },
  {
    id: 1,
    questionText: 'What is the medium of instruction?',
    answerText:
      'The courses would be delivered in English and Telugu. The program will be available in more vernacular languages soon.',
  },
  {
    id: 2,
    questionText:
      'Is there an EMI option to pay the fee for CCBP Tech 4.0 Intensive?',
    answerText:
      'Yes, EMI support is available for credit cards. Please select EMI option while making payment for more information.',
  },
  {
    id: 3,
    questionText: 'How will my doubts be cleared? What is the mechanism?',
    answerText:
      'You can ask your doubts in the discussions section and course mentor will answer them. You can also see the doubts asked by other students.',
  },
]

class Faqs extends Component {
  state = {activeId: []}

  onClickFaqItem = id => {
    const {activeId} = this.state
    const result = activeId.includes(id)
    if (result) {
      const arrayItems = activeId.filter(eachItem => eachItem !== id)
      this.setState({activeId: [...arrayItems]})
    } else {
      this.setState({activeId: [...activeId, id]})
    }
  }

  render() {
    const {activeId} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">FAQs</h1>
          <ul>
            {faqsList.map(eachItem => (
              <FaqItem
                key={eachItem.id}
                faqItem={eachItem}
                onClickFaqItem={this.onClickFaqItem}
                activeId={activeId}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs

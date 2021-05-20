// Write your code here.
import {Component} from 'react'

import CoffeePlannerQuestion from '../CoffeePlannerQuestion'

import './index.css'

class CoffeePlanner extends Component {
  state = {
    selectedCoffeePlan: ['', '', '', '', ''],
    showSummary: false,
  }

  setShowSummary = value => {
    console.log('10')
    this.setState({showSummary: value})
  }

  isAllOptionsSelected = () => {
    const {selectedCoffeePlan} = this.state
    console.log('9')
    console.log(selectedCoffeePlan.filter(plan => plan === '').length === 0)
    return selectedCoffeePlan.filter(plan => plan === '').length === 0
  }

  renderSummarySection = () => {
    console.log('check')
    const {selectedCoffeePlan, showSummary} = this.state
    console.log('8')
    if (showSummary) {
      return (
        <div className="summary-container">
          {this.isAllOptionsSelected() ? (
            <p className="summary">
              I Drink my coffee as
              <span className="selected-value"> {selectedCoffeePlan[0]}</span>,
              with a
              <span className="selected-value"> {selectedCoffeePlan[1]} </span>
              type of bean.
              <span className="selected-value"> {selectedCoffeePlan[2]} </span>
              ground ala
              <span className="selected-value"> {selectedCoffeePlan[3]}</span>,
              sent to me
              <span className="selected-value"> {selectedCoffeePlan[4]}</span>.
            </p>
          ) : (
            <p className="summary">
              Kindly select options for all the questions.
            </p>
          )}
        </div>
      )
    }
    console.log('null')
    return null
  }

  updateSelectedCoffeePlan = (questionType, selectedOption) => {
    console.log('7')
    console.log(selectedOption)
    const {coffeePlannerData} = this.props
    const {selectedCoffeePlan} = this.state
    console.log(selectedCoffeePlan)
    const questionIndex = coffeePlannerData.findIndex(
      coffeePlan => questionType === coffeePlan.questionType,
    )
    console.log(selectedCoffeePlan)
    const newSelectedCoffeePlan = [...selectedCoffeePlan]
    console.log(newSelectedCoffeePlan)
    newSelectedCoffeePlan[questionIndex] = selectedOption
    console.log(newSelectedCoffeePlan)
    this.setState({selectedCoffeePlan: [...newSelectedCoffeePlan]})
    this.setShowSummary(false)
  }

  getSelectedOption = questionType => {
    console.log('6')
    const {coffeePlannerData} = this.props
    const {selectedCoffeePlan} = this.state
    const questionIndex = coffeePlannerData.findIndex(
      coffeeQuestion => questionType === coffeeQuestion.questionType,
    )

    return selectedCoffeePlan[questionIndex]
  }

  renderCoffeePlannerQuestions = () => {
    const {coffeePlannerData} = this.props
    console.log('5')
    return (
      <ul className="coffee-planner-questions-list">
        {coffeePlannerData.map(coffeeQuestion => (
          <CoffeePlannerQuestion
            getSelectedOption={this.getSelectedOption}
            key={coffeeQuestion.id}
            questionData={coffeeQuestion}
            updateSelectedCoffeePlan={this.updateSelectedCoffeePlan}
          />
        ))}
      </ul>
    )
  }

  onClickCreateMyPlan = () => {
    console.log('4')
    this.setShowSummary(true)
  }

  renderBodySection = () => (
    <div className="coffee-planner-body">
      {console.log('3')}
      {this.renderCoffeePlannerQuestions()}
      <div className="button-container">
        <button
          type="button"
          className="create-my-plan-button"
          onClick={this.onClickCreateMyPlan}
        >
          Create my plan!
        </button>
      </div>
      {this.renderSummarySection()}
    </div>
  )

  renderHeaderSection = () => (
    <div className="header-section">
      {console.log('2')}
      <div className="coffee-planner-details-container">
        <h1 className="heading">Create a Plan</h1>
        <p className="description">
          We offer an assortment of the best artesian coffees from the globe
          delivered fresh to the door create your plan with this
        </p>
      </div>
    </div>
  )

  render() {
    console.log('1')
    return (
      <div className="app-container">
        {this.renderHeaderSection()}
        {this.renderBodySection()}
      </div>
    )
  }
}

export default CoffeePlanner

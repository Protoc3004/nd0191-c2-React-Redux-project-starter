import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Question extends Component {
	
	toQuestion = (e, id) => {
		e.preventDefault()
		this.props.history.push(`/questions/${id}`)
	}

	render() {
		const { question, users } = this.props
		const user = users[question.author];
		
		return (
			<div className="card mb-4">
				<div className="card-header bg-dark text-white">
					<img className="card-header-avt mr-2" src={ user.avatarURL } alt={`${user.name} avatar`} />
					<span>{ user.name }</span> created poll about
				</div>	
				<div className="card-body bg-light">
					<p>Would you rather { question.optionOne.text } or { question.optionTwo.text }?</p>
					<button onClick={(e) => this.toQuestion(e, question.id)} className="btn btn-dark btn-block">View Poll</button>
				</div>	
			</div>	
		)
	}
}
	
function mapStateToProps ({authedUser, users, questions}, { id }) {
	const question = questions[id]
	
	return {
		authedUser,
		question,
		users,
	}
}

export default withRouter(connect(mapStateToProps)(Question))
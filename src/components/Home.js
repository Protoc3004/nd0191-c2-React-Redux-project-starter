import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import Login from './Login'

class Home extends Component {
	constructor() {
		super();
		this.state = {
			filter: 'Unvoted',
		}
	}

	applyFilter = (label) => {
		this.setState({
			filter: label,
		})
	}

	render() {
		const { questions, authedUser } = this.props;
		const { filter } = this.state;

		if (!authedUser) {
			return <Login />
		}

		return (
			<div className="container">
				<div className="row">
					<div className="col-12 my-4">
						<div className="btn-group" role="group" aria-label="Select Question Type">
							{Object.keys(questions).map((label, index) => (
								<button type="button" onClick={(e) => this.applyFilter(label)} className={"btn btn-dark" + (filter === label ? ' active' : '')} key={index}>{label}</button>
							))}
						</div>
					</div>

					<div className="col-12 mb-4">
						<h3 className='text-white'><strong>{filter}</strong></h3>
					</div>
					{questions[filter].length == 0 ? <h4 className='text-white text-center'><strong>There are no more items</strong></h4>
						: questions[filter].map(id => (
							<div className="col-12 col-md-4 col-lg-3" key={id}>
								<Question id={id} />
							</div>
						))}
				</div>
			</div>
		)
	}
}

function mapStateToProps({ questions, authedUser, users }) {

	const voted = users?.[authedUser]?.answers
		? Object.keys(users[authedUser].answers).sort((a, b) => questions[b].timestamp - questions[a].timestamp)
		: [];
	const unvoted = authedUser && questions
		? Object.keys(questions)
			.filter((question) => !voted.includes(question))
			.sort((a, b) => questions[b].timestamp - questions[a].timestamp)
		: [];

	const myVotes =
		authedUser && questions
			? Object.keys(questions)
				.filter((question) => questions[question].author === authedUser)
				.sort((a, b) => questions[b].timestamp - questions[a].timestamp)
			: [];



	return {
		authedUser,
		questions: {
			'Unvoted': unvoted,
			'Voted': voted,
			'My Votes': myVotes,
		},
	};
}


export default connect(mapStateToProps)(Home)

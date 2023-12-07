import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {
	render() {
		const { leaderboard } = this.props;

		return (
			<div className="container">
				<h3 className="mb-4 text-white"><strong>Leader Board</strong></h3>
				<div className="row gy-2">
					{leaderboard.map(user => (
						<div className="col-12 col-md-6 col-lg-4 my-3" key={user.id}>
							<div className="card-header bg-dark rounded-top p-2">
								<img className="card-header-avt mx-3" src={user.avatarURL} alt={`${user.name} avatar`} />
								<span className='text-white'>{user.name}</span>
							</div>
							<div className="card-body bg-light text-center rounded-bottom p-2">
								<p>Pushed {user.created} polls</p>
								<p>Voted {user.voted} polls</p>
							</div>
						</div>
					))}
				</div>
			</div>
		)
	}
}

function mapStateToProps({ questions, users }) {
	const leaderboard = Object.keys(users).map(user => ({
		id: user,
		name: users[user].name,
		avatarURL: users[user].avatarURL,
		voted: Object.keys(users[user].answers).length,
		created: Object.keys(questions).filter(question => questions[question].author === user).length,
	})).sort((a, b) => (b.voted + b.created) - (a.voted + a.created));

	return {
		leaderboard
	}
}

export default connect(mapStateToProps)(Leaderboard)

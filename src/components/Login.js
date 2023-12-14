import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setAuthedUser } from '../services/actions/authedUser';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			user: '',
		}
	}

	selectUser = (e) => {
		this.setState({
			user: e.target.value,
		})
	}

	login = (e) => {
		e.preventDefault();
		const { dispatch } = this.props
		dispatch(setAuthedUser(this.state.user))
	}

	render() {
		const { users } = this.props;
		const { user } = this.state;

		return (
			<div className="container login-container">
				<div className="d-flex justify-content-center h-100">
					<div className="card card-login">
						<div className="card-header text-white">
							<h3><strong>Sign In</strong></h3>
						</div>
						<div className="card-body">
							<form>
								<div className="form-group">
									<label htmlFor="user">Select a user</label>

									{users ? (
										<select name="user" className="custom-select" onChange={(e) => this.selectUser(e)}>
											{Object.keys(users).map(user => (
												<option value={user} key={user}>{users[user].name}</option>
											))}
										</select>
									) : (
										<p>Loading users...</p>
									)}
								</div>
								<button className="btn login_btn w-100" onClick={(e) => this.login(e)} disabled={user === ''}>Login</button>
							</form>
						</div>
					</div>
				</div>
			</div>

		)
	}
}

function mapStateToProps({ users }) {
	return {
		users
	}
}

export default withRouter(connect(mapStateToProps)(Login))

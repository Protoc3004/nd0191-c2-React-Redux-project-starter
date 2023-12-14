import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { setAuthedUser } from '../services/actions/authedUser';
// import 'bootstrap/js/src/collapse.js';
// import 'bootstrap/dist/js/bootstrap.bundle';
// import 'bootstrap/dist/css/bootstrap.css';
class Nav extends Component {

    handleLogout = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(setAuthedUser(null))
        this.props.history.push(`/`)
    }

    render() {
        const { user } = this.props;
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-dark'>
                <div className="container h-100 d-flex align-items-center justify-content-center">
                    <div className='nav-item'>
                        <NavLink to='/' exact className="nav-link">
                            Home
                        </NavLink>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {user && (
                            <Fragment>
                                <ul className="navbar-nav align-items-center mr-auto">
                                    <li className="nav-item">
                                        <NavLink to='/add' exact className="nav-link" activeClassName='active'>New Poll</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/leaderboard' exact className="nav-link" activeClassName='active'>Leaderboard</NavLink>
                                    </li>
                                </ul>
                                <ul className="navbar-nav align-items-center">
                                    <span className="d-flex align-items-center navbar-text">Hi, {user.name}
                                        <img className="navbar-avatar ml-2" src={user.avatarURL} alt={`${user.name} avatar`} />
                                    </span>
                                    <li className="nav-item">
                                        <a href="/" className="text-link nav-link" onClick={(e) => this.handleLogout(e)}>Logout</a>
                                    </li>
                                </ul>
                            </Fragment>
                        )}
                    </div>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    return {
        // user: users[authedUser]
        user: users && authedUser ? users[authedUser] : null,
    }
}

export default withRouter(connect(mapStateToProps)(Nav))

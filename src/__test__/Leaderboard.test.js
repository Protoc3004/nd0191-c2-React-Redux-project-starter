import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Leaderboard from '../components/Leaderboard';

const mockStore = configureStore([]);

describe('Leaderboard component', () => {
    it('renders leaderboard correctly', () => {
        const initialState = {
            questions: {
                question1: { author: 'user1' },
                question2: { author: 'user2' },
            },
            users: {
                user1: { name: 'User One', avatarURL: 'user1.jpg', answers: {} },
                user2: { name: 'User Two', avatarURL: 'user2.jpg', answers: { question1: 'optionOne' } },
            },
        };

        const store = mockStore(initialState);

        const { getByText, getByAltText } = render(
            <Provider store={store}>
                <Leaderboard />
            </Provider>
        );

        const userOneAvatar = getByAltText('User One avatar');
        expect(userOneAvatar).toBeInTheDocument();
        expect(userOneAvatar.src).toContain('user1.jpg');
    });

    it('renders correctly with empty leaderboard', () => {
        const initialState = {
            questions: {},
            users: {},
        };

        const store = mockStore(initialState);

        const { getByText, queryByText } = render(
            <Provider store={store}>
                <Leaderboard leaderboard={[]} />
            </Provider>
        );

        const noDataText = queryByText('No data available.');

        expect(getByText('Leader Board')).toBeInTheDocument();
        expect(noDataText).toBeNull();
    });
});

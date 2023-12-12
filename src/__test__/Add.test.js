import React from 'react';
import { shallow } from 'enzyme';
import { Add } from '../components/Add';

describe('<Add />', () => {
    it('renders with true', () => {
        const wrapper = shallow(<Add />);
        expect(wrapper.exists()).toBe(true);
    });

    it('handle input changes', () => {
        const wrapper = shallow(<Add />);
        const result = { target: { name: 'optionOneText', value: 'TestOption' } };

        wrapper.instance().handleChange(result);
        expect(wrapper.state('optionOneText')).toBe('TestOption');
    });

    it('handles form submit', () => {
        const handleCreateQuestion = jest.fn();
        const previous = { push: jest.fn() };

        const wrapper = shallow(<Add dispatch={handleCreateQuestion} history={previous} />);
        wrapper.setState({ optionOneText: 'OptionOne', optionTwoText: 'OptionTwo' });

        wrapper.instance().handleSubmit({ preventDefault: jest.fn() });

        expect(handleCreateQuestion).toHaveBeenCalledWith('OptionOne', 'OptionTwo');
        expect(previous.push).toHaveBeenCalledWith('/');
        expect(wrapper.state()).toEqual({
            optionOneText: '',
            optionTwoText: '',
            error: '',
        });
    });
});

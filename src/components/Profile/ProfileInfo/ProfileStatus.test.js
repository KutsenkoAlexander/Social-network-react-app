import React from 'react';
import ProfileStatus from './ProfileStatus';
import {act, create} from 'react-test-renderer';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';

Enzyme.configure({ adapter: new Adapter() });

describe(`ProfileStatus component`, () => {
    test(`status from props should be in the state`, () => {
        const component = create(<ProfileStatus status='New Status'/>);
        const root = component.root;
        expect(root).not.toBeNull();
        expect(root.props.status).toBe('New Status');
    });

    test(`<span> with status should be displayed`, () => {
        const component = create(<ProfileStatus status={'New Status'}/>);
        const root = component.root;
        const span = root.findByType('span');
        expect(span).not.toBeNull();
        expect(span.children.length).toBe(1);
    });

    test(`<span> with status should contains correct status`, () => {
        const component = create(<ProfileStatus status={'New Status'}/>);
        const root = component.root;
        const span = root.findByType('span');
        expect(span).not.toBeNull();
        expect(span.children[0]).toEqual('New Status');
    });

    test(`input shouldn't be displayed`, () => {
        const component = create(<ProfileStatus status={'New Status'}/>);
        const root = component.root;
        expect(() => root.findByType('input')).toThrow();
    });

    test(`input should be displayed in edit mode instead of span`, () => {
        const component = create(<ProfileStatus status={'New Status'}/>);
        const root = component.root;
        const span = root.findByType('span');
        act(() => span.props.onDoubleClick());
        const input = root.findByType('input');
        expect(input.props.value).toEqual('New Status');
    });

    test(`callback should be called`, () => {
        const fn = jest.fn();
        const wrapper = mount(<ProfileStatus updateStatus={fn} />);
        wrapper.find('span').simulate('doubleClick')
        const result = wrapper.find('input');
        expect(result.length).toBe(1);
        result.simulate('blur');
        expect(fn).toHaveBeenCalled();
    });
});
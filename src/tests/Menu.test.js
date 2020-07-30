import React from 'react';
import Menu from '../components/Menu';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

test('render menu with routing', () => {
    const component = renderer.create(
        <BrowserRouter>
        <Menu />
        </BrowserRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    //tree.props.onMouseEnter();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    //tree.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
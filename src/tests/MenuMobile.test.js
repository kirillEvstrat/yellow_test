import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";
import MenuMobile from "../components/MenuMobile";

test('close/open mobile menu with routing', () => {
    const component = renderer.create(
        <BrowserRouter>
            <MenuMobile />
        </BrowserRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onClick();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});
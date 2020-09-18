import React, {Component, createElement, ReactPortal} from "react";
import {createPortal} from 'react-dom';

export class TestComponent extends Component<any> {
    render() {
        return 'Test Component';
    }
}

class App extends Component<any, any> {
    portals: ReactPortal[] = [];

    render() {
        return createElement(React.Fragment, null,
            createElement("button", {
                onClick: () => {
                    this.createPortal();
                }
            }, "Create Portal"),
            createElement("button", {
                onClick: () => {
                    this.deletePortal();
                }
            }, "Delete Portal"),
            createElement('span', {}, this.portals));
    }

    createPortal() {
        const parentElement = document.createElement('div');
        const reactComponent = createElement(TestComponent, {});
        const portal: ReactPortal = createPortal(
            reactComponent,
            parentElement
        );

        this.portals.push(portal);

        this.forceUpdate(() => {
        });
    }

    deletePortal() {
        this.portals = [];

        this.forceUpdate(() => {
        });
    }
}

export default App;

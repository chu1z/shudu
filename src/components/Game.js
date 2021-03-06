import React from 'react';
import { PAGE_ONE, PAGE_THREE, PAGE_TWO } from '../global';

import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';

export default class Game extends React.Component {

    render() {
        switch (this.props.page) {
            case PAGE_ONE:
                return (<PageOne {...this.props} />)
            case PAGE_TWO:
                return (<PageTwo {...this.props} />)
            case PAGE_THREE:
                return (<PageThree {...this.props} />)
            default:
                return <div />
        }
    }
}
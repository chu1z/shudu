
import React from 'react';
import { copyMap } from '../util';
export default class Square extends React.Component {

    onChange = (e) => {
        let row = this.props.row;
        let column = this.props.column;
        let temp = copyMap(this.props.map.change);
        temp[row][column] = e.target.value;
        this.props.setMap(temp);
    };

    render() {
        let row = this.props.row;
        let column = this.props.column;
        let map = this.props.map;
        return (
            <input className="square"
                type="text"
                pattern="[1-9]{1}"
                value={map.change[row][column]}
                onChange={this.onChange}
                readOnly={!!map.initial[row][column]}
            />
        )
    }
}

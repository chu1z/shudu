import React from 'react';
import { getDescByLevel, LEVEL_1, LEVEL_2, LEVEL_3, PAGE_TWO } from '../global';

export default class PageOne extends React.Component {
    onGoToGame = () => {
        let level = Number(document.getElementById("input-select").value);
        this.props.setLevel(level);
        this.props.setPage(PAGE_TWO)
    }

    createInput() {
        let arr = [LEVEL_1, LEVEL_2, LEVEL_3];
        return (
            <select id="input-select" >
                {arr.map((value) => {
                    return <option key={value.toString()} value={value}>{getDescByLevel(value)}</option>
                })}
            </select>
        )
    }

    render() {
        return (<div>
            <img className="img-icon" src={process.env.PUBLIC_URL + "/title.png"} alt="title" />
            <div className="input-wrap">
                选择难度：{this.createInput()}
                <br />
                <input type="submit" value="开始游戏" onClick={this.onGoToGame} />
            </div>
        </div>
        )
    }
}
import React from 'react';
import { getDescByLevel, PAGE_ONE } from '../global';
export default class PageThree extends React.Component {
    onRestart = () => {
        this.props.setTime(0);
        this.props.setPage(PAGE_ONE);
    }

    render() {
        return (
            <div className="game-info">
                <h1>恭喜你获得胜利!!!</h1>
                <h3>难度:{'  '} <strong>{getDescByLevel(this.props.level)}</strong></h3>
                <h3>用时:{'  '}<strong>{this.props.time}</strong></h3>
                <input type="submit" value="再来一次" onClick={this.onRestart} />
            </div>
        )
    }
}


import React from "react";

import ReactDOM from "react-dom";

import SudoKu from "./sudoku.js";

import "./index.css";

/**游戏开始 */
const GAMESTATE_SATRT = 1;
/**游戏进行中 */
const GAMESTATE_ING = 2;
/**游戏结束 */
const GAMESTATE_OVER = 3;

class GameStart extends React.Component {
    onGoToGame = () => {
        let level = Number(document.getElementById("input-select").value);
        this.props.callBack(GAMESTATE_ING, level);
    }

    render() {
        return (<div>
            <img className="img-icon" src={process.env.PUBLIC_URL + "/title.png"} alt="title" />
            <div className="input-wrap">
                选择难度：
                <select id="input-select" >
                    <option value="1">简单</option>
                    <option value="2">中单</option>
                    <option value="3">困难</option>
                </select>
                <br />
                <input type="submit" value="开始游戏" onClick={this.onGoToGame} />
            </div>
        </div>
        )
    }
}
class Board extends React.Component {

    constructor(props) {
        super(props);
        this.originalMap = SudoKu.createMap();
        console.log("------------答案就在这--------------");
        console.log(this.originalMap);
        console.log("-----------------------------------");
        this.initialMap = SudoKu.initialMap(this.originalMap, this.props.level);
        this.state = { map: this.initialMap };
    }

    onChange = (i, j, e) => {
        let temp = SudoKu.deepCopy(this.state.map);
        temp[i][j] = Number(e.target.value);
        this.setState({ map: temp });
        let bool = SudoKu.checkIsSame(temp, this.originalMap);
        if (bool) {
            console.log("you win!!!");
            this.props.callBack(GAMESTATE_OVER);
        }
    }

    createRow() {
        return Array(9).fill(null).map((currentValue, i) => {
            return (
                <tr key={i.toString()}>{
                    this.createColumn(i)}
                </tr>
            )
        });
    }

    createColumn(i) {
        return Array(9).fill(null).map((currentValue, j) => {
            return (
                <td key={j.toString()}>
                    <Square readOnly={!!this.initialMap[i][j]} value={this.state.map[i][j] || ""} onChange={this.onChange.bind(this, i, j)} />
                </td>
            )
        });
    }

    render() {
        return <table className="game"><tbody>{this.createRow()}</tbody></table>;
    }
}

class Square extends React.Component {

    render() {
        return (
            <input className="square"
                type="text"
                pattern="^[1-9]{1}$"
                value={this.props.value}
                onChange={this.props.onChange}
                readOnly={this.props.readOnly}
            />
        )
    }
}


class GameOver extends React.Component {

    onRestart = () => {
        this.props.callBack(GAMESTATE_SATRT);
    }

    render() {
        return (
            <div className="game-info">
                <h1>恭喜你获得胜利!!!</h1>
                <input type="submit" value="再来一次" onClick={this.onRestart} />
            </div>
        )
    }
}



class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gameState: GAMESTATE_SATRT,
            level: 1
        }
    }

    callBack = (gameState, level) => {
        this.setState({ gameState: gameState, level: level || 1 });
    }

    render() {
        switch (this.state.gameState) {
            case GAMESTATE_OVER:
                return (<GameOver callBack={this.callBack} />)
            case GAMESTATE_ING:
                return (<Board callBack={this.callBack} level={this.state.level} />)
            case GAMESTATE_SATRT:
            default:
                return (<GameStart callBack={this.callBack} />)

        }
    }
}

ReactDOM.render(<Game />, document.getElementById('root'));


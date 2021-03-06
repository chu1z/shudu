import React from 'react';
import Square from './Square';

import { checkIsWim } from '../util';
import { PAGE_THREE } from '../global';

export default class PageTwo extends React.Component {

    interval;
    time = 0;

    //在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。
    componentDidMount() {
        this.interval = setInterval(() => {
            this.props.setTime(this.time++);
        }, 1000);
        this.props.setTime(this.time++);
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
                    <Square row={i} column={j} {...this.props} />
                </td>
            )
        });
    }

    render() {
        return (
            <div>
                <span id="time">当前用时<strong>:{this.props.time}</strong></span>
                <table className="game"><tbody>{this.createRow()}</tbody></table>
            </div>
        )
    }

    // 在组件完成更新后立即调用。在初始化时不会被调用。
    componentDidUpdate() {
        if (checkIsWim(this.props.map.change)) {
            console.log("you win!!!");
            this.props.setPage(PAGE_THREE);
        }
    }

    //在组件从 DOM 中移除之前立刻被调用。
    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = undefined;
        }
        this.time = 0;
    }
}
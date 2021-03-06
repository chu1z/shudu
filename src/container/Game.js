import { connect } from 'react-redux';

import { setPage, setLevel, setMap, setTime } from '../actions/index';

import Game from '../components/Game';

const mapStateToProps = (state) => ({
    page: state.page,
    level: state.level,
    map: { initial: state.map.initial, change: state.map.change },//这里不能直接赋值state.map，如果直接赋值redux里面算没有变化的，从而不刷新界面  囧！！！
    time: state.time
});

const mapDispatchToProps = (dispath) => {
    return (
        {
            setPage: (page) => dispath(setPage(page)),
            setLevel: (level) => dispath(setLevel(level)),
            setMap: (map) => dispath(setMap(map)),
            setTime: (time) => dispath(setTime(time))
        })
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
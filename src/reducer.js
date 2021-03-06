import { PAGE_ONE, LEVEL_1 } from './global';
import { copyMap, initialMap } from './util';

export default function reducer(state, action) {

    if (!state) {
        state = { page: PAGE_ONE, level: LEVEL_1, map: {}, time: 0 }
    }
    
    switch (action.type) {
        case "set_page":
            state.page = action.data;
            break;
        case "set_level":
            state.level = action.data;
            state.map.initial = initialMap(state.level);
            state.map.change = copyMap(state.map.initial);
            break;
        case "set_map":
            state.map.change = action.data;
            break;
        case "set_time":
            state.time = action.data;
            break;
        default:
            break;
    }

    return { ...state };
}
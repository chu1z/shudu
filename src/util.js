
const keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

const levels = [null, 18, 36, 54];

const values = [
    ['i', 'g', 'h', 'c', 'a', 'b', 'f', 'd', 'e'],
    ['c', 'a', 'b', 'f', 'd', 'e', 'i', 'g', 'h'],
    ['f', 'd', 'e', 'i', 'g', 'h', 'c', 'a', 'b'],
    ['g', 'h', 'i', 'a', 'b', 'c', 'd', 'e', 'f'],
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
    ['d', 'e', 'f', 'g', 'h', 'i', 'a', 'b', 'c'],
    ['h', 'i', 'g', 'b', 'c', 'a', 'e', 'f', 'd'],
    ['b', 'c', 'a', 'e', 'f', 'd', 'h', 'i', 'g'],
    ['e', 'f', 'd', 'h', 'i', 'g', 'b', 'c', 'a'],
]

function createMap() {
    let result = copyMap(values);
    let newKeys = keys.concat();
    let temp = {};
    for (var i = 1; i <= 9; i++) {
        var r = Math.floor(Math.random() * newKeys.length);
        temp[newKeys[r]] = i;
        newKeys.splice(r, 1);
    }
    for (var j = 0; j < 9; j++) {
        for (var k = 0; k < 9; k++) {
            result[j][k] = temp[result[j][k]];
        }
    }
    return result;
}

/**
 * 根据等级添加空格
 * @param {*} map 原数组
 * @param {*} level 等级 1,2,3
 */
export function initialMap(level) {
    let count = levels[level];
    if (count === undefined) {
        console.error("没有该难度！");
        return;
    }

    let temp = createMap();
    printMap(temp);


    while (count > 0) {
        let rowIndex = Math.floor(Math.random() * temp.length);
        let tempColumn = temp[rowIndex];
        let columnIndex = Math.floor(Math.random() * tempColumn.length);
        if (temp[rowIndex][columnIndex] !== '') {
            temp[rowIndex][columnIndex] = '';
            count--;
        }
    }
    return temp;
}

export function checkIsWim(map) {

    let checkRow = (row, map) => {
        let tempDic = {};
        let tempArr = map[row];
        for (let i = 0; i < tempArr.length; i++) {
            if (!tempDic[tempArr[i]]) {
                tempDic[tempArr[i]] = true;
                continue;
            }
            return false;
        }
        return true;
    }
    let checkColumn = (column, map) => {
        let tempDic = {};
        for (let i = 0; i < map.length; i++) {
            if (map[i][column] === '') {
                return false;
            }

            if (!tempDic[map[i][column]]) {
                tempDic[map[i][column]] = true;
                continue;
            }
            return false;
        }
        return true;
    }
    let check3x3 = (row, column, map) => {
        let tempDic = {};
        for (let i = row * 3; i < row * 3 + 3; i++) {
            for (let j = column * 3; j < column * 3 + 3; j++) {
                if (map[i][j] === '') {
                    return false;
                }
                if (!tempDic[map[i][j]]) {
                    tempDic[map[i][j]] = true;
                    continue;
                }
                return false;
            }
        }
        return true;
    }
    for (let i = 0; i < 9; i++) {
        if (!checkRow(i, map) || !checkColumn(i, map)) {
            return false;
        }
    }
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            if (!check3x3(i, j, map)) {
                return false;
            }
        }
    }
    return true;
}


export function copyMap(map) {
    let result = [];
    map.forEach(element => {
        let [...temp] = element;
        result.push(temp)
    });
    return result;
}

export function printMap(map) {
    let str = '';
    for (let i = 0; i < map.length; i++) {
        str = '－－－－－－－－－';
        str += '\n';
        for (let j = 0; j < map[i].length; j++) {
            str += map[i][j] + ' ';
        }
        console.log(str);
    }

}
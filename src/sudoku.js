export default class SudoKu {

    static keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

    static levels = [null, 18, 36, 54];

    static values = [
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

    /**
     * 返回数读数组
     */
    static createMap() {

        let result = this.deepCopy(this.values);

        let temp = {};
        for (var i = 1; i <= 9; i++) {
            var r = Math.floor(Math.random() * this.keys.length);
            temp[this.keys[r]] = i;
            this.keys.splice(r, 1);
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
    static initialMap(map, level) {
        let count = this.levels[level];
        if (count === undefined) {
            console.error("没有该难度！");
            return;
        }

        let temp = this.deepCopy(map);
        while (count > 0) {
            let rowIndex = Math.floor(Math.random() * temp.length);
            let tempColumn = temp[rowIndex];
            let columnIndex = Math.floor(Math.random() * tempColumn.length);
            if (temp[rowIndex][columnIndex] !== undefined) {
                temp[rowIndex][columnIndex] = undefined;
                count--;
            }
        }
        return temp;
    }

    static checkIsSame(map1, map2) {
        for (let i = 0; i < map1.length; i++) {
            for (let j = 0; j < map1[i].length; j++) {
                if (map1[i][j] === undefined) {
                    return false;
                }

                if (map1[i][j] !== map2[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }


    /**深度拷贝二维数组 */
    static deepCopy(map) {
        let result = [];
        map.forEach(element => {
            let [...temp] = element;
            result.push(temp)
        });
        return result;
    }
}
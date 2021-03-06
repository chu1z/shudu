/**游戏开始页 */
export const PAGE_ONE = 1;
/**游戏进行中 */
export const PAGE_TWO = 2;
/**游戏结束页 */
export const PAGE_THREE = 3;

/**游戏等级 1*/
export const LEVEL_1 = 1;
/**游戏等级 2*/
export const LEVEL_2 = 2;
/**游戏等级 3*/
export const LEVEL_3 = 3;

export function getDescByLevel(level) {
    switch (level) {
        case LEVEL_1:
            return "简单";
        case LEVEL_2:
            return "中等";
        case LEVEL_3:
            return "困难";
        default:
            return "";
    }
}
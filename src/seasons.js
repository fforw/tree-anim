export const SPRING = 0;
export const SUMMER = 1;
export const AUTUMN = 2;
export const WINTER = 3;

const SEASON_FOR_MONTH = [
    WINTER,
    WINTER,
    SPRING,
    SPRING,
    SPRING,
    SUMMER,
    SUMMER,
    SUMMER,
    AUTUMN,
    AUTUMN,
    AUTUMN,
    WINTER,
];

export function getCurrentSeason()
{
    return SEASON_FOR_MONTH[ new Date().getMonth()];
}

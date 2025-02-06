import { useState, useEffect } from 'react';

const secondsTable = [
    ['year', 60 * 60 * 24 * 365],
    ['month', 60 * 60 * 24 * 30],
    ['week', 60 * 60 * 24 * 7],
    ['day', 60 * 60 * 24],
    ['hour', 60 * 60],
    ['minute', 60],
];

const rtf = new Intl.RelativeTimeFormat(undefined, {numeric: 'auto'});

function getTimeAgo(date) {
    const seconds = Math.round((date.getTime() - new Date().getTime()) / 1000);
    const absSeconds = Math.abs(seconds);
    let bestUnit, bestTime, bestInterval;
    for(let[unit, unitSeconds] of secondsTable) {
        if(absSeconds >= unitSeconds) {
            bestUnit = unit;
            bestTime = Math.round(seconds / unitSeconds);
            bestInterval = Math.min(unitSeconds /2, 60 * 60 * 24);
            break;
        }
    }
    if (!bestUnit) {
        bestUnit = "second";
        bestTime = parseInt(seconds / 10) * 10;
        bestInterval = 10;
    }
    return [bestTime, bestUnit, bestInterval];
}


// bestUnit is the unit that was determined to be the best to use.
// bestTime is the amount of time, in the selected units, rounded to the nearest integer.
// bestInterval is the interval at which the relative time needs to be updated. 
// Since all amounts are rounded, there is no reason to update more often than at half of the selected time unit. 
// Because the setInterval() function does not work well with very large numbers, the longest interval that is used is 24 hours.

export default function TimeAgo({ isoDate }) {
    const date = new Date(Date.parse(isoDate));
    const [time, unit, interval] = getTimeAgo(date);
    const [, setUpdate] = useState(0);

    useEffect(() => {
        const timerId = setInterval(
        () => setUpdate(update => update + 1), 
        interval * 1000
    );
        return () => clearInterval(timerId);
    }, [interval]);

    return (
        <span title={date.toString()}>{rtf.format(time, unit)}</span>
    );
}

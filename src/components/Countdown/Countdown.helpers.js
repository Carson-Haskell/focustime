export const minutesToMillis = (min) => min * 1000 * 60;
export const formatTime = (time) => (time < 10 ? `0${time}` : time);
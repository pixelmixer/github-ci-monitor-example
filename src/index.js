/* eslint-disable no-console */
import sum from './sum';

console.log(JSON.stringify(sum), sum(1, 2).toString());

export default (a, b) => sum(a, b).toString();

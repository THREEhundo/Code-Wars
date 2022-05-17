/****************************/
/*** Beginner Series #2 Clock			5/17
/***************************/

/***
 * Clock shows h hours, m minutes and s seconds after midnight.
 *
 * Your task is to write a function which returns the time since midnight in milliseconds.
 ***/

/**
 * convert seconds to milliseconds --> 60,000
 * constraint: 0 <= h <= 23
 * convert hours to milliseconds --> 2,400,000
 * 24 hr --> 8,640,000 ms
 * 1 hr --> 3,600,000 ms
 * constraint: 0 <= m <= 59
 * convert minutes to milliseconds --> 3,600,000
 * 60 m -->3,600,00 ms
 * 1 m --> 60,000 ms
 * constraint: 0 <= s <= 59
 * 1 s --> 1,000
 * 60 s --> 60,000 ms
 */

const past = (h, m, s) => h * 3600000 + m * 60000 + s * 1000

const pastBestPractive = (h, m, s) => (h * 3600 + m * 60 + s) * 1000

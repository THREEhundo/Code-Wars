/*** Grasshopper - Grade Book
 * 
 * Complete the function so that it finds the average of the 3 scores passed to it and returns the letter value associated with it.
 * 
 */

const getGrade = (s1, s2, s3) => {
  let avg = (s1 + s2 + s3) / 3 
   return avg >= 90 && avg <= 100 ? 'A' : 80 <= avg && avg < 90 ? 'B' : 70 <= avg && avg < 80 ? 'C' : 60 <= avg && avg < 70 ? 'D'	: 'F'
}
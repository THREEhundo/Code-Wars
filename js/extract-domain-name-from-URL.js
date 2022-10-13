/***	Extract the Domain Name from the URL
 *
 * Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.
 *
 */

// find the pattern of '//'
// if 'www.' proceeds ignore string
// if not www. -> store string
// save the proceeding strings into a variable
// return string variable
// use includes method if 'www.' is included
// log where '//' ends

const domainName = url =>
	url
		.replace('http://', '')
		.replace('http://www.', '')
		.replace('https://www.', '')
		.replace('www.', '')
		.replace('https://', '')
		.split('.')[0]
console.log(domainName('i3higfb50brpne6ef-t.tv/index.php'))

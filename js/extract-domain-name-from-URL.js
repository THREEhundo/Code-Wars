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

const domainName = (url) => {
	let str = ''
	if (url.includes('www.')) {
		let cut = url.split('.')
		return (str = cut[1])
	}
	if (url.includes('://') && !url.includes('www.')) {
		let u = url.split('://')
		str = u[1]
	}
	if (str == '') str = url
	if (str.includes('.')) {
		let n = str.split('.')
		str = n[0]
	}
	return str
}

const domainNameReplace = (url) => {
	url.replace('https://', '')
	url.replace('http://')
	url.replace('www.', '')
	return url.split('.')[0]
}

console.log(domainName('i3higfb50brpne6ef-t.tv/index.php'))

// Import required Node.js modules
const fs = require('fs')
const path = require('path')

// Get the problem name from command line arguments
// process.argv[0] is 'node', process.argv[1] is the script name ('run.js')
// so we want the third argument (index 2)
const problemName = process.argv[2]

// Check if a problem name was provided
if (!problemName) {
	console.error('Please provide a problem name.')
	process.exit(1) // Exit the script with an error code
}

// Construct the full path to the problem file
// __dirname is the directory of the current script (run.js)
// We're now looking in the 'js' subdirectory
const problemPath = path.join(__dirname, 'js', `${problemName}.js`)

// Check if the problem file exists
if (!fs.existsSync(problemPath)) {
	console.error(`Problem file ${problemPath} does not exist.`)
	process.exit(1) // Exit the script with an error code
}

// If we've made it this far, the file exists. Let's run it.
console.log(`Running ${problemName}.js:\n`)

// require() will execute the specified JavaScript file
require(problemPath)

// terminal command
//node run.js problem-name

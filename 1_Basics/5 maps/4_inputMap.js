const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user to enter a JSON object
rl.question('Enter a JSON object: ', (input) => {
    try {
        // Parse the input string to a JavaScript object
        const userObject = JSON.parse(input);
        console.log('Parsed object:', userObject);
        
        // If you need to work with the object as a Map
        const userMap = new Map(Object.entries(userObject));
        console.log('Converted to Map:', userMap);
    } catch (error) {
        console.error('Invalid JSON object. Please try again.');
    }

    // Close the readline interface
    rl.close();
});

// template strings/literals

const recipient = "James"

// Refactor the email string to use template strings
//const email = "Hey " + recipient + "! How is it going? Cheers Per"

// Converting the above one into a template string as below 

const email = `Hey ${recipient}! How is it going? Cheers per`

console.log(email)
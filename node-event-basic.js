const fs = require('fs'); /* constant created that implement node built-in file system module  */

var rs = fs.createReadStream('./demofile.txt'); /* createReadStream will read and send the information in chunks which makes it faster than readFile. Not much difference for smaller files, but createReadStream is faster for large files and/or slow storage devices */

rs.on('open', function(){ /* on event emitter in terms of emmitter.on(eventName, listener); is this example rs is the emmitter which fires (i.e., runs) when the event 'open' occurs for the rs variable. */
    console.log('Opened the requested file.'); /* message logged to terminal when event fires */
});
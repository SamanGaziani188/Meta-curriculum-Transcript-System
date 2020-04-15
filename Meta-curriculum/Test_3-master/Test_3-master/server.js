/*
@author: Emad Bin Abid
@date: July 04, 2018
*/

//Creating the express server

exports.run = function(expressInstance, port)
{
    //If passed 'port' is busy, listens on dynamically assigned port.
    expressInstance.listen(process.env.PORT || port, (err) => {
        if(err)
        {
            console.log("[-]: Error in establishing server connection.");
        }
        else
        {
            console.log(`[+]: Express server listening on port ${port}...`);
        }
    });
}
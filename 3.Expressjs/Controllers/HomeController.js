// Controller are REAL Request Handler functions

function HomeResponse (req, res) {
    // send keyword is not in nodejs 
    // behind the scenes uses res.write and res.end

    // stringification behind the scenes
    res.send("Hello World express change!!!");
}


function AboutResponse (req, res) {
    res.send("About Page");
}

module.exports = {  
    HomeResponse,
    AboutResponse
}
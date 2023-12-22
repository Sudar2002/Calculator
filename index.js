const http = require("http");
const fs = require('fs');
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url == "/") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head>");
    res.write("<title>Message</title>");
    res.write("</head>");
    res.write("<body>");
    res.write(
      '<form action="/message_send" method="post"><input type="text" name="message" placeholder="Enter your message" required><input type="submit" value="Send"></form>'
    );
    res.write("</body>");
    res.write("</html>");
    res.end();

    

  } 
  else if(url=="/sdr_calculator"){
        res.setHeader("content-type","text/html");
        res.write(fs.readFileSync('text.text','utf8'));

        res.end();
  }
  else {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write(
      "<head><title>Server</title><style>*{background-color:green;}</style></head>"
    );
    res.write("<body><h1>Sutharsan Server</h1><button><a  style='color:black;text-decoration:none'; href='/'>Go to Home</a></button><br><button><a  style='color:black;text-decoration:none'; href='/sdr_calculator'>Go to Calculator</a></button></body>");
    res.write("</html>");
    
    res.end();
    
  }
  ;
});

server.listen(3000,()=>{
  console.log("Server Listening Successfully : 3000")
});


///
/* const fs=require('fs');
console.log(fs.readFileSync('text.text','utf8')); */

const http = require("http");
const fs = require('fs');
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url == "/") {
    res.setHeader('content-type','text/html');
    res.write(fs.readFileSync('./login.text','utf-8'));


    res.end();

    

    

  } 
  /* else if(url=="/sdr_calculator"){
        res.setHeader("content-type","text/html");
        res.write(fs.readFileSync('text.text','utf-8'));

        res.end();
  } */
    let body=[];
  req.on('data',(userData)=>{
    body.push(userData);
    console.log("user data collection process...")

  })
  req.on('end',()=>{
    console.log("user data colleted!")
    const user_data=Buffer.concat(body).toString();
   console.log(user_data);
    const user1=user_data.split("&");
    console.log(user1)
   
    const uname=user1[0];
    console.log(uname);
    const uname2=uname.split('=');
    console.log(`name:${uname2[1]}`)
    const username=uname2[1];
    console.log(username);

    const pass=user1[1];
  if(username=="sutharsan"&& pass=="get_password=sudar"){

    if(url=="/home") {
      res.setHeader("content-type", "text/html");
      res.write("<html>");
      res.write(
        "<head><title>Server</title><style>*{background-color:green;}</style></head>"
      );
      res.write("<body><h1>Sutharsan Server</h1><button><a  style='color:black;text-decoration:none'; href='/'>Go to Home</a></button><br><button><a  style='color:black;text-decoration:none'; href='/sdr_calculator'>Go to Calculator</a></button></body>");
      res.write("</html>");
    
      res.end();
      
      
    }
   
  

  }
 
  
 

  })

  if(url=="/sdr_calculator"){
    res.setHeader("content-type","text/html");
    res.write(fs.readFileSync('text.text','utf-8'));
  
    res.end();
  }
  
});


server.listen(3000,()=>{
  console.log("Server Listening Successfully : 3000")
});


///
/* const fs=require('fs');
console.log(fs.readFileSync('text.text','utf8')); */

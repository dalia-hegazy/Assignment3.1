// 1. Use a readable stream to read a file in chunks and log each chunk. (0.5 Grade)
// • Input Example: "./big.txt"
// • Output Example: log each chunk



// const fs =require("node:fs")
// const readStream= fs.createReadStream("./big.txt")
// const data=""
// readStream.on("data",(chunk)=>{
//     console.log(chunk)
// });
// readStream.on("end",()=>{
//     console.log('all data recived')
// })


// 2. Use readable and writable streams to copy content from one file to another. (0.5 Grade)
// • Input Example: "./source.txt", "./dest.txt"
// • Output Example: File copied using streams

// const fs =require("node:fs")
// const readStream =fs.createReadStream("./source.txt");


// const writeStream =fs.createWriteStream("./dest.txt");
// readStream.pipe(writeStream);  // method b ta5od cope 
//   readStream.on("finish",()=>{ // finish 3shan lma write y5les 5als
//     console.log("all data copied")
//   })




// 3. Create a pipeline that reads a file, compresses it, and writes it to another file. (0.5 Grade)
// • Input Example: "./data.txt", "./data.txt.gz"


// async function compressesFile() {

    
// const fs = require("node:fs");
// const readStream= fs.createReadStream("./data.txt");

// //pipeline btt7t gwa function async
// const { pipeline } = require("node:stream/promises");

// const zlib = require ("node:zlib")
// const zp= zlib.createGzip();

// const writeStream=fs.createWriteStream('./data.txt.gz');

//  await pipeline(
// readStream,
//     zp,
//     writeStream,

// )
    
// }



// compressesFile()






//part 2
// 1. Create an API that adds a new user to your users stored in a JSON file. (ensure that the email of the new user doesn’t exist before) (1 Grade)
// o URL: POST /user

 
// const fs = require("node:fs");
// const http = require("node:http");

// const server = http.createServer((req, res) => {
//   const { method, url } = req;

//   if (method === "POST" && url === "/user") {
//     let data = "";

//     req.on("data", (chunk) => {
//       data += chunk;
//     });

//     //lma data tygi
//     req.on("end", () => {
//       const newUser = JSON.parse(data);

//       const fileData = fs.readFileSync("./data.json", "utf-8");
//       const users = JSON.parse(fileData);

      

//       users.push(newUser);

//       fs.writeFileSync("./data.json", JSON.stringify(users, null, 2));

//       res.writeHead(201, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ message: "User added successfully" }));
//     });

//   } else {
//     res.writeHead(404);
//     res.end("Route not found");
//   }
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log("your server is running", port);
// });





// 2. Create an API that updates an existing user's name, age, or email by their ID. The user ID should be retrieved from the URL (1 Grade)
// Note: Remember to update the corresponding values in the JSON file
// o URL: PATCH /user/id



// const http = require("node:http");
// const fs = require("node:fs");

// const server = http.createServer((req, res) => {
//   const { method, url } = req;

//   if (method === "PATCH" && url.startsWith("/user/")) {
//     const id = url.split("/")[2];
//     let body = "";

//     req.on("data", (chunk) => {
//       body += chunk;
//     });

//     req.on("end", () => {
//       const updatedUser = JSON.parse(body);
//       const fileData = fs.readFileSync("./data.json", "utf-8");
//       const users = JSON.parse(fileData);

//      //find index bta3 el user elly 3ayz a update 3la 7sb el id
//       const userIndex = users.findIndex(
//         (user) => user.id == id
//       );

//       if (userIndex === -1) {
//         res.writeHead(404, {
//           "Content-Type": "application/json",
//         });
//         return res.end(
//           JSON.stringify({ message: "user not found" })
//         );
//       }

//         // update el user
//       users[userIndex] = {
//         ...users[userIndex],
//         ...updatedUser,
//       };

      
//       fs.writeFileSync(
//         "./data.json",
//         JSON.stringify(users, null, 2)
//       );

//       res.writeHead(200, {
//         "Content-Type": "application/json",
//       });
//       res.end(
//         JSON.stringify({
//           message: "user updated successfully",
//           user: users[userIndex],
//         })
//       );
//     });
//   }
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log("server run", port);
// });









// 3. Create an API that deletes a User by ID. The user id should be retrieved from the URL (1 Grade)
// Note: Remember to delete the user from the file
// o URL: DELETE /user/id




// const http=require("node:http");
// const fs=require("node:fs");    
// const server =http.createServer((req,res)=>{
//     const{method,url}=req;                              
//     if(method==="DELETE" && url.startsWith("/user/")){
//         const id=url.split("/")[2];
//         const fileData=fs.readFileSync("./data.json","utf-8");
//         const users=JSON.parse(fileData);       
//         const userIndex=users.findIndex((user)=>user.id==id);
//         if(userIndex===-1){
//             res.writeHead(404,{"Content-Type":"application/json"});
//             return res.end(JSON.stringify({message:"user not found"}));
//         }       
//         users.splice(userIndex,1);       
//         fs.writeFileSync("./data.json",JSON.stringify(users,null,2));       
//         res.writeHead(200,{"Content-Type":"application/json"});
//         res.end(JSON.stringify({message:"user deleted successfully"}));
//     }           
// });
// const port=3000;            
// server.listen(port,()=>{
//     console.log("server run",port);
// });          










// 4. Create an API that gets all users from the JSON file. (1 Grade)
// o URL: GET /user




// const http = require("node:http");
// const fs = require("node:fs");                  
// const server = http.createServer((req, res) => {
//   const { method, url } = req;      
//     if (method === "GET" && url === "/user") {  
//     const fileData = fs.readFileSync("./data.json", "utf-8");
//     const users = JSON.parse(fileData);       
//     res.writeHead(200, { "Content-Type": "application/json" });     
//     res.end(JSON.stringify(users));      
//   } 
// });
// const port = 3000;                  
// server.listen(port, () => {
//   console.log("server run", port);
// });

// 5. Create an API that gets User by ID. (1 Grade)


// const http = require("node:http");
// const fs = require("node:fs");

// const server = http.createServer((req, res) => {
//   const { method, url } = req;

//   if (method === "GET" && url.startsWith("/user/")) {
//     const id = url.split("/")[2];
    
    
//     const fileData = fs.readFileSync("./data.json", "utf-8");
//     const users = JSON.parse(fileData);
    
   
//     const user = users.find((user) => user.id == id);

//     if (user) {
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(user));
//     } else {
//       res.writeHead(404, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ message: "User not found" }));
//     }
//   } else {
//     res.writeHead(404, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ message: "Route not found" }));
//   }
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log("Server running on port", port);
// });

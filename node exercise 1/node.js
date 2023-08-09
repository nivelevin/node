const fs = require("fs");
const http = require("http");
const url = require("url");

//Blocking code

// const read = fs.readFileSync("./txt/Levin.txt", "utf-8");
// console.log(read);

// fs.writeFileSync("./txt/new.txt", read, "utf-8");
// console.log("your file has been written");

//non blocking code

// fs.readFile("./txt/input.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// console.log("Your file got read");

const server = http.createServer((req, res) => {
  const name = req.url;
  if (name === "/kishore") {
    res.end("<h1>Hello Kishore</h1>");
  } else if (name === "/madhavan") {
    res.end("<h1>Hello maddy</h1>");
  }
  //   res.end("<h1>Hello from the Server</h1>");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to the port in 800");
});

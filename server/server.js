import app from './app.js'
import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config();

   const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : process.env.PASSWORD,
    database : process.env.DATABASE_NAME
    }).promise()

    // const res=await pool.query("SELECT * FROM emp where name");
    // console.log(res[0]);


// mongoose.connect(process.env.MONGODB_URL ,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// }).then(()=>{
//     console.log("MongoDb Database connected...");
// });



const server = app.listen(process.env.PORT, ()=>{
    console.log("Server set up at port : " + process.env.PORT);
});

process.on("unhandledRejection", (err) => {
    console.log(err.name, err.message);
    console.log("UNHANDLED REJECTION....... SHUTTING DOWN!!!");
  
    server.close(() => {
      process.exit(1);
    });
  });

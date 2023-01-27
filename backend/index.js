import express from 'express'
import mysql2 from 'mysql2'
import cors from 'cors'

const app = express();

const connection = mysql2.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'Restaurant_Project'
})

app.use(express.json())
app.use(cors())

app.get("/select-itens", (req, res)=>{
    const q = "SELECT * FROM menu"
    
    connection.query(q, (error, data)=>{
        if(error) return res.json(error)
        return res.json(data)
    })
})

app.post("/add-item", (req, res)=>{
    const q = "INSERT INTO Menu ( `item_name`, `item_description`, `item_price`) VALUES (?)"
    const values = [
        req.body.item_name,
        req.body.item_description,
		req.body.item_price
    ];

    connection.query(q, [values], (error, data)=>{
        if(error) return res.json(error)
        return res.json("successfully added item")
    })
})

app.get("/", (req, res) =>{
    res.json("Hello This a Backend")
})

app.listen(3333, () => {
    console.log("Server is Running");
})
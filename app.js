const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const patientRouter=require("./controllers/patientRouter")

const app=express()

app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://sibibab02:siba2002@cluster0.3wbq8id.mongodb.net/covidDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
})

app.use("/api/patient",patientRouter)
app.listen(3001,()=>{
    console.log("server running")
})
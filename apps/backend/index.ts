import express from "express"
import { TrainModel,GenerateImage,GenerateImageFromPack } from "common/types"
import {prismaClient} from "db";

const app= express()

app.use(express.json())

// this endpoint ensures that we send bunch of images to train
app.post('/ai/training',async(req,res)=>{
    const parsedBody= TrainModel.safeParse(req.body)
    
    if (!parsedBody.success){
        res.status(411).json({
            message: "Input incorrect"
        })
        return
    }




    await prismaClient.model.create({
        data:{
            name: parsedBody.data.name,
            type: parsedBody.data.type,
            age: parsedBody.data.age,
            ethnicity: parsedBody.data.ethnicity,
            eyeColor: parsedBody.data.eyeColor,
            bald: parsedBody.data.bald

        }
    })
})

//generate a fresh model
app.post("/ai/generate",(req,res)=>{

})

//generate a bunch of images given a valentine day pack or inside airplane pack 
app.post("/pack/generate",(req,res)=>{

})


//to get and show all the available packs to the user
app.get("/pack/bulk",(req,res)=>{

})



//once u upload the photo and send it for processing this 
// endpoint will keep polling and once done it will display the image

app.get("/image",(req,res)=>{
     
})


app.listen(8080,()=>{
    console.log("Server is running @8080")
})
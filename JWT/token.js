const app=require("app")
const jwt=require("jsonwebtoken")
const app=app();

const createtoken=async()=>{
    const token= await jwt.sign({id:"9c20740d-51a7-259e-8b64-148d7381db52"},"qwertyuioplkjhgfdsasdfjkuytrewertyuikjhgf",{
        expiresIn:"3 seconds"
    })
    console.log(token);
    const uservar= await jwt.verify(token,"qwertyuioplkjhgfdsasdfjkuytrewertyuikjhgf")
    console.log(uservar);

}

createtoken();
app.listen(3000,()=>{
    console.log("ok");
})

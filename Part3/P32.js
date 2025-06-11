const printUserDetails = (info)=>{
    const {name:userName,age:userAge} = info
    console.log(`User's name is ${userName}, and they are ${userAge} years old.`)
}
const info ={
    name:"Rohan",
    email:"boddupally.rohan@minfytech.com",
    age:21
}
printUserDetails(info)
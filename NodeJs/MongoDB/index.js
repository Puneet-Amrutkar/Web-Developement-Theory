const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/sample", {useNewUrlParser:true, useUnifiedTopology: true}).then(() => {
    console.log("connected to mongodb");
}).catch((err) => {
    console.log(err);
})

const student = new mongoose.Schema({
    name:String,
    age:Number
})

const Student = new mongoose.model("Student", student);

const dataAdder = async () => {
    // const ss = new Student({
    //     name:"Puneet",
    //     age:"19"
    // })

    // await ss.save();

    await Student.create({
        name:"Puneet",
        age:"19"
    })

    const list = await Student.find({age:{$gte:19}});       // gte: greater than equal to
    console.log(list);
}

dataAdder();
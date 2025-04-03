import Todo from "../models/todoSchema.js";

export const addTodo  = async(req,res)=>{
    const newTodo = new Todo({ text: req.body.text });
    console.log("newTodo",newTodo)
    await newTodo.save();
    res.json(newTodo)
}


export const deleteTodo = async(req,res)=>{

    await Todo.findByIdAndDelete(req.params.id);
    res.json({message:" Todo deleted"})
}




export const getTodo = async(req,res)=>{
const todos = await Todo.find();
res.json(todos)

}


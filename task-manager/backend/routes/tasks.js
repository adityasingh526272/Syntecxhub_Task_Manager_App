const router = require("express").Router()
const Task = require("../models/Task")
const auth = require("../middleware/auth")

// Create Task

router.post("/",auth,async(req,res)=>{

const task = new Task({
userId:req.user.id,
title:req.body.title,
description:req.body.description
})

await task.save()
res.json(task)

})

// Get Tasks

router.get("/",auth,async(req,res)=>{

const tasks = await Task.find({userId:req.user.id})
res.json(tasks)

})

// Update Task

router.put("/:id",auth,async(req,res)=>{

const task = await Task.findByIdAndUpdate(
req.params.id,
req.body,
{new:true}
)

res.json(task)

})

// Delete Task

router.delete("/:id",auth,async(req,res)=>{

await Task.findByIdAndDelete(req.params.id)
res.json("Deleted")

})

module.exports = router
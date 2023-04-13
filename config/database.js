import mongoose from "mongoose"

mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection

mongoose.connect(process.env.DATABASE_URL)

db.on('connected', function(){
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
})


import mongoose, { mongo } from 'mongoose'

const Schema = mongoose.Schema

const racerSchema = new Schema({
  name: String,
  champ: Boolean,
})

const Racer = mongoose.model('Racer', racerSchema)

export{
  Racer
}


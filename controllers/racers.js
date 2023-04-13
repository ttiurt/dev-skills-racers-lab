import { Racer } from "../models/racer.js"

//import { racers } from "../data/racer-data.js"

function index(req, res) {
  Racer.find({})
  .then(racers => {
    res.render('racers/index', {
      racers: racers,
      time: req.time
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newRacer(req, res){
  res.render('racers/new')
}

function create(req, res){
  console.log(req.body)
  req.body.champ = false
  Racer.create(req.body)
  .then(racer => {
    res.redirect('/racers')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/racers')
  })
}

function show(req,res){
  Racer.findById(req.params.racerId)
  .then(racer => {
    res.render('racers/show', {
      racer: racer
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/racers')
  })
}

function deleteRacer(req, res) {
  console.log('working')
  Racer.findByIdAndDelete(req.params.racerId)
  .then(racer => {
    res.redirect('/racers')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/racers')
  })
}

export{
  index,
  newRacer as new,
  create,
  show,
  deleteRacer as delete,
}
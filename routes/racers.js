import { Router } from 'express'
import * as racersCtrl from '../controllers/racers.js'

const router = Router()

// GET localhost:3000/users
router.get('/', racersCtrl.index)

router.get('/new', racersCtrl.new)

router.get('/:racerId', racersCtrl.show)

router.post('/', racersCtrl.create)

router.delete('/:racerId', racersCtrl.delete)

export { router }

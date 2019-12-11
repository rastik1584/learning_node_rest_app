const express = require('express')
const router = express.Router()
const Post = require('../models').Post

router.get('/', async (req, res) => {
  let rows = await Post.findAll()
  res.json(rows)
})

router.post('/', async (req, res) => {
  let row = await Post.create(req.body)
  res.json(row ? 'Create :)': 'Not :(')
})

router.put('/:id', async (req, res) => {
  let row = await Post.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  res.json(row ? 'Update :)': 'Not :(')
})

router.delete('/:id', async (req, res) => {
  let del = await Post.destroy({where: { 
    id: req.params.id
  }})
  res.json(del == true ? 'Zmazané' : 'Nie')
})

module.exports = router
const { Router } = require('express');

const routes = new Router()

routes.get('/' , (req,res)=>{
  return res.render('index')
})

module.exports = routes;

const { Router } = require('express');
const path = require('path');

const router = new Router()

router.get('/' , (req,res)=>{
  return res.sendFile(path.join(__dirname,'public/index.html'))
})

module.exports = router;

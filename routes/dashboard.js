let express = require('express');
let router = express.Router();

router.get('/dashboard',function(req,res){
  
    if(!req.isAuthenticated()) {
        res.redirect('/login');
      return
    }
  
    res.send("you've arrived here, so you must be authenticated")
  })


module.exports = router;
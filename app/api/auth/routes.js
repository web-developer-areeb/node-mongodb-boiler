const { Router } = require("express");

const router = Router();

router.get('/login', (req, res) => {
  console.log('ok');
  return res.json('Hello from auth');
});

module.exports = router;
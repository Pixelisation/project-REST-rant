const router = require('express').Router()

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/', (req, res) => {
  let places = [{
    name: 'buffalo wild wing',
    city: 'Atlanta',
    state: 'GA',
    cuisines: 'Wings',
    pic: 'images/Buffalo-wild-wings.png'
  }, {
    name: 'Robertos Taco Shop',
    city: 'North Las Vegas',
    state: 'NV',
    cuisines: 'Taco',
    pic: 'images/Robertos-Taco-Shop.png'
  }]
  
  res.render('places/index', {places})
})



module.exports = router
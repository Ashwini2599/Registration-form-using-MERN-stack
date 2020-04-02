const router = require('../node_modules/express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const nameOfTheStudent = req.body.nameOfTheStudent;
  const dateOfBirth = Date.parse(req.body.dateOfBirth);
  const gender=req.body.gender;
  const classAd=req.body.classAd;
  const fatherName=req.body.fatherName;
  const motherName=req.body.motherName;
  const permanentAddress=req.body.permanentAddress;
  const phone=Number(req.body.phone);
  const whatsAppNumber=Number(req.body.whatsAppNumber);
  const email=req.body.email;
  const category=req.body.category;
  const transport=req.body.transport;
  

  const newUser = new User({
    nameOfTheStudent,
    dateOfBirth,
    gender,
    classAd,
    fatherName,
    motherName,
    permanentAddress,
    phone,
    whatsAppNumber,
    email,
    category,
    transport
});

newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.nameOfTheStudent = req.body.nameOfTheStudent;
      user.dateOfBirth = Date.parse(req.body.dateOfBirth);
      user.gender=req.body.gender;
      user.classAd=req.body.classAd;
      user.fatherName=req.body.fatherName;
      user.motherName=req.body.motherName;
      user.permanentAddress=req.body.permanentAddress;
      user.phone=Number(req.body.phone);
      user.whatsAppNumber=Number(req.body.whatsAppNumber);
      user.email=req.body.email;
      user.category=req.body.category;
      user.transport=req.body.transport;
      
      user.save()
      .then(() => res.json('User updated!'))
      .catch(err => res.status(400).json('Error: ' + err));
  })
  .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
var express = require('express');
var router = express.Router();
const { User, Important, sequelize, Sequelize } = require('../models');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const secret = 'cakaosecret123!';

sequelize.sync().then(() => {
  console.log('Sync Complete.');
})

const errorRes = (res, status, message, receives) => {
  return res.status(status).json({
    status: status,
    message: message,
    receives: receives,
  })
}

const successRes = (res, message, receives) => {
  return res.status(200).json({
    status: 200,
    message: message,
    receives: receives,
  });
}

router.post('/signup', function(req, res) {
  console.log('test', req.body)
  const id = req.body.kakao_id;
  let password = req.body.password;
  const url = req.body.url;
  const tag = req.body.tag;

  const receives = { id, url, tag};

  if (!id || !password || !url || !tag) {
    return errorRes(res, 400, 'Some parameters are lost.', receives);
  }

  password = crypto.createHash('sha512').update(password).digest('hex');
  
  User.findOrCreate({
    where: {
      user_id: id
    },
    defaults: { password }
  }).spread((user, created) => {
    if (!created) {
      return errorRes(res, 412, 'User ID duplicated.', receives)
    }

    Important.findOrCreate({
      where: {
        userId: id
      },
      defaults: { url, tag}
    }).spread((user, created) => {
      if (!created) {
        return errorRes(res, 412, 'User ID duplicated.', receives)
      }
    })
    
    return successRes(res, 'a user successfully created.', receives) 
  })
});

router.post('/signin', function(req, res) { 
  const id = req.body.kakao_id;
  let password = req.body.password;

  const receives = { id };

  if (!id || !password) {
    return errorRes(res, 400, '일부 매개 변수가 손실됩니다.', receives);
  }

  password = crypto.createHash('sha512').update(password).digest('hex');

  User.findOne({
    where: {
      user_id: id,
      password
    }
  }).then(user => {
    if (!user) {
      return errorRes(res, 400, 'user not exists or password wrong.', receives);
    }

    const token = jwt.sign({
      exp: Math.floor(Date.now() / 1000) + (60 * 60),
      id: user.id,
    }, secret);
    return res.json({
      status: 200,
      message: 'successfully generate a token',
      accessToken: token
    });
  });
});

module.exports = router;
// userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');	// 유저 컨트롤러 가져오기

router.post('/signup', userController.signup);			// 회원가입 부분
router.post('/loginCheck', userController.loginCheck);	// 로그인 부분
router.get('/userInfo', userController.userInfo);	// 테이블 데이터 부분
console.log('찍히나:::::',router.get('/userInfo', userController.userInfo));

module.exports = router;

const express = require('express');
const router = express.Router();
const Newsdd = require('../lib/mongo').Newsdd;
// const moment = require('moment');

// import { Router } from 'express'

// const router = Router()

// Mock Users
// const news = [
//   { name: '1111' },
//   { name: '2222' },
//   { name: '3333' },
// ]

router.get('/news',function (req,res,next) {
    Newsdd.find({}).exec(function(err,result) {
        console.log(err,result,'@@@@@@@@@');
        if (!err) {
            console.log(result,'seccece');
            // res.render('news',{
            //     news:result,moment:moment
            // })
            res.send(result);
        } else {
            console.log('erro!!');
        };
    })
    // res.json(news);
    
})

/* GET users listing. */
// router.get('/news', function (req, res, next) {
//     console.log('Enter', news);
//   res.json(news)
// })

// /* GET user by ID. */
// router.get('/news/:id', function (req, res, next) {
//   const id = parseInt(req.params.id)
//   if (id >= 0 && id < news.length) {
//     res.json(news[id])
//   } else {
//     res.sendStatus(404)
//   }
// })



// const express = require('express');
// const router = express.Router();
// const db_url = "mongodb://jinrilin:jinrilin@ds133428.mlab.com:33428/heroku_ptmdcjqm";
// const mongoose = require('mongoose');


// mongoose.connect(db_url,function (err,res){
//     if (err) {
//         console.log('@@@ERROR connecting to: ' + db_url + '. ' + err);
//     } else {
//         console.log('@@@Succeeded connected to: ' + db_url);
//     }
// });


// const { Schema } = mongoose;

// // const adminSchema = new mongoose.Schema({
// //     admin_acc: String,
// //     admin_psw: String
// // })

// const newsSchema = new mongoose.Schema({
//     news_title:String,
//     news_date:Date,
//     news_content:String,
//     news_img:String
// })

// router.get('/news', function (req, res, next) {
//     var Newsdd = mongoose.model('newsqqs',newsSchema);
//     console.log(Newsdd,'newss');
//     Newsdd.find({}).exec(function (err, result) {
//         console.log('result',result);
//         res.json(result);
//     });
// })

export default router;
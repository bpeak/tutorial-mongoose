const express = require('express')
const app = express()
const PORT = 80
app.listen(80, () => {
    console.log(`PORT ${PORT} CONNECTED SUCCESS`)
})

const db = require('./db')
const model = db()

app.get('/create', (req, res) => {
    const Post = new model.Post({
        title : "mongoose tutorial",
        author : "kihyun"
    })
    Post.save((err) => {
        if(err){
            console.log(err)
            return res.send('실패')
        }
        res.send('create 성공')
    })
})

app.get('/retrieve', (req, res) => {
    const field = { title : "mongoose tutorial" }
    model.Post.find(field, (err, posts) => {
        if(err){
            console.log(err)
            return res.send('실패')
        }
        console.log(posts)
        res.send('retrieve 성공')
    })
})

/*  < notice >
    업데이트 방법
    1) update 메소드 이용 업데이트
        (값 확인하지 않고 바로 업데이트)
    2) find 로 값찾은후 => save 형태로 업데이트
        (값 확인후 업데이트)
*/

app.get('/update', (req, res) => {
    const field = { author : "kihyun" }
    const query = { $set : { title : "mongoose tutorial2"} }
    model.Post.update(field, query, (err, output) => {
        if(err){
            console.log(err)
            return res.send('실패')
        }
        console.log(output)
        res.send('update1 성공')
    })
})

app.get('/update2', (req, res) => {
    const field = { author : "kihyun" }
    model.Post.findOne(field, (err, post) => {
        if(err){
            console.log(err)
            res.send('실패')
        }
        post.title = "mongoose tutorial>.<"
        post.save(() => {
            res.send('update2 성공')
        })
    })
    
})

app.get('/delete', (req, res) => {
    model.Post.remove({}, (err, output) => {
        if(err){
            console.log(err)
            res.send('실패')
        }
        console.log(output)
        res.send('delete 성공')
    })
})

app.get('/InvalidData', (req, res) => {
    const Post = new model.Post({
        title : "mongoose tutorial",
        author : [1,2,3]
    })
    Post.save((err) => {
        if(err){
            console.log(err)
            return res.send('create 실패')
        }
        res.send('create 성공')
    })
})
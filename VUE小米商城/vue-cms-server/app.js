const express = require('express')

const list = require('./data/list.json')
const info = require('./data/info.json')
const cmt = require('./data/comment.json')
const lunbo = require('./data/lunbo.json')
const imgctg = require('./data/imgctg.json')
const imglist = require('./data/imglist.json')
const goodslist = require('./data/goodslist.json')


const app = express()

app.use(express.static('./public'))

app.get('/api/getlunbo',(req,res)=>{
    let cb = req.query.callback;
    let result = `${cb}(${JSON.stringify(lunbo)})`
    res.send(result)
})
app.get('/api/getlist',(req,res)=>{
    let cb = req.query.callback;
    // console.log(cb);
    let result = `${cb}(${JSON.stringify(list)})`
    res.send(result)
})

app.get('/api/getinfo',(req,res)=>{
    let cb = req.query.callback;
    // console.log(req.query);
    let id = req.query.id - 1;//id与下标相差1
    let result = `${cb}(${JSON.stringify(info.message[id])})`//只传接口id的数据
    res.send(result)
})

app.get('/api/getcomments',(req,res)=>{
    // console.log(req.query);
    let cb = req.query.callback;
    let page = req.query.pageIndex;
    let obj = cmt.list.filter(item=>{
        return item.id <= page*5
    })
    let length = cmt.list.length;
    let sendObj = {obj,length}
    let result = `${cb}(${JSON.stringify(sendObj)})`
    res.send(result)
})

app.get('/api/subcmt',(req,res)=>{
    // console.log(req.query);
    let obj = {}
    obj.content = req.query.content;
    obj.name = req.query.name;
    obj.id = cmt.list.length + 1;
    obj.add_time = new Date();
    // console.log(obj);
    cmt.list.push(obj)
})

app.get('/api/getimgctg',(req,res)=>{
    let cb = req.query.callback;
    let result = `${cb}(${JSON.stringify(imgctg)})`
    res.send(result)
})

app.get('/api/getimglist',(req,res)=>{
    let cb = req.query.callback;
    let result = `${cb}(${JSON.stringify(imglist)})`
    res.send(result)
})

app.get('/api/getgoodslist',(req,res)=>{
    let cb = req.query.callback;
    let page = req.query.pageIndex;
    let obj = goodslist.list.filter(item=>{
        return item.id <= page*6
    })
    let length = goodslist.list.length;
    let sendObj = {obj,length}
    let result = `${cb}(${JSON.stringify(sendObj)})`
    res.send(result)
})

app.get('/api/getgoodsinfo',(req,res)=>{
    let cb = req.query.callback;
    let id = req.query.id -1;
    let result = `${cb}(${JSON.stringify(goodslist.list[id])})`//只传接口id的数据
    res.send(result)
})

app.listen(5000,()=>{
    console.log("running at port 5000");
})

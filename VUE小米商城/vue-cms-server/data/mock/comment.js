const Mock = require('mockjs')
const fs = require('fs')
let data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|50': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'content':"@ctitle",
        'name':'@cname',
        'add_time':'@datetime()',
    }],
    'img|50': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'content':"@ctitle",
        'name':'@cname',
        'add_time':'@datetime()',
    }]
}

)
// 输出结果
fs.writeFileSync('../comment.json',JSON.stringify(data, null, 4))
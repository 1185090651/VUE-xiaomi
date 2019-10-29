<template>
  <div class="comment-container">
      <h3>发表评论</h3>
      <hr>
      <textarea placeholder="请输入要评论的内容(不要超过120字)" maxlength="120" v-model="msg"></textarea>
      <mt-button type="primary" size="large" @click="subCmt">发表评论</mt-button>
      

			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item, index) in comments" :key="index">
					<div>
						<div class="mui-media-body">
							<h3>{{ item.content }}</h3>
							<p class='mui-ellipsis'>
                                <span>{{ index+1 }}楼&nbsp;&nbsp;&nbsp;{{ item.name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dataFormat}}</span>
                            </p>
						</div>
					</div>
				</li>
			</ul>
      <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            pageIndex:1,//默认展示第一页
            num:0,
            comments:[],
            msg:'',
        }
    },
    created() {
        this.getComments()
    },
    methods: {
        getComments(){//获取评论数据
            this.$http.jsonp('api/getcomments?pageIndex='+this.pageIndex).then(res=>{
                // console.log(res);
                this.comments = res.body.obj
                this.num = res.body.length
            })
        },
        getMore(){//加载更多
            this.pageIndex++;
            this.getComments();
            if(this.comments.length == this.num){//判断没有评论
                Toast("没有更多评论了哦！")
            }
        },
        subCmt(){//发表评论
            // console.log(this.msg);
            if(this.msg){//如果有评论
                Toast({
                        message:'添加成功',
                        position:'bottom',
                        duration:2000
                    });
                this.$http.jsonp('api/subcmt',{params:{content:this.msg,name:'匿名用户'}}).then(res=>{
                    getComments();
                })
                this.msg = ''//为什么上面的是同步执行的？？？
            }else{//没有评论
                Toast({
                    message:'评论不能为空！',
                    position:'bottom'
                })
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    .comment-container{
        h3{
            font-size: 18px;
        }
        textarea{
            font-size: 14px;
            height: 85px;
            margin: 0
        }
        ul{
            li{
                padding-top: 10px;
                padding-bottom: 0;
                padding-left: 0;
                .mui-media-body{
                    h3{
                        font-size: 14px;
                        margin: 0;
                        padding: 0;
                        font-weight: 500;
                        color: #000;
                    }
                    .mui-ellipsis{
                        font-size: 11px;
                        padding-top: 5px;
                    }
                }
            }
        }
    }
</style>
<template>
  <div>


      <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<router-link :to="`/home/newsInfo/` + item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h3>{{ item.title }}</h3>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{ item.add_time | dataFormat }}</span>
                                <span>点击:{{ item.click }}次</span>
                            </p>
						</div>
					</router-link>
				</li>

			</ul>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            newsList:[]
        }
    },
    created() {
        this.getNewsList()
    },
    methods: {
        getNewsList(){//获取新闻列表
            this.$http.jsonp('api/getlist').then(res=>{
                // console.log(res);
                if(res.body.status === 0){
                    this.newsList = res.body.message
                }else{
                    Toast('获取新闻列表失败!')
                }
            })
        }
    },
}
</script>

<style lang="scss" scoped>
    .mui-table-view{
        li{
            h3{font-size: 14px;}
            .mui-ellipsis{
                font-size: 12px;
                color: #226aff;
                display: flex;
                justify-content: space-between;//左右对齐
            }
        }
    }
</style>
<template>
    <div class="newsInfo-container">
        <h3 class="title">{{ newsInfo.title }}</h3>
        <p class="subTitle">
            <span>发表时间:{{ newsInfo.add_time | dataFormat }}</span>
            <span>点击:{{ newsInfo.click }}次</span>
        </p>

        <hr>

        <div class="content" v-html="newsInfo.content"></div>
        <comment></comment>
    </div>
</template>

<script>
import {Toast} from 'mint-ui';
import comment from '../subCom/comment.vue'
export default {
    
    data() {
        return {
            id:this.$route.params.id,
            newsInfo:{}
        }
    },
    created() {
        this.getListInfo()
    },
    methods: {
        getListInfo(){
            this.$http.jsonp('api/getinfo',{params:{id:this.id}}).then(res=>{
                // console.log(res);
                if(res.body){
                    this.newsInfo = res.body
                }else{
                    Toast("此新闻暂无详情！")
                }
            })
        }
    },
    components:{
        "comment":comment
    }
}
</script>

<style lang="scss" scoped>
    .newsInfo-container{
        padding: 0 4px;
        .title{
            font-size: 16px;
            text-align: center;
            margin:15px 0;
            color: red;
        }
        .subTitle{
            font-size: 13px;
            color:#226aff;
            display: flex;
            justify-content: space-between;
        }
    }
</style>
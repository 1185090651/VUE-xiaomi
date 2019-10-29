<template>
  <div class="goodlist-container">
      <router-link :to="'/home/goodsInfo/' + item.id" class="goods-item" v-for="item in goodslist" :key="item.id" tag="div">
        <img :src="item.img_url" alt="">
        <div class="box">
            <h1 class="title">{{ item.title }}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.nprice}}</span>
                    <span class="old">￥{{item.oprice}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.num}}件</span>
                </p>
            </div>
        </div>
      </router-link>
      <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            pageIndex:1,
            goodslist:[],
            num:0
        }
    },
    created() {
        this.getGoodsList()
    },
    methods: {
        getGoodsList(){
            this.$http.jsonp('api/getgoodslist',{params:{pageIndex:this.pageIndex}}).then(res=>{
                // console.log(res);
                this.goodslist = res.body.obj,
                this.num = res.body.length
            })
        },
         getMore(){//加载更多
            this.pageIndex++;
            this.getGoodsList()
            if(this.goodslist.length == this.num){//判断没有商品
                Toast("没有更多商品了哦！")
            }
        },
    },
}
</script>

<style lang="scss" scoped>
    .goodlist-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0;
        margin: 0;
        background-color: #F0F0F0;
        min-height: 293px;
        .goods-item{
            width: 49%;
            height: 100%;
            border: 2px;
            background-color: #fff;
            margin-bottom: 8px;
            img{
                width: 100%;
                height: 100%;
            }
            .box{
                padding-left: 5px;
                padding-right: 5px;
                .title{
                font-size: 14px;
                max-height: 28px;
                overflow: hidden;
            }
            .info{
                .price{
                    padding-top: 10px;
                    .now{
                        color: red;
                        font-size: 17px;
                    }
                    .old{
                        font-size: 12px;
                        text-decoration: line-through;
                        margin-left: 10px;
                    }
                }
                .sell{
                    margin-bottom: 0;
                    padding-bottom: 5px;
                    display: flex;
                    justify-content: space-between;
                    font-size: 13px;
                }
            }
            }
        }
    }
</style>
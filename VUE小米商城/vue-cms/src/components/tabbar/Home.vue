<template>
  <div>

    <!--轮播图区域 -->
    <mt-swipe :auto="4000">
    <mt-swipe-item v-for="item in lunbotuList" :key="item.src">
        <img :src="item.src" alt="">
    </mt-swipe-item>
    </mt-swipe>


    <!-- 六宫格区域 -->
     <ul class="mui-table-view mui-grid-view mui-grid-9">
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
        <img src="../../images/menu6.png" alt="">
	<div class="mui-media-body">新闻资讯</div></router-link></li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
        <img src="../../images/menu2.png" alt="">		
	<div class="mui-media-body">图片分享</div></router-link></li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
        <img src="../../images/menu3.png" alt="">	
	<div class="mui-media-body">商品购买</div></router-link></li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
        <img src="../../images/menu5.png" alt="">
	<div class="mui-media-body">留言反馈</div></router-link></li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
        <img src="../../images/menu4.png" alt="">
    <div class="mui-media-body">视频专区</div></router-link></li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
        <img src="../../images/menu1(1).png" alt="">
    <div class="mui-media-body">联系我们</div></router-link></li>
	</ul> 
  </div>
</template>

<script>
export default {
    data(){
        return {
            lunbotuList:[]
        }
    },
    created(){
        this.getLunbotu()
    },
    methods:{
        getLunbotu(){
            //获取轮播图数据的方法
            this.$http.jsonp('api/getlunbo').then(res=>{
                // console.log(res.body);
                this.lunbotuList = res.body;
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;

    .mint-swipe-item{
        img{
            width: 100%;
            height: 100%;
        }
    }
}
.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border:none;
    img{
        width: 60px;
        height: 60px;
    }

    .mui-media-body{
        font-size: 13px;
    }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0;
}
</style>
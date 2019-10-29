<template>
  <div>
      <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            			<img :src="goodsinfo.img_url" alt="">
					</div>
				</div>
			</div>
			<div class="mui-card">
				<div class="mui-card-header">{{goodsinfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<div class="info-nprice">
							<p class="price">
								市场价：<del>￥{{goodsinfo.oprice}}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{goodsinfo.nprice}}</span>
							</p>
							<p>购买数量：
								<el-input-number v-model="num" @change="handleChange" :min="1" :max="goodsinfo.max" label="描述文字"></el-input-number>
							</p>
							<p class="btn_price">
								<mt-button type="primary" size="small">立即购买</mt-button>&nbsp;&nbsp;
								<mt-button type="danger" size="small" @click="getChange">加入购物车</mt-button>
							</p>
						</div>
					</div>
				</div>
			</div>
			
			<div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>库存情况：{{goodsinfo.num}}件</p>
						<p>一次最多可以购买{{goodsinfo.max}}件</p>
						<p>上架时间：{{goodsinfo.time | dataFormat}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
					<mt-button type="primary" size="large" plain>图文介绍</mt-button>
				</div>
				<div class="mui-card-footer">
					<mt-button type="danger" size="large" plain>商品评论</mt-button>
				</div>
			</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id:this.$route.params.id,
	  goodsinfo:[],
	   num: 1,
    }
  },
  created() {
	this.getgoodsinfo()
  },
  methods: {
    getgoodsinfo(){
    this.$http.jsonp('api/getgoodsinfo',{params:{id:this.id}}).then(res=>{
    //   console.log(res);
      this.goodsinfo = res.body
    })
  	},
   	handleChange(value) {
		// value--;
		// console.log(value);
		// console.log(this.num);
	},
	getChange(){
		// this.$emit('getcount',this.num)
		//拼接一个要保存store中car数组里的商品信息对象
		let Ginfo = {id:this.id,count:this.num,price:this.goodsinfo.nprice,selected:true,img_url:this.goodsinfo.img_url,title:this.goodsinfo.title,max:this.goodsinfo.max}
		//调用mutations的方法将数据保存到state中
		this.$store.commit('addToCar',Ginfo)
	}
  },
}
</script>

<style lang="scss" scoped>
img{
  width:320px;
  height: 320px;
}
.info-nprice{
	.price{
		.now_price{
			font-size: 20px;
			color: red;
			font-weight: bold;
		}
	}
	.btn_price{
		padding-left: 120px;
	}
}
.ball{
	width:15px;
	height: 15px;
	border-radius: 50%;
	background-color: red;
	position: absolute;
	z-index: 99;
	left: 180px;
	top: 577px;
}
</style>
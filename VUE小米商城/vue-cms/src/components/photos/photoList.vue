<template>
  <div>
      <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item',item.id == 0?'mui-active':'']" href="#item1mobile" data-wid="tab-top-subpage-1.html" v-for="item in imgctg" :key="item.id">
							{{ item.title }}
						</a>
					</div>
				</div>

			</div>
    
    <ul class="photo-list">
        <li v-for="item in imglist" :key="item.id">
            <img v-lazy="item.img_url">
            <div class="info">
                <h1 class="info-title">{{item.title}}</h1>
                <div class="info-body">{{item.detail}}</div>
            </div>
        </li>
    </ul>
  
  
  </div>
</template>

<script>
//导入mui的js脚本
import mui from '../../lib/mui/js/mui.min.js';
export default {
    data() {
        return {
            imgctg:[],
            imglist:[]
        }
    },
    created() {
        this.getImgctg(),
        this.getImgList()
    },
    mounted() {//当组件中的DOM结构被渲染好放到页面中后，会执行这个钩子函数  这里的DOM元素是最新的
        //初始化scroll组件
        mui.init();
        mui(".mui-scroll-wrapper").scroll({
            deceleration:0.0005
        })
        // //会报错  在babel.config.js 中加入ignore
    },
    methods: {
        getImgctg(){//获取滑动列表数据
            this.$http.jsonp('api/getimgctg').then(res=>{
                // console.log(res);
                if(res.body.status === 0){
                    this.imgctg = res.body.message
                    this.imgctg.unshift({id:0,title:"全部"})
                }else{
                    Toast('获取滑动列表失败!')
                }
            })
        },
        getImgList(){
            this.$http.jsonp('api/getimglist',{params:{id:this.imgctg[0]}}).then(res=>{
                // console.log(res);
                this.imglist = res.body.message
            })
        },
    },
}
</script>

<style lang="scss" scoped>
    * { 
        touch-action: pan-y; 
      }
      .photo-list{
          list-style: none;
          margin: 0;
          padding: 10px;
          padding-bottom: 0;
        li{
            background-color: #ccc;
            text-align: center;
            margin-bottom: 5px;
            box-shadow: 0 0 9px #999;
            position: relative;
            img{
                width: 100%;
                height: 100%;
            }
            img[lazy=loading]{
                margin: auto;
                width: 40px;
                height: 300px;
            }
            .info{
                color: white;
                text-align: left;
                position: absolute;
                bottom: 0px;
                background-color: rgba(0,0,0,0.4);
                padding: 0 5px ;
                margin: 5px 0px;
                .info-title{
                    font-size: 12px;
                }
                .info-body{
                    font-size: 10px;
                }
            }
        }
      }
</style>
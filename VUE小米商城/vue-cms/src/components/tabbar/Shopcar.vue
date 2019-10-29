<template>
  <div>
    <div class="mui-card" v-for="item in $store.state.car" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
              <div class="left">
                <el-switch v-model="item.selected"></el-switch>
              </div>
              <div class="right">
                <div class="leftt">
                  <img :src="item.img_url" alt="">
                </div>
                <div class="rightt">
                  <div class="top">{{item.title}}</div>
                  <div class="bottom">
                    <div class="left">
                      <span>￥{{item.price}}</span>
                    </div>
                    <div class="right">
                      <el-input-number v-model="item.count" @change="handleChange" :min="1" :max="item.max" label="描述文字"></el-input-number>
                    </div>
                    </div>
                </div>
              </div>
					</div>
				</div>
			</div>

      <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            <div class="zj">
              <div class="left">
                <p class="top">总计(不含运费)</p>
                <p class="bottom">已选商品
                  <span>{{ $store.getters.getNum }}</span>
                  件，总价：
                  <span>￥{{ $store.getters.getPrice }}</span>
                  元</p>
              </div>
              <div class="right">
                <mt-button type="danger" size="small">去结算</mt-button>
              </div>
            </div>
					</div>
				</div>
			</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1:true
    }
  },
  created() {
    
  },
  methods: {
    
    handleChange(){}
  },
}
</script>

<style lang="scss" scoped>
  .mui-card-content-inner{
    display: flex;
    .left{
      display: flex;
      align-items: center;
    }
    .right{
      display: flex;
      .leftt{
        width: 100px;
        height: 100px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .rightt{
        flex:1;
        display: flex;
        flex-direction: column;
        .top{
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          margin-bottom: 10px;
        }
        .bottom{
          display: flex;
          .left{
                display: flex;
                margin-right: 10px;
            span{
              color: red;
              font-size: 18px;
              font-weight: bold;
            }
          }
          .right{
            flex: 1;
            width: 100px;
          }
        }
      }
    }
  }
  .zj{
    display: flex;
    width: 100%;
    height: 100%;
    .left{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 255px;
      .bottom{
        margin-bottom: 0;
        span{
          color: red;
          font-size: 18px;
          font-weight: bold;
        }
      }
    }
    .right{
      display: flex;
      align-items: center;
    }
  }
</style>
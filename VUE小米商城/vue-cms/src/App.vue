<template>
  <div class="app-container">

    <!-- 顶部 Header 区域 -->
    <mt-header fixed title="小米商城">
      <router-link slot="left" to="">
        <mt-button icon="back" @click="go"></mt-button>
      </router-link>
    </mt-header>

    <!-- 中间的 路由 router-view 区域 -->
	<transition>
    <router-view></router-view>		
	</transition>


    <!-- 底部 Tabbar 区域 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-new" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-new" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-new" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{ $store.getters.getAllCount }}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-new" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {
  methods: {
    go(){
      this.$router.go(-1)
    }
  },
}
</script>

<style lang="scss">
  .app-container{
    padding-top: 40px;
	padding-bottom: 50px;
	overflow-x: hidden;
  }
  .v-enter{
	opacity: 0;
	transform: translateX(100%)
  }
  .v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
  }
  .v-enter-active,.v-leave-active{
	transition: all 0.5s ease;
  }
  .mui-bar-tab .mui-tab-item-new.mui-active {
    color: #007aff;
  }
  .mui-bar-tab .mui-tab-item-new {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
  }
  .mui-bar-tab .mui-tab-item-new .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .mui-bar-tab .mui-tab-item-new .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }
.el-input__inner,.el-input-number{
    margin-bottom: 0px!important
  }
</style>
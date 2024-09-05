<template>
    <header class="fxg-header fxg-header--sticky">
      <nav class="fxg-nav">
				<view class="fxg-nav_left">
				  <view>
						<a class="fxg-header__logo_wrapper fxg-keyboard" href="https://dhcargo.com.cn" target="_self" data-analytics="FDX Logo | Home" onclick="FDX.DTM.pushLinkInfo(this)" aria-label="鼎环物流商标"><span class="fxg-mouse" tabindex="-1">
							<img src="../../static/dh_logo.png" width="100%" height="100%" class="fxg-header__logo" alt="dh商标">
						</span></a>
					</view>
					<view class="nav_item">首页</view>
					<view class="nav_item">关于鼎环</view>
					<view class="nav_item">服务项目</view>
					<view class="nav_item">客服中心</view>
					<view class="nav_item">新闻中心</view>
					<view class="nav_item">常见问题</view>
					<view class="nav_item">人才招聘</view>
					<view class="nav_item">联系我们</view>
				</view>
				<view  class="fxg-nav_right">
					<a @click="switchToChinese">中文 </a>
					<span> | </span>
					<a @click="changeLang"> English </a>
					<span> | </span>
					<a> Español</a>
				</view>
			</nav>
		</header>
</template>

<script>
	export default {
	  props: {
	    title: {
	      type: String,
	      default: '标题'
	    }
	  },
	  methods: {

	  }
	}
</script>

<style lang="less">
  @primary-color: #006FF0;
  .fxg-header--sticky {
		z-index: 11000;
    position: fixed;
    top: 0;
	}
	.fxg-header {
		width: 100%;
		height: 55px;
		background: @primary-color;
		box-shadow: 0px 1px 6px 2px rgba(211,211,211,0.24);
	}
	.fxg-nav {
		display: flex;
		width: 80%;
		margin: 0 auto;
		color: white;
		line-height: 55px;
		justify-content: space-between;
		cursor: pointer;
	}
	.fxg-nav_left {
		display: flex;
    width: 80%;
	}
	.fxg-header__logo {
		width: 60px;
		height: 40px;
	  margin-top: 5px;
	}
  .nav_item {
		flex: 1;
		text-align: center;
	}
</style>	
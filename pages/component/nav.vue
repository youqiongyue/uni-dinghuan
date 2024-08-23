<template>
	<u-sticky customNavHeight="0" offsetTop="0">
		<view class="navbar">
			<div class="top-box wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
			<div class="container info">
				<div class="nav-container">
					<img src="https://www.gzdhgj.com/ufile/202303221520037217.png" class="nav-image">
					<div class="nav-left">
						<span>
						</span>
							<a href="http://www.gzdhgj.com">
							中文
						</a>
						<span>
							|
						</span>
						<a href="http://en.gzdhgj.com">
							English
						</a>	<span>
							|
						</span>
						<a href="http://spa.gzdhgj.com">
							Español
						</a>
					</div>

				</div>
			</div>
		</div>
		</view>
	</u-sticky>
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
	    back() {
	      uni.navigateBack({
	        delta: 1
	      });
	    }
	  }
	}
</script>

<style lang="scss">
.navbar {
	height: 100px;
	width: 100%;
  background: url(https://www.gzdhgj.com/images/header_bj.png) no-repeat center;
}
.nav-container {
	display: flex;
	justify-content: space-between;
}
.nav-image {
	height: 68px;
	margin-left: 100px;
	margin-top: 20px;
}
.nav-left {
	margin-right: 80px;
	margin-top: 60px;
	a {
		font-size: 14px;
		color: #191919;
	}
}
</style>	
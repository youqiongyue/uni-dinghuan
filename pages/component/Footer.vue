<template>
<footer class="footer_container">
	<view class="footer_container_inner">
		<view class="footer_item">
			<view>联系我们</view>
			<view>
				  鼎环国际物流（营业部）
				  <br>
          华顺营业部
					<br>
					梁经理：13688857925
					<br>
					站西营业部：
					<br>			
          叶经理：13392696915
					<br>
					恒达营业部
					<br>
					侯经理：13560367755‬
			</view>
		</view>
		<view class="footer_item">
			<view class="foot1-t">服务项目</view>
			<ul>
				<li><a href="/page/cn_service.asp?id=9">国际空运</a></li>
				<li><a href="/page/cn_service.asp?id=10">国际海运</a></li>
				<li><a href="/page/cn_service.asp?id=11">国际快递</a></li>
				<li><a href="/page/cn_service.asp?id=12">国际小包</a></li>
      </ul>
    </view>
		<view class="footer_item">
			<div class="foot1-t">关于我们</div>
			<ul>
				<li><a href="/page/cn_about.asp?id=1030">公司简介</a></li>
				<li><a href="/page/cn_about.asp?id=1032">经营范围</a></li>
				<li><a href="/page/cn_about.asp?id=1031">企业文化</a></li>
				<li><a href="/page/cn_about.asp?id=4121">发展历程</a></li>
				<li><a href="/page/cn_about_zz.asp">荣誉资质</a></li>
			  <li><a href="/page/cn_about_fc.asp">企业风采</a></li>
			</ul>
		</view>
		<div class="footer_item"><div class="foot1-t">新闻中心</div><ul><li><a href="/page/cn_news.asp?fid=1">最新公告</a></li>
			<li><a href="/page/cn_news.asp?fid=2">公司新闻</a></li>
			<li><a href="/page/cn_news.asp?fid=3">行业资讯</a></li></ul></div>
		<div class="footer_item"><div class="foot1-t">客服中心</div><ul><li class="subControl">    
			<ul><li><a href="/page/cn_cust.asp">单号追踪</a></li>
			<li><a href="/page/cn_cust_down.asp">资料下载</a></li><li><a href="/page/cn_cust_view.asp?id=4130">会员注册</a></li>
			<li><a href="/page/cn_cust_view.asp?id=1037">海关编码查询</a></li>
			<li><a href="/page/cn_cust_view.asp?id=1038">城市邮编查询</a></li>
			<li><a href="/page/cn_cust_view.asp?id=1039">FBA仓库查询</a></li>
			</ul></li></ul></div>
		<div class="footer_item"><div class="foot1-t"><img src="/images/qm.png"></div></div>

					
	</view>
</footer>
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

.footer_container {

	background: @primary-color;
	/* color: white; */
	color: rgba(255, 255, 255, 0.8);
}

.footer_container_inner {
	display: flex;
	width: 80%;
	margin: 0 auto;
	padding: 50px 0;
}


.footer_item {
	width: 150px;
	ul {
		list-style: none;
     padding-left: 0px;
	}
	a {
		color: inherit; /* 继承父元素颜色 */
    text-decoration: none; /* 去掉下划线 */
    background-color: transparent; /* 背景透明 */
		color: rgba(255, 255, 255, 0.8);
	}
}
.footer_container_inner {

}
</style>	
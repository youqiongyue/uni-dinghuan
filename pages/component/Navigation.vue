<template>
    <header class="fxg-header fxg-header--sticky">
      <nav class="fxg-nav">
				<view class="fxg-nav_left">
				  <view>
						<a class="fxg-header__logo_wrapper fxg-keyboard" href="/" target="_self" data-analytics="FDX Logo | Home" onclick="FDX.DTM.pushLinkInfo(this)" aria-label="鼎环物流商标"><span class="fxg-mouse" tabindex="-1">
							<img src="../../static/dh_logo.png" width="100%" height="100%" class="fxg-header__logo" alt="dh商标">
						</span></a>
					</view>
					<view class="nav_item" @click="gotoPage('index')">{{$t('index.home_page')}}</view>
					<view class="nav_item" @click="gotoPage('about_us')">{{$t('index.about')}}</view>
					<view class="nav_item" >{{$t('index.serve_items')}}</view>
					<view class="nav_item">{{$t('index.serve_center')}}</view>
					<view class="nav_item">{{$t('index.news_center')}}</view>
					<view class="nav_item">{{$t('index.common_question')}}</view>
					<view class="nav_item">{{$t('index.recruitment')}}</view>
					<view class="nav_item">{{$t('index.contact_us')}}</view>
				</view>
				<view  class="fxg-nav_right">
					<a @click="changeLang('zh-Hans')">{{$t('locale.zh-hans')}}</a>
					<span> | </span>
					<a @click="changeLang('en')">{{$t('locale.en')}} </a>
					<span> | </span>
					<a @click="changeLang('es')">{{$t('locale.es')}}</a>
				</view>
			</nav>
		</header>
</template>

<script>
const routes = {
	'zh-Hans': '/pages/index/index',
	'en': '/pages/index_en/index',
	'es': '/pages/index_es/index'
};
const objLang = {
	'zh-Hans': 'index',
	'en': 'index_en',
	'es': 'index_es'
}
export default {
	props: {
		title: {
			type: String,
			default: '标题'
		}
	},
	methods: {
		changeLang(lang) {
			console.log('Changing language to:', lang, 'Route:', routes[lang]);
			uni.setLocale(lang);
			this.$i18n.locale = lang;
			uni.navigateTo({ 
				url: routes[lang]
			});
		},
		gotoPage(item) {
			const lang = this.$i18n.locale;
			const routes = `/pages/${objLang[lang]}/${item}`;
			console.log(routes)
			uni.navigateTo({ 
				url: routes
			});

		}
	}
}
</script>

<style lang="less">
  @primary-color: #006FF0;
	@hover-color: #3c9cff;
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
		&:hover {
			background: @hover-color;
			height: 55px;
		}
	}
</style>	
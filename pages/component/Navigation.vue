<template>
	<header class="fxg-header fxg-header--sticky" ref="header">
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
				<a class="fxg-nav_right_a" @click="changeLang('zh-Hans')">{{$t('locale.zh-hans')}}</a>
				<span> | </span>
				<a class="fxg-nav_right_a" @click="changeLang('en')">{{$t('locale.en')}} </a>
				<span> | </span>
				<a class="fxg-nav_right_a" @click="changeLang('es')">{{$t('locale.es')}}</a>
			</view>
		</nav>
		<nav class="fxg-nav-mini" @click="toggleNavbar">
			<view class="fxg-nav-mini-container">
				<view class="fxg-nav_left">
				<view>
						<a class="fxg-header__logo_wrapper fxg-keyboard" href="/" target="_self" data-analytics="FDX Logo | Home" onclick="FDX.DTM.pushLinkInfo(this)" aria-label="鼎环物流商标"><span class="fxg-mouse" tabindex="-1">
							<img src="../../static/dh_logo.png" width="100%" height="100%" class="fxg-header__logo" alt="dh商标">
						</span></a>
					</view>
				</view>
				<view class="fxg-nav_right">
					<span></span>
					<span></span>
					<span></span>
				</view>
			</view>
		</nav>
		<view class="nav_item_mini" v-if="isNavbarVisible" ref="navItemMini">
				<view class="nav_item" @click="gotoPage('index')">{{$t('index.home_page')}}</view>
				<view class="nav_item" @click="gotoPage('about_us')">{{$t('index.about')}}</view>
				<view class="nav_item" >{{$t('index.serve_items')}}</view>
				<view class="nav_item">{{$t('index.serve_center')}}</view>
				<view class="nav_item">{{$t('index.news_center')}}</view>
				<view class="nav_item">{{$t('index.common_question')}}</view>
				<view class="nav_item">{{$t('index.recruitment')}}</view>
				<view class="nav_item">{{$t('index.contact_us')}}</view>
		</view>
		<view class="nav_item_mini_bg" v-if="isNavbarVisible"></view>
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
	data() {
    return {
      isNavbarVisible: false
    };
  },
	methods: {
		toggleNavbar(event) {
      event.stopPropagation(); // 阻止事件冒泡
      this.isNavbarVisible = !this.isNavbarVisible;
    },
    closeNavbar(event) {
			const navbar = this.$refs.header;
			// const navbar = this.$el.querySelector('.fxg-header');
      if (navbar && event.target.className === 'nav_item_mini_bg' && this.isNavbarVisible) {
				this.isNavbarVisible = false;
      }
    },
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
	},
	mounted() {
    document.addEventListener("click", this.closeNavbar);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.closeNavbar);
  },
}
</script>

<style lang="less">
  @primary-color: #006FF0;
	@hover-color: #3c9cff;

	.nav_item_mini_bg {
		// width: 100%;
    // position: fixed;
    // top: 0;
    // z-index: 8;
    // background: #0d0d0d;
    // display: none;
    // opacity: 0.6;
    // height: 100%;
		position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    /* color: white; */
    /* font-size: 20px; */
    /* opacity: 0; */
    transition: opacity 0.3s ease;
	}
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
	.fxg-nav-mini {

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
	.fxg-nav-mini {
    z-index: 2018888;
    display: none;
    position: fixed !important;
    position: absolute;
    top: 0;
    right: 0;

	}
	.fxg-nav-mini {
		.fxg-nav_right {
		  width: 38px;
			height: 38px;
			cursor: pointer;
			span {
				width: 100%;
				height: 3px;
				margin: 9px 0 !important;
				background: #CCC;
				display: inherit;
				transition: .5s;
			}
		}
	}

	.fxg-nav_left {
		display: flex;
    width: 80%;
	}
	.fxg-nav_right_a:hover {
		text-decoration: underline;
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
			// background: @hover-color;
			height: 55px;
			text-decoration: underline;
		}
	}
	.fxg-nav-mini-container {
		display: flex;
    justify-content: space-between;
    padding: 5px 25px;
		cursor: pointer;
	}
	.nav_item_mini {
		position: absolute;
    top: 50px; /* Adjust based on header height */
    left: 0;
    background-color: white;
    // border: 1px solid #ccc;
    // display: none; /* Initially hidden */
    // box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
		width: 100%;

		.nav_item {
			color: #333;
			display: block;
			font-size: 18px;
			height: 48px;
			line-height: 48px;
			/* padding-left: 10px; */
			padding-left: 2%;
			cursor: pointer;
			border-bottom: 1px solid #eee;
			&:hover {
				background: @primary-color;
				color: white;
			}
		}
	}

	@media only screen and (max-width:1000px) { 
		.fxg-nav {
			display: none;
		}
		.fxg-nav-mini {
			display: block;
			width: 100%;
		}
	}
</style>	
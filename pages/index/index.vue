<template>
	<view class="express_container">
    <header class="fxg-header fxg-header--sticky">
      <nav class="fxg-nav">
				  <view>
						<a class="fxg-header__logo_wrapper fxg-keyboard" href="https://www.fedex.com/zh-cn/home.html" target="_self" data-analytics="FDX Logo | Home" onclick="FDX.DTM.pushLinkInfo(this)" aria-label="FedEx商标"><span class="fxg-mouse" tabindex="-1">
							<img src="../../static/dh_logo.png" width="100%" height="100%" class="fxg-header__logo" alt="FedEx商标">
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
			</nav>
		</header>
		<view class="banner"></view>

		<view class="express_tab_container">
			<Tabs :tabs="tabs" :current.sync="currentTab" :isSpecial="true">
				<Tab v-for="(tab, index) in tabs" :key="index" :index="index" :current="currentTab">
					<view v-if="index === 0">{{ tab.title }}1111 Content</view>
					<view v-if="index === 1">
						<div class="search-input">
							<u--input
								placeholder="请输入你的单号"
								border="surround"
								v-model="value"
		
								ref="trackIdInput"
								customStyle="
									padding-left: 12px;
									padding-right: 0px;
									background: #fafafa;
									font-size: 20px;
									font-weight: 300;
									width: calc(100% - 3px);
									border: 0;
									height: 38px;
									border-radius: 0;
									box-shadow: none;"
							></u--input>
							<u-button 
									type="primary" 
									text="查询" 
								  @click="handleClick"
									customStyle="
										width: 184px;
										height: 50px;
										background: linear-gradient( 270deg, #296CE1 0%, #5391FF 100%);
									"
								></u-button>
						</div>
					</view>
					<view v-if="index === 2">{{ tab.title }}333 Content</view>
				</Tab>
			</Tabs>
		</view>

		<view class="express_delivery">
			<view class="service_title">
				服务项目
				<view class="service_title_down">SERVICE_ITEMS</view>
			</view>

			<view class="service_item_container">
				<view class="service_item">
					<u--image :showLoading="true" src="../../static/service_one.png" width="80px" height="80px" @click="click"></u--image>
					<view class="service_item_title">海运门到门</view>
					<view class="service_item_desc">文案文案文案</view>
				</view>
				<view class="service_item">
					<u--image :showLoading="true" src="../../static/service_one.png" width="80px" height="80px" @click="click"></u--image>
					<view class="service_item_title">海运门到门</view>
					<view class="service_item_desc">文案文案文案</view>
				</view>
				<view class="service_item">
					<u--image :showLoading="true" src="../../static/service_one.png" width="80px" height="80px" @click="click"></u--image>
					<view class="service_item_title">海运门到门</view>
					<view class="service_item_desc">文案文案文案</view>
				</view>
			</view>
			<view class="service_item_container">
				<view class="service_item">
					<u--image :showLoading="true" src="../../static/service_one.png" width="80px" height="80px" @click="click"></u--image>
					<view class="service_item_title">海运门到门</view>
					<view class="service_item_desc">文案文案文案文案文案文案</view>
					<view class="service_item_desc">文案文案文案文案文案文案</view>
				</view>
				<view class="service_item">
					<u--image :showLoading="true" src="../../static/service_one.png" width="80px" height="80px" @click="click"></u--image>
					<view class="service_item_title">海运门到门</view>
					<view class="service_item_desc">文案文案文案文案文案文案</view>
				</view>
				<view class="service_item">
					<u--image :showLoading="true" src="../../static/service_one.png" width="80px" height="80px" @click="click"></u--image>
					<view class="service_item_title">海运门到门</view>
					<view class="service_item_desc">文案文案文案文案文案文案</view>
				</view>
			</view>
			
			<!-- <Tabs :tabs="serviceTabs" :current.sync="currentTabService">
				<Tab v-for="(tab, index) in tabs" :key="index" :index="index" :current="currentTabService">
					<ul  class="fwxm-rigth-m" v-if="index === 0">				
						<li class="">
							<a href="/page/cn_service_view.asp?id=29">
							<div class="fwxm-rigth-img"><img src="https://www.gzdhgj.com/ufile/202303202123111018.jpg" />
							<div class="fwxm-rigth-icon fwxm-rigth-icon-1"></div>
								<div class="fwxm-rigth-txt">
									<div class="fwxm-rigth-txt-1">美国空运</div>
									<p>美国空运是以美国各大机场为依托，通过货机或者可载货的客机运输货物到达美国，结合当地的经济、政策进行贸易交易，或其他合法操作的国际物流渠道。美国空运以其迅捷，安全，准时的超高效率赢得了相当大的市场，大大缩短了交货期</p>
								</div>
							</div>
							</a>
						</li>
						<li class="">
								<a href="/page/cn_service_view.asp?id=31">
								<div class="fwxm-rigth-img"><img src="https://www.gzdhgj.com/ufile/202303202119426752.jpg">
								<div class="fwxm-rigth-icon fwxm-rigth-icon-1"></div>
								<div class="fwxm-rigth-txt"><div class="fwxm-rigth-txt-1">欧洲空运</div>
								<p>欧洲空运专线是鼎环国际物流整合香港、深圳、广州飞往欧洲的空运物流渠道，并结合清关团队资源开发的欧洲DDP快递专线服，采用头程空运+末端多渠道派送方式</p>
								</div>
								</div>
								</a>
						</li>
						<li class="">
								<a href="/page/cn_service_view.asp?id=34">
								<div class="fwxm-rigth-img"><img src="https://www.gzdhgj.com/ufile/202303202120591845.jpg">
								<div class="fwxm-rigth-icon fwxm-rigth-icon-1"></div>
								<div class="fwxm-rigth-txt"><div class="fwxm-rigth-txt-1">德国空运</div>
								<p>德国空运专线是鼎环国际物流为跨境卖家提供的从深圳，广州，香港三大机场起飞，与多家多家航空公司合作，直飞德国的空运专线渠道（含德国包机专线服务），后端采用德国本土卡车、快递两种派送方式</p>
								</div>
								</div>
								</a>
						</li>
					</ul>
				</Tab>
			</Tabs> -->
		</view>
		
		<view class="special_price_container">
				<view class="service_title">
					特价专区
					<view class="service_title_down">SPECIAL_OFFER</view>
				</view>
				<view class="special_item_container">
					<view class="uni-margin-wrap">
						<view class="special_to_left" @click="toLeft">
							<img src="../../static/left_icon.png" ></img>
						</view>
						<swiper 
						  class="swiper" 
						  circular 
							:indicator-dots="indicatorDots" 
							:autoplay="autoplay" 
							:interval="interval"
							:duration="duration"
							:current="currentIndex"
              @change="onSwiperChange"
						>
							<swiper-item
								v-for="(group, index) in specialPriceGroup"
								:key="index"
								class="swiper-item_child"
							>
								<view
									class="swiper-item uni-bg-red"
									v-for="(item, imgIndex) in group"
									:key="imgIndex"
									:style="{ 
										background: 'url(' + item.bg + ') no-repeat',
										backgroundSize: 'contain'
									}"
								> 
								{{ item.price }}
									<!-- 你可以在这里添加其他内容，比如标题或描述 -->
								</view>
							</swiper-item>
							<!-- <swiper-item class="swiper-item_child">
								<view class="swiper-item uni-bg-red">
	
								</view>
								<view class="swiper-item uni-bg-red">A</view>
								<view class="swiper-item uni-bg-red">A</view>
								<view class="swiper-item uni-bg-red">A</view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item uni-bg-green">B</view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item uni-bg-blue">C</view>
							</swiper-item> -->
						</swiper>
						<view class="special_to_right" @click="toRight">
							<img src="../../static/right_icon.png" ></img>
						</view>
					</view>
				</view>
			  <!-- <view class="service_price_bg">
					<view class="service_price_item">
						<view>美国</view>
						<view>¥ 9.27/kg 99kg起</view>
					</view>
					<view class="service_price_item">
						<view>美国</view>
						<view>¥ 36.05/kg 20kg起</view>
					</view>
				</view> -->
		</view>
		
		<view>
			<view class="service_title">关于我们</view>
			<view class="intro_whole_container">
				<view class="img_container">
					<u--image :showLoading="true" :src="imgSrc" width="530px" height="530px" @click="click"></u--image>
				</view>
				<view class="introduction_container">
					<p class="introduction_detail">鼎环国际物流于2006年成立于广州，2010年进驻深圳，佛山，是经国家相关部门批准专业国际物流公司。</p>
					<p class="introduction_detail">经过十多年的沉淀和发展，鼎环国际已经发展成为了一家专业提供国际仓储与国际物流服务、整合跨国电子商务物流服务商。我们专注于亚马逊FBA头程运输，全球快递、全球空运、全球海运等，业务遍布海内外，现有国内多地中转仓16000余平方，分布在广州、深圳、佛山等多个网点。
					拥有美国、加拿大、墨西哥、日本、欧洲多家海外分支机构，共有海外仓20000余平方。</p>

				</view>
			</view>
		</view>

		<view class="news_container">
			<view class="service_title">
				新闻中心
				<view class="service_title_down">NEWS_CENTER</view>
			</view>
		</view>

		<view class="cor_container">
			<view class="service_title">
			  合作伙伴
				<view class="service_title_down">COOPERATIVE PARTNER</view>
			</view>
		</view>
		
    <view class="title">{{$t('index.demo')}}</view>ddd
    <view class="description">{{$t('index.demo-description')}}</view>
    <view class="detail-link">{{$t('index.detail')}}: <text
      class="link">https://uniapp.dcloud.net.cn/collocation/i18n</text></view>
    <view class="locale-setting">{{$t('index.language-info')}}</view>
    <view class="list-item">
      <text class="k">{{$t('index.system-language')}}:</text>
      <text class="v">{{systemLocale}}</text>
    </view>
    <view class="list-item">
      <text class="k">{{$t('index.application-language')}}:</text>
      <text class="v">{{applicationLocale}}</text>
    </view>
    <view class="locale-setting">{{$t('index.language')}}</view>
    <view class="locale-list">
      <view class="locale-item" v-for="(item, index) in locales" :key="index" @click="onLocaleChange(item)">
        <text class="text">{{item.text}}</text>
        <text class="icon-check" v-if="item.code == applicationLocale"></text>
      </view>
    </view>
  </view>
</template>

<script>
import Navbar from '../component/nav.vue';
import Tabs from '../component/tabs.vue';
import Tab from '../component/tab.vue';

  export default {
	components: {
	    Navbar,
			Tabs,
			Tab
	},
    data() {
      return {
        systemLocale: '',
        applicationLocale: '',
				currentTab: 0,
				value: '',
				value1: '',
				imgSrc: 'https://img.sypost.com/index/UPIMG/DIYShow/About.png',
				currentTabService: 0,
				activeIndex: 0, // 当前激活的标签索引
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: false,
				interval: 5000,
				duration: 1000,
				currentIndex: 0,
				list1: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				],
				tabList: [
					{ label: 'Tab 1', content: 'Content of Tab 1' },
					{ label: 'Tab 2', content: 'Content of Tab 2' },
					{ label: 'Tab 3', content: 'Content of Tab 3' }
				],
				tabs: [
					{ title: '立即查价', },
					{ title: '追踪货物' },
					{ title: '联系我们' }
				],
				tabContents: [
					{ content: 'Content of Tab 1' },
					{ content: 'Content of Tab 2' },
					{ content: 'Content of Tab 3' }
				],
				specialPrice: [
					{
						'price': 9.72,
						'num': 99,
						'bg': '../../static/price_one.png'
					},
					{
						'price': 9.72,
						'num': 99,
						'bg': '../../static/price_two.png'
					},
					{
						'price': 9.72,
						'num': 99,
						'bg': '../../static/price_three.png'
					},
					{
						'price': 9.72,
						'num': 99,
						'bg': '../../static/price_four.png'
					},
					{
						'price': 9.72,
						'num': 99,
						'bg': '../../static/price_one.png'
					},
					{
						'price': 9.72,
						'num': 99,
						'bg': '../../static/price_two.png'
					},
					{
						'price': 9.72,
						'num': 99,
						'bg': '../../static/price_three.png'
					},
					{
						'price': 9.72,
						'num': 99,
						'bg': '../../static/price_four.png'
					}
				],
				serviceTabs: [
					{ title: '国际空运' },
					{ title: '国际海运' },
					{ title: '国际快递' },
					{ title: '国际小包' }
				]
      }
    },
    computed:{
      locales() {
        return [{
            text: this.$t('locale.auto'),
            code: 'auto'
          }, {
            text: this.$t('locale.en'),
            code: 'en'
          },
          {
            text: this.$t('locale.zh-hans'),
            code: 'zh-Hans'
          },
          {
            text: this.$t('locale.zh-hant'),
            code: 'zh-Hant'
          },
          {
            text: this.$t('locale.ja'),
            code: 'ja'
          }
        ]
      },
			specialPriceGroup() {
				const groups = [];
				for (let i = 0; i < this.specialPrice.length; i += 4) {
					groups.push(this.specialPrice.slice(i, i + 4));
				}
        return groups;
			}
    },
    onLoad() {
      let systemInfo = uni.getSystemInfoSync();
      this.systemLocale = systemInfo.language;
      this.applicationLocale = uni.getLocale();
      this.isAndroid = systemInfo.platform.toLowerCase() === 'android';
      uni.onLocaleChange((e) => {
        this.applicationLocale = e.locale;
      })
    },
    methods: {
			onSwiperChange(event) {
        this.currentIndex = event.detail.current;
			},
			toLeft() {
				if (this.currentIndex > 0) {
					this.currentIndex--;
				}
			},
			toRight() {
				if (this.currentIndex < this.specialPriceGroup.length - 1) {
					this.currentIndex++;
				}
			},
			handleClick() {
				console.log(this.value)
				const trackId = this.value;
				// if(index === 1) {
				uni.navigateTo({ 
					url: '/pages/index/search_track?track_id=' + trackId
				});
				// }
			},
			onLocaleChange(e) {
			if (this.isAndroid) {
				uni.showModal({
				content: this.$t('index.language-change-confirm'),
				success: (res) => {
					if (res.confirm) {
					uni.setLocale(e.code);
					}
				}
				})
			} else {
				uni.setLocale(e.code);
				this.$i18n.locale = e.code;
			}
			}
    }
  }
</script>

<style lang="less"> 
  @primary-color: #006FF0;

	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;

	}
	.special_to_left {
		width: 30px;
		height: 30px;
		position: absolute;
    left: 15%;
    top: 30%;
		cursor: pointer;
	}
	.special_to_right {
		width: 30px;
		height: 30px;
		position: absolute;
    right: 15%;
    top: 30%;
		cursor: pointer;
	}
	.swiper {
		height: 180px;
		width: 62%;
		margin: 0 auto;
	}
	.swiper-item_child {
		display: flex;
	}
	.swiper-item {
		display: block;
		text-align: center;
		flex: 1;
		margin: 10px;
	}
	.info {
		position: absolute;
		right: 20rpx;
	}
	.cor_container {
		background: url('../../static/cor_bg.png') no-repeat;
		width: 100%;
		height: 400px ;
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
	.fxg-nav {
		display: flex;
		width: 970px;
		margin: 0 auto;
		color: white;
		line-height: 55px;
	}
	.fxg-header__logo {
		width: 60px;
		height: 40px;
	  margin-top: 5px;
	}
	
	.special_item_container {
		position: relative;
	}
	.nav_item {
		flex: 1;
		text-align: center;
	}
	.express_tab_container {
		width: 60%;
		height: 335px;
		background: #FFFFFF;
		box-shadow: 0px 1px 7px 0px rgba(151,151,151,0.5);
		margin: -50px auto;
	}
	.express_container {
		margin-top: 55px;
	}
  .title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
  }
	.service_title {
		font-size: 32px;
		color:  @primary-color;
		font-weight: 700;
		text-align: center;
		margin-bottom: 40px;
	}
	.service_title_down {
		color: rgba(19, 48, 116, 0.1674);
		line-height: 17px;
		text-align: left;
		font-style: normal;
		text-transform: uppercase;
		text-align: center;
		font-size: 18px;
		margin-top: 5px;
	}
	.service_price_bg {
		background: lightyellow;
		display: flex;
	}
	.express_delivery {
		background: #fff;
		margin-top: 100px;
	}

  .description {
    font-size: 14px;
    opacity: 0.6;
    margin-bottom: 15px;
  }

  .detail-link {
    font-size: 14px;
    word-break: break-all;
  }

	.service_item_container {
		display: flex;
		width: 80%;
		margin: 0 auto;
		margin: 30px auto;
	}
	.service_item {
		width: 33%;
		display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
	}
	.service_item_title {
		font-weight: 500;
    font-size: 15px;
    color: @primary-color;
    line-height: 15px;
    text-align: right;
    font-style: normal;
    padding-top: 15px;
	}
	.service_item_desc {
		font-weight: 400;
    font-size: 13px;
    color: #687EA2;
    line-height: 9px;
    text-align: justify;
    font-style: normal;
    padding-top: 15px;
	}
	.special_price_container {
		margin-top: 60px;
	}

  .link {
    color: #007AFF;
    margin-left: 10px;
  }

  .locale-setting {
    font-size: 16px;
    font-weight: bold;
    margin-top: 25px;
    margin-bottom: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid #f0f0f0;
  }

  .fwxm-rigth-m  li {
		width: 322px;
		margin-right: 18px;
		background-color: #fff;
		box-sizing: border-box;
		transition: all .3s ease;
	}
	.fwxm-rigth-m  {
		display: flex;
		list-style-type: none; /* 隐藏圆点 */
		justify-content: space-around;
	}
	.fwxm-rigth-img img {
    width: 322px;
    height: 395px;
  }
	.fwxm-rigth-img {
	    position: relative;
	}
	.fwxm-rigth-txt p {
	    display: -webkit-box;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    -webkit-line-clamp: 3;
	    -webkit-box-orient: vertical;
	}
	.fwxm-rigth-txt {
    position: absolute;
    color: #333333;
    top: 170px;
    left: 15px;
    background-color: #ffffff;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    box-sizing: border-box;
    width: 292px;
    height: 150px;
    padding: 20px;
}
	
  .list-item {
    font-size: 14px;
    padding: 10px 0;
  }

  .introduction_detail {
	  margin-bottom: 40px;
	}
  .list-item .v {
    margin-left: 5px;
  }

  .locale-item {
    display: flex;
    flex-direction: row;
    padding: 10px 0;
  }

  .locale-item .text {
    flex: 1;
  }

  .icon-check {
    margin-right: 5px;
    border: 2px solid #007aff;
    border-left: 0;
    border-top: 0;
    height: 12px;
    width: 6px;
    transform-origin: center;
    /* #ifndef APP-NVUE */
    transition: all 0.3s;
    /* #endif */
    transform: rotate(45deg);
  }
	
	.express_swiper_container {
		width: 100%;
		height: 420px;
	}
	.banner {
	  background:transparent url('../../static/banner.png') center center no-repeat;
		background-position: 50% 20%;
		display: block;
		margin: 0 auto;
		width: 100%;
		height: 420px;
		box-sizing: border-box;
		text-align: left;
		background-size: cover;
	}
	
/* 	.banner::before{    
	    content:'';
	    position:absolute;
	    top:0;
	    left:0;
	    width:100%;
	    height:100%;
	    background:transparent url(https://www.gzdhgj.com/ufile/202303222222418596.png) center center no-repeat;
	    filter:blur(5px);
	    z-index:-1;
	    background-size:cover;
	} */
	
	.c-voc-tracking-bar--input {
		border: none;
		border-bottom-left-radius: .4rem;
		border-top-left-radius: .4rem;
		flex: 1 1 auto;
		height: 5.6rem;
		margin-right: .1rem;
		overflow: hidden;
		padding: 1.8rem 1.3rem 0;
		text-overflow: ellipsis;
		padding: 27px 8px 10px 15px;
		white-space: nowrap;
		width: 100%;
	}
	.img_container {
		margin-top: -50px;
	}
	.search-input {
		width: 70%;
		margin: 0 auto;
		height: 46px;
		padding-top: 50px;
		display: flex;
	}
	.fxg-cube__content {
		width: 158px;
		height: 120px;
		background-color: #fafafa;
		padding: 25px 15px;
		transition: .25s ease background-color, .25s ease height;
		line-height: 14px;
	}
	.tab-container {
		display: flex;
		justify-content: center;
		padding-top: 100px;
	}
	.intro_whole_container {
		display: flex;
		padding: 0 80px;
		color: rgb(102, 102, 102)
	}
</style>

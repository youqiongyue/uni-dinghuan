<template>
	<view>
		<view class="search_track_container">
		  <view class="form-container_track">
			<view class="search_price_title"><span class="search_price_title_blue">{{$t('index.search_track')}}</span></view>
	<!-- 		<view class="search_price_title_en"><span class="search_price_title_blue">Tracking</span></view> -->
			<u--form
					class="form-container-total"
					labelPosition="left"
					:model="model1"
					:rules="rules"
					labelWidth="90"
					ref="uForm"
			>
				<u-form-item
					prop="expressInfo.trackNumber"
					class="custom-width"
					ref="item1"
				>
					<u--input
						v-model="model1.expressInfo.trackNumber"
						border="surround"
						class="search-input"
						:placeholder="$t('index.enter_track_id')"
					></u--input>
					<u-button 
					  class="button-search"
					  type="primary"
						:text="$t('index.track_button')"
						@click="searchTrack"
					>
					</u-button>
				</u-form-item>
			</u--form>
			<view v-if="isLoading">
				<u-loading-icon></u-loading-icon>
			</view>
			<view v-else-if="hasResult">
				<view v-if="isSucc" class="route-result-container">
					<view class="route-result-status">
						<view class="route-result-status_item">
							<view class="route-result-status_item_status">
								<view class="route-result-status_detail search_icon___2pIme" v-if="trackInfo[0].track.status && trackInfo[0].track.status.includes('签收')">
									<span role="img" aria-label="check-circle" class="anticon anticon-check-circle">
										<svg viewBox="64 64 896 896" focusable="false" data-icon="check-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
										</svg>
									</span>
							  </view>
								<view class="route-result-status_detail">
									<view><span class="route-result-status_title">Billid：</span>{{ trackInfo[0].track.billid }}</view>
									<view>
										<span class="route-result-status_title">Status：</span>{{ trackInfo[0].track.status  || '在途中' }}
										<!-- <u-icon name="checkmark-circle-fill" color="#00a500" size="20"></u-icon> -->
									</view>
								</view>
					
							</view>
	
						</view>
						<view class="route-result-status_item">
							<view><span class="route-result-status_title">Country：</span>{{ trackInfo[0].track.country }}</view>
							<view><span class="route-result-status_title">CountryCode：</span>{{ trackInfo[0].track.countryCode }}</view>
						</view>
						<view class="route-result-status_item">
							<view><span class="route-result-status_title">transBillid：</span>{{ trackInfo[0].track.transBillid }}</view>
							<view><span class="route-result-status_title">DateTime：</span>{{ trackInfo[0].track.dateTime }}</view>
						</view>
	
					</view>
					<view class="route-result-container_second">
						<view class="dashed-line"></view>
						<view v-for="(routeItem, index) in trackInfo[0].items">
							<view class="route">
								<view class="route-time">
									<span class="route-date-time">{{routeItem.dateTime}}</span>
								</view>
								<view  v-if="index === 0 && routeItem.info ==='已送达' " class="route-status-icon">
									<img data-v-1c16d66e="" src="data:image/svg+xml,%3Csvg width='23' height='23' viewBox='0 0 23 23' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle fill='%23006FF0' cx='11.5' cy='11.5' r='11.5'/%3E%3Cpath d='M10.17 6.585a1.585 1.585 0 1 1 3.171 0h1.586v1.586H8.902V6.585h1.269zm-3.17 0h1.262v2.22h7.299v-2.22h1.268V18H7V6.585zm4.756.635a.634.634 0 1 0 0-1.269.634.634 0 0 0 0 1.269zM9.8 12.845l-.577.454 2.27 2.16s.96-1.956 3.114-3.85l-.509-.582s-1.212 1.174-2.673 2.803L9.8 12.845z' fill='%23FFF' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E">
								</view>
								<view  v-else-if="index === trackInfo[0].items.length -1 "  class="route-status-icon">
									<img data-v-1c16d66e="" src="data:image/svg+xml,%3Csvg width='25' height='25' viewBox='0 0 25 25' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='translate(1 1)' fill='none' fill-rule='evenodd'%3E%3Ccircle stroke='%23DEDEDE' fill='%23FFF' cx='11.5' cy='11.5' r='11.5'/%3E%3Cg fill='%23D8D8D8' fill-rule='nonzero'%3E%3Cpath d='M5.216 5h7.896a1.22 1.22 0 0 1 1.216 1.216v7.899a1.22 1.22 0 0 1-1.216 1.216H9.176a1.203 1.203 0 0 0-2.402 0H5.216A1.22 1.22 0 0 1 4 14.115V6.216A1.22 1.22 0 0 1 5.216 5z'/%3E%3Cpath d='M7.975 13.025a2.368 2.368 0 1 1 0 4.736 2.368 2.368 0 0 1 0-4.736zm0 1.166a1.202 1.202 0 1 0 0 2.404 1.202 1.202 0 0 0 0-2.404zm7.978-1.166a2.368 2.368 0 1 1 0 4.736 2.368 2.368 0 0 1 0-4.736zm0 1.166a1.202 1.202 0 1 0 0 2.404 1.202 1.202 0 0 0 0-2.404z'/%3E%3Cpath d='M19.687 15.271h-1.954a.202.202 0 0 1-.202-.201V14c0-.111.09-.202.202-.202h1.954c.111 0 .202.09.202.202v1.07c0 .11-.091.201-.202.201z'/%3E%3Cpath d='M14.328 11.366h4.769v2.5h-4.769v-2.5zm-.308-3.99h1.753V8.58H14.02V7.376z'/%3E%3Cpath d='M17.976 10.729h1.12v.772h-1.12z'/%3E%3Cpath d='M15.773 7.376l3.303 3.353-1.1.382-2.522-2.53.319-1.205zm-5.85 4.34h4.62v3.615h-4.62v-3.615z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E">
								</view>
								<view  v-else  class="route-status-icon-circle">
									<img data-v-1c16d66e="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAJCAYAAAAPU20uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACISURBVHgBhY67EcMgEES5DRjIVIJLkEJCOnAL7sCuxCW4BbkC3IFdgkpQxpCAbwMlGn02WGb2cXtnzImEllK6OOdetdZeRDoAY875EWOchNBa+yVYDc+llAHe++cGpDq2Qmuve/tbaz3UZrMv3oPfwYc31G5bLcz0tjtCCJO2DJqNC9Dnw4zsDzA9MnrAldZQAAAAAElFTkSuQmCC">
								</view>

								<view class="route-status-content">
									<view class="route-status-text">{{routeItem.info}}</view>
									<view class="route-desc">

										{{$t('searchtrack.current_arrival')}}：<span class="route-remark">{{routeItem.location}}</span>
									</view>
								</view>
							</view>
						</view>
				   </view>
				</view>
				<view v-else class="error-result">
				  {{$t('searchtrack.no_data')}}
				</view>
			</view>
			
		</view>
	  </view>
	</view>
</template>

<script>
import Navigator from '../component/Navigation.vue';
import Footer from '../component/Footer.vue';

export default {
	components: {
		Footer,
		Navigator
	},
	data() {
		return {
			model1: {
				expressInfo: {
					trackNumber: ''
				}
			},
			rules: {
				'expressInfo.trackNumber': {
					type: Number,
					required: true,
					message: '请填写快递单号',
				},
			},
			routers: [
			],
			trackInfo: {},
			isLoading: true,
			hasResult: false,
			isSucc: false
		}
	},
	mounted() {
	  this.$i18n.locale = 'en';
		const query = this.$route.query;
		const trackId = query.track_id;
		console.log(trackId)
		if(!trackId) {
      this.isLoading = false;
      return;
    };
		this.model1.expressInfo.trackNumber = trackId;
    this.getTrackDetail(trackId);
	  
	},
	methods: {
		submit() {
			
		},
		getTrackDetail(trackId) {
			// 4070905457
			const reqData = {
			"Verify": {
				"Clientid": "YMR000",
				"Token": "ZGluZ2h1YW4=3r8lGXz2v9yuoe85C9rk"
			},
			"Datas": [{
				"TrackNumber": trackId
				}]
    }
		this.isLoading = true;

	  uni.request({
	  		url: '/api/PostInterfaceService?method=searchTrack', //仅为示例，并非真实接口地址。
				method: 'POST',
	  		data: reqData,
	  		header: {
	  				'Content-Type': 'application/json;charset=UTF-8' //自定义请求头信息
	  		},
	  		success: (res) => {
					console.log(res.data);
					// res.data = {
					//     "statusCode": "success",
					//     "returnDatas": [
					//         {
					//             "statusCode": "success",
					//             "trackNumber": "YN0003242KN",
					//             "annexs": [],
					//             "track": {
					//                 "billid": "YN0003242KN",
					//                 "transBillid": "YN0003242KN",
					//                 "countryCode": "US",
					//                 "country": "美国",
					//                 "destination": "sz",
					//                 "dateTime": "2024-06-18 10:59:00",
					//                 "trackstatusSid": "101",
					//                 "status": "上网"
					//             },
					//             "items": [
					//                 {
					//                     "dateTime": "2024-06-18 10:59:00",
					//                     "location": "sz",
					//                     "info": "已清关"
					//                 },
					//                 {
					//                     "dateTime": "2023-06-01 16:50:19",
					//                     "location": "小袁缺陷测试系统",
					//                     "info": "订单信息已收到"
					//                 }
					//             ]
					//         }
					//     ]
					// }
					
					if (res.data.statusCode === 'success' && res.data.returnDatas[0].statusCode === 'success' ) {
						this.isSucc = true;
						this.trackInfo = res.data.returnDatas;
						console.log(this.trackInfo)
						// this.routes = this.trackInfo[0].items;
						// console.log(this.routes)
					} else {
						this.isSucc = false;
					}
	  		},
				fail: () => {
					this.isSucc = false;
					uni.$u.toast('错误单号')
				},
				complete: () => {
					this.isLoading = false;
					this.hasResult = true;
				}
	  });
		},
		searchTrack() {
			const trackId = this.model1.expressInfo.trackNumber;
			// 修改链接参数
			// const newUrl = new URL(window.location);
			// newUrl.searchParams.set('track_id', trackId); // 设置新的参数值

			// // 使用 pushState 更新 URL
			// window.history.pushState({ path: newUrl.href }, '', newUrl.href);
			this.getTrackDetail(trackId);
		},
		goHome() {
			uni.reLaunch({
				url: '/' // 替换为您的首页路径
			});
		}
	}
}
</script>

<style scoped>
@bg-color: #F5F5F5;
@primary-color: #006FF0;

.form-container_track {
/*  background: red;
	background-color: rgb(242, 242, 242); */
	width: 100%;
	max-width: 992px;
	margin: 0 auto;
	font-size: 12px;
  /* height: 100%; */
}
.form-container-total {
	background: white;
	border-radius: 4px;
	padding: 15px 30px;
	
}
.form-container {
	background: @bg-color;
	margin-top: 60px;
	min-height: calc(100vh - 310px);
}
.button-search {
	width: 30%;
	height: 45px;
	color: white;
	background:  linear-gradient( 270deg, #296CE1 0%, #5391FF 100%);
	margin: 0;
}
.route-result-container {
	width: 100%;
	margin: 0 auto;
	background: white;
	margin-top: 25px;
	border-radius: 4px;
	padding: 39px 49px;
	box-sizing: border-box;
	color: #999999;
  font-size: 16px;
	position: relative;
}
.route-result-status {
	display: flex;
	margin-bottom: 50px;
}
.route-result-status_item {
	  display: flex;
    flex-direction: column;
    width: 33%;
		font-size: 16px;
		/* color: #006FF0; */

}
.route-result-status_item_status {
	display: flex;
}
.route-result-status_title {
	  /* color: #999999; */
		/* color: black; */
		font-weight: 800;
}
.route {
	display: flex;
	margin-bottom: 20px;
}
.route-time {
	/* width: 200px; */
	width: 50%;
	margin-right: 60px;
}
.route-remark {
	/* padding-left: 30px; */
}

.route-status-icon{ 
	text-align: center;
	margin-right: 60px;
	width: 30px;
	img {
		width: 30px;
	}
}
.search_track_container {
	background: #F5F5F5;
	/* margin-top: 60px; */
	/* min-height: calc(100vh - 310px); */
    min-height: 100vh;
}
.search_price_title {
	font-weight: 800;
	font-size: 30px;
	color: rgba(153, 153, 153, 0.88);
	padding-top: 40px;
	margin-bottom: 20px;
  text-align: center;
}
.search_price_title_blue {
	color: #006FF0;
	padding-left: 10px;
}

.search-input {
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fafafa;
	height: 30px;
	margin-right: 20px;
}

.error-result {
	width: 100%;
	min-height: 300px;
	display: flex;
	justify-content: center;
	font-size: 18px;
	color: rgba(153, 153, 153, 0.88);
	align-items: center;
}

.route-desc {
	font-size: 14px;
}

.dashed-line {
	position: absolute;
	border-right: 1px dashed #d4d4d4;
	left: 275px;
	top: 0.3rem;
	bottom: 30px;
}
.route-result-container_second {
	position: relative;
}

.route-status-icon-circle {
	text-align: center;
	margin-right: 60px;
	width: 30px;
}

.search_icon___2pIme {
	  background-color: #006FF0;
	  width: 50px;
    height: 50px;
    /* padding: 3px; */
    color: #fff;
    font-size: 34px;
		margin-right: 8px;
    /* padding-left: 2px; */
}

.u-icon--right {
	display: inline-block;
}

.search_price_home {
	cursor: pointer;
}
.anticon-check-circle {
	display: inline-block;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -.125em;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
		margin-left: 7px;
}

@media only screen and (max-width:1000px) {  
	.form-container {
		width: 100%;
    max-width: 80%;
    margin: 0 auto;
	}
	.route-status-icon-circle {
		margin-right: 0;
	}
	.route-status-content {
		width: 180px;
		padding-left: 10px;
	}
	.route-status-icon {
		margin-right: 0px;
	}
	.dashed-line { 
		left: 180px;
	}
	.search-input {
		width: 200px;
	}
    .route-result-status {
		flex-direction: column;
	}
	.route-result-status_item {
		width: 100%;
	}
}
@media only screen and (max-width:430px) {  
	.dashed-line { 
		left: 46%;
	}
	.route-time {
		margin-right: 0;
	}
}

</style>
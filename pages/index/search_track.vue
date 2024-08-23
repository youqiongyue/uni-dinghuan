<template>
	<view>
		<div class="form-headline">运单详情</div>
		<view class="form-container">
			<u--form
					class="form-container-total"
					labelPosition="left"
					:model="model1"
					:rules="rules"
					labelWidth="90"
					ref="uForm"
			>
				<u-form-item
					label="快递单号"
					prop="expressInfo.trackNumber"
					class="custom-width"
					ref="item1"
				>
					<u--input
						v-model="model1.expressInfo.trackNumber"
						border="surround"
					></u--input>
					<u-button 
					  class="button-search"
					  type="primary"
						text="查询"
						@click="searchTrack"
						customStyle="{width: 80px;}">
					</u-button>
				</u-form-item>
				
			</u--form>
			<view v-if="isLoading">
				loading<u-loading-icon></u-loading-icon>
			</view>
			<view v-else>
				<view v-if="hasResult" class="route-result-container">
	
					<h3>路由详情</h3>
					<view v-for="(routeItem, index) in trackInfo[0].items">
						<view class="route">
							<view class="route-status-icon">
								<img data-v-1c16d66e="" src="data:image/png;base64,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">
							</view>
							<view class="route-status-content">
								<view class="route-status-text">{{routeItem.info}}</view>
								<view class="route-desc">
									<span class="route-date-time">{{routeItem.dateTime}}</span>
									<span class="route-remark">{{routeItem.location}}</span>
								</view>
							</view>
							
						</view>
					</view>
				</view>
				<view v-else>
			      无订单信息
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
export default {
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
			isLoading: false,
			hasResult: false
		}
	},
	mounted() {
		const query = this.$route.query;
		const trackId = query.track_id;
		console.log(trackId)
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
		this.hasResult = true;
		
		// let res = {};
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
		// this.text = 'request success';
		// if (res.data.statusCode === 'success') {
		// 	this.hasResult = true;
		// 	this.trackInfo = res.data.returnDatas;
		// 	console.log(this.trackInfo)
		// 	// this.routes = this.trackInfo[0].items;
		// 	// console.log(this.routes)
		// }

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
					this.text = 'request success';
					
					if (res.data.statusCode === 'success') {
						this.hasResult = true;
						this.trackInfo = res.data.returnDatas;
						console.log(this.trackInfo)
						// this.routes = this.trackInfo[0].items;
						// console.log(this.routes)
					}
	  		},
				fail: () => {
					
				},
				complete: () => {
					this.isLoading = false;
					this.hasResult = true;
				}
	  });
	  
	},
	methods: {
		submit() {
			
		},
		searchTrack() {
			alert(2222)
		}
	}
}
</script>

<style>
.form-container {
  background: red;
	background-color: rgb(242, 242, 242);
}
.form-container-total {
	width: 500px;
	margin: 0 auto;
}

.form-headline {
	text-align: center;
	width: 100%;
	padding: 56px 0;
	font-size: 38px;
	font-weight: 300;
}
.button-search {
	width: 80px;
	margin-bottom: 0;
}
.route-result-container {
	width: 500px;
	margin: 0 auto;
}
.route {
	display: flex;
	margin-bottom: 20px;
}
.route-remark {
	padding-left: 30px;
}

.route-status-icon{ 
	text-align: center;
	margin-right: 10px;
	width: 30px;
	img {
		width: 30px;
	}
}
</style>
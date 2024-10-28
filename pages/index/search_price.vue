<template>
	<view>
		<Navigator />
		<view class="search_price_container">
			<view class="form-container">
				<view class="search_price_title"><span class="search_price_home" @click="goHome">{{$t('index.home_page')}}</span> / <span class="search_price_title_blue">{{$t('index.search_price')}} </span></view>
				<view class="form-container_upper">
					<u--form
						class="form-container-total"
						labelPosition="left"
						:model="model1"
						:rules="rules"
						labelWidth="90"
						:labelStyle="labelStyle"
						ref="uForm"
				>
					<u-form-item
						:label="$t('searchprice.destination')" 
						prop="expressInfo.destination"
						class="destination-container"
						ref="item1"
					>
						<u--input
							v-model="model1.expressInfo.destination"
							border="surround"
							class="search-input"
							placeholder="请输入国家中文/英文名称/二字码"
							@focus="showDropdown = true"
							@change="destinationChange"
							@blur="hideDropdown"
						>
						</u--input>
						<view v-if="showDropdown" class="dropdown">
							<view
								v-for="(item, index) in history"
								:key="index"
								@click="selectHistory(item)"
								class="dropdown-item"
							>
								{{ item.countryName }}
							</view>
						</view>
					</u-form-item>
					<u-form-item
					  :label="$t('searchprice.weight')" 
						prop="expressInfo.weight"
						ref="item1"
						class="destination-container"
					>
						<u--input
							v-model="model1.expressInfo.weight"
							type="number"
						  class="search-input"
							border="surround"
						>
							<template #suffix>
								<text>KG</text>
							</template>
						</u--input>
					</u-form-item>
					<u-form-item
					  :label="$t('searchprice.length')" 
						prop="expressInfo.length"
						ref="item1"
						class="form-item-mini"
					>
						<u--input
							v-model="model1.expressInfo.length"
							type="number"
						  class="search-input search-input_short"
							border="surround"
						>
							<template #suffix>
								<text>CM</text>
							</template>
						</u--input>
					</u-form-item>
					<u-form-item
					  :label="$t('searchprice.width')" 
						prop="expressInfo.width"
						ref="item1"
						class="form-item-mini"
					>
						<u--input
							v-model="model1.expressInfo.width"
							type="number"
						  class="search-input search-input_short"
							border="surround"
						>
							<template #suffix>
								<text>CM</text>
							</template>
						</u--input>
					</u-form-item>
					<u-form-item
					  :label="$t('searchprice.height')" 
						prop="expressInfo.height"
						ref="item1"
						class="form-item-mini"
					>
						<u--input
							v-model="model1.expressInfo.height"
							type="number"
						  class="search-input search-input_short"
							border="surround"
						>
							<template #suffix>
								<text>CM</text>
							</template>
						</u--input>
					</u-form-item>
				</u--form>
				<u-button @click="submit" class="search_price_button">{{$t('index.search_price')}}</u-button>
				</view>

			</view>

			<view v-if="isLoading" class="loading-container">
				<u-loading-icon></u-loading-icon>
			</view>
			<view v-else-if="hasResult" class="table-container form-container_down">
				<view v-if="this.priceData.length" class="table">
					<view  class="table-header">
						<view class="table-row">
							<view class="table-cell">{{$t('searchprice.channel')}}</view>
							<view class="table-cell">{{$t('searchprice.estimated_freight')}}</view>
							<view class="table-cell">{{$t('searchprice.trans_time')}}</view>
							<view class="table-cell">{{$t('searchprice.available_goods')}}</view>
						</view>
					</view>
					<view class="table-body">
						<view class="table-row" v-for="(item, index) in priceData" :key="index">
							<view class="table-cell">{{ item.channelName }}</view>
							<view class="table-cell">{{ item.feeAmt }}</view>
							<view class="table-cell">{{ item.sendtime }}</view>
							<view class="table-cell">{{ item.productName }}</view>
						</view>
						
					</view>
				</view>
				<view class="empty_container" v-else>
					{{$t('searchprice.no_data')}}
				</view>
			</view>
		</view>
		<Footer></Footer>
  </view>
	
</template>

<script>
import country from './country.js';
import Navigator from '../component/Navigation.vue';
import Footer from '../component/Footer.vue';

const defaultHistory = [{
	countryName: '美国 Unite State',
	countryCode: 'US'
}, {
	countryName: '加拿大 Canada',
	countryCode: 'CA'
}, {
	countryName: '墨西哥 Mexico',
	countryCode: 'MX'
}];
export default {
	components: {
		Footer,
		Navigator
	},
  data() {
    return {
			value: '',
			model1: {
				expressInfo: {
					destination: '',
					weight: '',
					length: '',
					width: '',
					height: ''
				},
			},
			isLoading: false,
			hasResult: false,
			priceData: [],
			showDropdown: false,
			history: defaultHistory,
			labelStyle: {
				color: '#666666', // 标签文字颜色
			},
			rules: {
				'expressInfo.destination': {
					type: 'string',
					required: true,
					message: '请填写目的地',
				},
				'expressInfo.weight': {
					type: 'number',
					required: true,
					message: '请填写重量',
				},
				'expressInfo.length': {
					type: 'number',
					required: false,
					message: '请填写长度',
				},
				'expressInfo.width': {
					type: 'number',
					required: false,
					message: '请填写宽度',
				},
				'expressInfo.height': {
					type: 'number',
					required: false,
					message: '请填写高度',
	
				},

			},
    };
  },
  methods: {
	  change(e) {
			console.log('change', e);
		},
		goHome() {
			uni.reLaunch({
				url: '/' // 替换为您的首页路径
			});
		},
		destinationChange(e) {
			console.log('change', e);
			if(!e) {
			   this.history = defaultHistory;
			   return;
			}
			e = e.toLowerCase();
 			// 这里去获取目的地 根据当前的语言，选择中文/英文/西班牙不支持
			const result = country.filter(item => {
				return item.chinese_name.includes(e) || item.country_code.toLowerCase().includes(e) || item.english_name.toLowerCase().includes(e)
			})
			this.history = result.map(item => {
				return {
					countryName: item.chinese_name + ' ' + (item.english_name),
					countryCode: item.country_code,
					countryRealName: item.chinese_name
				}
			});

			console.log(this.history)
		},
		hideDropdown() {
			// 延迟隐藏下拉框，以便点击历史记录时不会立即隐藏
			setTimeout(() => {
				this.showDropdown = false;
			}, 200);
		},
		selectHistory(item) {
			this.model1.expressInfo.destination = item.countryName; // 设置输入框的值为选中的历史记录
			this.showDropdown = false; // 隐藏下拉框
		},
		submit() {
			  this.$refs.uForm.validate().then(res => {
				// uni.$u.toast('校验通过')
			  this.isLoading = true;
				this.hasResult = false;
				console.log('提交的数据:', this.model1.expressInfo);
				this.priceData = [];
				const { 
					destination, 
					weight,
					length,
					width,
					height
				} = this.model1.expressInfo;
				// 注意最终一定要显示的是二字码
				console.log(destination)
			  const chinese_name = destination.split(' ')[0];
				let countryCode = country.find(item => {
					return item.chinese_name === chinese_name;
				})
				const a = countryCode.country_code;

        if(a) {
					uni.request({
						url: '/api/PostInterfaceService?method=searchPrice',
						method: 'POST',
						data: {
							"Verify": {
								"Clientid": "YMR000",
								"Token": "ZGluZ2h1YW4=3r8lGXz2v9yuoe85C9rk"
								// "Clientid": "LLQ110",
								// "Token": "ZGluZ2h1YW4=deObqEb9fcghc6GWLN8R"
							},
							"Data": {
								"CountryCode": a,
								"Weight": weight,
								"GoodsType": "WPX",
								"PostCode": "",
								// "VolumeArr": [
								// 	{
								// 		"Longs": length,
								// 		"Width": width,
								// 		"Height": height,
								// 		"Num": "1",
								// 		"Weight": weight
								// 	}
								// ]
							}
						},
						success: (res) => {
							console.log(res.data);
							// res.data = {"statusCode":"success","returnDatas":[{"channelImg":"","countryCode":"US","countryName":"美国","unitprice":"50.00","channelCode":"16411","channelName":"香港DHL代理价","logistic":"DHL","ccyCode":"RMB","ccyName":"人民币","priceName":"客户特殊报价-香港DHL代理价","weight":"200.0","formula":"50*200.0/1.000","fuel":"含燃油","feeAmt":"10000.0","sendtime":"","priceNote":"1.巴西、俄罗斯出货需要交高风险金\r<br/>\r<br/>2.不收木架产品，21KG以上木箱包装产品必须带脚\r<br/>\r<br/>3.巴拉圭不接带电产品；\r<br/>\r<br/>需要正本发票的国家：罗马尼亚、保加利亚、卡塔尔、土耳其、秘鲁、黎巴嫩（需提供固定发票模板）、埃塞俄比亚、沙特、巴西（巴西对低申报罚款很重，做关税预付也要提供正本发票）\r<br/>\r<br/>4.DHL所有渠道不接收单件计费重量超300KG的货件，且单票不可以超3000KG(部分国家仍然限制为单票不可超1000KG，），包装最长边不能超过300cm；\r<br/>\r<br/>5.以下国家单票不能超1000公斤：亚美尼亚，白俄罗斯, 福克兰群岛,法罗群岛,格鲁吉亚, 格陵兰, 基里巴斯, 吉尔吉斯斯坦, 利比亚,马里亚纳群岛, 马绍尔群岛, 密克罗尼西亚, 黑山,瑙鲁,帕劳, 萨摩亚, 圣多美和普林西比, 所罗门群岛, 圣巴特尔米, 特克斯和凯科斯, 南苏丹, 塔希提, 东帝汶, 汤加, 突尼斯, 土库曼斯坦, 图瓦卢, 瓦努阿图\r<br/>\r<br/>6.地址更改：加收手续费RMB93元/票，具体更改地址费用需要提供详细地址给我司DHL客服查询。\r<br/>\r<br/>7.偏远费：收取RMB4.5/KG，每票最低收费为RMB223.5,偏远附加费需加收燃油\r<br/>\r<br/>8.税金预付或第三方付：收取手续费用RMB140/票。\r<br/>\r<br/>9.可做核销单报关：报关费200元RMB/票,（可收打了合页及打脚的木箱、卡板货，超重或者超长附加费，）\r<br/>\r<br/>10.超大和超重快件的附加费：长度等于或者大于120CM和单件计费重大于69公斤需加收附加费，RMB837*当月燃油/件。\r<br/>\r<br/>11.特殊处理件：加收特殊处理费RMB1256/件，需*当月燃油，有以下情况需要加收\r<br/>\r<br/>(1)除发货人特殊要求外，外箱上注明标识/文字提示不可叠放的货物 如“请勿叠放”,“Do not stack / No Stack ” \r<br/>(2)外包装或裸包等，不能承受堆叠的货物，形状或货板上的货件阻碍第二个货板或其他非货板运件安全叠放的货。\r<br/>\r<br/>12.高风险地区服务：阿富汗、苏丹、马里、尼日尔、伊拉克、利比亚、叙利亚和也门，寄往以上国家不分文件包裹加RMB233/票*燃油  \r<br/>\r<br/>13.受限制地区服务：中非共和国、厄立特里亚、北韩（暂停）、伊朗伊斯兰共和国（暂停）、刚果民主共和国（即刚果金暂停）、利比亚、伊拉克（暂停包裹）、叙利亚、也门、索马里，寄往以上国家不分文件包裹加RMB326/票*燃油 \r<br/>\r<br/>14.高风险地区服务和受限制地区服务:伊拉克（暂停）、利比亚、叙利亚（暂停），也门需要加收(RMB233+326)/票*燃油\r<br/>\r<br/>15.不接受带锂电池产品国家：阿塞拜疆（暂停）,刚果民主共和国（即刚果金暂停）,伊拉克（暂停包裹）朝鲜（暂停）,古巴（暂停）,叙利亚（暂停）,苏丹（暂停）,南苏丹(暂停）,塔吉克斯坦（暂停）,土库曼斯坦（暂停）,卡塔尔，美属萨摩亚群岛,安哥拉,安圭拉,阿鲁巴岛,伯奈尔,布基纳法索,布隆迪,佛得角,中非共和国,乍得,马里亚纳群岛，科摩罗,刚果,吉布提,埃及,厄立特里亚,埃塞俄比亚,福克兰群岛,法罗群岛,法属圭亚那,冈比亚,格鲁吉亚,格陵兰岛,几内亚,几内亚比绍,赤道几内亚,哈萨克斯坦,科索沃,吉尔吉斯斯坦,莱索托,利比里亚,利比亚,马拉维,马里,毛里塔尼亚,马约特岛岛,密克罗尼西亚,蒙特塞拉特岛,莫桑比克,纳米比亚,荷属安地列斯，尼维斯,尼日尔,卢旺达,圣赫勒拿,圣多美和普林西比,塞内加尔，塞舌尔,塞拉里昂,索马里,索马里兰,圣巴泰勒米,圣尤斯达求斯,苏里南,斯威士兰,坦桑尼亚共和国,突尼斯,特克斯和凯科斯群岛,乌干达,乌兹别克斯坦,英属维尔京斯岛,也门,津巴布韦，密克罗尼西亚联邦,法国的巴黎城市,EBL及ISU机场代码相应对的城市，土耳其,东帝汶，克罗地亚（Zagreb,Split,Rijeka,Pula,Zadar,Osijek,Slavonski Brod此7个城市除外），塞班岛，博内尔，几内亚共和国,英联邦马里亚纳群岛，荷属安的列斯群岛,圣赫勒拿岛,圣巴特勒米岛,圣尤斯特歇斯,英属维尔京群岛，墨西哥( 只能寄往GDL, MTY, QRO 和MEX )乌拉圭、巴拉圭；\r<br/>\r<br/>16.此6个国家配套产品不能用包裹袋包装：尼泊尔、老挝民主主义人民共和、柬埔寨、不丹、缅甸(以上国家3KG以内无服务）\r<br/>\r<br/>17.巴基斯坦带电产品不可装包裹袋子(3KG以内无服务）；孟加拉国不接配套电，只接PI970及PI967内置电，并且不可包裹袋包装；\r<br/>\r<br/>18.沙特阿拉伯海关严禁带有内置摄像头的货物（如带有内置摄像头的无人机、笔、眼镜、手表等）及电子烟进口\r<br/>\r<br/>19.喀麦隆此国家不做关税预付，乌克兰此国家只能做关税到付，不能做关税预付或者第三方支付关税；\r<br/>\r<br/>21.特殊清关及发票要求：土耳其（申报价值超过30欧元的快件）、罗马尼亚、保加利亚、菲律宾、阿鲁巴，意大利、英国、哥斯达黎加，乌克兰（Ukraine）的包裹，随货发票申报价值须包含货物运费,以上国家出口发票要及清关求特殊，出货前需跟销售详细咨询！ \r<br/>\r<br/>22.美国三字代码LRD，货量重量不可以超过30KG，尺寸不可以超过120*80*80；\r<br/>\r<br/>23.凡发往黎巴嫩和科威特 价值超过USD1500或者重量超100KG的货件，均需提供COO（原产地证）随货，随货文件请准备一式三份，正本放货物箱内，外箱标记COO inside。剩下两份彩色的复印件，一份随运单发票，一份贴外箱上。文件缺失会有退件风险，如若因为没有按照要求操作导致重要文件丢失，左右责任以及产生的费用均由寄件人承担。\r<br/>\r<br/>24.尼日利亚：不接纺织品。\r<br/>\r<br/>25.加拿大：货物出口前可以选择税金预付，出口后不接受改税金预付。亚马逊件出货前必须做关税预付；\r<br/>\r<br/>26.突尼斯：不收走带电产品\r<br/>\r<br/>27.印度：邮编174101是只有文件服务的，没有包裹服务\r<br/>\r<br/>28.巴林：目的地公司或机构进口方必须提供商业登记证明并在新的海关系统中登记；私人货物，收件人需在新海关系统中提供身份证号或其他有效证件\r<br/>\r<br/>29.东帝汶：重量和尺寸限制：单件不能超过或者等于120*100*100CM，单件重量不能超过或者等于120KG\r<br/>\r<br/>30.卡塔尔：所有重量段的货物，均需提供正本发票和原产地证随货。\r<br/>\r<br/>31.发往亚马逊仓库及海外仓库货件：发票上须注明TAX ID，EORI或VAT号码，并提供有效的清关方的联系方式，否则可能会造成延误或者额外费用。目的地没有清关公司支付税金的，只能选择税金预付和第三方支付\r<br/>\r<br/>32.发往英国的货件，发票上需申报运费，以便清关；\r<br/>\r<br/>33.所有寄往南非（South Africa）的包裹，随货必须提供商业发票，不接受形式发票，否则将可能罚款至少约USD350/票（最终金额以账单为准）\r<br/>\r<br/>34.科特迪瓦只能做关税到付，不能做关税预付；\r<br/>\r<br/>35.DHL所有渠道到秘鲁，要求单件不可以超30KG；","productName":"【普货】","mcalid":"5000","isFromK5":"1","mweight":"200.0"},{"channelImg":"","countryCode":"US","countryName":"美国","unitprice":"64.89","channelCode":"0401","channelName":"香港DHL代理价（深圳）","logistic":"DHL","ccyCode":"RMB","ccyName":"人民币","priceName":"客户特殊报价-香港DHL代理价（深圳）","weight":"200.0","formula":"((((35*200.0/1.000)*1.2825)+200.0*8)+200.0*8)+200.0*4","rebate":"外加收","fuel":"1.2825","feeAmt":"12977.5","sendtime":"3-4天左右","priceNote":"1.巴西、俄罗斯出货需要交高风险金\r<br/>\r<br/>2.不收木架产品，21KG以上木箱包装产品必须带脚\r<br/>\r<br/>3.巴拉圭不接带电产品；\r<br/>\r<br/>需要正本发票的国家：罗马尼亚、保加利亚、卡塔尔、土耳其、秘鲁、黎巴嫩（需提供固定发票模板）、埃塞俄比亚、沙特、巴西（巴西对低申报罚款很重，做关税预付也要提供正本发票）\r<br/>\r<br/>4.DHL所有渠道不接收单件计费重量超300KG的货件，且单票不可以超3000KG(部分国家仍然限制为单票不可超1000KG，），包装最长边不能超过300cm；\r<br/>\r<br/>5.以下国家单票不能超1000公斤：亚美尼亚，白俄罗斯, 福克兰群岛,法罗群岛,格鲁吉亚, 格陵兰, 基里巴斯, 吉尔吉斯斯坦, 利比亚,马里亚纳群岛, 马绍尔群岛, 密克罗尼西亚, 黑山,瑙鲁,帕劳, 萨摩亚, 圣多美和普林西比, 所罗门群岛, 圣巴特尔米, 特克斯和凯科斯, 南苏丹, 塔希提, 东帝汶, 汤加, 突尼斯, 土库曼斯坦, 图瓦卢, 瓦努阿图\r<br/>\r<br/>6.地址更改：加收手续费RMB93元/票，具体更改地址费用需要提供详细地址给我司DHL客服查询。\r<br/>\r<br/>7.偏远费：收取RMB4.5/KG，每票最低收费为RMB223.5,偏远附加费需加收燃油\r<br/>\r<br/>8.税金预付或第三方付：收取手续费用RMB140/票。\r<br/>\r<br/>9.可做核销单报关：报关费200元RMB/票,（可收打了合页及打脚的木箱、卡板货，超重或者超长附加费，）\r<br/>\r<br/>10.超大和超重快件的附加费：长度等于或者大于120CM和单件计费重大于69公斤需加收附加费，RMB837*当月燃油/件。\r<br/>\r<br/>11.特殊处理件：加收特殊处理费RMB1256/件，需*当月燃油，有以下情况需要加收\r<br/>\r<br/>(1)除发货人特殊要求外，外箱上注明标识/文字提示不可叠放的货物 如“请勿叠放”,“Do not stack / No Stack ” \r<br/>(2)外包装或裸包等，不能承受堆叠的货物，形状或货板上的货件阻碍第二个货板或其他非货板运件安全叠放的货。\r<br/>\r<br/>12.高风险地区服务：阿富汗、苏丹、马里、尼日尔、伊拉克、利比亚、叙利亚和也门，寄往以上国家不分文件包裹加RMB233/票*燃油  \r<br/>\r<br/>13.受限制地区服务：中非共和国、厄立特里亚、北韩（暂停）、伊朗伊斯兰共和国（暂停）、刚果民主共和国（即刚果金暂停）、利比亚、伊拉克（暂停包裹）、叙利亚、也门、索马里，寄往以上国家不分文件包裹加RMB326/票*燃油 \r<br/>\r<br/>14.高风险地区服务和受限制地区服务:伊拉克（暂停）、利比亚、叙利亚（暂停），也门需要加收(RMB233+326)/票*燃油\r<br/>\r<br/>15.不接受带锂电池产品国家：阿塞拜疆（暂停）,刚果民主共和国（即刚果金暂停）,伊拉克（暂停包裹）朝鲜（暂停）,古巴（暂停）,叙利亚（暂停）,苏丹（暂停）,南苏丹(暂停）,塔吉克斯坦（暂停）,土库曼斯坦（暂停）,卡塔尔，美属萨摩亚群岛,安哥拉,安圭拉,阿鲁巴岛,伯奈尔,布基纳法索,布隆迪,佛得角,中非共和国,乍得,马里亚纳群岛，科摩罗,刚果,吉布提,埃及,厄立特里亚,埃塞俄比亚,福克兰群岛,法罗群岛,法属圭亚那,冈比亚,格鲁吉亚,格陵兰岛,几内亚,几内亚比绍,赤道几内亚,哈萨克斯坦,科索沃,吉尔吉斯斯坦,莱索托,利比里亚,利比亚,马拉维,马里,毛里塔尼亚,马约特岛岛,密克罗尼西亚,蒙特塞拉特岛,莫桑比克,纳米比亚,荷属安地列斯，尼维斯,尼日尔,卢旺达,圣赫勒拿,圣多美和普林西比,塞内加尔，塞舌尔,塞拉里昂,索马里,索马里兰,圣巴泰勒米,圣尤斯达求斯,苏里南,斯威士兰,坦桑尼亚共和国,突尼斯,特克斯和凯科斯群岛,乌干达,乌兹别克斯坦,英属维尔京斯岛,也门,津巴布韦，密克罗尼西亚联邦,法国的巴黎城市,EBL及ISU机场代码相应对的城市，土耳其,东帝汶，克罗地亚（Zagreb,Split,Rijeka,Pula,Zadar,Osijek,Slavonski Brod此7个城市除外），塞班岛，博内尔，几内亚共和国,英联邦马里亚纳群岛，荷属安的列斯群岛,圣赫勒拿岛,圣巴特勒米岛,圣尤斯特歇斯,英属维尔京群岛，墨西哥( 只能寄往GDL, MTY, QRO 和MEX )乌拉圭、巴拉圭；\r<br/>\r<br/>16.此6个国家配套产品不能用包裹袋包装：尼泊尔、老挝民主主义人民共和、柬埔寨、不丹、缅甸(以上国家3KG以内无服务）\r<br/>\r<br/>17.巴基斯坦带电产品不可装包裹袋子(3KG以内无服务）；孟加拉国不接配套电，只接PI970及PI967内置电，并且不可包裹袋包装；\r<br/>\r<br/>18.沙特阿拉伯海关严禁带有内置摄像头的货物（如带有内置摄像头的无人机、笔、眼镜、手表等）及电子烟进口\r<br/>\r<br/>19.喀麦隆此国家不做关税预付，乌克兰此国家只能做关税到付，不能做关税预付或者第三方支付关税；\r<br/>\r<br/>21.特殊清关及发票要求：土耳其（申报价值超过30欧元的快件）、罗马尼亚、保加利亚、菲律宾、阿鲁巴，意大利、英国、哥斯达黎加，乌克兰（Ukraine）的包裹，随货发票申报价值须包含货物运费,以上国家出口发票要及清关求特殊，出货前需跟销售详细咨询！ \r<br/>\r<br/>22.美国三字代码LRD，货量重量不可以超过30KG，尺寸不可以超过120*80*80；\r<br/>\r<br/>23.凡发往黎巴嫩和科威特 价值超过USD1500或者重量超100KG的货件，均需提供COO（原产地证）随货，随货文件请准备一式三份，正本放货物箱内，外箱标记COO inside。剩下两份彩色的复印件，一份随运单发票，一份贴外箱上。文件缺失会有退件风险，如若因为没有按照要求操作导致重要文件丢失，左右责任以及产生的费用均由寄件人承担。\r<br/>\r<br/>24.尼日利亚：不接纺织品。\r<br/>\r<br/>25.加拿大：货物出口前可以选择税金预付，出口后不接受改税金预付。亚马逊件出货前必须做关税预付；\r<br/>\r<br/>26.突尼斯：不收走带电产品\r<br/>\r<br/>27.印度：邮编174101是只有文件服务的，没有包裹服务\r<br/>\r<br/>28.巴林：目的地公司或机构进口方必须提供商业登记证明并在新的海关系统中登记；私人货物，收件人需在新海关系统中提供身份证号或其他有效证件\r<br/>\r<br/>29.东帝汶：重量和尺寸限制：单件不能超过或者等于120*100*100CM，单件重量不能超过或者等于120KG\r<br/>\r<br/>30.卡塔尔：所有重量段的货物，均需提供正本发票和原产地证随货。\r<br/>\r<br/>31.发往亚马逊仓库及海外仓库货件：发票上须注明TAX ID，EORI或VAT号码，并提供有效的清关方的联系方式，否则可能会造成延误或者额外费用。目的地没有清关公司支付税金的，只能选择税金预付和第三方支付\r<br/>\r<br/>32.发往英国的货件，发票上需申报运费，以便清关；\r<br/>\r<br/>33.所有寄往南非（South Africa）的包裹，随货必须提供商业发票，不接受形式发票，否则将可能罚款至少约USD350/票（最终金额以账单为准）\r<br/>\r<br/>34.科特迪瓦只能做关税到付，不能做关税预付；\r<br/>\r<br/>35.DHL所有渠道到秘鲁，要求单件不可以超30KG；","productName":"【普货】","mcalid":"5000","isFromK5":"1","mweight":"200.0"}]}
							if(res.data.statusCode === 'success') {
								const priceResultList = res.data.returnDatas;
								// priceResultList.forEach(item => {
								// 	this.priceData.push({
								// 		channelName: item.channelName,
								// 		feeAmt: item.feeAmt,
								// 		sendtime: item.sendtime,
								// 		productName: item.productName,
								// 		weight: item.weight
								// 	})
									
								// })
								this.priceData = this.findLowestPrice(priceResultList);
								
								this.text = 'request success';
							}

						},
						complete: () => {
							this.isLoading = false;
							this.hasResult = true;
						}
				});
				} else {
					uni.$u.toast('不存在当前国家')
				}
		    
			}).catch(errors => {
				this.isLoading = false;
				this.hasResult = true;
				uni.$u.toast('校验失败')
			})
		},
		findLowestPrice(data) {
    // 定义分类
			const categories = {
					DHL: [],
					UPS: [],
					FEDEX: [],
					ARAMEX: [],
					EMS: [],
					铁路: [],
					卡航: [],
					空派: [],
					海派: []
			};

			
			// 将数据分类
			for (const item of data) {
					for (const category in categories) {
							if (item.channelName.includes(category)) {
									categories[category].push(item);
									break; // 找到匹配后跳出内层循环
							}
					}
			}
			console.log(categories)

			// 找到每个分类中价格最低的项
			let lowestPrices = [];
			for (const category in categories) {
					if (categories[category].length > 0) {
							const lowest = categories[category].reduce((min, current) => {
									return current.feeAmt < min.feeAmt ? current : min;
							});
							// 将结果格式化为所需的结构
							lowestPrices.push({
									channelName: category,
									feeAmt: lowest.feeAmt,
									sendtime: lowest.sendtime, // 假设原始数据中有这个字段
									productName: lowest.productName,
									weight: lowest.weight // 假设原始数据中有这个字段
							});
							lowestPrices.sort((a, b) => a.feeAmt - b.feeAmt);
					}
			}

			return lowestPrices;
		},
		handleSubmit(e) {
		  e.preventDefault();
		  console.log('提交的数据:', this.formData);
		  // 这里可以添加发送数据到服务器的代码
		  uni.showToast({
			title: '提交成功',
			icon: 'success'
		  });
		}
  }
}
</script>

<style lang="less" >
@bg-color: #F5F5F5;
@primary-color: #006FF0;

.u-form-item__body__left__content__label {
	color: red;
}
.search_price_title {
	font-weight: 400;
	font-size: 17px;
	color: rgba(153,153,153,0.88);
	padding-top: 40px;
	margin-bottom: 20px;
 }
 .search_price_title_blue {
	color: @primary-color;
	padding-left: 10px;
 }
 .form-container_upper {
		background: white;
		border-radius: 4px;
		padding: 15px 30px;
 }
.search_price_container {
	background: @bg-color;
	margin-top: 60px;
	min-height: calc(100vh - 310px);
}
.form-container-total {
	display: flex;
	flex-wrap: wrap;
	margin-top: 5px;
	justify-content: space-between
}
.form-container {
	width: 100%;
	max-width: 80%;
	margin: 0 auto;
	font-size: 12px;
}
.container {
  padding: 20px;
}

.empty_container {
	text-align: center;
	color: gray;
}
.custom-width {
		flex: 0 0 auto;
		width: 50%;
}

.table-container {
  padding: 20px;
}

.table {
  border-collapse: collapse;
	margin: 0 auto;
	max-width: 992px;
	padding: 30px;
	box-sizing: border-box;
	background: white;
}

.table-header {
  background-color: #FAFAFA;
}

.table-row {
  display: flex;
}

.table-cell {
  flex: 1;
  padding: 10px;
  text-align: center;
	border-bottom: 1px solid #ddd;
}
.container {
  position: relative;
  padding: 20px;
}

.search-input {
  min-width: 100px;
	max-width: 350px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fafafa;
}
.search-input_short {
  width: 150px;
}

.form-item-mini {
	// flex: 1 1 30%;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 90px;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  z-index: 10;
	-height: 300px;
	overflow-y: scroll;
}

.dropdown-item {
  padding: 10px;
  cursor: pointer;
}

.dropdown-item:hover {
  background: #f0f0f0;
	
}
.search_price_button {
	width: 30%;
	height: 45px;
	color: white;
	background: linear-gradient(270deg, #006FF0 0%, #7AB8FF 100%);
	margin-top: 30px;
	&:hover {
		transition: .16s;
    transform: scale(1.02, 1.06);
	}
	&:focus {
		transition: .16s;
    transform: scale(1.02, 1.06);
	}
}
.loading-container {
	height: 400px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.destination-container {
	position: relative;
	flex: 1 1 50%;
}
.search_price_home {
	cursor: pointer;
}
@media only screen and (max-width:1000px) {  
	.form-container_upper {
		width: 80%;
    margin: 0 auto;
	}
	.search_price_container {
		min-height: 600px;
	}
	.form-item-mini {
	  flex: 1 1 30%;
  }
	.search-input_short {
    width: 100px;
  }
	.search_price_button {
		width: 60%;
	}
}
</style>
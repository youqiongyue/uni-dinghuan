<template>
  <view>
    <Navigator />
    <view class="about_us_container">
      <h1 class="about_us_h1_title">关于鼎环</h1>
      <view class="about_us_detail">
        <view class="about_us_left">
          <view class="about_us_desc">
            <u--image :showLoading="true" src="../../static/feight_logo.png" width="100px" height="100px" class="feight_logo"></u--image>
            <view class="about_us_title">
              始创于2006年的
            </view>
            <view class="about_us_title">
              跨境电商全球配送服务商
            </view>
            <view class="about_us_wording">
              鼎环国际物流于2006年成立于广州，2010年进驻深圳，佛山，是经国家相关部门批准专业国际物流公司。经过十多年的沉淀和发展，鼎环国际已经发展成为了一家专业提供国际仓储与国际物流服务、整合跨国电子商务物流服务商。
            </view>
            <view class="about_us_wording">
              我们专注于亚马逊FBA头程运输，全球快递、全球空运、全球海运等，业务遍布海内外，现有国内多地中转仓16000余平方，分布在广州、深圳、佛山等多个网点。拥有美国、加拿大、墨西哥、日本、欧洲多家海外分支机构，共有海外仓20000余平方。
            </view>
           
          </view>
         
        </view>
        <view class="about_us_right">
          <u--image :showLoading="true" src="../../static/feight.jpg" width="100%" height="600px"></u--image>
        </view>
      </view>
      <view class="about_us_detail">
        <view class="about_us_left">
          <u--image :showLoading="true" src="../../static/ship.jpg" width="100%" height="600px"></u--image>
      
        </view>
        <view class="about_us_right">
          <view class="about_us_desc">
            <u--image :showLoading="true" src="../../static/feight_logo.png" width="100px" height="100px" class="feight_logo"></u--image>
            <view class="about_us_title about_us_title_blue">
              致力于为跨境电商
            </view>
            <view class="about_us_title about_us_title_blue">
              提供全球物流的专业解决方案
            </view>
            <view class="about_us_wording">
              公司愿景：致力成为全球优质的国际物流解决方案提供商，打造一流的出海物流服务平台
            </view>
            <view class="about_us_wording">
              经营理念：客户至上、以人为本、致力创新、合作共赢
            </view>
            <view class="about_us_wording">
              服务理念：诚信主导，务实高效，创新致远
            </view>
   
          </view>
        </view>
      </view>
    </view>

    <Footer></Footer>
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

		}
	},

}

</script>


<style lang="less">
@primary-color: #006FF0;

.about_us_container {
	margin-top: 60px;
  min-height: calc(100vh - 310px);
}
.about_us_detail {
  display: flex;
}
.about_us_left {
  flex: 1;
  background: @primary-color;
  color:white
}
.about_us_right {
  flex: 1
}
.about_us_desc {
  display: flex;
  width: 80%;
  margin: 50px auto;
  flex-direction: column;

}
.about_us_h1_title {
  margin-top: 100px;
  margin-bottom: 50px;
  color: @primary-color;
  text-align: center;
}
.about_us_title {
  font-size: 28px;
}
.feight_logo {
  margin-bottom: 30px;
}
.about_us_wording {
  margin-top: 30px;
  line-height: 30px;
}
.about_us_title_blue {
  color: @primary-color;
}
</style>

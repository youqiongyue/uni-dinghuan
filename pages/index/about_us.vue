<template>
  <view>
    <Navigator />
    <view class="about_us_container">
      <h1 class="about_us_h1_title">{{$t('index.about')}}</h1>
      <view class="about_us_detail">
        <view class="about_us_left">
          <view class="about_us_desc">
            <u--image :showLoading="true" src="../../static/feight_logo.png" width="100px" height="100px" class="feight_logo"></u--image>
            <view class="about_us_title">
              {{$t('about.company_title_one')}}
            </view>
            <view class="about_us_title">
              {{$t('about.company_title_two')}}
            </view>
            <view class="about_us_wording">
              {{$t('about.company_one')}}
            </view>
            <view class="about_us_wording">
              {{$t('about.company_two')}}
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
              {{$t('about.company_title_three')}}
            </view>
            <view class="about_us_title about_us_title_blue">
              {{$t('about.company_title_four')}}
            </view>
            <view class="about_us_wording">
              {{$t('about.company_three')}}
            </view>
            <view class="about_us_wording">
              {{$t('about.company_four')}}
            </view>
            <view class="about_us_wording">
              {{$t('about.company_five')}}
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

<template lang="html">
	<div class="header">
		<div class="content-wrapper">
			<div class="avatar">
				<img :src="seller.avatar" width="64" height="64">
			</div>
			<div class="content">
				<div class="title">
					<span class="brand"></span>
					<span class="name">{{seller.name}}</span>
				</div>
				<div class="description">
					{{seller.description}}/{{seller.deliveryTime}}分钟送达
				</div>
				<div class="supports" v-if="seller.supports">
					<span class="icon"></span>
					<span class="text">{{seller.supports[0].description}}</span>
				</div>
			</div>
			<div class="support-count" @click="showDetail()">
				<span class="count" v-if="seller.supports">
					{{seller.supports.length}}个
				</span>
				<i class="icon-keyboard_arrow_right"></i>
			</div>
		</div>
		<div class="bulletin-wrapper"  @click="showDetail()">
			<span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
			<i class="icon-keyboard_arrow_right"></i>
		</div>
		<div class="background">
			<img :src="seller.avatar" width="100%" height="100%">
		</div>
		<transition name="fade">	
			<div class="detail" v-show="detailShow">
				<div class="detial-wrapper clearfix">
					<div class="detail-main">
						<p class="name">{{seller.name}}</p>
						<div class="star-wrapper">
							<Star :size="48" :score="seller.score"></Star>
						</div>
						<div class="title">
							<div class="line"></div>
							<div class="text">优惠信息</div>
							<div class="line"></div>
						</div>
						<ul class="supports">
							<li v-for="item in seller.supports" class="support-item">
								<span class="icon" :class="iconClassMap[item.type]"></span>
								<span>{{item.description}}</span>
							</li>
						</ul>
						<div class="title">
							<div class="line"></div>
							<div class="text">商家公告</div>
							<div class="line"></div>
						</div>
						<div class="bulletin">
							{{seller.bulletin}}
						</div>
					</div>
				</div>
				<div class="detail-close" @click="hideDetail()">
					<i class="icon-close"></i>
				</div>
			</div>
		</transition>
	</div>
</template>
<script>
import Star from 'components/star/Star.vue'
export default {
	props:{
		seller:{
			type:Object
		}
	},
	created(){
		this.iconClassMap=['decrease','discount','special','invoice','guarantee'];
	},
	data() {
		return {
			detailShow:false,
		}
	},
	components:{
		Star
	},
	methods:{
		showDetail(){
			this.detailShow=true;
		},
		hideDetail(){
			this.detailShow=false;
		}
	}
}
</script>
<style >
	.header{
		position: relative;
		background: rgba(7,17,27,0.5);
		color: #fff;
		overflow: hidden;
	}
	.content-wrapper{
		position: relative;
		display: flex;
		padding: 24px 12px 18px 24px;
		font-size: 0px;
	}
	.avatar img{
		border-radius: 2px;
	}
	.header .content-wrapper .content{
		margin-left: 16px;
	}
	.content .title{
		font-size: 16px;
		margin: 2px 0 8px 0;
		font-weight: 500;
	}
	.content .title .brand{
		display: inline-block;
		vertical-align: top;
		width: 30px;
		height: 18px;
		background: url('../../../resource/img/brand@2x.png');
		background-size: 30px 18px;
		background-repeat: no-repeat;
	}
	.content .title .name{
		margin-left: 6px;
		line-height: 18px;
		font-weight: bold;
	}
	.content .description{
		font-size: 12px;
		margin-bottom: 10px;
	}
	.content .supports .icon{
		display: inline-block;
		vertical-align: top;
		width: 12px;
		height: 12px;
		background: url('../../../resource/img/decrease_1@2x.png');
		background-size: 12px 12px;
		background-repeat: no-repeat;
	}
	
	.support-count{
		position: absolute;
		bottom: 18px;
		right: 12px;
		padding: 0px 8px;
		background: rgba(0,0,0,0.2);
		color: #fff;
		height: 24px;
		line-height: 24px;
		border-radius: 14px;
	}
	.support-count .count{
		vertical-align: top;
		font-size: 10px;
	}
	.support-count i{
		font-size: 10px;
		margin-left: 2px;
		line-height: 24px;
	}
	.bulletin-wrapper{
		position: relative;
		height: 28px;
		line-height: 28px;
		padding: 0 22px 0 12px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		background: rgba(7,17,27,0.2);
	}
	.bulletin-wrapper .bulletin-title{
		vertical-align: top;
		display: inline-block;
		width: 22px;
		height: 12px;
		line-height: 12px;
		background: url('../../../resource/img/bulletin@2x.png');
		background-repeat: no-repeat;
		background-size: 22px 12px;
		margin-top: 8px;
	}
	.bulletin-wrapper .bulletin-text{
		vertical-align: top;
		font-size: 10px;
		margin: 0 4px;
	}
	.bulletin-wrapper .icon-keyboard_arrow_right{
		position: absolute;
		font-size: 10px;
		right: 12px;
		top: 8px;
	}
	.background{
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: -1;
		filter: blur(10px);
		top: 0;
		left: 0;
	}
	.header .detail{
		position: fixed;
		z-index: 100;
		width: 100%;
		height: 100%;
		background: rgba(7,17,27,.8);
		top: 0;
		left: 0;
	}
	.clearfix{
		display: inline-block;
		
	}
	.clearfix:after{
		display: block;
		height: 0;
		line-height: 0;
		content: "";
		clear: both;
		visibility: hidden;
	}
	.header .detail .detial-wrapper{
		min-height: 100%;
		width: 100%;
	}
	.header .detail .detial-wrapper .detail-main{
		margin-top: 64px;
		padding-bottom: 64px;
	}
	.detail-close{
		position: relative;
		width: 32px;
		height: 32px;
		margin: -64px auto 0 auto;
		clear: both;
		font-size: 32px;

	}
	.header .detail .detial-wrapper .detail-main .name{
		font-size: 16px;
		font-weight: 700;
		width: 100%;
		line-height: 16px;
		text-align: center;
		margin: 0 auto;
	}
	.header .detail .detial-wrapper .detail-main .star-wrapper{
		margin: 16px 11px 28px 0;
		text-align: center;
	}
	.header .detail .detial-wrapper .detail-main .title{
		display: flex;
		width: 80%;
		margin:0 auto 24px auto;
	}
	.header .detail .detial-wrapper .detail-main .title .line{
		flex: 1;
		height: 1px;
		background: rgba(255,255,255,0.2);
		margin: auto;
	}
	.header .detail .detial-wrapper .detail-main .title .text{
		padding: 0 12px;
		font-weight: 500;
		font-size: 14px;
	}
	.header .detail .detial-wrapper .detail-main .supports{
		padding: 0 0 28px 36px;
		font-size: 0px;
	}
	.header .detail .detial-wrapper .detail-main .supports  li{
		
		padding: 0 6px 12px 16px;
	}
	.header .detail .detial-wrapper .detail-main .supports  li span{
		font-size: 12px;
		line-height: 12px;
		font-weight: 200;
		color: #fff;
	}
	.header .detail .detial-wrapper .detail-main .supports  .support-item .icon{
		display: inline-block;
		vertical-align: top;
		width: 16px;
		height: 16px;
		margin-right: 6px;
		background-size: 16px 16px !important;
		background-repeat: no-repeat;
	}
	.header .detail .detial-wrapper .detail-main .supports  .support-item .decrease{
		background: url('decrease_1@2x.png');
	}
	.header .detail .detial-wrapper .detail-main .supports  .support-item .discount{
		background: url('discount_1@2x.png');
	}
	.header .detail .detial-wrapper .detail-main .supports  .support-item .guarantee{
		background: url('guarantee_1@2x.png');
	}
	.header .detail .detial-wrapper .detail-main .supports  .support-item .invoice{
		background: url('invoice_1@2x.png');
	}
	.header .detail .detial-wrapper .detail-main .supports  .support-item .special{
		background: url('special_1@2x.png');
	}
	.content .supports .text{
		font-size: 12px;margin-left: 4px;

	}
	.header .detail .detial-wrapper .detail-main .bulletin{
		font-size: 12px;
		line-height: 24px;
		padding: 0 48px;
	}
	.fade-enter-active, .fade-leave-active{
		transition: opacity 0.5s;
	}
	.fade-enter, .fade-leave-active{
		opacity: 0;
	}
</style>
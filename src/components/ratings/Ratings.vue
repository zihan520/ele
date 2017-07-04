<template>
	<div class="ratings-wrapper">
		<div class="ratings-content">
			<div class="info">
				<div class="score">
					<div class="num">{{seller.score}}</div>
					<div class="text">综合评分</div>
					<div class="contrast">高于周边商家{{seller.rankRate}}%</div>
				</div>
				<div class="service">
					<div class="serviceScore">
						<span class="text">服务态度</span><Star :size="36" :score="seller.serviceScore"></Star><span class="num">{{seller.serviceScore}}</span>
					</div>
					<div class="foodScore">
						<span class="text">美食口味</span>
						<Star :size="36" :score="seller.foodScore"></Star>
						<span class="num">{{seller.foodScore}}</span>
					</div>
					<div class="deliveryTime">
						<span class="text">送达时间</span>
						<span class="time">{{seller.deliveryTime}}分钟</span>
					</div>
				</div>
			</div>
			<div class="divider"></div>
			<div class="evaluation">
				<div class="classify">
					<span v-for="(item,index) in classifyArr" class="item" :class="{'active':item.active,'bad':index==2,'badActive':item.active&&index==2}" @click="filterEvel(item)">
						{{item.name}}<span class="count">{{item.count}}</span>
					</span>
				</div>
				<div class="switch"></div>
				<div class="evel-list"></div>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
import Star from 'components/star/Star.vue'

	export default{
		components:{
			Star
		},
		data() {
			return {
				ratings: [],
				seller: [],
				classifyArr:[
					{
						name:'全部',
						count: 0,
						active:true
					},
					{
						name:'推荐',
						count:0,
						active:false
					},
					{
						name:'吐槽',
						count:0,
						active:false
					}
				],
				evelflag:true
			}
		},
		created() { 
			axios.get('static/data.json').then((res)=>{
				this.ratings=res.data.ratings;
				 this.seller = res.data.seller
			})
		},
		methods:{
			filterEvel(item){
				this.classifyArr.forEach((data)=>{
					data.active = false
				})
				item.active = true
			}
		}
	}
</script>
<style>
	.ratings-wrapper{
		position: absolute;
		top: 174px;
		left: 0;
		bottom: 0;
		width: 100%;
		overflow: hidden;
	}
	.ratings-wrapper .info{
		display: flex
	}
	.ratings-wrapper .ratings-content .info .score{
		flex: 0 0 138px;
		margin: 18px 0;
		text-align: center;
		border-right: 1px solid #eee;
	}

	.ratings-wrapper .ratings-content .info .score .num{
		font-weight: 500;
		font-size: 24px;
		color: #f90;
		line-height: 28px;
	}
	.ratings-wrapper .ratings-content .info .score .text,.contrast{
		text-align: center;
		font-size: 12px;
		line-height: 24px;
		color: #07111b;
	}
	.ratings-wrapper .ratings-content .info .service{
		flex: 1;
		padding: 18px 24px;
		font-size: 0px;
	}
	.ratings-wrapper .ratings-content .info .service .serviceScore,.foodScore{
		margin-bottom: 8px;
		font-size: 0px;
	}
	.ratings-wrapper .ratings-content .info .service  .text{
		font-size: 12px;
		color: #07111b;
		line-height: 18px;
		margin-right: 12px;
	}
	.ratings-wrapper .ratings-content .info .service .num{
		font-size: 12px;
		color: #f90;
		padding-left: 12px;
		line-height: 18px
	}
	.ratings-wrapper .ratings-content .info .service .star{
		display: inline-block;
		vertical-align: top;
	}
	.ratings-wrapper .ratings-content .info .service .deliveryTime .time{
		font-size: 12px;
		color: #93999f;
		line-height: 18px;
	}
	@media screen and (max-width:320px) {
		.ratings-wrapper .ratings-content .info .score{
			flex: 0 0 120px;
			width: 120px;
		}
		.ratings-wrapper .ratings-content .info .service .num{
			padding-left: 6px;
		}
		.ratings-wrapper .ratings-content .info .service{
			padding-left: 6px;
		}
	}
	.ratings-wrapper .divider{
		width: 100%;
		height: 16px;
		background: #f3f5f7;
		border-bottom: 1px solid rgba(7, 17, 27, .1);
		border-top: 1px solid rgba(7, 17, 27, .1);
	}
</style>
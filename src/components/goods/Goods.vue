<template>
	<div class="goods">
		<div class="menu-wrapper">
			<ul>
				<li v-for="(item,index) in goods" class="menu-item" @click="menuClick(index,$event)">
					<span class="text"><span v-show="item.type>0" class="icon" :class="iconClassMap[item.type]"></span>{{item.name}}</span>
				</li>
			</ul>
		</div>
		<div class="foods-wrapper">
			<ul>
				<li v-for="item in goods" class="food-list">
					<h1 class="title">{{item.name}}</h1>
					<ul>
						<li v-for="food in item.foods" class="food-item">
							<div class="icon">
								<img :src="food.icon" width="57" height="57">
							</div>
							<div class="content">
								<h2>{{food.name}}</h2>
								<p class="desc">{{food.description}}</p>
								<div class="sellCount">
									<span>月销{{food.sellCount}}份</span>
									<span>好评率{{food.rating}}%</span>
								</div>
								<div class="price">
									<span>￥<b style="font-weight:600">{{food.price}}</b></span>
									<span v-show="food.oldPrice" class="oldPrice">￥{{food.oldPrice}}</span>
									<div class="cartcontrol-wrapper">
										<div class="cart-decrease"></div>
										<span class="cart-count"></span>
										<div class="cart-add"></div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
import BScroll from 'better-scroll'

	export default{
		props:{
			seller:{
				type:Object
			}
		},
		data(){
			return {
				goods: [],
				listHeight: [],
      			foodsScrollY: 0,
			}
		},
		created(){
			axios.get('static/data.json').then((res)=>{
				this.goods=res.data.goods;
				console.log(this.goods);
			}),
			this.iconClassMap=['decrease','discount','special','invoice','guarantee'];
		},
		computed: {
			menuCurrentIndex() {
				for(let i=0,l=this.listHeight.length;i<l;i++){
					let topHeight = this.listHeight[i];
					let bottomHeight = this.listHeight[i+1];
					if(!bottomHeight || (this.foodsScrollY >=topHeight && this.foodsScrollY<bottomHeight)) {
						return i
					}
				}
				return 0;
			}
		},
		methods:{
			menuClick(index,event){
				if(!event._constructed) {
					return
				}
			}
		}
	}
</script>
<style>
	.goods{
		position: absolute;
		width: 100%;
		display: flex;
		top: 174px;
		bottom: 46px;
		overflow: hidden;
	}
	.goods .menu-wrapper{
		display: inline-block;
		flex: 0 0 80px;
		width: 80px;
		background: #f3f5f7;
		margin-top: 2px;
	}
	.goods .menu-wrapper .menu-item{
		width: 56px;
		height: 54px;
		line-height: 14px;
		display: table;
		padding: 0 12px;
	}
	.goods .menu-wrapper .menu-item .icon{
		display: inline-block;
		vertical-align: top;
		width: 12px;
		height: 12px;
		margin-right: 3px;
		background-size: 12px 12px !important;
		background-repeat: no-repeat;
	}
	.icon.special{
		background: url('special_3@2x.png');
	}
	.icon.discount{
		background: url('discount_3@2x.png');
	} 
	.goods .menu-wrapper .menu-item .text{
		display: table-cell;
		width: 56px;
		vertical-align: middle;
		border-bottom: 1px solid rgba(7,17,27,0.1);
		font-size: 12px;
	}
	.goods .foods-wrapper{
		flex: 1;
		margin-top: 2px;
	}
	.goods .foods-wrapper .food-list .title{
		height: 26px;
		line-height: 26px;
		font-size: 12px;
		color: #93999f;
		padding-left: 12px;
		border-left: 1px solid #d9dde1;
		background: #f3f5f7;
	}
	.goods .foods-wrapper .food-list .food-item{
		position: relative;
		display: flex;
		margin: 0 18px;
		padding: 18px 0;
		border-bottom: 1px solid rgba(7, 17, 27, .1);
	}
	.goods .foods-wrapper .food-list .food-item .icon{
		flex: 0 0 57px;
	}
	.goods .foods-wrapper .food-list .food-item .content{
		flex: 1;
		padding-left: 10px;
	}
	.goods .foods-wrapper .food-list .food-item .content h2{
		font-size: 14px;
		height: 14px;
		line-height: 14px;
		font-weight: 700;
		color: #000;
		margin: 2px 0 8px 0;
	}
	.goods .foods-wrapper .food-list .food-item .content .desc{
		font-size: 10px;
		line-height: 12px;
		margin-bottom: 8px;
		color: #93999f;
	}
	.goods .foods-wrapper .food-list .food-item .content .sellCount{
		font-size: 10px;
		color: #93999f;
		line-height: 12px;
	}
	.goods .foods-wrapper .food-list .food-item .content .price{
		font-size: 14px;
		height: 24px;
		line-height: 24px;
		color: #f00;
	}
	.goods .foods-wrapper .food-list .food-item .content .price .oldPrice{
		color: #ccc;
		padding-left: 4px;
		text-decoration: line-through;
		font-size: 10px;
	}
</style>
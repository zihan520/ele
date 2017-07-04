<template>
	<div class="star" :class="starType">
		<span v-for="itemClass in itemClasses" :class="itemClass" class="star-item"></span>
	</div>
</template>
<script>
	const LENGTH = 5;
	const CLS_ON = 'on';
	const CLS_HALF = "half";
	const CLS_OFF = 'off'
	export default {
		props: {
			size: {
				type:Number
			},
			score: {
				type:Number
			}
		},
		computed: {
			starType() {
				return 'star-'+this.size
			},
			itemClasses(){
				let result = [];
				let score = Math.floor(this.score * 2 ) /2;
				let integer = Math.floor(this.score);
				let hasDecmail = score % 1!==0;
				for(let i=0;i<integer;i++){
					result.push(CLS_ON);
				}
				if(hasDecmail){
					result.push(CLS_HALF);
				}
				while(result.length<LENGTH){
					result.push(CLS_OFF);
				}
				return result;
			}
		}
	}
</script>
<style>
	.star .star-item{
		display: inline-block;
	}
	.star.star-48 .star-item{
		width: 20px;
		height: 20px;
		margin-right: 22px;
		background-size: 100% 100%;
	}
	.star span.star-item:last-child{
		margin-right: 0px;
	}
	.star.star-48 .star-item.on{
		background-image: url('star48_on@3x.png');
	}
	.star.star-48 .star-item.half{
		background-image: url('star48_half@3x.png');
	}
	.star.star-48 .star-item.off{
		background-image: url('star48_off@3x.png');
	}
	.star.star-36 .star-item{
		width: 15px;
		height: 15px;
		margin-right: 6px;
		background-size: 100% 100%;
	}
	.star span:last-child{
		margin-right: 0px;
	}
	.star.star-36 .star-item.on{
		background-image: url('star36_on@3x.png');
	}
	.star.star-36 .star-item.half{
		background-image: url('star36_half@3x.png');
	}
	.star.star-36 .star-item.off{
		background-image: url('star36_off@3x.png');
	}
	.star.star-24 .star-item{
		width: 10px;
		height: 10px;
		margin-right: 3px;
		background-size: 100% 100%;
	}
	.star span:last-child{
		margin-right: 0px;
	}
	.star.star-24 .star-item.on{
		background-image: url('star24_on@3x.png');
	}
	.star.star-24 .star-item.half{
		background-image: url('star24_half@3x.png');
	}
	.star.star-24 .star-item.off{
		background-image: url('star24_off@3x.png');
	}
</style>
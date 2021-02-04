<template>
	<view>
		<!-- 系统自带的下拉刷新，只能配合mescroll-body使用， 在mescroll-uni中无效 -->
		<mescroll-body ref="mescrollRef" @init="mescrollInit" :down="downOption" @down="downCallback" :up="upOption" @up="upCallback"
		 @emptyclick="emptyClick">
			<!-- 数据列表 -->
			<van-cell-group>
				<van-cell :title="item.title" value="内容" label="描述信息" :border="false" v-for="(item,index) in list" :key="index" />
			</van-cell-group>
		</mescroll-body>
		<van-toast id="van-toast" />
	</view>
</template>

<script>
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	import {
		getList
	} from "@/models/list/List.js";
	export default {
		mixins: [MescrollMixin], // 使用mixin (在main.js注册全局组件，内部已注册onPullDownRefresh)
		data() {
			return {
				downOption: {
					native: false // 必须配置此项，且需在pages.json配置"enablePullDownRefresh" : true
				},
				upOption: {
					noMoreSize: 4,
					empty: {
						tip: '~ 搜索无数据 ~',
						btnText: '去看看'
					}
				},
				list: [], //列表数据
			}
		},
		methods: {
			/*上拉加载的回调: 其中page.num:当前页 从1开始, page.size:每页数据条数,默认10 */
			upCallback(page) {
				//联网加载数据
				getList(page.num, page.size).then(curPageData => {
					//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
					this.mescroll.endSuccess(curPageData.data.length);
					//设置列表数据
					if (page.num == 1) this.list = []; //如果是第一页需手动制空列表
					this.list = this.list.concat(curPageData.data); //追加新数据
				}).catch(() => {
					//联网失败, 结束加载
					this.mescroll.endErr();
				})
			},
			//点击空布局按钮的回调
			emptyClick() {
				uni.showToast({
					title: '点击了按钮,具体逻辑自行实现'
				})
			},
		},
	}
</script>

<style>
	.tip {
		font-size: 28upx;
		height: 60upx;
		line-height: 60upx;
		text-align: center;
	}
</style>

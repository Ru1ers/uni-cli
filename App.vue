<script>
	import {
		login,
		getInfo
	} from '@/models/login/Login.js';
	import {
		setToken
	} from '@/utils/auth';
	import store from '@/store';
	import Toast from '@/wxcomponents/vant/toast/toast';
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// 判断登录环境
			uni.getProvider({
				service: 'oauth',
				success: function(res) {
					console.log(res.provider)
					if (~res.provider.indexOf('qq')) {
						uni.login({
							provider: 'qq',
							success: function(loginRes) {
								console.log(JSON.stringify(loginRes));
							}
						});
					}
					if (~res.provider.indexOf('weixin')) {
						uni.login({
							provider: 'weixin',
							success: async function(res) {
								console.log(res);
								if (res.code) {
									var result = await login(res.code);
									console.log(result);
									store.commit('user/LOGIN', result.data.token);
									console.log(store);
									store.dispatch('user/getInfo');
								} else {
									console.log('登录失败！' + res.errMsg);
								}
							},
							fail: function(err) {
								console.error(err)
								Toast.fail({
									message: '登录失败',
									duration: 1.5 * 1000
								})
							}
						});
					}
				}
			});
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		onError: function(e) {
			console.log(e, "onError")
		},
		onUnhandledRejection: function(e) {
			console.log("onUnhandledRejection", e)
		}
	}
</script>

<style>
	/* @import "/wxcomponents/vant/common/index.wxss"; */
	/*每个页面公共css */
</style>

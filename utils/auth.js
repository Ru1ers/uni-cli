const TokenKey = 'token'
const Uid = 'uid'

export function getToken() {
	return uni.getStorageSync(TokenKey)
}

export function setToken(token) {
	return uni.setStorageSync(TokenKey, token)
}

export function removeToken() {
	return uni.removeStorageSync(TokenKey)
}

export function getUid() {
	return uni.getStorageSync(Uid)
}

export function setUid(uid) {
	return uni.setStorageSync(Uid, uid)
}

export function removeUid() {
	return uni.removeStorageSync(Uid)
}

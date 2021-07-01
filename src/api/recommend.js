import req from '../assets/js/req'
import { commonParams , headers } from "../assets/js/config";
export function getRecommend() {
    const url = 'https://wangyiyun-seven.vercel.app/banner?type=2'
    const data = Object.assign({}, commonParams,{})

    return req(url, data, headers, 'GET')
}

export function getDisList() { 
    const url = 'https://wangyiyun-seven.vercel.app/personalized'
    const data = Object.assign({}, commonParams, {})

    return req(url, data, headers, 'GET')
}

export function getSongsByListid(obj) {
    const url = 'https://wangyiyun-seven.vercel.app/playlist/detail'
    const data = Object.assign({}, commonParams, obj)

    return req(url, data, headers, 'GET')
}
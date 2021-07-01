import req from '../assets/js/req'
import { commonParams, headers } from "../assets/js/config";
export function getAllsingers() {
    const url = 'https://wangyiyun-seven.vercel.app/top/artists'
    const data = Object.assign({}, commonParams, {})

    return req(url, data, headers, 'GET')
}

export function getSongsBysinger(obj) {
    const url = 'https://wangyiyun-seven.vercel.app/artist/songs'
    const data = Object.assign({}, commonParams, obj)

    return req(url, data, headers, 'GET')
}
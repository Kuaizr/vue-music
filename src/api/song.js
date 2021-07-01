import req from '../assets/js/req'
import { commonParams, headers } from "../assets/js/config";
export function getImgById(obj) {
    const url = 'https://wangyiyun-seven.vercel.app/song/detail'
    const data = Object.assign({}, commonParams, obj)

    return req(url, data, headers, 'GET')
}

export function getSongById(obj) {
    const url = 'https://wangyiyun-seven.vercel.app/song/url'
    const data = Object.assign({}, commonParams, obj)

    return req(url, data, headers, 'GET')
}

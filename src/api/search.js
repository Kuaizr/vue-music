import req from '../assets/js/req'
import { commonParams, headers } from "../assets/js/config";
export function getSongsByKeywords(obj) {
    const url = 'https://wangyiyun-seven.vercel.app/cloudsearch'
    const data = Object.assign({}, commonParams, obj)

    return req(url, data, headers, 'GET')
}


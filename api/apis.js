import {
  request
} from "../utils/request"

export function listNav() {
  return request({
    url: "/nav/get",
    method: "POST"
  })
}
export function listNews(data){
  return request({
    url:"/news/get",
    method:"POST",
   data
  })
}
export function newContent(data){
  return request({
    url:"/news/detail",
    method:"POST",
   data
  })
}
export function productList(data){
  return request({
    url:"/product/getlist",
    method:"POST",
   data
  })
}
export function productContent(data){
  return request({
    url:"/product/detail",
    method:"POST",
   data
  })
}
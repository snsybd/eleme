import ajax from './ajax'


//获取位置
export const reqAddplace = (geohash) => ajax ('/api/position/'+geohash)
// 获取 商家分类
export const reqFoodtypes= () => ajax ('/api/index_category')
// 获取 商家列表
export const reqShopslist= ({latitude,longitude}) => ajax('/api/shops',{latitude,longitude})


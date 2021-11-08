// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    //轮播图配置
    autoplay: true,
    interval: 3000,
    duration: 1200,
    list: [
      {url:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.ganggg.com%2Fuploads%2F2019%2F01%2F2019011509400927.png&refer=http%3A%2F%2Fimg.ganggg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638944614&t=1b202b2d77bb19acbd89d3fd81854966'},  
      {url:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01fd9c58aff2bea801219c7791b173.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638944614&t=f38570c7b14ccb6292fb0ea68a497861'}, 
      {url:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01b5e25b42d5afa80121b994d066a1.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638944614&t=a6d14ade115ede82a1772309aab982b3'}, 
      {url:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01a9fe55826ac3000000b18fde1592.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638944614&t=e38d29fbfe6165afe24271365834750d'}
    ],
    listPriject: [
      {
        img: 'https://img2.baidu.com/it/u=617528302,3742094563&fm=26&fmt=auto',
        text: '糖果密饯'
      },
      {
        img: 'https://img1.baidu.com/it/u=920652620,1801924609&fm=26&fmt=auto',
        text: '饼干糕点'
      },
      {
        img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgaitaobao3.alicdn.com%2Ftfscom%2Fi4%2F3991356975%2FO1CN0121Ob1NrO4TY7heb_%21%210-item_pic.jpg_300x300.jpg&refer=http%3A%2F%2Fgaitaobao3.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638942612&t=bb02df8db18e45417bec439eb243cca1',
        text: '坚果炒货'
      },
      {
        img: 'https://img0.baidu.com/it/u=417758383,1534680544&fm=26&fmt=auto',
        text: '辣条零嘴'
      },
      {
        img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fimgextra%2Fi1%2F725677994%2FTB2ECqPa1KAUKJjSZFzXXXdQFXa_%21%21725677994.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638942727&t=f814124f4dcbf426f6a0a0ee770e83b4',
        text: '薯片膨化'
      },
      {
        img: 'https://img2.baidu.com/it/u=4220071489,1035507186&fm=26&fmt=auto',
        text: '餐桌美食'
      },
      {
        img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F03%2F07%2F38%2F5b3a341a52658_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638942795&t=e920e3126763a7b2be85b7eecee9aea8',
        text: '旅途必备'
      },
      {
        img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.fuwo.com%2Fliuliang%2F1708%2F16%2F73ac2552821611e7bad000163e010ef1.jpg&refer=http%3A%2F%2Fimg.fuwo.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638942845&t=c6ebc25fe7293ca84de058aad9ddddc0',
        text: '日常百货'
      },
      {
        img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171213%2F7c87c80241ee4e0691d2dd7ae569c7ca.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638942865&t=3da215303ce12864b8c849ba5815d452',
        text: '洗漱洗涤'
      },
      {
        img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.599ku.com%2Felement_psd%2F82%2F65%2F34%2F52%2Fb46f5eb686c601e2f695b8638a502aae.jpg&refer=http%3A%2F%2Fimg.599ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638942885&t=bbb47d3154f40ebd9e0aa79c25ace86c',
        text: '厨房用品'
      }
    ],
    imageURL: 'https://img01.yzcdn.cn/vant/ipad.jpeg'
  },
  onLoad() {
    // this.getUserProfile()
  },
  /**
   * 获取个人信息
   */
  getUserProfile() {
    wx.showModal({
      title: '温馨提示',
      content: '获取你的昵称、头像、地区及性别',
      success(res) {
        console.log(0)
        console.log(res)
        //如果用户点击了确定按钮
        if (res.confirm) {
          wx.getUserProfile({
            desc: '获取你的昵称、头像、地区及性别',
            success: res => {
              console.log(res);
              console.log(1);
            },
            fail: res => {
              console.log(2);
              console.log(res)
              //拒绝授权
              wx.showToast({
                title: '您拒绝了请求,不能正常使用小程序',
                icon: 'error',
                duration: 2000
              });
              return;
            }
          });
        } else if (res.cancel) {
          //如果用户点击了取消按钮
          wx.showToast({
            title: '您拒绝了请求,不能正常使用小程序',
            icon: 'error',
            duration: 2000
          });
          return;
        }
      }
    });
  },
})

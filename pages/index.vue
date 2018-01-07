<template>
    <div id="page-index">
      <div class="greetbox wow fadeInLeftCust">
        <div class="logo"><img class="rwd-img" src="~assets/images/logo-o.png"/></div>
        <h1 class="title"><span>溫馨服務情</span><span>窩心衿日林</span></h1>
        <div class="gobtn"><a href="about">進入網站</a></div>
        <nuxt-link to="/about">進入網站</nuxt-link>
        <div class="iconbox">
          <ul>
            <li><a>
                <div class="icon"><img class="rwd-img" src="~assets/images/icon/lodging.png" alt="宜蘭縣民宿0070號"/></div>
                <div class="name">宜蘭縣民宿0070號</div></a></li>
            <li><a>
                <div class="icon"><img class="rwd-img" src="~assets/images/icon/countrycard.png" alt="國民旅遊卡特約民宿"/></div>
                <div class="name">國民旅遊卡特約民宿</div></a></li>
            <li><a>
                <div class="icon"><img class="rwd-img" src="~assets/images/icon/facebook.png" alt="衿日林粉絲專頁"/></div>
                <div class="name">衿日林粉絲專頁</div></a></li>
          </ul>
        </div>
        <div class="bottom">
          <div class="contact"><span>訂房專線：03-9500236</span><span>行動：0928-073438</span><span>張小姐</span></div>
          <div class="address"><span>地址：宜蘭縣冬山鄉武淵村(三)路116號</span><span>傳真：03-9509677</span></div>
        </div>
      </div>
      <div class="sliderbox">
        <ul id="bannerSlider">
          <li>
            <div class="pic"></div>
          </li>
          <li>
            <div class="pic"></div>
          </li>
          <li>
            <div class="pic"></div>
          </li>
          <li>
            <div class="pic"></div>
          </li>
          <li>
            <div class="pic"></div>
          </li>
        </ul>
      </div>
      <div class="newsbox wow fadeInRight">
        <div class="title">最新消息</div>
        <div class="contentbox mCustomScrollbar" data-mcs-theme="dark">
          <ul id="newsListBox">
          </ul>
        </div>
      </div>
      <footer>
        <div class="contact"><span>訂房專線：03-9500236</span><span>行動：0928-073438</span><span>張小姐</span></div>
        <div class="address"><span>地址：宜蘭縣冬山鄉武淵村(三)路116號</span><span>傳真：03-9509677</span></div>
      </footer>
    </div>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    // let { data } = await axios.get('/api/users');
    let { data } = await axios.get('/api/news');
    console.log(data,'news');
    // console.log(data,'user');
    return { news: data }
  },
  head () {
    return {
      title: 'Users'
    }
  }
}

  // mounted () {
  //   $('#bannerSlider').bxSlider({
  //     mode:'fade',
  //     controls:false,
  //     pager:false,
  //     auto:true,
  //     speed:2000,
  //     touchEnabled:false
  //   }); 
  // }
</script>

<style scoped>
/*.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}*/
</style>

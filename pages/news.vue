<template>
<div class="page" id="page-news">
	<div class="bannerbox">
		<h1 class="title wow fadeInUpCust"><span>溫馨服務情</span><span>窩心衿日林</span></h1>
	</div>
	<div class="maincontent">
		<h2><span class="wow fadeInUp">最新消息</span></h2>
		<ul id="newsListBox">
			<li v-for="(newsElement, index) in news" v-if="news">
				<div class="container">
					<div class="title">
						{{ newsElement.news_title }}
					</div>
					<div class="data">
						{{ newsElement.news_date }}
					</div>
					<div class="text" v-if="newsElement.news_content"> {{newsElement.news_content}}</div>
					<input type="hidden" class="news_img" :value="newsElement.news_img">
					<!-- <div>{{newsElement}}</div> -->
					<div class="morebtn">查看更多</div>
				</div>
			</li>
		</ul>
	</div>
	<div id="popNewsDetail">
		<div class="popbg"></div>
		<div class="popcontentbox">
			<div class="closebtn">
				<i class="fa fa-times"></i>
			</div>
			<div class="popcontent mCustomScrollbar" data-mcs-theme="dark">
				<div class="title">[住房優惠]即日起預訂住宿每房送2017童玩節平日券2張</div>
				<div class="date">2017-07-12</div>
				<div class="content">
					<div class="pic"><img class="rwd-img" src="~assets/images/demo/demo1.png" alt="衿日林民宿-最新消息"/></div>
					<div class="text">
						<p>即日起預訂住宿，每房即贈送『2017宜蘭國際童玩藝術節平日券』兩張</p>
						<p>這麼有禮，還不趕快拿起電話預約！</p>
						<p>訂房專線：03-9500236、0928-073438 張小姐</p>
						<p>備註：本方案不得與其它優惠方案同時使用</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    // let { data } = await axios.get('/api/users');
    let { data } = await axios.get('/api/news');
    console.log(data,'news');
    console.log(typeof(data),'news');
    // console.log(data,'user');
    return { news: data }
  }
}

</script>
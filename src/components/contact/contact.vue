<template>
  <div class="contact">	
  	<div class="avatar">
  		<img :src="avatarValue" class="avatarImg" alt="" />
  	</div>
  	<ul class="info-wrapper">
  		<li v-for="item in contactInfo">
  			<span class="textLabel">{{item.textLabel}}</span>
  			<span class="textValue">{{item.textValue}}</span>
  		</li>
  	</ul>
  	<a class="mail mui-icon mui-icon-email" href="mailto:314496846@qq.com">contact me </a>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
		data() {
			return {
				contactInfo: [],
				avatarValue: ""
			}
		},
		created() {
			this.$http.get('/api/contact').then((res) => {
				var data = JSON.parse(res.bodyText).data
				this.contactInfo = data.contactInfo
				this.avatarValue = data.avatarValue
			})
		},
		
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .contact
    position: relative
    top: 0
    left: 0
    background-color: #fff
    padding-top: 40px
    height: 430px
    .avatar
      width: 120px
      height: 120px
      border: 1px solid #eee
      border-radius: 100%
      overflow: hidden
      margin: 0px auto
      box-shadow: 0px 0px 3px #979797
      .avatarImg
        width: 100%
        height: 100%
    .info-wrapper
      color: #999
      width: 100%
      text-align: center
      li
        margin-top: 10px
        color: rgba(0,0,0,0.5)
        font-size: 16px
    .mail
      display: inline-block
      text-align: center
      width: 100%
      margin-top: 20px
</style>
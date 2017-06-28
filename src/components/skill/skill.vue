<template>
  <div class="skill">
	  	<ul class="skill_ul">
	  		<li v-for="item in skillInfo" class="skillInfo">
	  			<span class="textLabel icon">{{item.textLabel}}</span>
	  			<span class="textValue text">
	  				<ul>
	  					<li v-for="list in item.textValue" class="desc">
	  						{{list.item}}
	  					</li>
	  					
	  				</ul>
	  			</span>
	  		</li>
	  	</ul>
	  	<div class="hock"></div>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
		data() {
			return {
				skillInfo: [],
				inpText: "",
				textText: ""
			}
		},
		created() {
			this.$http.get('/api/skill').then((res) => {
				var data = JSON.parse(res.bodyText).data
				this.skillInfo = data.skillInfo
				console.log(data)
			})
		}
	}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .skill 
    padding: 0 10px
    position:relative
    -webkit-overflow-scrolling:touch
    overflow:auto
    position:absolute
    width:100%
    top:40px
    bottom:0
  .skillInfo
    display: flex
    box-sizing: border-box
    align-items: center
    padding: 0 20px 20px 10px  
    border-bottom: 1px dashed #eee
    .icon
       flex: 0 0 80px
       width: 80px
       padding-right: 20px
       display: inline-block
       font-size: 14px
       color: #000
	.text
       display: flex
       flex-direction: column
       justify-content: center
       flex: 1
       line-height: 20px
       overflow: hidden
       font-size: $font-size-medium
       margin-top: 10px
       .desc
         margin-bottom: 7px
         color: $color-text-d
         no-wrap()
    .hock
     height: 40px
</style>
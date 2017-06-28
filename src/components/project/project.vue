<template>
	<div class="recommend" ref="recommend">
		<scroll ref="scroll" class="recommend-content" :data="discList">
			<div>
				<div v-if="recommends.length" class="slider-wrapper">
					<slider>
			            <div v-for="item in recommends">
			              <a>
			                <img class="needClick" @load="loadImage" :src="item.picUrl" alt="" />
			              </a>
			            </div>
			       </slider>
				</div>
				<div class="recommend-list">
					<h1 class="list-title">note</h1>
					<ul>
						<li v-for="(item, index) in discList" class="item" @click="showDetail(index)">
							<div class="icon">
								<img class="require" :src="item.imgUrl"  width="60" height="60" alt="" />
								<!--<img v-lazy="item.imgurl" width="60" height="60" alt="" />-->
							</div>
							<div class="text">
								<h2 class="name">{{item.noteTitle}}</h2>
								<p class="desc">{{item.noteAbs}}</p>
								
							</div>
							<p v-show="false" ref="noteDesc">{{item.noteDesc}}</p>
						</li>
					
					</ul>
				</div>
				<div class="hock"></div>
			</div>
			<div class="loading-container" v-show="!discList.length">
		        <loading></loading>
		   </div>
		   	<mt-popup v-model="popupVisible" position="right" modal="true" closeOnClickModal="true">
				<h1 class="detail">detail</h1>
				<p class="detailText">
					{{noteDesc}}
				</p>
			</mt-popup>
			
		</scroll>
	</div>
</template>

<script type="text/ecmascript-6">
	import Slider from 'base/slider/slider'
	import Scroll from 'base/scroll/ss'
	import Loading from 'base/loading/loading'
	import Notedetail from 'components/notedetail/notedetail'
	export default {
		data() {
			return {
				recommends: [],
				discList: [],
				noteList: [],
				detailShow: false,
				noteDesc: "",
				popupVisible: false
			}
		},
		created() {
			this.$http.get('/api/project').then((res) => {
				var data = JSON.parse(res.bodyText).data
				this.recommends = data.slider
				//this.discList = data.projectItem
				
				console.log(data)
				this.discList = data.noteInfo
//				for(var i = 0;i<data.slider.length;i++){
//					console.log(data.slider[i].picUrl)
//				}
				

			})
		},
		mounted() {
			var _this = this;
			setTimeout(function(){
				_this.$refs.scroll.refresh();
			},1000);
		},
		methods: {
			loadImage() {
				if (!this.checkLoaded) {
					//this.$refs.scroll.refresh()
					this.checkLoaded = true
				}
			},
			showDetail(index) {
				this.popupVisible = !this.popupVisible
				//this.detailShow = !this.detailShow;				
				this.noteDesc = this.$refs.noteDesc[index].innerHTML
			},
			hideDetail() {
				this.detailShow = !this.detailShow;
			}
		},
		components: {
	            Slider,
      			Scroll,
      			Loading,
      			Notedetail
	    }
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 40px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 40px
          line-height: 40px
          text-align: center
          font-size: $font-size-medium-x
          color: #000
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 8px 20px 8px 20px
          border-top: 1px solid #ccc
          .icon
            flex: 0 0 60px
            padding-right: 20px
            display: inline-block
            .require
              vertical-align: center
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            magin-left: 10px
            h2
              font-size: 16px
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .hock 
        height: 40px
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
      .mint-popup
        height: 300px
	    .detail
	      color: rgba(0, 0, 0, 0.7)
	      text-align: center
	    .detailText
	      text-indent: 20px
	      padding: 0 10px
</style>
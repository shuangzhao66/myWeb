<template>
  <div class="info">
  	<ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4">
        		<router-link to="/info/list">
                <img src="../../assets/imgs/ryf.png" alt="" />
                <div class="mui-media-body">ryf</div>
        		</router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4">
        		<router-link to="#">
                <img src="../../assets/imgs/yubo.png" alt="" />
                <div class="mui-media-body">yubo</div>
        		</router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4">
        		<router-link to="#">
                <img src="../../assets/imgs/by.png" alt="" />
                <div class="mui-media-body">BYVoid</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4">
        		<router-link to="#">
                <img src="../../assets/imgs/xmj.png" alt="" />
                <div class="mui-media-body">astaxie</div>
        		</router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4">
        		<router-link to="#">
                <img src="../../assets/imgs/sofish.png" alt="" />
                <div class="mui-media-body">sofish</div>
        		</router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4">
        		<a to="#">
                <img src="../../assets/imgs/zz.png" alt="" />
                <div class="mui-media-body">JeffreyZhao</div>
        		</a>
        </li>
	</ul>
	<router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
		data() {
			return {
				
			}
		},
		created() {

		},
		
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .info
    position: relative
    top: 20px
    left: 0
    height: 600px
  	.mui-table-view-cell img{
		width: 60%;
		height: 60%;
	}
	.mui-table-view.mui-grid-view .mui-table-view-cell{
		background-color: #fff;
	}

	.mui-grid-view.mui-grid-9 .mui-table-view-cell{
		border-right: none;
		border-bottom: none;
	}
</style>
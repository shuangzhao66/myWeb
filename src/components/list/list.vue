<template>
	<div class="list">
			<ul class="mui-table-view mui-table-view-chevron">
				<li class="mui-table-view-cell mui-media" v-for="item in list">
					<router-link v-bind="{to: '/detailList/' + item.id}" class="mui-navigate-right">
						<img class="mui-media-object mui-pull-left" :src="item.picUrl">
						<div class="mui-media-body">
							{{item.textLabel}}
							<p class="mui-ellipsis">{{item.textValue}}</p>
						</div>
					</router-link>
				</li>
			</ul>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		data() {
			return {
				list: []
			}	
		},
		created() {
			console.log(this.$route.params.id)
			this.$http.get('/api/list').then( (res) => {
				this.list = JSON.parse(res.bodyText).data
			})
		}
	}
</script>

<style  scoped lang="stylus" rel="stylesheet/stylus">
  .list 
    position: relative
    top: 0
    left: 0
    padding-top: 40px
    height: 400px
</style>
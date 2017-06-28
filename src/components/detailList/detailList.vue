<template>
	<div class="detailList">
		<h2 class="detailTitle">{{detailList.textLabel}}</h2>
		<div class="detailParams" v-html="detailList.textValue">
		</div>
		<div class="hock"></div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		data() {
			return {
				detailList:{}
			}	
		},
		created() {
			this.$http.get("/api/detail" + this.$route.params.id).then( (res) => {
				var data = JSON.parse(res.bodyText).data
				var name = "detail" + this.$route.params.id
				this.detailList = data[name]
			})
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .detailList
    padding: 0 10px
    .detailTitle 
      font-size: 30px
      color: #ccc
      margin: 20px .6rem 10px 
    .detailParams 
      p
        color: pink
        text-indent: 2em
        padding: 0 10px
    .hock
      height: 40px
</style>
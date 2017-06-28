 <template>
  <div class="tab">
  	<router-link tag="div" class="tab-item" to="/project">
  	  <span class="tab-link">参与项目</span>
  	</router-link>
  	<router-link tag="div" class="tab-item" to="/skill">
  	  <span class="tab-link">个人技能</span>
    </router-link>
  	<router-link tag="div" class="tab-item" to="/info">
  	  <span class="tab-link">基本信息</span>
  	</router-link>
  	<router-link tag="div" class="tab-item" to="/contact">
  	  <span class="tab-link">联系我</span>
  	</router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
  .tab
    display: flex
    height: 44px
    line-height: 44px
    font-size: $font-size-medium
    .tab-item
      flex: 1
      text-align: center
      .tab-link
        padding-bottom: 5px
        color: $color-text-l
      &.router-link-active
        .tab-link
          color: $color-theme
          border-bottom: 2px solid $color-theme
</style>
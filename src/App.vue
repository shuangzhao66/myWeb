<template>
  <div id="app">
  	
  	<header class="mint-header">
  		<div class="mint-header-button is-left">
  			<a href="#/" class="router-link-active">
  				<button class="mint-button mint-button--default mint-button--normal" @click="toBack">
  					<span class="mint-button-icon">
  						<i class="mintui mintui-back"></i>
  					</span> 
  					<label class="mint-button-text">Back</label>
  				</button>
  			</a>
  		</div>
  		<h1 class="mint-header-title">Personal web</h1> 
  		<div class="mint-header-button is-right">
  			<button class="mint-button mint-button--default mint-button--normal">
  				<span class="mint-button-icon">
  					<!--<i class="mintui mintui-more"></i>-->
  				</span> 
  				<label class="mint-button-text"></label>
  			</button>
  		</div>
  	</header>
  
    <!--<m-header></m-header>-->
    <!--<tab></tab>-->
    <keep-alive>
    		<router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/project">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">Home</span>
      </router-link>
      <router-link class="mui-tab-item" to="/skill">
        <span class="mui-icon mui-icon-flag"></span>
        <span class="mui-tab-label">skill</span>
      </router-link>
      <router-link class="mui-tab-item" to="/info">
        <span class="mui-icon mui-icon-info"></span>
        <span class="mui-tab-label">info</span>
      </router-link>
      <router-link class="mui-tab-item" to="/contact">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">contact</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'

export default {
  methods: {
  	toBack() {
  		this.$router.go(-1)
  	}
  },
  components: {
  	MHeader,
  	Tab
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  
  #app 
    color: $color-theme
    .allow-right
      font-size: 25px
</style>

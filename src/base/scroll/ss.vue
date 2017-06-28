<template>
	<div ref="wrapper">
		<slot></slot>
	</div>
</template>

<script type="text/ecmascript-6">
	import BScroll from 'better-scroll'
	  export default {
		props: {
	      probeType: {
	        type: Number,
	        default: 1
	      },
	      click: {
	        type: Boolean,
	        default: true
	      },
	      listenScroll: {
	        type: Boolean,
	        default: false
	      },
	      data: {
	      	//从父组件传递过来
	        type: Array,
	        default: null
	      }
	    },
	    methods: {
	    		_initScroll() {
	    			if(!this.$refs.wrapper) {
	    				console.log("tr")
	    				return 
	    			}
	    			 this.scroll = new BScroll(this.$refs.wrapper, {
		          probeType: this.probeType,
		          click: this.click
		       })
	    		},
		        disable() {
		        		 this.scroll && this.scroll.disable()
		      },
		        enable() {
		         this.scroll && this.scroll.enable()
		      },
		      refresh() {
		        	this.scroll && this.scroll.refresh()
		      }
	    },
	    mounted() {
	    		
	    	 setTimeout(() => {
	        this._initScroll()
	      }, 20)
	    		
	    },
	    watch: {
	    		data (){
		    		setTimeout( () => {
		    			console.log("zztt")
		    			this.refresh()
		    		}, 20)
	    		}
	    }
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
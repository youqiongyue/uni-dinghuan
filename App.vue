<script>
  export default {
    onLaunch: function() {
      console.log('App Launch')
    },
    onShow: function() {
      console.log('App Show')
    },
    onHide: function() {
      console.log('App Hide')
    },
    mounted() {
      document.dispatchEvent(new Event('render-event'));
    }
  }
</script>


<style lang="scss">
	@import "uview-ui/index.scss";
  .container {
    padding: 15px;
  }

  button {
    margin-bottom: 15px;
  }

  body {
    user-select: text; /* 禁止文本选择 */
  }
  
</style>
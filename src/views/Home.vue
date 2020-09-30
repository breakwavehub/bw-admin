<template>
  <div class="home">
    <a-affix :offset-top="top">
      <v-header />
    </a-affix>
    <div>
        dddd
    </div>
  </div>
</template>

<script>
import vHeader from '@/components/header'
import { ref } from 'vue'
export default {
  name: 'Home',
  components: {
    vHeader
  },
  setup () {
    const top = ref(0)
    return {
      top
    }
  }
}
</script>
<style lang="less">
  .home {

  }
</style>

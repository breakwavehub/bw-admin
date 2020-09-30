<template>
    <div class="header">
      <img src="../assets/logo.png" class="logo" alt="">
      <a-button type="primary" @click="setLoading">loading</a-button>
    </div>
</template>
<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  setup () {
    const top = ref(0)
    const store = useStore()

    const loading = computed(() => store.state.status.loading)
    console.log(loading.value)
    const setLoading = () => {
      store.dispatch('status/setLoading', !loading.value)
      console.log(loading.value)
    }
    const router = useRouter()
    // router.push('/')
    console.log(router)
    return {
      top,
      loading,
      setLoading
    }
  }
}
</script>
<style lang="less">
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background: @white;
    .logo{
      width:60px;
      height: 60px;
    }
  }
</style>

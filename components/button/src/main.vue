<template>
  <button @click="btnClick" :class="['btn',`btn-${type}`]">
    <!-- 插槽 -->
    <slot></slot>
  </button>
</template>
<script>
export default {
  name:'Mybtn',
  props:{
    // `medium` / `small` / `mini`
    size:{
      type:String,
      default:'medium'
    },
    // `primary` / `success`
    type:{
      type:String,
      default:'primary'
    }
  },
  methods:{
    btnClick(){
      // 这是点击事件
      this.$emit('点击')
    }
  }
}
</script>


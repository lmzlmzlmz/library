<Mybtn @click='btnClick'>常规按钮</Mybtn>
<Mybtn @click='btnClick' type='success'>成功按钮</Mybtn>

```js {mixin:true}
{
  data() {
    return {
  
    }
  },
  methods:{
    btnClick(){
      alert('点击')
    }
  }
}
```

# 用来作为 markdown 代码的示例部分
```html
<template>
 <Mybtn >常规按钮</Mybtn>
 <Mybtn type='success'>成功按钮</Mybtn>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods:{
    btnClick(){
      alert('点击')
    }
  }
}
</script>

```

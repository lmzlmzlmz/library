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
      alert('click me')
    }
  }
}
</script>

```


# Mybtn

## Props

<!-- @vuese:Mybtn:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|size|`medium` / `small` / `mini`|`String`|`false`|medium|
|type|`primary` / `success`|`String`|`false`|primary|

<!-- @vuese:Mybtn:props:end -->


## Events

<!-- @vuese:Mybtn:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|点击|这是点击事件|-|

<!-- @vuese:Mybtn:events:end -->


## Slots

<!-- @vuese:Mybtn:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|default|插槽|-|

<!-- @vuese:Mybtn:slots:end -->



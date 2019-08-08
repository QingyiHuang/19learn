```vue
<template>
	<button @click="function">提交</button>
	<!--事件修饰符号-->
	<!--prevent 阻止默认事件-->
    <!--stop 阻止事件冒泡 阻止事件从内向外发生-->
	<!--capture 捕获事件 从外层到内发生-->
	<a href="http://pick.com" @click.stop.prevent="clickFn">既阻止冒泡也阻止跳转</a>
</template>
<script>
    export default {
        data() {
            return{
                
            }
        },
        methods: {
            clickFn(){
                console.log("ace ace ace")
            }
        }
    }
</script>
```


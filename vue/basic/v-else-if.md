```vue
<template>
	<!--v-else 必须紧跟在 v-if之后-->
	<p v-if="isLogin">注册</p>
	<p v-else>欢迎你</p>

	<p v-if="isLogin ==true">11111111</p>
    <p v-else-if="isLogin != false">22222222</p>
    <p v-else>33333333</p>
</template>
<script>
    export default {
        data() {
            return {
                isLogin: false,
            }
        },
        methods: {
            
        }
    }
</script>
```


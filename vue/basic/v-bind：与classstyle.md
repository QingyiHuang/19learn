```vue
<template>
<!--vm.classObj.class2 = false-->
	<p :class="classObj">
        hhhhhhhhh
    </p>
	<ul>
        <!--class 以对象形式处理-->
        <li v-for="(item, index) in list"  :class="{bingo: index%2===0}">{{item}}</li>
    </ul>
</template>
<script>
    export default {
        data(){
            return{
                bingo: 'class1';
                classObj: {//v-bind可以对象写入class/数组
                	class1: true,
                	class2: true,
            	},
                list: ['222','333','444','555','666','7777']
            }
        },
    }
</script>
<style>
    .class1{
        color: red;
    }
    .class2{
        color: blue;
    }
</style>
```

##### style

```vue
<template>
	<p :style="{width: width+'px'}" :style = "styleObj">
        {{ msg }}
    </p>
</template>
<script>
    export default {
        data() {
            return {
                msg: 'hh',
                width: 13px,
                styleObj: {
                    width: '200px',
                    height: '100px'
            	}
            }
        }
    }
</script>
<style>

</style>
```


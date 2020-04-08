<template>
    <div class="footer">
        <!-- <p>关于我们 | 联系我们 | 隐私保护 | 版权声明</p> -->
        <p>copyright©杭州微助速律信息技术有限公司 | ICP备案号：浙ICP备18050967号-2</p>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style lang="less" scoped>
.footer{
    width: 100%;
    height: 100px;
    // background-color: #dedede;
    padding-top: 50px;
    text-align: center;
    p{
        font-size: 12px;
        color: #333;
        margin-bottom: 20px;
    }
}
@media screen and (max-width:576px){ 
    .footer{
        height: 120px;
        padding: 24px 20px 0px 20px;
        // padding: 0 20px;
    }
}
</style>

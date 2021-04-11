<template>
    <div class="intro-header">
        <h1>Joyce Blog</h1>
    </div>
</template>
<script>
export default {
    name: 'header',
    
}
</script>
<style lang="scss" scoped>
// @import "@styles/common.css";

    .intro-header{
        font-family: -apple-system,BlinkMacSystemFont,"Helvetica Neue",Arial,"PingFang SC","Hiragino Sans GB",STHeiti,"Microsoft YaHei","Microsoft JhengHei","Source Han Sans SC","Noto Sans CJK SC","Source Han Sans CN","Noto Sans SC","Source Han Sans TC","Noto Sans CJK TC","WenQuanYi Micro Hei",SimSun,sans-serif;
        background: no-repeat center center;
        background-color: #a3a3a3;
        background-attachment: scroll;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        background-size: cover;
        -o-background-size: cover;
        margin-bottom: 0;
        width: 100%;
        padding: 150px 0;
        color: white;
        font-size: 80px;
        font-weight: 700;
        line-height: 1.1;
    }

    @media only screen and (min-width: 768px) {
        .intro-header {
            margin-bottom: 20px;
            /* response on desktop */
        }
    }

</style>
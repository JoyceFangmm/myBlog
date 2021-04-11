<template>
    <el-container>
        <el-header style="background:pink">Header-post</el-header>
        <el-main style="padding:0" class="content">
            <div class="container">
                <el-row>
                    <el-col :xs="24" :sm="24" :md="{span:17,offset:1}" :lg="{span:17,offset:1}" :xl="{span:17,offset:1}" class="post-container" style="background: yellow">
                        <div style="background:red"></div>
                    </el-col>
                    <el-col :xs="1" :sm="1" :md="{span:6,offset:0}" :lg="{span:6,offset:0}" :xl="{span:6,offset:0}" class="sidebar-container hidden-sm-and-down" style="background: green">
                        <div style="background:red"></div>
                    </el-col>
                </el-row>
            </div>
        </el-main>
    </el-container>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {
  }
}
</script>
<style lang="scss" scoped>
// 房志梅-test
div {
  min-height: 800px;
  background: blue;
}

.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}

@media (min-width: 1200px) {
  .post-container,
  .sidebar-container {
    padding-right: 5%;
  }
}
@media (min-width: 768px) {
  .post-container {
    padding-right: 5%;
  }
}
</style>

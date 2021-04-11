<template>
    <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main>
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
import Header from '@/components/Header.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    Header
  },
  created () {
  }
}
</script>
<style lang="scss" scoped>
.intro-header{
  background-image: url(../assets/about-bg.jpeg);
}
</style>

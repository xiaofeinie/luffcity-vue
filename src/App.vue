<template>
  <div id="app">
    <nav class="navbar navbar-default">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Brand</a>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
            <router-link
                        to="/"
                        tag="li"
                         activeClass = 'active'
                         exact
            ><a>首页</a></router-link>
            <router-link
              to="/coures"
              tag="li"
             activeClass = 'active'
             exact><a>课程列表</a></router-link>




            </ul>

            <ul class="nav navbar-nav navbar-right">
              <router-link
                    to="/login"
                    tag="li"
                    activeClass = 'active'
                    exact><a>登录</a>

                    </router-link>
              <li><a href="#">登录</a></li>
              <li><a href="#">注册</a></li>

            </ul>
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
      </nav>

      <!-- 出口 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>

<template>
  <div>
    <h2>登录页面</h2>
    <input type="text" placeholder="用户名" v-model="username">
    <input type="password" placeholder="密码" v-model="password">
    <input type="button" value="提交" v-on:click="doLogin">
  </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
              username:'',
              password:''
            }
        },
        // mounted(){
        //     this.doLogin()
        // },
      methods:{
          doLogin:function () {
            this.$axios.request({
              url:'http://127.0.0.1:8006/api/v1/login',
              method:'POST',
              data:{
                user:this.username,
                pwd:this.password
              },
              headers:{
                'Content-Type':'application/json'
              },
              responseType: 'json'
            }).then(function (arg) {
             console.log(123)
            }).catch(function (error) {
              console.log(error)
            })
          },

      }
    }
</script>

<style scoped>

</style>

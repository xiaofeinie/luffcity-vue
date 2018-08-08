<template>
  <div>
    <h2>课程列表</h2>
    <ul v-for="item in courseList">
      <li title_id = item.id>{{item.name}}</li>

      <!--<input type="button" v-for="price in item.price_list" value={{price.price}}>-->
        <!--循环显示价格-->
        <div
          class="btn-group"
          role="group"
          v-for="i in item.price_list">
        <button
          type="button"
          class="btn btn-default"
          v-on:click="addList($event)"
          v-bind:price_id="i.id"
          v-bind:title_id="item.id">{{i.price}}</button>
      </div>



        <div>
         <button
           type="button"
           class="btn btn-success"
          v-on:click="addShoppCar">添加到购物车</button>
        </div>
    </ul>

  </div>
</template>

<script>
    export default {
        name: "Coures",

        data(){
            return {
              courseList:[
                {'id':1, 'name':'python基础'},
                {'id':2, 'name':'java基础'},
                {'id':3, 'name':'js基础'},
                {'id':4, 'name':'C#基础'},
              ],
              arg:'',
              price_title:[
                {'title_id':'','price_id':''}
              ]
            }
        },
        mounted(){
            this.initCourse();
            // this.addList();
            // this.addShoppCar()
        },
      methods:{
          initCourse:function () {
            var _this = this;
            this.$axios.request({
              url:'http://127.0.0.1:8006/api/v1/courses',
              method:'GET',
              responseType:'json',
            }).then(function (arg) {
              _this.arg=arg
              console.log(arg)
              if (arg.data.code === 1000) {
                _this.courseList = arg.data.data
              }else{
                alert(arg.data.error)
              }
            }).catch(function (error) {
              console.log(error)
            })
          },
          addList:function (e) {
            this.price_title[0] = {'price_id':e.target.getAttribute('price_id'),'title_id':e.target.getAttribute('title_id')}
          },



        addShoppCar:function () {
             var _this = this;
              this.$axios.request({
              url:'http://127.0.0.1:8006/api/v1/shoppingcar/',
                method:'POST',
                data:_this.price_title,
                headers:{
                'Content-Type':'application/json'
              },
              responseType:'json',
            }).then(function (arg) {
              console.log(arg)

            }).catch(function (error) {
              console.log(error)
            })
        },




      }
    }
</script>

<style scoped>

</style>

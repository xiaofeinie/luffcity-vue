<template>
  <div>
    <h2>购物车</h2>
    <table class="table">
      <thead>
    <tr>
      <td>选择</td>
      <td>图片</td>
      <td>课程名</td>
      <td>价格选项</td>
      <td>价格</td>
      <td>删除操作</td>
    </tr>
    <tr
      v-for="item in shopping_list"
    >
      <td><input type="checkbox"></td>
      <td>{{item.img}}</td>
      <td>{{item.name}}</td>
      <td>
        <div class="dropdown">
          <button class="btn btn-default dropdown-toggle"
                  type="button" id="dropdownMenu1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true">
            {{item.price}}
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu1" >

              <li v-for="i in item.defaut_price"
                  v-on:click="click_price(item.id,i.id)"
                v-bind:tiele_id = 'item.id'
                v-bind:price_id = "i.id"><a>{{i.price}}</a></li>


          </ul>
        </div>
      </td>
      <td>￥{{item.price}}</td>
      <button
        v-on:click="delete_shopping($event)"
        class="btn btn-info"
        v-bind:delete_shopping_id = item.id
      >删除</button>
    </tr>
      </thead>
    </table>

  </div>
</template>

<script>
    export default {
        name: "Shopping_car",
      data(){
          return {
            shopping_list:[
              {'id':'','name':'','img':'','price':'','defaut_price_id':'','defaut_price':{}}
            ]
          }

      },
      mounted(){
          this.initShopping()
      },
      methods:{
          initShopping:function () {
            var _this = this;
            this.$axios.request({
              url:'http://127.0.0.1:8006/api/v1/shoppingcar/',
              method:'GET',
              responseType:'json',
            }).then(function (arg) {
              console.log(arg);
              if (arg.data.code === 200) {
                  _this.shopping_list = arg.data.data
              }else {
                alert(arg.data.error)
              }


            }).catch(function (error) {
              console.log(error)
            })

          },
          delete_shopping:function (e) {
            var _this = this;
            var shopping_del_id = e.target.getAttribute('delete_shopping_id');
            var url_path = 'http://127.0.0.1:8006/api/v1/shoppingcar/?delete_shopping_id='+shopping_del_id
            this.$axios.request({
              url:url_path,

              method:'DELETE',
              responseType:'json',
            }).then(function (arg) {
              console.log(arg);
              if (arg.data.code === 200) {
                alert(arg.data.data);
                  _this.initShopping()
              }else {
                alert(arg.data.error)
              }


            }).catch(function (error) {
              console.log(error)
            })
          },
          click_price:function (x,y) {
              var _this = this;
              console.log(x,y);
              // console.log(e.target.getAttribute('tiele_id'));
              this.$axios.request({
              url:'http://127.0.0.1:8006/api/v1/shoppingcar/',
              method:'PUT',
                data:{'tetle_id':x,'price_id':y},


              responseType:'json',
            }).then(function (arg) {
              console.log(arg);
              if (arg.data.code === 200) {
                  _this.initShopping()
              }else {
                alert(arg.data.error)
              }
            }).catch(function (error) {
              console.log(error)
            })

          }
      }
    }
</script>

<style scoped>

</style>

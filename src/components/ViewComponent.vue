<template lang="">
  <div class="row justify-content-center">
    <div class="col-md-10">
      <h2>View Menu</h2>
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>Menu name</th>
            <th>Price</th>
            <th>Details</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(menu, index) in dataList" :key="index">
            <td>{{menu.menu_name}}</td>
            <td>{{menu.price}}</td>
            <td>{{menu.detail}}</td>
            <td class="flex-row"> 
              <button class="btn btn-warning update">
                <router-link :to="'/?id=' + menu._id" class="nav-link">Edit</router-link>
              </button>
              <button class="btn btn-danger" @click="onDelete(menu._id)">
                Del
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    let dataList = []
    return {
      dataList
    }
  }, 
  created() {
    this.getData();
  },
  methods: {
    async getData(){
      try {
        const res = await axios.get('http://localhost:3000/menus/')
        this.dataList = res.data;
      } catch (error) {
        console.log(error);
      }
    },

    async onDelete(id){
      try {
        await axios.delete('http://localhost:3000/menus/delete/' + id)
        this.$router.go()
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style>
  .update {
    margin-right: 10px !important;
  }
</style>
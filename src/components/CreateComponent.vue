<template lang="">
  <div class="row justify-content-center">
    <div class="col-md-10">
      <h2>{{ (this.$route.query.id) ? "Update Menu" : "Create Menu" }}</h2>
      <form action="">

        <!-- input menu name -->
        <div class="form-group">
          <label for="name">Menu name</label>
          <input type="text" class="form-control" v-model="menu.menu_name">
        </div>
        <br>

        <!-- input menu price -->
        <div class="form-group">
          <label for="name">Price</label>
          <input type="text" class="form-control" v-model="menu.price">
        </div>
        <br>

        <!-- input menu details -->
        <div class="form-group">
          <label for="name">Details</label>
          <input type="text" class="form-control" v-model="menu.detail">
        </div>
        <br>
        <div class="form-group mt-3">
          <button class="btn btn-success col-12" @click="(this.$route.query.id) ? updateData(this.$route.query.id) : onSave()">
            {{(this.$route.query.id) ? "Update" : "Create"}}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    let menu = {
      menu_name: "",
      price: "",
      detail: "",
    }
    return {
      menu
    }
  },
  created() {
    if (this.$route.query.id) {
      this.getData(this.$route.query.id);
    }
  },
  methods: {
    async onSave() {
      try {
        const res = await axios.post('http://localhost:3000/menus/create/', this.menu)
      } catch (error) {
        console.log(error);
        window.alert('ERROR');
      }
    },
    async getData(id) {
      try {
        const res = await axios.get(`http://localhost:3000/menus/${id}`)
        this.menu = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async updateData(id) {
      try {
        await axios.put(`http://localhost:3000/menus/update/${id}`, this.menu)
        this.$route.push('/view');
      } catch (error) {
        console.log(error);
      }
    }
  },
}
</script>
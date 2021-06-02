<template>
  <div>
    <router-link :to="{ name: 'Create' }" class="button is-success mt-5"
      >Add New</router-link
    >
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Datum</th>
          <th>Start</th>
          <th>Ende</th>
          <th>Dauer</th>
          <th>Intensität</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.migraine_id">
          <td>{{ item.migraine_datum }}</td>
          <td>{{ item.migraine_start }}</td>
          <td>{{ item.migraine_ende }}</td>
          <td>{{ item.migraine_dauer }}</td>
          <td>{{ item.migraine_intensitaet }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'Edit', params: { id: item.migraine_id } }"
              class="button is-info is-small"
              >Edit</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deletemigraine(item.migraine_id)"
              >Delete</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "MigraineList",
  data() {
    return {
      items: [],
    };
  },
 
  created() {
    this.getMigraines();
  },
 
  methods: {
    // Get All Migraines
    async getMigraines() {
      try {
        const response = await axios.get("http://localhost:5000/Migraines");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete Migraine
    async deleteMigraine(id) {
      try {
        await axios.delete(`http://localhost:5000/Migraines/${id}`);
        this.getMigraines();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>
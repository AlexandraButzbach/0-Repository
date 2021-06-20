<template>
  <div>
    <div class="field">
      <label class="label">Datum</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="dd.mm.yy"
          v-model="migraineDatum"
        />
      </div>
    </div>
 
    <div class="field">
      <label class="label">Start</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="hh:min"
          v-model="migraineStart"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Ende</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="hh:min"
          v-model="migraineEnde"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Dauer</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="0h 0min"
          v-model="migraineDauer"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Intensität</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="1-10"
          v-model="migraineIntensitaet"
        />
      </div>
    </div>
 
    <div class="control">
      <button class="button is-success" @click="updateMigraine">UPDATE</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "EditMigraine",
  data() {
    return {
      migraineDatum: "",
      migraineStart: "",
      migraineEnde: "",
      migraineDauer: "",
      migraineIntensitaet: "",
    };
  },
  created: function () {
    this.getMigraineById();
  },
  methods: {
    // Get Migraine By Id
    async getMigraineById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/migraines/${this.$route.params.id}`
        );
        this.migraineDatum = response.data.migraine_datum;
        this.migraineStart = response.data.migraine_start;
        this.migraineEnde = response.data.migraine_ende;
        this.migraineDauer = response.data.migraine_dauer;
        this.migraineIntensitaet = response.data.migraine_intensitaet;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Update Migraine
    async updateMigraine() {
      try {
        await axios.put(
          `http://localhost:5000/migraines/${this.$route.params.id}`,
          {
          migraine_datum: this.migraineDatum,
          migraine_start: this.migraineStart,
          migraine_ende: this.migraineEnde,
          migraine_dauer: this.migraineDauer,
          migraine_intensitaet: this.migraineIntensitaet,
          }
        );
        this.migraineDatum = "";
        this.migraineStart = "";
        this.migraineEnde = "";
        this.migraineDauer = "";
        this.migraineIntensitaet = "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>

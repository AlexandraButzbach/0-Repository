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
      <button class="button is-success" @click="saveMigraine">SAVE</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 


export default {
  name: "AddMigraine",
  data() {
    return {
      migraineDatum: "",
      migraineStart: "",
      migraineEnde: "",
      migraineDauer: "",
      migraineIntensitaet: "",

      //@Work hier noch unsere zusätzlichen Felder hinzufügen
    };
  },
  methods: {
    // Create New Migraine
    async saveMigraine() {
      try {
        await axios.post("http://localhost:5000/migraines", {
        //@Work hier noch unsere zusätzlichen Felder hinzufügen, mit der GENAU gleichen Schreibweise wie im DataGrip
          migraine_datum: this.migraineDatum,
          migraine_start: this.migraineStart,
          migraine_ende: this.migraineEnde,
          migraine_dauer: this.migraineDauer,
          migraine_intensitaet: this.migraineIntensitaet,
        });
        //@Work hier noch unsere zusätzlichen Felder hinzufügen
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
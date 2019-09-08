<template>
  <div class="settings">
    <h1>This is the settings page</h1>
    <p>msg{{ message }}</p>
    <p class="green darken-4">green</p>
    <p class="red lighten-2 green--text">red</p>
    <div id="app-6">
      <p>d{{ message }}</p>
      <input v-model="message" />
    </div>
    <v-file-input small-chips multiple label="File input w/ small chips"></v-file-input>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  props: {
    source: String
  },
  data: () => ({
    messsage: "tttt"
  })
};
</script>
<template>
  <div>
    <h1 class="red px-2">Dashboard1</h1>

    <div red>
      <span>
        <p class="red--text mt-2">Input: {{ message }}</p>
      </span>
      <v-spacer></v-spacer>
      <span>
        <p>{{filenames.name}}</p>
      </span>

      <v-btn color="grey" @click="btnclick">MQTT Test</v-btn>

      <!-- <input class="red px-3" v-model="message" /> -->
    </div>
    <v-text-field v-model="model" label="label">ssfsfsd</v-text-field>
    <v-file-input v-model="filenames" label="File input w/ small chips"></v-file-input>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id delectus temporibus obcaecati numquam, tenetur quibusdam cum, maiores dignissimos, aut laudantium vel praesentium architecto nostrum earum! Eos iste voluptatem assumenda ea.</p>
  </div>
</template>

<script>
var mqtt = require("mqtt");
 // var client = mqtt.connect("mqtt://test.mosquitto.org");
 var client = mqtt.connect("wss://test.mosquitto.org:8081");
 

  // console.log(this.filenames);
 console.log('publish1')
  client.on("connect", function() {
    client.subscribe("hgotopic", function(err) {
      if (err) {
          console.log('Errroe subscribe', err)
        
      }
    });
  });

  client.on("message", function(topic, message) {
    // message is Buffer
    console.log(topic, message.toString());
    // client.end();
  });

function mqttTest() {
    console.log('publish')
    client.publish("hgotopic", "Hello mqtt from hartmut1");
}
export default {
  data: () => ({
    msg: "test",
    filename11: "test",
    model: "this is a input",
    filenames: [],
    message: "23444"
  }),
  methods: {
    btnclick: mqttTest
  }
};
</script>

<style>
</style>
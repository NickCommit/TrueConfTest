<template>
  <div>
    <div class="light-box">
      <div class="red-color color" :class="{opacity: !redLight.isActive}">
        <red 
          v-if="redLight.isActive" 
          :redLight="redLight" 
          @time="update" 
          @done="colorDone">
        </red>
      </div>
      <div class="yellow-color color" :class="{opacity: !yellowLight.isActive}">
        <yellow
          v-if="yellowLight.isActive"
          :yellowLight="yellowLight"
          @time="update"
          @done="colorDone"
        ></yellow>
      </div>
      <div class="green-color color" :class="{opacity: !greenLight.isActive}">
        <green 
          v-if="greenLight.isActive" 
          :greenLight="greenLight" 
          @time="update" 
          @done="colorDone">
        </green>
      </div>
    </div>
    <div class="timer-box">
      <div>{{timerBox}}</div>
    </div>
  </div>
</template>

<script>
import green from "@/components/green.vue";
import yellow from "@/components/yellow.vue";
import red from "@/components/red.vue";

export default {
  data() {
    return {
      greenLatency: 15,
      yellowLatency: 3,
      redLatency: 10,
      timerBox: 0,
      redLight: {
        time: 0,
        isActive: false
      },
      yellowLight: {
        time: 0,
        isActive: false
      },
      greenLight: {
        time: 0,
        isActive: false
      }
    };
  },
  mounted: function() {
    if (this.$router.currentRoute.name) {
      switch (this.$router.currentRoute.name) {
        case "red":
          this.redStart();
          break;
        case "yellow":
          this.yellowStart();
          break;
        case "green":
          this.greenStart();
          break;
      }
    } else {
      this.colorSwitcher();
    }
  },
  methods: {
    update: function(count) {
      this.timerBox = count;
    },
    colorDone: function(color) {
      this.redLight.time = this.greenLight.time = this.yellowLight.time = 0;
      this.redLight.isActive = this.greenLight.isActive = this.yellowLight.isActive = false;
      this.colorSwitcher();
    },
    colorSwitcher: function() {
      switch (localStorage.lastColor) {
        case "green":
          this.yellowStart();
          break;
        case "red":
          this.yellowStart();
          break;
        case "yellow":
          if (localStorage.beforeLastColor === "red") {
            this.greenStart();
          }
          if (localStorage.beforeLastColor === "green") {
            this.redStart();
          }
          if (localStorage.beforeLastColor === "yellow") {
            this.greenStart();
          }
          break;
      }
    },
    greenStart: function() {
      this.greenLight.time = this.greenLatency;
      this.greenLight.isActive = true;
    },
    redStart: function() {
      this.redLight.time = this.redLatency;
      this.redLight.isActive = true;
    },
    yellowStart: function() {
      this.yellowLight.time = this.yellowLatency;
      this.yellowLight.isActive = true;
    }
  },
  components: {
    green,
    yellow,
    red
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.opacity {
  opacity: 0.2;
}
.red-color {
  background-color: red;
}
.yellow-color {
  background-color: yellow;
}
.green-color {
  background-color: green;
}
.light-box {
  width: 450px;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border: 2px solid #e7ebec;
  border-radius: 20px;
}
.color {
  overflow: hidden;
  height: 100px;
  width: 100px;
  border: 1px solid #e7ebec;
  border-radius: 100%;
}
.timer-box {
  width: 450px;
  font-size: 100px;
  text-align: center;
  border: 2px solid #e7ebec;
  border-radius: 20px;
  overflow: hidden;
  margin: 20px;
  padding: 20px;
}
button {
  height: 100px;
  width: 100px;
  font-size: 30px;
  font-family: sans-serif;
}
</style>

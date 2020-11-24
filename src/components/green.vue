<template>
  <div class="green-component-div" :class="{ blink }">{{greenLight.time}}</div>
</template>

<script>
export default {
  data() {
    return {
      blink: false,
      timeCounter: function(time) {
        this.$emit("time", time);
        if (time > 0) {
          if (time === 3) {
            this.blink = true;
          }
          setTimeout(() => {
            time--;
            this.timeCounter(time);
          }, 1000);
        } else this.emit();
      }
    };
  },
  props: ["greenLight"],

  mounted: function() {
    if (this.$router.currentRoute.name !== "green") { //Prevent error: NavigationDuplicated Navigating to current location
      this.$router.push("Green");
    }
    this.timeCounter(this.greenLight.time);
  },
  methods: {
    emit: function() {
      localStorage.beforeLastColor = localStorage.lastColor;
      localStorage.lastColor = "green";
      this.$emit("done");
    }
  }
};
</script>

<style>
.green-component-div {
  opacity: 0;
  width: 100%;
  height: 100%;
}

.blink {
  width: 100%;
  height: 100%;
  animation-name: blinker;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(1, 0, 0, 1);
  animation-duration: 1s;
  -webkit-animation-name: blinker;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: cubic-bezier(1, 0, 0, 1);
  -webkit-animation-duration: 1s;
}

@keyframes blinker {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@-webkit-keyframes blinker {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
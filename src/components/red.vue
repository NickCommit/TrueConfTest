<template>
  <div class="red-component-div">{{redLight.time}}</div>
</template>

<script>
export default {
  data() {
    return {
      timeCounter: function(time) {
        this.$emit("time", time);
        if (time > 0) {
          setTimeout(() => {
            time--;
            this.timeCounter(time);
          }, 1000);
        } else {
          this.emit();
        }
      }
    };
  },
  props: ["redLight"],

  mounted: function() {
    if (this.$router.currentRoute.name !== 'red') { //Prevent error: NavigationDuplicated Navigating to current location
      this.$router.push("Red");
    }
    this.timeCounter(this.redLight.time);
  },

  methods: {
    emit: function() {
      localStorage.beforeLastColor = localStorage.lastColor;
      localStorage.lastColor = "red";
      this.$emit("done");
    }
  }
};
</script>

<style>
.red-component-div {
  opacity: 0;
  height: 100%;
  width: 100%;
}
</style>
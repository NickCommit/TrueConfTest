<template>
  <div class="yellow-component-div">{{yellowLight.time}}}}</div>
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
  props: ["yellowLight"],

  mounted: function() {
    if (this.$router.currentRoute.name !== "yellow") { //Prevent error: NavigationDuplicated Navigating to current location
      this.$router.push("Yellow");
    }
    this.timeCounter(this.yellowLight.time);
  },

  methods: {
    emit: function() {
      localStorage.beforeLastColor = localStorage.lastColor;
      localStorage.lastColor = "yellow";
      this.$emit("done");
    }
  }
};
</script>

<style>
.yellow-component-div {
  opacity: 0;
  height: 100%;
  width: 100%;
}
</style>
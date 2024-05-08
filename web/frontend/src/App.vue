<template>
  <div>
    <button @click="goToWorkbench">Go to Workbench</button>
    <button @click="goToProfile">Go to Profile</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    goToWorkbench() {
      this.$router.push('/workbench');
    },
    goToProfile() {
      this.$router.push('/profile');
    }
  }
};
</script>
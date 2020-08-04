<template>
  <div class="loader">
    <pulse-loader :loading="true" color="#1C528A"></pulse-loader>
  </div>
</template>
<style>
.loader {
  position: fixed;
  /* Stay in place */
  z-index: 1;
  /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Fallback color */
  background-color: rgba(248, 239, 239, 0.7);
  /* Black w/ opacity */
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

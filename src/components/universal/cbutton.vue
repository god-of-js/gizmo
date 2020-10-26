<template>
  <button
    :class="
      `border__radius yellow__btn font__x__sm ${pr ? pr : ''} ${
        pl ? pl : ''
      } box__shadow pt-0`
    "
  >
    {{ text }}
  </button>
</template>
<script>
export default {
  props: {
    text: String,
    pr: String,
    pl: String
  }
};
</script>

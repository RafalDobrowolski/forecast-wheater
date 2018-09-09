<template>
  <div class="container">
    <div class="row">
      <wheater-item 
        v-for="(item, i) in wheaters"
        :wheater="item"
        :key="i"
      />
    </div>
  </div>
</template>

<script>

import WheaterListItem from './WheaterListItem.vue';

export default {
  name: 'WheaterList',

  props: ['wheaters'],

  components: {
    'wheater-item': WheaterListItem
  }, //components

} //export
</script>



<style scoped>
  .wheater-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    margin: 10px 5%;
    font-size: 1rem;
  }
</style>
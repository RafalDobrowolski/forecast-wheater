<template>
<div>
   <span><strong>Star:</strong><span> {{starCount}}</span></span>
  <p> <span class="rating" v-on:click="removeStar()">Remove</span><span class="rating" v-on:click="addStar()">Add</span></p>
  </div>
</template>

<script>
export default {
    name: 'StarComponent',
    data() {
        return {
            starCount: 0
        }
    },
  methods:{
      removeStar: function() {
        if (this.starCount === 0) {
              return;
        }
        
        this.starCount--;
      },
      addStar: function() {
        if (this.starCount === 5) {
              return;
        }
        
        this.starCount++;
      }
  }
}
</script>

<style scoped>
    .rating {
        cursor: pointer;
        padding: 2px 5px;
        text-decoration: none;
        background-color: rgb(7, 55, 99);
        color: white;
        margin-right: 10px;
    }

</style>


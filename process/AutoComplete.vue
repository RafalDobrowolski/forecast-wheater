<template>
    <div class="autocomplete">
        <input type="text" v-model="search" @input="onChange" />
            <ul v-show="isOpen" class="autocomplete-results">
                <li v-for="(result, i) in results"
                    :key="i"
                    @click="setResult(result)"
                    class="autocomplete-result"
                >{{ result }}
                </li>
            </ul>
    </div>
</template>

<script>
export default {
   name: 'AutoComplete',
   props: {
    items: {
        type: Array,
        required: false,
        default: () => [],
      }
    },
    data() {
        return {
            search: '',
            results:[],
            isOpen: false
        };
    },
    methods:{
        onChange() {
          this.isOpen = true;
          this.filterResults()
        },
        filterResults() {
          this.results = this.items.filter(item => item.toLowerCase().indexOf(this.search.toLowerCase()) > -1 )
        },
        setResult(result) {
          this.search = result;
          this.isOpen = false;
          this.$emit('searchCityRecord', this.search);
        }

    },
    watch: {

  },
}
</script>
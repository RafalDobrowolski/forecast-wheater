
<template>
  <div id="main-app">
    <div class="row">
      <div class="col-xs-6">
        <auto-complete 
        :items="cities"
        @searchCityRecord="searchSelectedCity"/>
        <p class="desc">Please choose city from the list [London, Warsaw, Gdansk, Athens, Vienna]</p>
      </div>
      <div class="col-xs-6">
        <search-wheater 
          :myKey="filterKey"
          :myDir="filterDir"
          @searchRecords='searchWheater' 
          @keyChange= "changeKey"
          @dirChange = "changeDir"/>
        </div>
        </div>
    <wheater-list
      :wheaters = 'filteredWheaters'/>
  </div>
</template>

<script>

import _ from 'lodash';
import moment from 'moment';
import { WeatherForecastApiUtil } from './utils/api-utils.js';
import { WeatherForecastUtil } from "./utils/wheater-utils.js";
import SearchWheater from './SearchWheater.vue';
import WheaterList from './WheaterList.vue';
import AutoComplete from './AutoComplete.vue';

export default {
  name: 'MainApp',
  data() {
    return {
      WheaterMainList: [],
      searchWheaterByDay: 5,
      searchTerms: '',
      selectedCity:'London',
      filterKey: 'wheaterType',
      filterDir: 'asc',
      apiUtil: new WeatherForecastApiUtil(),
      wheaterUtil: new WeatherForecastUtil(),
      cities: ['London', 'Warsaw','Gdansk','Athens', 'Vienna']
    } //return
  }, //data

  components: {
    'search-wheater': SearchWheater,
    'wheater-list': WheaterList,
    'auto-complete': AutoComplete
  }, //components

  created: function() {
    this.searchForecast(this.selectedCity);
  }, //created
  methods: {
    searchForecast: function(result) {
      const apiUrl = this.apiUtil.getUrl(result, this.searchWheaterByDay);
      $.getJSON(apiUrl)
        .done(data =>  {
          data.list.map(item =>  
            this.WheaterMainList.push(this.wheaterUtil.mapForecastWheater(item)
            ));
          debugger;
      }); //getJSON    
    },
    handleSearchError: function(err) {
      console.log(err);
    },
    searchWheater: function(query) {
      this.searchTerms = query;
    }, //search Wheater
    searchSelectedCity: function(city) {
      this.selectedCity = city;
      this.WheaterMainList = [];
      this.searchForecast(this.selectedCity);
    },
    changeKey: function(value) {
      this.filterKey = value;
    },
    changeDir: function(value) {
      this.filterDir = value;
    }

  }, //methods

  computed: {
    searchedWheaters: function() {
      return this.WheaterMainList.filter(function(item) {
        return item.wheaterType.toLowerCase().match(this.searchTerms.toLowerCase())
      }.bind(this));
    },
    filteredWheaters: function() {
      return _.orderBy(this.searchedWheaters, function(item) {
          return item[this.filterKey].toLowerCase();
      }.bind(this), this.filterDir);
    }
  }
} //default
</script>

<style scoped>
  .desc {
    color: red;
  }
</style>

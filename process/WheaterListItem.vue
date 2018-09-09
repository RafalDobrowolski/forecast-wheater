<template>
          <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title"><span><strong>Date: </strong></span>{{wheater.date}}</h3>
          </div>
          <div class="panel-body">
          
            <div class="weather-icon-wrapper">
              <div class="icon sunny" v-if="wheater.wheaterType === 'Clear'">
                <div class="sun">
                  <div class="rays"></div>
                </div>
              </div>
              <div class="icon rainy" v-else-if="wheater.wheaterType === 'Rain'">
                <div class="cloud"></div>
                <div class="rain"></div>
              </div>
              <div class="icon rainy" v-else-if="wheater.wheaterType === 'Rain'">
                <div class="cloud"></div>
                <div class="rain"></div>
              </div>
              <div class="icon cloudy" v-else-if="wheater.wheaterType === 'Clouds'">
                <div class="cloud"></div>
                <div class="cloud"></div>
              </div>
              <div><strong>{{wheater.wheaterType}}</strong></div>
            </div>
            <div class="weather-info-wrapper">
              <h4 class="weather-info-item"><span><strong>Max temp: </strong></span>{{wheater.tempMax}} </h4>
              <div class="weather-info-item"><span><strong>Min temp: </strong></span>{{wheater.tempMin}}</div>
              <div class="weather-info-item"><span><strong>Humidity: </strong></span>{{wheater.humidity}}</div>
            </div>
            <star-component />
          </div>
        </div>
</template>

<script>

import moment from 'moment';
import StarComponent from './StarComponent.vue';

export default {
  name: 'WheaterListItem',
  props: ['wheater'],
  methods: {
  }, //methods

  computed: {
    // formattedDate: function() {
    //   return moment(new Date(this.wheater.Date)).format('MM-DD-YY, h:mm a');
    // } //formattedDate
  }, //computed
  components: {
    'star-component': StarComponent
  }, //components

} //default
</script>

<style scoped>

  .wheater-item {
    border-bottom: 1px dotted gray;
    padding-bottom: 10px;
  }

  .wheater-item:last-child {
    border-bottom: none;
  }

  .wheater-name {
    font-weight: 600;
    color: #337ab7;
    font-size: 1.3em;
    line-height: 100%;
  }

  .wheater-info {
    font-size: 1.7em;
  }

  .label-item {
    font-weight: 600;
    color: #667B82;
  }
  
  .pewheatert-delete {
    font-size: 1.2em;
  }

  .wheater-date {
    font-style: italic;
  }

  [contenteditable]:focus {
    outline: none;
    background: #EEE8D6; 
  }
</style>

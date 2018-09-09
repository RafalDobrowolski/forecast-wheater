<template>
  <div class="row search-wheater">
    <div class="col-sm-offset-3 col-sm-6">

      <div class="input-group">

        <input id="SearchWheater" placeholder="Search" type="text" class="form-control" aria-label="Search wheater"
        v-model="searchTerm" />

        <div class="input-group-btn">
          <button type="button" class="btn btn-primary dropdown-toggle"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by: <span class="caret"></span></button>

            <ul class="dropdown-menu dropdown-menu-right">

              <li><a href="#" @click="requestKeyChange('wheaterType')">Wheater type<span class="glyphicon glyphicon-ok"></span></a></li>

              <!-- <li><a href="#" @click="requestKeyChange('humidity')">Humidity<span class="glyphicon glyphicon-ok"></span></a></li> -->

              <!-- <li><a href="#" @click="requestKeyChange('Third')">Third<span class="glyphicon glyphicon-ok"></span></a></li> -->

              <li role="separator" class="divider"></li>

              <li><a href="#" id="asc" @click="requestDirChange('asc')">Asc<span class="glyphicon glyphicon-ok" v-if="myDir === 'asc'"></span></a></li>

              <li><a href="#" id="desc" @click="requestDirChange('desc')">Desc
                <span class="glyphicon glyphicon-ok" v-if="myDir === 'desc'"></span></a></li>
            </ul>
        </div><!-- input-group-btn --> 
      </div><!-- input-group --> 
    </div><!-- col-sm-offset-3 --> 
  </div><!-- search-wheater -->
</template>

<script>
export default {
  name: 'SearchWheater',
  data() {
    return {
      searchTerm: ''
    } //return
  }, //data

  watch: {
    searchTerm: function() {
      this.$emit('searchRecords', this.searchTerm);
    } //searchTerm
  }, //watch
  props: ['myKey', 'myDir'],
  methods: {
    requestKeyChange: function(value) {
        this.$emit('keyChange', value);
    },

    requestDirChange: function(value) {
        this.$emit('dirChange', value);
    }
  }
} // export
</script>
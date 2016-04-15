<script>
  import Vue from 'vue';
  import compo from './../src/index';

  Vue.use(compo);

  export default {
    name: 'app',

    template: require('./demo.md'),

    data() {
      return {
        select: [],
        select2: [],
        select3: [],
        select4: [],
        search4: '',
        select5: [],
        search5: '',
        select6: [],
        select7: [],
        cityData: []
      };
    },

    methods: {
      handleChange(value) {
        this.cityData = this.cityOriginalData[value];
        this.select7.$set(1, this.cityData[0]);
      }
    },

    created() {
      this.provinceData = ['浙江', '江苏'];
      this.cityOriginalData = {
        '浙江': ['杭州', '宁波', '温州'],
        '江苏': ['南京', '苏州', '镇江']
      };

      this.optionsNormal = require('./data/select-normal.json');
      this.optionsGroup = require('./data/select-group.json');
      this.optionsDisabled = require('./data/select-disabled.json');
    }
  };
</script>

<style lang="css" scoped>
</style>
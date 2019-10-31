import Vue from 'vue';

const Home = Vue.extend({
  data() {
    return {
      message: 'asd'
    }
  },
  activated() {
    debugger;
  }
});

export default Home;

new Vue({
  el: '#app',
  data() {
    return {
      weapons: [],
      cards: [],
      enchants: [],
      selected: '',
      selected_card: '',
      selected_enchant: '',
      selected_enchantLevel: '',
      enchantOption: ["力量", "敏捷", "體質", "智力", "靈巧", "幸運"],
    }
  },
  methods: {
    requestHandlder() {
      axios.all([this.req_1(), this.req_2(), this.req_3()]).then(
        axios.spread((...response) => {
          this.weapons = response[0].data;
          this.cards = response[1].data;
          this.enchants = response[2].data;
        })
      ).catch(errors => {
        console.log(errors);
      })
    },
    req_1() {
      return axios.get('https://raw.githubusercontent.com/way21x/roxseacal/main/data/jsonformatter.json');
    },
    req_2() {
      return axios.get('https://raw.githubusercontent.com/way21x/roxseacal/main/data/jsonformatter_cards.json');
    },
    req_3() {
      return axios.get(
        'https://raw.githubusercontent.com/way21x/roxseacal/main/data/jsonformatter_enchant.json');
    }
  },
  mounted() {
    this.requestHandlder()
  },
  computed: {
    filteredWeapons: function () {
      let filtered = ["1-15:長弓", "1-17:短弓"];
      return this.weapons.filter(v => v.joblimit.match("弓箭手") && v.itemtype.match("1:武器"))
    },
    filteredCards: function () {
      return this.cards.filter(v => v.itemsubtype.match("01:武器"))
    },
    filteredEnchant: function () {
      return this.enchants.filter(v => v.parts.match("雙手"))
    },
    filteredEnchantOption() {
      return [...new set(filteredEnchant)]
    }
  }
})



import CustomSelect from './header.js';

new Vue({
  el: '#app',
  components: {
    CustomSelect
  },
  data() {
    return {
      cardResults: {
        card_1: null,
        card_2: null,
        card_3: null,
        card_4: null,
        card_5: null,
        card_6: null,
        card_7: null,
        card_8: null,
        card_9: null,
        card_11: null,
        card_12: null,
        card_13: null,
        card_14: null,
        card_15: null,
        card_16: null,
        card_17: null,
        card_18: null,
        card_19: null,
        card_20: null,
        card_21: null,
        card_22: null,
        card_23: null,
        card_24: null,
        card_25: null,
        card_26: null,
        card_27: null,
      },
      equipmentResults: {
        equipment_1: null,
        equipment_2: null,
        equipment_3: null,
        equipment_4: null,
        equipment_5: null,
        equipment_6: null,
        equipment_7: null,
        equipment_8: null,
        equipment_9: null,
        equipment_11: null
      },
      enchantResults: {
        enchant_1: [null, null],
        enchant_2: null,
        enchant_3: null,
        enchant_4: null,
        enchant_5: null,
        enchant_6: null,
        enchant_7: null,
        enchant_8: null,
        enchant_9: null,
        enchant_11: null,
        enchant_12: null,
        enchant_13: null,
        enchant_14: null,
        enchant_15: null,
        enchant_16: null,
        enchant_17: null,
        enchant_18: null,
        enchant_19: null,
        enchant_20: null,
        enchant_21: null,
        enchant_22: null,
        enchant_23: null,
        enchant_24: null
      },
      upgradeResults: {
        upgrade_1: null,
        upgrade_2: null,
        upgrade_3: null,
        upgrade_4: null,
        upgrade_5: null,
        upgrade_6: null,
        upgrade_7: null,
        upgrade_8: null
      },
      refineResults: {
        refine_1: null,
        refine_2: null,
        refine_3: null,
        refine_4: null,
        refine_5: null,
        refine_6: null,
        refine_7: null,
        refine_8: null
      },
      weapons: [],
      cards: [],
      enchants: [],
      selected: 'default',
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
    },
    filteredWeapons(job, weapon) {
      let filtered = ["1-15:長弓", "1-17:短弓", "弓箭手", "1:武器"];
      return this.weapons.filter(v => v.joblimit.match(job) && v.itemtype.match(weapon))
    },
    filteredCards(attr) {
      return this.cards.filter(v => v.itemsubtype.match(attr))
    },
    filteredEnchant(attr) {
      return this.enchants.filter(v => v.parts.match(attr))
    }
  },
  watch: {

  },
  mounted() {
    this.requestHandlder()
  },
  computed: {
    
  }
})



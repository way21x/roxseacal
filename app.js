import CustomSelect from './header.js';

new Vue({
  el: '#app',
  components: {
    CustomSelect
  },
  data() {
    return {
      classOptions: [
        "弓箭手", "獵人", "神射手", "盜賊", "刺客", "十字刺客"
      ],
      refineOptions: [
        { level: "Lv 1 - 物理攻击 +10%, 攻速 +10%", data: "物理攻击 +10%, 攻速 +10%" },
      ],
      upgradeOptions: [
        { level: "Lv 1 - 物理攻击 +25, 攻速 +25", data: "物理攻击 +25, 攻速 +25" },
      ],
      selectedClass: null,
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
        card_10: null,
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
        equipment_10: null,
        equipment_11: null
      },
      enchantResults: {
        enchant_1: [null, null],
        enchant_2: [null, null],
        enchant_3: [null, null],
        enchant_4: [null, null],
        enchant_5: [null, null],
        enchant_6: [null, null],
        enchant_7: [null, null],
        enchant_8: [null, null],
        enchant_9: [null, null],
        enchant_10: [null, null],
        enchant_11: [null, null],
        enchant_12: [null, null],
        enchant_13: [null, null],
        enchant_14: [null, null],
        enchant_15: [null, null],
        enchant_16: [null, null],
        enchant_17: [null, null],
        enchant_18: [null, null],
        enchant_19: [null, null],
        enchant_20: [null, null],
        enchant_21: [null, null],
        enchant_22: [null, null],
        enchant_23: [null, null],
        enchant_24: [null, null]
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
      weapons: [], // raw data
      cards: [], // raw data
      enchants: [], // raw data
      accessoryCards: [], // store for reuse
      weaponCards: [], // store for reuse
      accessoryEnchants: [], // store for reuse
      weaponEnchants: [], // store for reuse
      stats: {
        str: {withoutEq: null, withEq: null},
        vit: {withoutEq: null, withEq: null},
        dex: {withoutEq: null, withEq: 10},
        agi: {withoutEq: null, withEq: null},
        int: {withoutEq: null, withEq: null},
        luk: {withoutEq: null, withEq: null},
        p_atk: {withoutEq: null, withEq: null},
        p_pen: {withoutEq: null, withEq: null},
        aspd: {withoutEq: null, withEq: null},
        crit: {withoutEq: null, withEq: null},
        haste: {withoutEq: null, withEq: null},
        hp: {withoutEq: null, withEq: null},
        sp: {withoutEq: null, withEq: null},
        def: {withoutEq: null, withEq: null},
        hit: {withoutEq: null, withEq: null},
        flee: {withoutEq: null, withEq: null},
        anti_crit: {withoutEq: null, withEq: null},
        m_atk: {withoutEq: null, withEq: null},
        m_def: {withoutEq: null, withEq: null},
        m_pen: {withoutEq: null, withEq: null},
        final_aspd: {withoutEq: null, withEq: null},
        final_crit: {withoutEq: null, withEq: null},
        crit_bonus: {withoutEq: 200, withEq: null},
        final_p_def: {withoutEq: null, withEq: null},
        final_m_def: {withoutEq: null, withEq: null},
        final_p_pen: {withoutEq: null, withEq: null},
        final_m_pen: {withoutEq: null, withEq: null},
        hp_regen: {withoutEq: null, withEq: null},
        sp_regen: {withoutEq: null, withEq: null},
        p_dmg_reduction: {withoutEq: null, withEq: null},
        m_dmg_reduction: {withoutEq: null, withEq: null},
        move_speed: {withoutEq: null, withEq: null},
      },
      test: {hp: 10, mp: 12},
      selected: null,
      selected_card: '',
      selected_enchant: '',
      selected_enchantLevel: '',
      enchantOption: ["力量", "敏捷", "體質", "智力", "靈巧", "幸運"],
      from_amount: "",
      to_amount: ""
    }
  },
  methods: {
    requestHandlder() {
      axios.all([this.req_1(), this.req_2(), this.req_3()]).then(
        axios.spread((...response) => {
          this.weapons = response[0].data;
          this.cards = response[1].data;
          this.enchants = response[2].data;
          this.accessoryCards = response[1].data.filter(v => v.itemsubtype.match('06:飾品'))
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
        './data/jsonformatter_enchant.json');
    },
    filteredWeapons(job, weapon) {
      //let filtered = ["1-15:長弓", "1-17:短弓", "弓箭手", "1:武器"];
      return this.weapons.filter(v => v.joblimit.match(job) && v.itemtype.match(weapon))
      // return this.weapons.filter(v => v.joblimit.match(job) && v.itemtype.match(weapon)).map(function(x){
      // return { valueData : x.effectbase, y : x.itemname };
      // });
    },
    filteredTalisman() {
      return this.weapons.filter(v => v.itemsubtype.match('5-2:護符'))
    },
    filteredAccessory() {
      return this.weapons.filter(v => v.itemsubtype.match('5-1:飾品'))
    },
    filteredCards(attr) {
      return this.cards.filter(v => v.itemsubtype.match(attr))
    },
    filteredEnchant(attr) {
      // return this.enchants.filter(v => v.parts.match(attr))
      const k = this.enchants.filter(v => v.parts.match(attr))
      let tempArray = [];
      for (let item of k) {
        (tempItem => {
          if (!(tempItem.length > 0 && tempItem.find(x => x.attrName === item.attrName))) tempArray.push(item);
        })(tempArray.filter(x => x.attrName === item.attrName))
      }
      return tempArray;
    },
    filteredEnchantLevel(attr, enchant) {
      // return this.enchants.filter(v => v.parts.match(attr))
      const k = this.enchants.filter(v => v.parts.match(attr) && v.attrName.match(enchant))
      let tempArray = [];
      for (let item of k) {
        (tempItem => {
          if (!(tempItem.length > 0 && tempItem.find(x => x.attrValue === item.attrValue))) tempArray.push(item);
        })(tempArray.filter(x => x.attrValue === item.attrValue))
      }
      return tempArray;
    },
    common(value, M, B) {
      let N = Math.floor(((1 + 8 * value / M) ** 0.5 - 1) / 2)
      return (N * M + (value - M * N * (N + 1) / 2) / (N + 1)) / B
    },
    test_p_atk() {
      let str = this.equipmentResults.equipment_1
      if(str!= null){
        let res = str.split(",")
        var res1 = res.filter(v => v.length > 0 && v.indexOf("+") > -1).map(function(x){
          var xres = x.split("+");
         var xKey = xres[0];
         var xValue = xres[1];
        //  return { effectName : xKey, effectValue : xValue}; 
        return this.enchantOption = { effectName : xKey, effectValue : xValue}
       });
      }
    }
  },
  watch: {

  },
  mounted() {
    this.requestHandlder();
  },
  computed: {
    dex() {
      let dex_withoutEq = Number(this.stats.dex.withoutEq)
      let dex_withEq = Number(this.stats.dex.withEq)
      // return dex_withoutEq + dex_withEq
      let x = dex_withoutEq + dex_withEq
      console.log(x)
      return Vue.set(this.stats.dex, 'withEq', x)
    },
    dex_to_p_atk() {
      dex = dex()
      return dex * 4 * (1 + 0.05 * Math.floor(dex / 100))
    },
    p_atk() {
      let p_atk_withoutEq = Number(this.stats.p_atk.withoutEq)
      let dex = 0
      return p_atk_withoutEq + dex

      // store to data propety
      // return Vue.set(this.stats.p_atk, 'withEq', Number(this.stats.p_atk.withoutEq) * 5)
    },
    p_pen() {
      let p_pen_withoutEq = Number(this.stats.p_pen.withoutEq)
      let p_pen_withEq = Number(this.stats.p_pen.withEq)
      return p_pen_withoutEq + p_pen_withEq
    },
    aspd() {
      let aspd_withoutEq = Number(this.stats.aspd.withoutEq)
      let aspd_withEq = Number(this.stats.aspd.withEq)
      return aspd_withoutEq + aspd_withEq
    },
    crit() {
      let p_crit_withoutEq = Number(this.stats.crit.withoutEq)
      let p_crit_withEq = Number(this.stats.crit.withEq)
      return p_crit_withoutEq + p_crit_withEq
    },
    haste() {
      let haste_withoutEq = Number(this.stats.haste.withoutEq)
      return haste_withoutEq * 5
    },
    final_aspd() {
      let aspd_withoutEq = Number(this.stats.aspd.withoutEq)
      let aspd_withEq = Number(this.stats.aspd.withEq)
      let final_aspd_withEq = Number(this.stats.final_aspd.withEq)
      let value = aspd_withoutEq + aspd_withEq
      let common = Number(this.common(value, 50, 1).toFixed(2))
      let total = final_aspd_withEq + common + "%"
      return total
    },
    final_p_crit() {
      let p_crit_withoutEq = Number(this.stats.crit.withoutEq)
      let p_crit_withEq = Number(this.stats.crit.withEq)
      let final_crit_withEq = Number(this.stats.final_crit.withEq)
      let value = p_crit_withoutEq + p_crit_withEq
      let common = Number(this.common(value, 25, 5).toFixed(2))
      let total = final_crit_withEq + common + "%"
      return total
    },
    crit_bonus() {
      let crit_bonus_withoutEq = Number(this.stats.crit_bonus.withoutEq)
      let crit_bonus_withEq = Number(this.stats.crit_bonus.withEq)
      return crit_bonus_withoutEq + crit_bonus_withEq
    },
    final_p_pen() {
      let p_pen_withoutEq = Number(this.stats.p_pen.withoutEq)
      let p_pen_withEq = Number(this.stats.p_pen.withEq)
      let final_p_pen_withEq = Number(this.stats.final_p_pen.withEq)
      let value = p_pen_withoutEq + p_pen_withEq
      let common = Number(this.common(value, 25, 5).toFixed(2))
      let total = final_p_pen_withEq + common + "%"
      return total
    },
  },
})



export default {
  template: `


<b-col cols="4">
  <v-select v-model="equipmentResults.equipment_1" :disabled="job.name == null" @input="change()" 
  :options="filteredWeapons(job.name)" :get-option-label="getLabel" :reduce="getValue">
</v-select>

<v-select v-model="equipmentResults.equipment_1" :disabled="job.name == null" @input="change()"
  :options="filteredWeapons(job.name)" :get-option-label="getLabel" :reduce="getValue"
  :placeholder="$t('weapon')">
</v-select>

<v-select v-model="upgradeResults.upgrade_1" :disabled="equipmentResults.equipment_1 == null" @input="changeUpgrade()"
  :options="filteredUpgrade('equipment_1')" :get-option-label="getUpgradeLabel"
  :reduce="getUpgradeValue" placeholder="-- Upgrade --">
</v-select>

<v-select v-model="refineResults.refine_1" :disabled="equipmentResults.equipment_1 == null" @input="changeRefine()"
  :options="filteredRefine('equipment_1')" :get-option-label="getRefineLabel" :reduce="getRefineValue"
  placeholder="-- Refine --">
</v-select>

</b-col>
  `,
  // props: {
  //   op: { type: Object},
  //   xyz: { type: Object },
  //   label: { type: String },
  //   value: { type: Object },
  // },
  props: ['job'],
  data() {
    return {
      test: null,
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
      upgrade: [],
      refine: [],
      op: [{label:'01', value: 100}, {label:'02', value: 200}, {label:'03', value: 300}],
    }
  },
  methods: {
    requestHandlder() {
      axios.all([this.req_1(), this.req_2(), this.req_3(), this.req_4(), this.req_5(), this.req_6()]).then(
        axios.spread((...response) => {
          this.weapons = response[0].data;
          this.cards = response[1].data;
          this.enchants = response[2].data;
          this.upgrade = response[3].data;
          this.refine = response[4].data;
          this.growth = response[5].data;
        })
      ).catch(errors => {
        console.log(errors);
      })
    },
    req_1() {
      return axios.get('./data/weapon_v1.json');
    },
    req_2() {
      return axios.get('./data/card_v1.json');
    },  
    req_3() {
      return axios.get('./data/enchant_v1.json');
    },
    req_4() {
      return axios.get('./data/upgrade_v1.json');
    },
    req_5() {
      return axios.get('./data/refine_v1.json');
    },
    req_6() {
      return axios.get('./data/levelGrowth_v1.json');
    },
    filteredWeapons(job, type) {
      var weapons = this.weapons.filter(v => v.jobLimit != null 
        && v.equipmentType
        && v.baseProperty
        && v.baseProperty.en_name
        && Object.keys(v.equipmentType).indexOf('武器') > -1
        && v.jobLimit.indexOf(job) > -1
      )
      
      if(job != '弓箭手') {
        if(type == 'offHand') {
          weapons = this.weapons.filter(v => v.equipmentType
            && v.baseProperty != null 
            && v.baseProperty.en_name != null 
            && Object.values(v.equipmentType).indexOf('盾牌') > -1
          )
        }        
      }

      weapons.sort(function(a, b) {
        var nameA = a.baseProperty.en_name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.baseProperty.en_name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
          return 0;
      })
    
      return weapons;
    },
    filteredUpgrade(equipment_x) {
      var res = this.equipmentResults
      for (var key in res) {
        if (key == equipment_x) {    
          for(var i in res[key]) {
            if(i == "StrengthenID"){
              var k = this.upgrade.filter(v => v.strengthenId != null && v.level != null && v.strengthenId === res[key][i])
              return k
            }
          }
        }
      }
    },
    filteredRefine(equipment_x) {
      var res = this.equipmentResults
      for (var key in res) {
        if (key == equipment_x) {
          if(res[key] !== null) {
            for(var i in res[key]) {
              if(i == "RefineID" && this.refine){
                var k = this.refine.filter(v => v.refineId != null && v.refineValue != null && v.refineId === res[key][i])
                k.forEach(z => {
                  z.refine_lv = "+" + (String(z.refine_lv).indexOf("+") == 0 ? String(z.refine_lv).substr(1) : z.refine_lv);
                })
                return k
              }
            }            
          }
        }
      }
    },
    change(e) {
      this.$emit("input", this.equipmentResults);
    },
    changeUpgrade(e) {
      this.$emit("input", this.upgradeResults);
    },
    changeRefine(e) {
      this.$emit("input", this.refineResults);
    },
    getLabel (option) {
      if (typeof option === 'object' && option.baseProperty) {
        return this.$i18n.locale == 'en'? option.baseProperty.en_name : option.baseProperty.name
      }
      return option
    },
    getValue (option) {
      if (typeof option === 'object') {
        return option.baseProperty
      }
      return option
    },
    getEnchantLabel (option) {
      if (option && typeof option === 'object') {
        return this.$i18n.locale == 'en'? option.en_text : option.text
      }
      return option
    },
    getEnchantValue (option) {
      if (option && typeof option === 'object') {
        return option.data
      }
      return option
    },
    getEnchantLevelLabel (option) {
      if (option && typeof option === 'object') {
        return option.level
      }
      return option
    },
    getEnchantLevelValue (option) {
      if (option && typeof option === 'object') {
        return option.attrValue
      }
      return option
    },
    getCardLabel (option) {
      if (option && typeof option === 'object') {
        return this.$i18n.locale == 'en'? option.en_itemname : option.itemname
      }
      return option
    },
    getCardValue (option) {
      if (option && typeof option === 'object') {
        return option.effect
      }
      return option
    },
    getUpgradeLabel (option) {
      if (option && typeof option === 'object') {
        return option.level
        // return this.lang == 'en'? option.baseProperty.en_name : option.baseProperty.name
      }
      return option
    },
    getUpgradeValue (option) {
      if (option && typeof option === 'object') {
        return option.upgradeValue
      }
      return option
    },
    getRefineLabel (option) {
      if (option && typeof option === 'object') {
        return option.refine_lv
        // return this.lang == 'en'? option.baseProperty.en_name : option.baseProperty.name
      }
      return option
    },
    getRefineValue (option) {
      if (option && typeof option === 'object') {
        return option.refineValue
      }
      return option
    },
  },
  mounted() {
    this.requestHandlder();
  },
  created() {
    if(localStorage.equipmentResults && localStorage.ver == 1) {
      this.equipmentResults = JSON.parse(localStorage.getItem('equipmentResults'))
    }
  }
}
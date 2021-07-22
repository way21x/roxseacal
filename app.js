// import CustomSelect from './header.js';

new Vue({
  el: '#app',
  components: {
    //CustomSelect
  },
  data() {
    return {
      classOptions: [
        { name: "弓箭手系", value: "弓箭手" }, 
        { name: "盗贼系", value: "盗贼"},
        { name: "剑士系", value: "剑士"},
        { name: "商人系", value: "商人"},
        { name: "服事系", value: "服事"},
        { name: "魔法师系", value: "魔法师"},
      ],
      selectedClass: {name:"弓箭手", baselv: null, value: null},
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
      growth: [],
      weapons: [], // raw data
      cards: [], // raw data
      enchants: [], // raw data
      upgrade: [], // raw data
      accessoryCards: [], // store for reuse
      weaponCards: [], // store for reuse
      accessoryEnchants: [], // store for reuse
      weaponEnchants: [], // store for reuse
      stats: {
        str: {withoutEq: null, withEq: null, multiply: null,},
        vit: {withoutEq: null, withEq: null, multiply: null,},
        dex: {withoutEq: null, withEq: null, multiply: null,},
        agi: {withoutEq: null, withEq: null, multiply: null,},
        int: {withoutEq: null, withEq: null, multiply: null,},
        luk: {withoutEq: null, withEq: null, multiply: null,},
        p_atk: {withoutEq: null, withEq: null, multiply: null,},
        p_pen: {withoutEq: null, withEq: null, multiply: null,},
        aspd: {withoutEq: null, withEq: null, multiply: null,},
        crit: {withoutEq: null, withEq: null, multiply: null,},
        haste: {withoutEq: null, withEq: null, multiply: null,},
        hp: {withoutEq: null, withEq: null, multiply: null,},
        sp: {withoutEq: null, withEq: null, multiply: null,},
        p_def: {withoutEq: null, withEq: null, multiply: null,},
        hit: {withoutEq: null, withEq: null, multiply: null,},
        flee: {withoutEq: null, withEq: null, multiply: null,},
        anti_crit: {withoutEq: null, withEq: null, multiply: null,},
        m_atk: {withoutEq: null, withEq: null, multiply: null,},
        m_def: {withoutEq: null, withEq: null, multiply: null,},
        m_pen: {withoutEq: null, withEq: null, multiply: null,},
        dmg_bonus: {withoutEq: null, withEq: null, multiply: null,},
        final_aspd: {withoutEq: null, withEq: null, multiply: null,},
        final_crit: {withoutEq: null, withEq: null, multiply: null,},
        crit_bonus: {withoutEq: 200, withEq: null, multiply: null,},
        final_p_def: {withoutEq: null, withEq: null, multiply: null,},
        final_m_def: {withoutEq: null, withEq: null, multiply: null,},
        final_p_pen: {withoutEq: null, withEq: null, multiply: null,},
        final_m_pen: {withoutEq: null, withEq: null, multiply: null,},
        final_dmg_bonus: {withoutEq: null, withEq: null, multiply: null,},
        final_haste: {withoutEq: null, withEq: null, multiply: null,},
        hp_regen: {withoutEq: null, withEq: null, multiply: null,},
        sp_regen: {withoutEq: null, withEq: null, multiply: null,},
        p_dmg_reduction: {withoutEq: null, withEq: null, multiply: null,},
        m_dmg_reduction: {withoutEq: null, withEq: null, multiply: null,},
        move_speed: {withoutEq: null, withEq: null, multiply: null,},
      },
      eq_stats: [],
      upgradeAwakening: 1,
      refineAwakening: 1,
      enchantAwakening: 1,
      selected: null,
      selected_card: '',
      selected_enchant: '',
      selected_enchantLevel: '',
      enchantOption: { test: null},
      from_amount: [],
      to_amount: "",
      kkk: {},
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
          //this.accessoryCards = response[1].data.filter(v => v.itemsubtype.match('06:飾品'))
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
    filteredWeapons(job) {
      // var weapons = this.weapons.filter(v => v.jobLimit != null 
      //   && v.slotList != null 
      //   && v.name != null 
      //   && v.slotList.indexOf('武器') > -1 
      //   && v.jobLimit.indexOf(job) > -1
      //   )

      var weapons = this.weapons.filter(v => v.jobLimit != null 
        && v.equipmentType
        && v.name != null 
        && Object.keys(v.equipmentType).indexOf('武器') > -1
        && v.jobLimit.indexOf(job) > -1
        )

      weapons.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
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
    filteredArmor(job, parts) {
      var weapons = this.weapons.filter(v => v.jobLimit != null 
        && v.slotList != null 
        && v.name != null 
        && v.slotList.indexOf(parts) > -1 
        && v.jobLimit.indexOf(job) > -1
        )
      // 盔甲
      // var weapons = this.weapons.filter(v => v.jobLimit != null 
      //   && v.equipmentType
      //   && v.name != null 
      //   && Object.keys(v.equipmentType).indexOf('武器') > -1
      //   && v.jobLimit.indexOf(job) > -1
      //   )

      weapons.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
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
    filteredCostume(parts) {
      var weapons = this.weapons.filter(v => v.name != null && v.baseProperty != null && v.baseProperty.parts != null && v.baseProperty.parts == parts)
      // 头部 眼睛 嘴巴
      // var weapons = this.weapons.filter(v => v.jobLimit != null 
      //   && v.equipmentType
      //   && v.name != null 
      //   && Object.keys(v.equipmentType).indexOf('武器') > -1
      //   && v.jobLimit.indexOf(job) > -1
      //   )

      weapons.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
          return 0;
      })
    return weapons
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
          for(var i in res[key]) {
            if(i == "RefineID"){
              var k = this.refine.filter(v => v.refineId != null && v.refineValue != null && v.refineId === res[key][i])
              k.forEach(z => {
                z.refine_lv = "+" + (String(z.refine_lv).indexOf("+") == 0 ? String(z.refine_lv).substr(1) : z.refine_lv);
              })
              return k
            }
          }
        }
      }
    },
    filteredTalisman() {
      var weapons = this.weapons.filter(v => v.slotList != null && v.name != null && v.slotList.indexOf('护符') > -1)
      weapons.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
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
    filteredAccessory() {
      var weapons = this.weapons.filter(v => v.slotList != null && v.name != null && v.slotList.indexOf('饰品') > -1)
      
      weapons.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
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
    filteredCards(attr) {
      return this.cards.filter(v => v.itemname != null && v.itemSubType != null && v.itemSubType.match(attr))
    },
    filteredEnchant(equipment_x) {
      var res = this.equipmentResults
      var parts
      for (var key in res) {
        if (key == equipment_x) {
          if(this.equipmentResults[key] !== null) {
            parts = this.equipmentResults[key].parts

            const k = this.enchants.filter(v => v.parts.match(parts))
            let tempArray = [];
            for (let item of k) {
              (tempItem => {
                if (!(tempItem.length > 0 && tempItem.find(x => x.text === item.text))) tempArray.push(item);
              })(tempArray.filter(x => x.text === item.text))
            }
            return tempArray;

          }else{
            return null
          }
        }
      }

      // const k = this.enchants.filter(v => v.parts.match(attr))
      // let tempArray = [];
      // for (let item of k) {
      //   (tempItem => {
      //     if (!(tempItem.length > 0 && tempItem.find(x => x.text === item.text))) tempArray.push(item);
      //   })(tempArray.filter(x => x.text === item.text))
      // }
      // return tempArray;
    },
    filteredEnchantLevel(enchant_x) {
      // return this.enchants.filter(v => v.parts.match(attr))

      var res = this.enchantResults
      var selected
      var enchant
      var parts
      for (var key in res) {
        if (key == enchant_x) {
          if(this.enchantResults[key][0] !== null) {
            selected = this.enchantResults[key][0].location
            enchant = this.enchantResults[key][0].attrName
            parts = this.enchantResults[key][0].parts

            const k = this.enchants.filter(v => v.parts.match(parts) && v.attrName.match(enchant) && v.location.match(selected))
            let tempArray = [];
            for (let item of k) {
              (tempItem => {
                if (!(tempItem.length > 0 && tempItem.find(x => x.attrValue === item.attrValue))) tempArray.push(item);
              })(tempArray.filter(x => x.attrValue === item.attrValue))
            }
            return tempArray;

          }else{
            return null
          }
          // if(this.enchantResults[key][2] !== null) {
          //   // selected = this.enchantResults[key][2].split(" - ")[0]
          //   // enchant = this.enchantResults[key][2].split(" - ")[1]
          //   selected = this.enchantResults[key].location
          //   enchant = this.enchantResults[key].attrName
          // }
        }
      }
      // const k = this.enchants.filter(v => v.parts.match(attr) && v.attrName.match(enchant) && v.location.match(selected))
      // let tempArray = [];
      // for (let item of k) {
      //   (tempItem => {
      //     if (!(tempItem.length > 0 && tempItem.find(x => x.attrValue === item.attrValue))) tempArray.push(item);
      //   })(tempArray.filter(x => x.attrValue === item.attrValue))
      // }
      // return tempArray;
    },
    filteredBaseLevel(val) {
      return this.growth.filter(v => v.basicJob != null && v.basicJob.match(val))
    },
    common(value, M, B) {
      let N = Math.floor(((1 + 8 * value / M) ** 0.5 - 1) / 2)
      return (N * M + (value - M * N * (N + 1) / 2) / (N + 1)) / B
    },
    awaken(v) {
      if(v == 0) { return 1 }
      if(v == 1) { return 1 }
      if(v == 2) { return this.upgradeAwakening }
      if(v == 3) { return this.refineAwakening }
      if(v == 4) { return this.enchantAwakening }

    },
    searchAttr(cn, en, method) {
      let res = 0
      // [0] eq = all number // done
      // [1] card = number + % // done
      // [2] upgrade = all number // done
      // [3] refine = all % // done
      // [4] enchant = number + % // done

      let all = [this.equipmentResults, this.cardResults, this.upgradeResults, this.refineResults, this.enchantResults]
      for(let i in all) {
        for(let x in all[i]) {
          if(i == 4) { // enchant
            if(all[i][x][0] !== null && all[i][x][1] !== null && (all[i][x][0].attrName == cn || all[i][x][0].attrName == en)) {
              let value = parseFloat(all[i][x][1])
              if(method == 'number' && value > 1) {
                res += value * this.awaken(i)
                // console.log('i==4 > 1', res)
              }
              if(method == 'percentage' && value < 1) {
                res += value * this.awaken(i)
                // console.log('i==4 < 1', res)
              }
            }
          }

          if(i == 3) { // refine
            for(let z in all[i][x]) {
              if(z == cn || z == en) {
                let value = parseFloat(all[i][x][z])
                if(value !== null) {
                  // if(method == 'number' && value > 1) {
                  //   res += value * this.awaken(i)
                  // }
                  if(method == 'percentage' && value > 0) {
                    res += value * this.awaken(i)
                    // console.log('i==3', res)
                  }
                }
              }              
            }
          }

          if(i == 0 || i == 1 || i == 2) { // equi, upgrade, card
            for(let z in all[i][x]) {
              if(z == cn || z == en) {
                let value = parseFloat(all[i][x][z])
                if(value !== null) {
                  if(method == 'number' && value > 1) {
                    res += value * this.awaken(i)
                    // console.log('i==012 > 1', res)
                  }
                  if(method == 'percentage' && value < 1) {
                    res += value * this.awaken(i)
                    // console.log('i==012 < 1', res)
                  }
                }
              }              
            }
          }

        }
      }
      // console.log('res', res)
      return res
    },
    p_damage() {
      let p_atk = parseFloat(this.stats.p_atk.withEq)
      let p_pen = parseFloat(this.stats.final_p_pen.withEq)
      let dmg_bonus = parseFloat(this.stats.dmg_bonus.withEq)
      let final_dmg_bonus = parseFloat(this.stats.final_dmg_bonus.withEq)
      let total = p_atk * (1 + final_dmg_bonus) * (1 + p_pen) + dmg_bonus
      return total
    },
    p_crit_damage() {
      let p_atk = parseFloat(this.stats.p_atk.withEq)
      let p_pen = parseFloat(this.stats.final_p_pen.withEq)
      let dmg_bonus = parseFloat(this.stats.dmg_bonus.withEq)
      let final_dmg_bonus = parseFloat(this.stats.final_dmg_bonus.withEq)
      let crit_bonus = parseFloat(this.stats.crit_bonus.withEq)
      let total = p_atk * (1 + final_dmg_bonus) * (1 + p_pen) * crit_bonus + dmg_bonus
      return total
    },
    p_dps() {
      let p_damage = parseFloat(this.p_damage())
      let final_aspd = this.stats.final_aspd.withEq * 100
      let total = Math.floor(p_damage * parseFloat((final_aspd + 100) / 180))
      return total
    },
    p_crit_dps() {
      let p_damage = parseFloat(this.p_damage())
      let p_crit_damage = parseFloat(this.p_crit_damage())

      let final_crit = this.stats.final_crit.withEq
      let final_aspd = this.stats.final_aspd.withEq * 100
      let total = Math.floor((p_damage * (1 - final_crit) + (p_crit_damage * final_crit)) * (parseFloat((final_aspd + 100) / 180)))
      return total
    },
    skillCD() {
      let haste = parseFloat(this.stats.haste.withEq)
      let final_haste = parseFloat(this.stats.final_haste.withEq) * 100
      let total = (Math.floor(Number(this.common(haste, 50, 25).toFixed(2))*10)/10) + final_haste * 0.4
      return total + ' sec'
    },
    channeling() {
      let haste = parseFloat(this.stats.haste.withEq)
      let final_haste = parseFloat(this.stats.final_haste.withEq) * 100
      let total = (Math.floor(Number(this.common(haste, 50, 100).toFixed(2))*10)/10) + final_haste * 0.1
      return total + ' sec'
    }
  },
  watch: {

  },
  mounted() {
    this.requestHandlder();
  },
  computed: {
    str() {
      let str_withoutEq = Number(this.stats.str.withoutEq)     
      let str_withEq = this.searchAttr('力量', 'str', 'number')
      let str_multiply = this.searchAttr('力量提升', 'str%', 'percentage')
      let total = (str_withEq + str_withoutEq) * (1 + str_multiply)
      this.stats.str.withEq = total
      return total
    },
    luk() {
      let withoutEq = Number(this.stats.luk.withoutEq)
      let withEq = this.searchAttr('幸运', 'luk', 'number')
      let multiply = this.searchAttr('幸运提升', 'luk%', 'percentage')
      let total = (withEq + withoutEq) * (1 + multiply)
      this.stats.luk.withEq = total
      return total
    },
    agi() {
      let withoutEq = Number(this.stats.agi.withoutEq)
      let withEq = this.searchAttr('敏捷', 'agi', 'number')
      let multiply = this.searchAttr('敏捷提升', 'agi%', 'percentage')
      let total = (withEq + withoutEq) * (1 + multiply)
      this.stats.agi.withEq = total
      return total
    },
    dex() {
      let withoutEq = Number(this.stats.dex.withoutEq)
      let withEq = this.searchAttr('灵巧', 'dex', 'number')
      let multiply = this.searchAttr('灵巧提升', 'dex%', 'percentage')
      let total = (withEq + withoutEq) * (1 + multiply)
      this.stats.dex.withEq = total
      return total
    },
    p_atk() {
      let p_atk_withoutEq = Number(this.stats.p_atk.withoutEq)
      let p_atk_withEq = this.searchAttr('物理攻击', 'p_atk', 'number')
      let p_atk_multiply = this.searchAttr('物理攻击', 'p_atk', 'percentage')

      // convert stats to p_atk
      let dex = this.stats.dex.withEq
      let luk = this.stats.luk.withEq
      let str = this.stats.str.withEq
      let selected = this.selectedClass.name

      let dex_to_atk = selected == '弓箭手' ? dex * 4 * (1 + 0.05 * Math.floor(dex / 100)) : 0
      let luk_to_atk = Math.floor(luk * 0.5)
      let str_to_atk = selected == '弓箭手' ? Math.floor(str * 0.2) : str * 4 * (1 + 0.05 * Math.floor(str / 100))
      
      // baselv reward p_atk
      if(this.selectedClass.name !== null && this.selectedClass.baselv !== null){
        let baseReward = this.growth.filter(v => v.level == this.selectedClass.baselv && v.basicJob == this.selectedClass.name)[0]
        if(baseReward.p_atk) {
          p_atk_withEq += baseReward.p_atk
        }
      }


      let total = (p_atk_withEq + p_atk_withoutEq + dex_to_atk + luk_to_atk + str_to_atk) * (1 + p_atk_multiply)
      this.stats.p_atk.withEq = total
      return total
    },
    aspd() {
      let withoutEq = Number(this.stats.aspd.withoutEq)
      let withEq = this.searchAttr('攻速', 'aspd', 'number')
      let multiply = this.searchAttr('攻速提升', 'aspd%', 'percentage')
      let agi = this.stats.agi.withEq
      let agi_to_aspd = Math.floor(agi * 2)
      let total = (withEq + withoutEq + agi_to_aspd) * (1 + multiply)
      this.stats.aspd.withEq = total
      return total
    },
    final_aspd() {
      let withoutEq = Number(this.stats.final_aspd.withoutEq) / 100
      // let withEq = this.searchAttr('最终攻速', 'final_aspd', 'number')
      let multiply = this.searchAttr('最终攻速', 'final_aspd', 'percentage')
      let aspd = Number(this.common(this.stats.aspd.withEq, 50, 1).toFixed(2)) / 100
      let total = withoutEq + aspd + multiply
      this.stats.final_aspd.withEq = total
      return (total * 100) + "%"
    },    
    crit() {
      let withoutEq = Number(this.stats.crit.withoutEq)
      let withEq = this.searchAttr('暴击', 'crit', 'number')
      let multiply = this.searchAttr('暴击', 'crit', 'percentage')
      let luk = this.stats.luk.withEq
      let luk_to_crit = Math.floor(luk * 2)
      let total = (withEq + withoutEq + luk_to_crit) * (1 + multiply)
      this.stats.crit.withEq = total
      return total
    },
    final_crit() {
      let withoutEq = Number(this.stats.final_crit.withoutEq) / 100
      // let withEq = this.searchAttr('最终暴击', 'final_crit', 'number')
      let multiply = this.searchAttr('最终暴击', 'final_crit', 'percentage')
      let crit = Number(this.common(this.stats.crit.withEq, 25, 5).toFixed(2)) / 100
      let total = withoutEq + crit + multiply
      this.stats.final_crit.withEq = total
      return (total * 100) + "%"
    },
    crit_bonus() {
      let withoutEq = Number(this.stats.crit_bonus.withoutEq)
      let withEq = this.searchAttr('暴伤附加', 'crit_bonus', 'number')
      let multiply = this.searchAttr('暴伤附加', 'crit_bonus', 'percentage')
      let total = (withEq + withoutEq) * (1 + multiply) / 100
      this.stats.crit_bonus.withEq = total
      return (total * 100) + "%"
    },
    haste() {
      let withoutEq = Number(this.stats.haste.withoutEq)
      let withEq = this.searchAttr('急速', 'haste', 'number')
      let multiply = this.searchAttr('急速', 'haste', 'percentage')
      let dex = this.stats.dex.withEq
      let dex_to_haste = Math.floor(dex * 2)
      let total = (withEq + withoutEq + dex_to_haste) * (1 + multiply)
      this.stats.haste.withEq = total
      return total
    },
    p_pen() {
      let withoutEq = Number(this.stats.p_pen.withoutEq)
      let withEq = this.searchAttr('物防穿透', 'p_pen', 'number')
      let multiply = this.searchAttr('物防穿透', 'p_pen', 'percentage')
      let total = (withEq + withoutEq) * (1 + multiply)
      this.stats.p_pen.withEq = total
      return total
    },
    final_p_pen() {
      let withoutEq = Number(this.stats.final_p_pen.withoutEq) / 100
      // let withEq = this.searchAttr('最终物防穿透', 'final_p_pen', 'number')
      let multiply = this.searchAttr('最终物防穿透', 'final_p_pen', 'percentage')
      let p_pen = Number(this.common(this.stats.p_pen.withEq, 25, 5).toFixed(2)) / 100
      let total = withoutEq + p_pen + multiply
      this.stats.final_p_pen.withEq = total
      return (total * 100) + "%"
    },
    dmg_bonus() {
      let withoutEq = Number(this.stats.dmg_bonus.withoutEq)
      let withEq = this.searchAttr('物伤附加', 'dmg_bonus', 'number')
      let multiply = this.searchAttr('物伤附加', 'dmg_bonus', 'percentage')
      let total = (withEq + withoutEq) * (1 + multiply)
      this.stats.dmg_bonus.withEq = total
      return total
    },
    final_dmg_bonus() {
      let withoutEq = Number(this.stats.final_dmg_bonus.withoutEq) / 100
      // let withEq = this.searchAttr('最终物伤附加', 'final_dmg_bonus', 'number')
      let multiply = this.searchAttr('最终物伤附加', 'final_dmg_bonus', 'percentage')
      let total = withoutEq + multiply
      this.stats.final_dmg_bonus.withEq = total
      return (total * 100) + "%"
    },
    final_haste() {
      let withoutEq = Number(this.stats.final_haste.withoutEq) / 100
      // let withEq = this.searchAttr('最终急速', 'final_haste', 'number')
      let multiply = this.searchAttr('最终急速', 'final_haste', 'percentage')
      let total = withoutEq + multiply
      this.stats.final_haste.withEq = total
      return (total * 100) + "%"
    },
  },
})
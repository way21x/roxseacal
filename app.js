// import CustomSelect from './header.js';

new Vue({
  el: '#app',
  components: {
    //CustomSelect
  },
  data() {
    return {
      classOptions: [
        "弓箭手", "猎人", "神射手", "游侠", "盗贼", "刺客", "十字刺客", "十字切割者"
      ],
      refineOptions: [
        { id: 1, 物理攻击: "10%", 攻速: "25%", name: "物理攻击 +10%, 攻速 +25%" },
        { id: 2, 物理攻击: "20%", 攻速: "50%", name: "物理攻击 +20%, 攻速 +50%" },
        { id: 3, 物理攻击: "30%", 攻速: "75%", name: "物理攻击 +30%, 攻速 +75%" },
        { id: 4, 物理攻击: "40%", 攻速: "100%", name: "物理攻击 +40%, 攻速 +100%" },
      ],
      upgradeOptions: [
        { level: "Lv 1 - 物理攻击 +25, 攻速 +25", data: "物理攻击 +25, 攻速 +25" },
      ],
      selectedClass: '弓箭手',
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
      upgrade: {
        "2": {
          "id": 2,
          "level": 1,
          "name": "Lv1: 魔法攻击 +2, 魔防穿透 +2",
          "effect": {
            "魔法攻击": 2,
            "魔防穿透": 2
          }
        },
        "3": {
          "id": 3,
          "level": 2,
          "name": "Lv2: 魔法攻击 +4, 魔防穿透 +4",
          "effect": {
            "魔法攻击": 4,
            "魔防穿透": 4
          }
        },
        "4": {
          "id": 4,
          "level": 3,
          "name": "Lv3: 魔法攻击 +6, 魔防穿透 +6",
          "effect": {
            "魔法攻击": 6,
            "魔防穿透": 6
          }
        },
        "5": {
          "id": 5,
          "level": 4,
          "name": "Lv4: 魔法攻击 +8, 魔防穿透 +8",
          "effect": {
            "魔法攻击": 8,
            "魔防穿透": 8
          }
        },
        "6": {
          "id": 6,
          "level": 5,
          "name": "Lv5: 魔法攻击 +10, 魔防穿透 +10",
          "effect": {
            "魔法攻击": 10,
            "魔防穿透": 10
          }
        },
        "7": {
          "id": 7,
          "level": 6,
          "name": "Lv6: 魔法攻击 +12, 魔防穿透 +12",
          "effect": {
            "魔法攻击": 12,
            "魔防穿透": 12
          }
        },
        "8": {
          "id": 8,
          "level": 7,
          "name": "Lv7: 魔法攻击 +14, 魔防穿透 +14",
          "effect": {
            "魔法攻击": 14,
            "魔防穿透": 14
          }
        },
        "9": {
          "id": 9,
          "level": 8,
          "name": "Lv8: 魔法攻击 +16, 魔防穿透 +16",
          "effect": {
            "魔法攻击": 16,
            "魔防穿透": 16
          }
        },
        "10": {
          "id": 10,
          "level": 9,
          "name": "Lv9: 魔法攻击 +18, 魔防穿透 +18",
          "effect": {
            "魔法攻击": 18,
            "魔防穿透": 18
          }
        }
      }, // raw data
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
        def: {withoutEq: null, withEq: null, multiply: null,},
        hit: {withoutEq: null, withEq: null, multiply: null,},
        flee: {withoutEq: null, withEq: null, multiply: null,},
        anti_crit: {withoutEq: null, withEq: null, multiply: null,},
        m_atk: {withoutEq: null, withEq: null, multiply: null,},
        m_def: {withoutEq: null, withEq: null, multiply: null,},
        m_pen: {withoutEq: null, withEq: null, multiply: null,},
        final_aspd: {withoutEq: null, withEq: null, multiply: null,},
        final_crit: {withoutEq: null, withEq: null, multiply: null,},
        crit_bonus: {withoutEq: 200, withEq: null, multiply: null,},
        final_p_def: {withoutEq: null, withEq: null, multiply: null,},
        final_m_def: {withoutEq: null, withEq: null, multiply: null,},
        final_p_pen: {withoutEq: null, withEq: null, multiply: null,},
        final_m_pen: {withoutEq: null, withEq: null, multiply: null,},
        hp_regen: {withoutEq: null, withEq: null, multiply: null,},
        sp_regen: {withoutEq: null, withEq: null, multiply: null,},
        p_dmg_reduction: {withoutEq: null, withEq: null, multiply: null,},
        m_dmg_reduction: {withoutEq: null, withEq: null, multiply: null,},
        move_speed: {withoutEq: null, withEq: null, multiply: null,},
      },
      eq_stats: [],
      test: {hp: 10, mp: 12},
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
      axios.all([this.req_1(), this.req_2(), this.req_3(), this.req_4(), this.req_5()]).then(
        axios.spread((...response) => {
          this.weapons = response[0].data;
          this.cards = response[1].data;
          this.enchants = response[2].data;
          this.upgrade = response[3].data;
          this.refine = response[4].data;
          this.accessoryCards = response[1].data.filter(v => v.itemsubtype.match('06:飾品'))
        })
      ).catch(errors => {
        console.log(errors);
      })
    },
    req_1() {
      return axios.get('./data/weapon_v1.json');
    },
    req_2() {
      return axios.get('./data/jsonformatter_cards.json');
    },
    req_3() {
      return axios.get('./data/jsonformatter_enchant.json');
    },
    req_4() {
      return axios.get('./data/refine_v1.json');
    },
    req_5() {
      return axios.get('./data/refine_v1.json');
    },
    filteredWeapons(job) {
      return this.weapons.filter(v => v.jobLimit != null 
        && v.slotList != null 
        && v.slotList.indexOf('武器') > -1 
        && v.jobLimit.indexOf(job) > -1
        )
    },
    filteredUpgrade() {
      // return this.upgrade.filter(v => v.effect.match('攻速'))
      //return console.log(this.upgrade)
      // for(let x in this.upgrade) {
      //   if(this.upgrade[x].effect.hasOwnProperty('魔法攻击') && this.upgrade[x].effect.hasOwnProperty('魔防穿透')) {
      //     console.log(this.upgrade[x].effect)
      //     return this.upgrade
      //   }
      // }
    },
    filteredRefine(equipment_x) {
      var res = this.equipmentResults
      for (var key in res) {
        if (key == equipment_x) {    
          for(var i in res[key]) {
            if(i == "RefineID"){
              var k = this.refine.filter(v => v.refineId != null && v.refineId === res[key][i] && v.refine_lv != null)
              k.forEach(z => {
                z.refine_lv = "+"+ (z.refine_lv.indexOf("+") == 0 ? z.refine_lv.substr(1) : z.refine_lv);
              })
              return k
            }
          }
        }
      }
    },
    filteredTalisman() {
      return this.weapons.filter(v => v.slotList != null && v.slotList.indexOf('护符') > -1)
    },
    filteredAccessory() {
      return this.weapons.filter(v => v.slotList != null && v.slotList.indexOf('饰品') > -1)
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
    test_p_atk(event, eq) {
      // let results = this.equipmentResults
      // let sum = 0
      // for(let key in results) {
      //   if(results[key] != null){ 
      //     // key = eq_1
      //     // results[key] = eq_1.result
      //     // results[key]["物理攻擊"] = eq_1.result.物理攻擊
      //     let x = results[key]
      //     for(let t in x) {
      //       if(t == "物理攻擊"){
      //         sum += parseInt(x[t])
      //       }
      //     }
      //   }
      // }
      // console.log(sum)

      // console.log(str)
      // if(str!= null){
      //   let res = str.split(",")
      //   var res1 = res.filter(v => v.length > 0 && v.indexOf("+") > -1).map(function(x){
      //     var xres = x.split("+");
      //     var xKey = xres[0];
      //     var xValue = xres[1];
      //     tempArray = ({eq_id: eq, effectName : xKey, effectValue : xValue}) 
      //       //this.stats.p_atk.withEq = xValue
      //       //Vue.set(this.stats.p_atk, 'withEq', xValue)
      //  });
      // //  return Vue.set(this,'eq_stats',tempArray)
      // if(this.eq_stats.length == 0){
      //   this.eq_stats.push(tempArray)
      //   console.log(tempArray)
      // }else{
      //   this.eq_stats.forEach((element, index) => {
      //     console.log(element)

      //     // this.eq_stats.push(tempArray)
      //     // console.log(element.eq_id, index)
      //      if(element.eq_id === tempArray.eq_id){
      //        console.log(index)
      //       this.eq_stats.splice(index, 1)
      //      }
  
      //    });
      //    this.eq_stats.push(tempArray)

      // }

      // //  return Vue.set(this,'eq_stats',tempArray)
      // // return this.eq_stats.push(tempArray)

      // }
    },
    edit_file_weapon() {
      let uu = []
      this.weapons.forEach((element, index) => {
        let temp = {}
        let str = element.effectbase

        if(str.length > 0) {
          let res = str.split(",")
          res.forEach(element => {
            if(element.length > 0){
              let xres = element.split("+")
              var xKe1 = xres[0];
              var xValue = xres[1];
              //temp.push(`${xKe1}: ${xValue}`)
              temp[xKe1] = xValue
            }
          });
          temp["itemname"] = element.itemname

          element.effectbase = temp
        }
        uu.push(element)
      });
      console.log(uu)
      return uu
    },
    edit_file_card() {
      let uu = []
      this.cards.forEach((element, index) => {
        let temp = {}
        let str = element.effect

        if(str.length > 0) {
          let res = str.split(",")
          res.forEach(element => {
            if(element.length > 0){
              let xres = element.split("+")
              var xKe1 = xres[0];
              var xValue = xres[1];
              //temp.push(`${xKe1}: ${xValue}`)
              temp[xKe1] = xValue
            }
          });
          element.effect = temp
        }
        uu.push(element)
      });
      console.log(uu)
      return uu
    },
    testabc() {
      const uu = [
        'baseLevelLimit', 'breakReturnItemNum', 'InheritZeny', 'itemID', 'itemNum', 
        "breakReturnItemID", "propID", "propNum", "zeny", "basicRate", "strengthenId", "successRate"
      ]

      // this.kkk.forEach(element => {
      //   uu.forEach(v => delete element[v])
      // });

      

      for(let i in this.kkk){
        // console.log(this.kkk[i], 'end')
        // i = [1], [2], [3]
        let propNum = {}
        let propID = {}
        let arr = {}
        


        if(this.kkk[i].propNum != null) {
          this.kkk[i].propNum.forEach((element, index) => {
            propNum[index]=element
          });
        }

        if(this.kkk[i].propID != null) {
          this.kkk[i].propID.forEach((element, index) => {
            switch(element) {
              case 1:
                element = "力量"
                break;
              case 2:
                element = "敏捷"
                break;
              case 3:
                element = "体质"
                break;
              case 4:
                element = "智力"
                break;
              case 5:
                element = "灵巧"
                break;
              case 6:
                element = "幸运"
                break;
              case 10:
                element = "物理攻击"
                break;
              case 11:
                element = "魔法攻击"
                break;
              case 12:
                element = "物防穿透"
                break;
              case 13:
                element = "魔防穿透"
                break;
              case 14:
                element = "攻速"
                break;
              case 15:
                element = "最终攻速"
                break;
              case 16:
                element = "急速"
                break;
              case 17:
                element = "最终急速"
                break;
              case 18:
                element = "命中"
                break;
              case 19:
                element = "最终伤害加深"
                break;
              case 20:
                element = "最终暴击"
                break;
              case 21:
                element = "暴击"
                break;
              case 22:
                element = "暴伤附加"
                break;
              case 23:
                element = "物理防御"
                break;
              case 24:
                element = "魔法防御"
                break;
              case 25:
                element = "最终闪避"
                break;
              case 26:
                element = "闪避"
                break;
              case 28:
                element = "最终伤害减免"
                break;
              case 31:
                element = "防暴"
                break;
              case 32:
                element = "最大HP"
                break;
              case 33:
                element = "最大SP"
                break;
              case 301:
                element = "物伤附加"
                break;
              case 302:
                element = "魔伤附加"
                break;
              case 303:
                element = "物伤减免"
                break;
              case 304:
                element = "魔伤减免"
                break;
              case 305:
                element = "魔法攻击"
                break;
              case 306:
                element = "物防穿透"
                break;
              case 320:
                element = "PVP物伤减免"
                break;
              case 321:
                element = "PVP魔伤减免"
                break;
              case 322:
                element = "PVP最终物伤减免"
                break;
              case 323:
                element = "PVP最终魔伤减免"
                break;
              case 324:
                element = "PVP负面状态减免"
                break;
              case 325:
                element = "PVP负面状态抵抗"
                break;
            }
            propID[index] = element

            arr[propID[index]] = propNum[index]
            // this.kkk[i].effect = arr
            if(this.kkk[i].id){
              if(propID[1]) {
                this.kkk[i].name = `Lv${this.kkk[i].level}: ${propID[0]} +${propNum[0]}, ${propID[1]} +${propNum[1]}`
              }else{
                this.kkk[i].name = `Lv${this.kkk[i].level}: ${propID[0]} +${propNum[0]}`
              }
            }

            // console.log('y')
          });
          if(this.kkk[i].id){
            this.kkk[i].effect = arr
          }
          // console.log('x')
        }

        if(!this.kkk[i].hasOwnProperty("propID") || !this.kkk[i].hasOwnProperty("level")){
          delete this.kkk[i]
        }

        for(let m in this.kkk[i]) {
          uu.forEach((element, index) => {
            if( m == element){
              delete this.kkk[i][element]              
            }
          });
          //console.log(this.kkk[i].effect)

        }


        // arr[propID[0]] = propNum[0]
        // arr[propID[1]] = propNum[1]
        
        //console.log(arr)
        // uu.forEach(v => {
        //   console.log(v) // v = each property name
        //   delete this.kkk[i][v]
        //   // if(this.kkk[i].propID[0] == 11){
        //   //   this.kkk[i].propID[0] = "atk"
        //   // }
        // })

        // this.kkk[i].propID.forEach(element => { // element = this.kkk[i].propID
        //   let key = element
        //   c[key] = 'val'
        //   switch(this.kkk[i].propID[index]) {
        //     case 11:
        //       this.kkk[i].propID[index] = "atk"
        //       break;
        //     case 13:
        //       this.kkk[i].propID[index] = "aspd"
        //       break;
        //   }

        //   console.log(this.kkk[i].propNum, "propnum")
        // });

        // if(this.kkk[i].propID != null) {
        //   this.kkk[i].propID = c
        // }


      }
      //console.log(this.kkk)
      return this.kkk
    },
    testest() {
      for(let x in this.upgrade) {
        //console.log(x)
      }

      console.log(this.upgrade)
      
    }
  },
  watch: {

  },
  mounted() {
    this.requestHandlder();
  },
  computed: {
    // dex() {
    //   let dex_withoutEq = Number(this.stats.dex.withoutEq)
    //   let dex_withEq = Number(this.stats.dex.withEq)
    //   return dex_withEq
    // },
    enchant() {
      let x = this.enchantResults
      console.log(x)
    },
    p_atk() {
      let p_atk_withoutEq = Number(this.stats.p_atk.withoutEq)
      let p_atk_withEq = 0
      let p_atk_multiply = Number(this.stats.p_atk.multiply)
      let equipmentResults = this.equipmentResults
      let dex_withoutEq = Number(this.stats.dex.withoutEq)
      let dex_withEq = 0

      let enchant_p_atk = 0
      let card_p_atk = 0
      let enchantResults = this.enchantResults
      let cardResults = this.cardResults

      // enchant calculation
      for(let enchant_key in enchantResults) {
        if(enchantResults[enchant_key][0] === "物理攻击" && enchantResults[enchant_key][1] != null) {
          if(enchantResults[enchant_key][1].includes("%")) {
            p_atk_multiply += parseInt(enchantResults[enchant_key][1])
          }else{
            enchant_p_atk += parseInt(enchantResults[enchant_key][1])
          }
        }

        if(enchantResults[enchant_key][0] === "灵巧" && enchantResults[enchant_key][1] != null) {
          dex_withEq += parseInt(enchantResults[enchant_key][1])
        }

      }
      // console.log(enchant_p_atk, p_atk_multiply)
      // console.log('end')
      
      // equipment calculation
      for(let equipment_key in equipmentResults) {
        if(equipmentResults[equipment_key] != null){ 
          // equipment_key = eq_1
          // equipmentResults[equipment_key] = eq_1.result
          // equipmentResults[equipment_key]["物理攻擊"] = eq_1.result.物理攻擊
          let results = equipmentResults[equipment_key]
          for(let target in results) {
            if(target == "物理攻击"){
              p_atk_withEq += parseInt(results[target])
            }
          }
        }
      }

      // card calculation
      for(let card_key in cardResults) {
        if(cardResults[card_key] != null) {
          let results = cardResults[card_key]
          for(let target in results) {
            if(target === "物理攻击") {
              if(results[target].includes("%")){
                p_atk_multiply += parseInt(results[target])
              }else{
                card_p_atk += parseInt(results[target])
              }
            }
          }
        }
      }
      
      let dex = dex_withEq+dex_withoutEq
      console.log(dex_withEq, dex_withoutEq)
      let dex_to_atk = dex * 4 * (1 + 0.05 * Math.floor(dex / 100))
      let p_atk = p_atk_withEq + p_atk_withoutEq + dex_to_atk + enchant_p_atk + card_p_atk
      console.log("物理攻击:", p_atk , "物理攻击加成:", p_atk_multiply+"%", "附魔物理攻击:", enchant_p_atk, "dex:", dex, "dex转物理攻击:", dex_to_atk, "卡物理攻击:", card_p_atk)
      this.stats.dex.withEq = dex
      return p_atk * ( 1 + p_atk_multiply / 100 )

      // if(this.eq_stats != null){
      //   let x = this.eq_stats.filter(v => v.effectName.match('物理攻擊'))
      //   if(x[0] != null){
      //     return p_atk_withoutEq + Number(x[0].effectValue)
      //   }else{
      //     return p_atk_withoutEq
      //   }
      // }
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



// import CustomSelect from './header.js';
import eq from './eq.js';
Vue.component('vue-multiselect', window.VueMultiselect.default)
Vue.component('v-select', VueSelect.VueSelect);

const messages = {
  en: {
    str: 'STR',
    vit: 'VIT',
    dex: 'DEX',
    agi: 'AGI',
    int: 'INT',
    luk: 'LUK',
    maxhp: 'Max HP',
    patk: 'P.ATK',
    def: 'DEF',
    ppen: 'P.PEN',
    aspd: 'ASPD',
    hit: 'HIT',
    crit: 'CRIT',
    maxsp: 'Max SP',
    matk: 'M.ATK',
    mdef: 'M.DEF',
    mpen: 'M.PEN',
    haste: 'Haste',
    flee: 'Flee',
    antiCrit: 'Anti-Crit',
    finalASPD: 'Final Attack Speed',
    finalCrit: 'Final Crit',
    hpRegen: 'HP Regen',
    spRegen: 'SP Regen',
    critBonus: 'Crit DMG Bonus',
    movementSpeed: 'Movement Speed',
    finalPDEF: 'Final Pyhsical DEF',
    finalMDEF: 'Final Magic DEF',
    finalPPEN: 'Final P.PEN',
    finalHaste: 'Final Haste',
    finalDMGBonus: 'Final DMG Bonus',
    finalMPEN: 'Final M.PEN',
    damageBonus: 'Damage Bonus',
    pdmgRed: 'P.DMG Reduction',
    upgradeAwaken: 'Upgrade Awakening',
    refineAwaken: 'Refine Awakening',
    enchantAwaken: 'Enchant Awakening',
    pysicalDamage: 'Pysical Damage',
    critDamage: 'Critical Damage',
    PDPS: 'Physical DPS',
    CDPS: 'Critical DPS',
    cd: "Skill's CD",
    magicDamage: 'Magic Damage',
    MDPS: 'Magic DPS',
    channeling: 'Channeling Time',
    spear_proficiency: 'Spear Proficiency',
    spear_proficiency_des: 'ATK increases by (80 + 50% of DEX) when equipped with a Spear.',
    cavalry_training: 'Cavalry Training',
    lords_aura: "Lord's Aura",
    improve_concentration: 'Improve Concentration',
    elemental_arrow: 'Elemental Arrow',
    owls_eye: "Owl's Eye",
    ace_tamer: 'Ace Tamer',
    falcon_eyes: "Falcon Eyes",
    blessing_agility: "Blessing & Agility",
    impositio_manus: 'Impositio Manus',
    gloria: 'Gloria',
    crazy_uproar: 'Crazy Uproar',
    weapon_perfection: 'Weapon Perfection',
    adrenaline_rush: 'Adrenaline Rush',
    power_thrust: 'Power Thrust',
    hunterClass: 'Archer/Hunter/Sniper',
    assassinClass: 'Thief/Assassin/Assassin Cross',
    knightClass: 'Swordsman/Knight/Lord Knight',
    blacksmithClass: 'Merchant/Blacksmith/Whitesmith',
    priestClass: 'Acolyte/Priest/High Priest',
    wizClass: 'Magician/Wizard/High Wizard',
    weapon: "-- Weapon --",

  },
  cn: {
    str: '??????',
    vit: '??????',
    dex: '??????',
    agi: '??????',
    int: '??????',
    luk: '??????',
    maxhp: '?????? HP',
    patk: '????????????',
    def: '????????????',
    ppen: '????????????',
    aspd: '??????',
    hit: '??????',
    crit: '??????',
    maxsp: '?????? SP',
    matk: '????????????',
    mdef: '????????????',
    mpen: '????????????',
    haste: '??????',
    flee: '??????',
    antiCrit: '??????',
    finalASPD: '????????????',
    finalCrit: '????????????',
    hpRegen: 'HP ??????',
    spRegen: 'SP ??????',
    critBonus: '????????????',
    movementSpeed: '????????????',
    finalPDEF: '??????????????????',
    finalMDEF: '??????????????????',
    finalPPEN: '??????????????????',
    finalHaste: '????????????',
    finalDMGBonus: '??????????????????',
    finalMPEN: '??????????????????',
    damageBonus: '????????????',
    pdmgRed: '??????????????????',
    upgradeAwaken: '????????????',
    refineAwaken: '????????????',
    enchantAwaken: '????????????',
    pysicalDamage: '????????????',
    critDamage: '????????????',
    PDPS: '????????????',
    CDPS: '????????????',
    cd: "????????????",
    magicDamage: '????????????',
    MDPS: '????????????',
    channeling: '????????????',
    spear_proficiency: '???????????????',
    spear_proficiency_des: "?????????????????????????????????(80+??????x50%)",
    cavalry_training: '????????????',
    lords_aura: "????????????",
    improve_concentration: '????????????',
    elemental_arrow: '????????????',
    owls_eye: "????????????",
    ace_tamer: "???????????????",
    falcon_eyes: "????????????",
    blessing_agility: "??????????????? & ?????????",
    impositio_manus: '????????????',
    gloria: '???????????????',
    crazy_uproar: '????????????',
    weapon_perfection: '??????????????????',
    adrenaline_rush: '????????????',
    power_thrust: '??????',
    hunterClass: '?????????/??????/?????????',
    assassinClass: '??????/??????/????????????',
    knightClass: '??????/??????/????????????',
    blacksmithClass: '??????/??????/?????????',
    priestClass: '??????/??????/??????',
    wizClass: '?????????/??????/????????????',
    weapon: '-- ?????? --'
  },
};
const i18n = new VueI18n({ 
  locale: 'en',
  messages: messages 
});

new Vue({
  el: '#app',
  i18n: i18n,
  components: {
    eq
    // CustomSelect
  },
  data() {
    return {
      // classOptions: [
      //   { name: this.$t('archerClass'), value: "?????????" }, 
      //   { name: "?????????", value: "??????"},
      //   { name: "?????????", value: "??????"},
      //   { name: "?????????", value: "??????"},
      //   { name: "?????????", value: "??????"},
      //   { name: "????????????", value: "?????????"},
      // ],
      selectedClass: {name:null, baselv: null, value: null},
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
      passiveSkill: {
        knight: {
          spear_proficiency: false, 
          cavalry_training: false,
          lords_aura: false,
        },
        hunter: {
          improve_concentration: false, 
          elemental_arrow: false, 
          ace_tamer: false,
          falcon_eyes: false,
        },
        priest: {
          blessing_agility: false, 
          impositio_manus: false, 
          gloria: false,
        },
        merchant: {
          crazy_uproar: false,
          weapon_perfection: false,
          adrenaline_rush: false,
          power_thrust: false,
        },
      },
      mons_size: 1,
      elementBonus: 1,
      mons_list: [
        {name: '?????????', anti_crit: 0, flee: 0, maxHp: 100000000, m_def: 0, p_def: 0},
        {name: '????????????', anti_crit: 71, flee: 71, maxHp: 201495, m_def: 427, p_def: 284},
      ],
      mons_test: '?????????',
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
        p_dmg_bonus: {withoutEq: null, withEq: null, multiply: null,},
        final_aspd: {withoutEq: null, withEq: null, multiply: null,},
        final_crit: {withoutEq: null, withEq: null, multiply: null,},
        crit_bonus: {withoutEq: 200, withEq: null, multiply: null,},
        final_p_def: {withoutEq: null, withEq: null, multiply: null,},
        final_m_def: {withoutEq: null, withEq: null, multiply: null,},
        final_p_pen: {withoutEq: null, withEq: null, multiply: null,},
        final_m_pen: {withoutEq: null, withEq: null, multiply: null,},
        final_p_dmg_bonus: {withoutEq: null, withEq: null, multiply: null,},
        final_haste: {withoutEq: null, withEq: null, multiply: null,},
        hp_regen: {withoutEq: null, withEq: null, multiply: null,},
        sp_regen: {withoutEq: null, withEq: null, multiply: null,},
        p_dmg_reduction: {withoutEq: null, withEq: null, multiply: null,},
        m_dmg_reduction: {withoutEq: null, withEq: null, multiply: null,},
        move_speed: {withoutEq: null, withEq: null, multiply: null,},
      },
      // eq_stats: [],
      upgradeAwakening: 1,
      refineAwakening: 1,
      enchantAwakening: 1,
      test: 1,
      // selected: null,
      // selected_card: '',
      // selected_enchant: '',
      // selected_enchantLevel: '',
      // enchantOption: { test: null},
      // from_amount: [],
      // to_amount: "",
      // kkk: {},
    }
  },
  methods: {
    requestHandlder() {
      axios
      .get('./data/levelGrowth_v1.json')
      .then(response => (this.growth = response.data))
    },
    filteredBaseLevel(val) {
      return this.growth.filter(v => v.basicJob != null && v.basicJob.match(val))
    },
    common(value, M, B) {
      let N = Math.floor(((1 + 8 * value / M) ** 0.5 - 1) / 2)
      return (N * M + (value - M * N * (N + 1) / 2) / (N + 1)) / B
    },
    statBonus(v, m) {
      return Math.floor(v * m * (1 + 0.05 * Math.floor(v / 100)))
      // 4*A27+0.2*A27*(TRUNC(A27/100))+10*(TRUNC(A27/100))*(1-(TRUNC(A27/100)))
      // return m * v + 0.2 * v * Math.floor(v / 100) + 10 * Math.floor( v / 100) * (1 - Math.floor(v / 100))
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
    baseReward(val) {
      if(this.selectedClass.name !== null && this.selectedClass.baselv !== null && this.growth.length !== 0){
        let baseReward = this.growth.filter(v => v.level == this.selectedClass.baselv && v.basicJob == this.selectedClass.name)[0]
        return val == 'p_def' ? (baseReward.p_def ? baseReward.p_def : 0) : 
        val == 'p_atk' ? (baseReward.p_atk ? baseReward.p_atk : 0) : 
        val == 'm_atk' ? (baseReward.m_atk ? baseReward.m_atk : 0) : 
        val == 'm_def' ? (baseReward.m_def ? baseReward.m_def : 0) : 0
      }else{
        return 0
      }
    },
    p_damage() {
      let p_atk = parseFloat(this.stats.p_atk.withEq)
      let final_p_pen = parseFloat(this.stats.final_p_pen.withEq)
      let p_dmg_bonus = parseFloat(this.stats.p_dmg_bonus.withEq)
      let final_p_dmg_bonus = parseFloat(this.stats.final_p_dmg_bonus.withEq)
      let elementBonus = parseFloat(this.elementBonus)
      let mons_size = parseFloat(this.mons_size)
      let p_atk_buff = 0
      let p_atk_debuff = 0
      let size_buff = 0
      let size_debuff = 0
      let element_buff = 0
      let element_debuff = 0
      let race_buff = 0
      let race_debuff = 0
      let mons_final_p_def = 0
      let mons_final_p_dmg_red = 0
      let mons_p_dmg_red = 0
      let mons_anti_crit = 0
      let mons_p_pen = 0
      // let elemental_arrow = this.passiveSkill.hunter.elemental_arrow ? 0.1 : 0
      p_atk_buff += this.passiveSkill.hunter.elemental_arrow ? 0.1 : 0

      if(this.mons_test == '????????????') {
        mons_final_p_def = Number(this.common(284, 25, 5).toFixed(2)) / 100
        mons_p_pen = Number(this.common(142, 25, 5).toFixed(2)) / 100
        p_atk_buff += 0
      }
      if(this.mons_test == '?????????') {
        size_buff = 0.02
      }
      // 5609 * 1.23 * (1.3397 - 0.2673) * 0.75 + 787
      let total = p_atk * (1 + final_p_dmg_bonus - mons_final_p_dmg_red) * (1 + final_p_pen - mons_final_p_def) * elementBonus * (1 + element_buff - element_debuff) * mons_size * (1 + size_buff - size_debuff) * (1 + race_buff - race_debuff) * (1 + p_atk_buff) * (1 - p_atk_debuff) + (p_dmg_bonus - mons_p_dmg_red)

      // console.log(p_atk, final_p_dmg_bonus, final_p_pen, mons_size, elementBonus, mons_final_p_def)

      // return (Math.floor(total)).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})
      return Math.floor(total)

      // 10521 buff
      // 15320 buff crit
      // 10279 no buff
      // 14958 buff crit
      
      // 6803 buff marduk
      // 11473 buff crit marduk
      // 6654 no buff marduk
      // 11207 no buff crit marduk

      // 10871 no buff lunatic
      // 16070 no buff crit lunatic

      // "LuckyRefineTitle": "????????????",
      // "LuckyRefineTips1": "???????????????????????????????????????????????????",
      // "LuckyRefineTips2": "?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
      // "LuckyRefineTips3": "???????????????????????????????????????????????????????????????????????????????????????????????????????????????100%",
      // "LuckyRefineTips4": "?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
      // ???????????? convert to ??????????????????
      // (?????????????????? - ??????????????????) = (Final M.PEN - Final Magic Defense) // ??????
      // (?????????????????? - ??????????????????) = (Final P.PEN - Final Physical DEF) // ??????
      // (?????????????????? - ??????????????????) = (Final M.DMG Bonus - Final M.DMG RED) // ????????????
      // (?????????????????? - ??????????????????) = (Final P.DMG Bonus - Final P.DMG RED) // ????????????
      // (???????????? - ????????????) = (P.DMG Bonus - P.DMG Reduction) // ??????
      // (???????????? - ????????????) = (M.DMG Bonus - M.DMG Reduction) // ??????
      // (???????????? - ????????????) = (Crit DMG Bonus - Crit DMG Reduction)
      // (?????????????????? - ??????????????????) = (Final Damage Bonus - Final DMG Reduction)


      // ???????????????
      // ?????1+final_p_pen????????????????????????1???final_p_pen/2???if?????????????????????crit_bonus???if?????????
      // ?????elementBonus????????1??????????????????????????????????????mons_size????????1?????????????????????????????????
      // ?????1??????????????? ???????????????????????1???????????????????????1???????????????????????1???final_p_dmg_bonus??????????????????
      // ???dmg_bonus??????????????????????????

      // Damage per hit???
      // { [ (Original Dmg????????1???%DMG???%DMG????????1???%PEN???%DEF???
      // ?????Elem????????1???eleBuff???eleDef????????Size????????1???SizeBuff???SizeDef???
      // ?????1???TypeBuff???TypeDef???????????1???Buff????????1???DeBuff???
      // ???DMG???DMG???
      
      // ???????????????????????????????????????????????????????????????????????????????? ??? ????????????
      
      // ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

      // ???????????????
      // ?????1+????????????????????????????????????1???????????????/2???if????????????????????????????????????if?????????
      // ?????????????????????????1??????????????????????????????????????????????????????????1?????????????????????????????????
      // ?????1??????????????? ???????????????????????1???????????????????????1???????????????????????1?????????????????????????????????
      // ?????????????????????????????????????????
      
       
      
      // ?????????????????????????????????????????????
      // ???????????????????????1??????????????????????????????????????1+??????????????????????????????
      // ????????????????????????????????????????????????????????????????????????????????????????????????????
      // ?????1??????????????? ???????????????????????1???????????????????????1??????????????????
      // ?????????????????????????????????????????
      
       
      
      // ????????? ??? ???????????????????????? 200%???????????? 0%???


    },
    p_crit_damage() {
      let p_atk = parseFloat(this.stats.p_atk.withEq)
      let final_p_pen = parseFloat(this.stats.final_p_pen.withEq)
      let p_dmg_bonus = parseFloat(this.stats.p_dmg_bonus.withEq)
      let final_p_dmg_bonus = parseFloat(this.stats.final_p_dmg_bonus.withEq)
      let elementBonus = parseFloat(this.elementBonus)
      let mons_size = parseFloat(this.mons_size)
      let p_atk_buff = 0
      let p_atk_debuff = 0
      let size_buff = 0
      let size_debuff = 0
      let element_buff = 0
      let element_debuff = 0
      let race_buff = 0
      let race_debuff = 0
      let mons_final_p_def = 0
      let mons_final_p_dmg_red = 0
      let mons_p_dmg_red = 0
      let crit_bonus = parseFloat(this.stats.crit_bonus.withEq)

      p_atk_buff += this.passiveSkill.hunter.elemental_arrow ? 0.1 : 0

      if(this.mons_test == '?????????') {
        size_buff = 0.02
      }

      let total = p_atk * (1 + final_p_dmg_bonus) * elementBonus * (1 + element_buff - element_debuff) * mons_size * (1 + size_buff - size_debuff) * (1 + race_buff - race_debuff) * (1 + p_atk_buff) * (1 - p_atk_debuff) * crit_bonus + (p_dmg_bonus - mons_p_dmg_red)

      // return total.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})
      return Math.floor(total)
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
    },
    reset() {
      var lang = localStorage.getItem('lang');
      var ver = localStorage.getItem('ver');
      console.log(lang)
      localStorage.clear();
      localStorage.setItem('lang', lang);
      localStorage.setItem('ver', ver);
      location.reload()
    },
    clearOption() {
      let equipmentResults = this.equipmentResults
      for(let i in equipmentResults) {
        if(equipmentResults[7] == null) {
          this.cardResults['card_16'] = null
        }
      }
    }
  },
  watch: {
    '$i18n.locale': function(newVal) {
      localStorage.setItem('lang', newVal)
    },
    test: {
      handler(newVal) {
      this.cardResults = newVal.cardResults
      this.equipmentResults = newVal.equipmentResults
      this.enchantResults = newVal.enchantResults
      this.upgradeResults = newVal.upgradeResults
      this.refineResults = newVal.refineResults
      }
    },
    selectedClass: {
      handler(newVal) {
          localStorage.setItem('selectedClass', JSON.stringify(newVal))
          localStorage.setItem('ver', 1)
      },
      deep: true,
    },
    equipmentResults: {
      handler(newVal) {
          localStorage.setItem('equipmentResults', JSON.stringify(newVal))
      },
      deep: true,
    },
    refineResults: {
      handler(newVal) {
          localStorage.setItem('refineResults', JSON.stringify(newVal))
      },
      deep: true,
    },
    upgradeResults: {
      handler(newVal) {
          localStorage.setItem('upgradeResults', JSON.stringify(newVal))
      },
      deep: true,
    },
    enchantResults: {
      handler(newVal) {
          localStorage.setItem('enchantResults', JSON.stringify(newVal))
      },
      deep: true,
    },
    cardResults: {
      handler(newVal) {
          localStorage.setItem('cardResults', JSON.stringify(newVal))
      },
      deep: true,
    },
    passiveSkill: {
      handler(newVal) {
          localStorage.setItem('passiveSkill', JSON.stringify(newVal))
      },
      deep: true,
    },
    stats: {
      handler(newVal) {
          localStorage.setItem('stats', JSON.stringify(newVal))
      },
      deep: true,
    },
    upgradeAwakening: function(newVal) {
      localStorage.setItem('upgradeAwakening', JSON.stringify(newVal))
    },
    refineAwakening: function(newVal) {
      localStorage.setItem('refineAwakening', JSON.stringify(newVal))
    },
    enchantAwakening: function(newVal) {
      localStorage.setItem('enchantAwakening', JSON.stringify(newVal))
    },
    equipmentResults: function(newVal) {
      this.clearOption()
      console.log('watch')
    }
  },
  mounted() {
    this.requestHandlder();
  },
  created() {
    if(localStorage.lang && localStorage.ver == 1) {
      this.$i18n.locale = localStorage.getItem('lang')
    }
    if(localStorage.equipmentResults && localStorage.ver == 1) {
      this.equipmentResults = JSON.parse(localStorage.getItem('equipmentResults'))
    }
    if(localStorage.refineResults && localStorage.ver == 1) {
      this.refineResults = JSON.parse(localStorage.getItem('refineResults'))
    }
    if(localStorage.upgradeResults && localStorage.ver == 1) {
      this.upgradeResults = JSON.parse(localStorage.getItem('upgradeResults'))
    }
    if(localStorage.enchantResults && localStorage.ver == 1) {
      this.enchantResults = JSON.parse(localStorage.getItem('enchantResults'))
    }
    if(localStorage.cardResults && localStorage.ver == 1) {
      this.cardResults = JSON.parse(localStorage.getItem('cardResults'))
    }
    if(localStorage.selectedClass && localStorage.ver == 1) {
      this.selectedClass = JSON.parse(localStorage.getItem('selectedClass'))
    }
    if(localStorage.passiveSkill && localStorage.ver == 1) {
      this.passiveSkill = JSON.parse(localStorage.getItem('passiveSkill'))
    }
    if(localStorage.stats && localStorage.ver == 1) {
      this.stats = JSON.parse(localStorage.getItem('stats'))
    }
    if(localStorage.upgradeAwakening && localStorage.ver == 1) {
      this.upgradeAwakening = JSON.parse(localStorage.getItem('upgradeAwakening'))
    }
    if(localStorage.refineAwakening && localStorage.ver == 1) {
      this.refineAwakening = JSON.parse(localStorage.getItem('refineAwakening'))
    }
    if(localStorage.enchantAwakening && localStorage.ver == 1) {
      this.enchantAwakening = JSON.parse(localStorage.getItem('enchantAwakening'))
    }
  },
  computed: {
    classOptions() { 
      return [
        { name: this.$t('hunterClass'), value: "?????????" }, 
        { name: this.$t('assassinClass'), value: "??????"},
        { name: this.$t('knightClass'), value: "??????"},
        { name: this.$t('blacksmithClass'), value: "??????"},
        { name: this.$t('priestClass'), value: "??????"},
        { name: this.$t('wizClass'), value: "?????????"},
      ]
    },
    str() {
      let withoutEq = Number(this.stats.str.withoutEq)     
      let withEq = this.searchAttr('??????', 'str', 'number')
      let multiply = this.searchAttr('????????????', 'str%', 'percentage')
  
      // buffs
      let buff = 0
      buff += this.passiveSkill.hunter.falcon_eyes ? 10 : 0
      buff += this.passiveSkill.priest.blessing_agility ? 20 : 0

      let total = (withEq + withoutEq + buff) * (1 + multiply)
      this.stats.str.withEq = total
      this.stats.str.buff = buff * (1 + multiply)
      return total
    },
    luk() {
      let withoutEq = Number(this.stats.luk.withoutEq)
      let withEq = this.searchAttr('??????', 'luk', 'number')
      let multiply = this.searchAttr('????????????', 'luk%', 'percentage')
  
      // buffs
      let buff = 0
      buff += this.passiveSkill.priest.gloria ? 40 : 0
      buff += this.passiveSkill.hunter.falcon_eyes ? 10 : 0
  
      let total = (withEq + withoutEq + buff) * (1 + multiply)
      this.stats.luk.withEq = total
      this.stats.luk.buff = buff * (1 + multiply)
      return total
    },
    agi() {
      let withoutEq = Number(this.stats.agi.withoutEq)
      let withEq = this.searchAttr('??????', 'agi', 'number')
      let multiply = this.searchAttr('????????????', 'agi%', 'percentage')
  
      // buffs
      let buff = 0
      buff += this.passiveSkill.priest.improve_concentration ? 20 : 0
      buff += this.passiveSkill.hunter.falcon_eyes ? 10 : 0
      buff += this.passiveSkill.priest.blessing_agility ? 20 : 0
  
      let total = (withEq + withoutEq + buff) * (1 + multiply)
      this.stats.agi.withEq = total
      this.stats.agi.buff = buff * (1 + multiply)
      return total
    },
    dex() {
      let withoutEq = Number(this.stats.dex.withoutEq)
      let withEq = this.searchAttr('??????', 'dex', 'number')
      let multiply = this.searchAttr('????????????', 'dex%', 'percentage')
      
      // buffs
      let buff = 0
      buff += this.passiveSkill.priest.blessing_agility ? 20 : 0
      buff += this.passiveSkill.hunter.improve_concentration ? 20 : 0
      buff += this.passiveSkill.hunter.falcon_eyes ? 10 : 0
  
      let total = (withEq + withoutEq + buff) * (1 + multiply)
      this.stats.dex.withEq = total
      this.stats.dex.buff = buff * (1 + multiply)
      return total
    },
    vit() {
      let withoutEq = Number(this.stats.vit.withoutEq)
      let withEq = this.searchAttr('??????', 'vit', 'number')
      let multiply = this.searchAttr('????????????', 'vit%', 'percentage')
  
      // buffs
      let buff = 0
      buff += this.passiveSkill.hunter.falcon_eyes ? 10 : 0
  
      let total = (withEq + withoutEq + buff) * (1 + multiply)
      this.stats.vit.withEq = total
      this.stats.vit.buff = buff * (1 + multiply)
      return total
    },
    int() {
      let withoutEq = Number(this.stats.int.withoutEq)
      let withEq = this.searchAttr('??????', 'int', 'number')
      let multiply = this.searchAttr('????????????', 'int%', 'percentage')
  
      // buffs
      let buff = 0
      buff += this.passiveSkill.hunter.falcon_eyes ? 10 : 0
      buff += this.passiveSkill.priest.blessing_agility ? 20 : 0
  
      let total = (withEq + withoutEq + buff) * (1 + multiply)
      this.stats.int.withEq = total
      this.stats.int.buff = buff * (1 + multiply)
      return total
    },
    p_atk() {
      let p_atk_withoutEq = Number(this.stats.p_atk.withoutEq)
      let p_atk_withEq = this.searchAttr('????????????', 'p_atk', 'number')
      let p_atk_multiply = this.searchAttr('????????????', 'p_atk', 'percentage')
      let p_atk_skill = 0

      // convert stats to p_atk
      let dex = this.stats.dex.withEq
      let luk = this.stats.luk.withEq
      let str = this.stats.str.withEq
      let dex_buff = this.stats.dex.buff
      let luk_buff = this.stats.luk.buff
      let str_buff = this.stats.str.buff
      let selected = this.selectedClass.name

      // impositio_manus
      p_atk_multiply += this.passiveSkill.priest.impositio_manus ? 0.1 : 0
      // ace_tamer
      p_atk_multiply += this.passiveSkill.hunter.ace_tamer ? 0.15 : 0
      // lords_aura
      p_atk_multiply += this.passiveSkill.knight.lords_aura ? 0.10 : 0
      // power_thrust
      p_atk_multiply += this.passiveSkill.merchant.power_thrust ? 0.10 : 0
      // falcon_eyes
      p_atk_multiply += this.passiveSkill.hunter.falcon_eyes ? 0.20 : 0

      // spear_proficiency
      p_atk_skill += this.passiveSkill.knight.spear_proficiency ? 80 + dex * 0.5 : 0 
      // cavalry_training
      p_atk_skill += this.passiveSkill.knight.cavalry_training ? 80 + dex * 0.5 : 0 

      // let dex_to_atk = selected == '?????????' ? dex*4*(1+0.05*Math.floor(dex/100))-(0.2*dex*Math.max(0,(Math.floor(dex/100)-1))) : 0

      let dex_to_atk = selected == '?????????' ? this.statBonus(dex - dex_buff, 4) + dex_buff * (4 + Math.floor((dex - dex_buff) / 100) * 0.2) : 0
      let luk_to_atk = this.statBonus(luk - luk_buff, 0.5) + this.statBonus(luk_buff, 0.5) 
      let str_to_atk = selected == '?????????' ? this.statBonus(str - str_buff, 0.2) + this.statBonus(str_buff, 0.2) : this.statBonus(str - str_buff, 4) + this.statBonus(str_buff, 4)
      let stats_to_atk = dex_to_atk + luk_to_atk + str_to_atk

      // 175 + lord + blessing = 195 = 7165 - matched
      // 175 + lord + improve = 195 = 7157 - matched
      // 175 + lord + falcon = 185 = 7808 - matched // this.statBonus(dex+improve+blessing+falcon, 4)
      
      // 175 + lord + improve + falcon = 205 = 8035 - not matched - game = 7990, gap = sys more 45 | multiply = 2.17
      // 175 + lord + blessing + falcon = 205 = 8044 - not matched - game = 7999, gap = sys more 45 | multiply = 2.17
      // 175 + lord + blessing + improve = 215 = 7376 - not matched - game = 7330, gap = sys more 46 | multiply = 1.97 // 50
      // 175 + lord + blessing + improve + falcon = 225 = 8235 - not matched - game = 8181, gap = sys more 54 | multiply = 2.17

      // baselv reward p_atk
      if(this.selectedClass.name !== null && this.selectedClass.baselv !== null && this.growth.length !== 0){
        let baseReward = this.growth.filter(v => v.level == this.selectedClass.baselv && v.basicJob == this.selectedClass.name)[0]
        if(baseReward.p_atk) {
          p_atk_withEq += baseReward.p_atk
        }
      }

      let total = (p_atk_withEq + p_atk_withoutEq + stats_to_atk + p_atk_skill) * (1 + p_atk_multiply)
      this.stats.p_atk.withEq = total

      console.log('dex:'+dex, 'luk:'+luk, 'str:'+str, 
      'atk:'+p_atk_withEq + p_atk_withoutEq + stats_to_atk, 
      'multiply:'+(1 + p_atk_multiply), 'total:'+total, 'eq:'+p_atk_withEq + p_atk_withoutEq, 
      'dex_to_atk:'+dex_to_atk, 'luk_to_atk:'+luk_to_atk, 'str_to_atk:'+str_to_atk)

      return Math.floor(total)
    },
    p_def() {
      let withoutEq = Number(this.stats.p_def.withoutEq)
      let withEq = this.searchAttr('????????????', 'def', 'number')
      let multiply = this.searchAttr('????????????', 'def', 'percentage')

      // convert stats to p_def
      let vit = this.stats.vit.withEq
      let vit_to_def = this.statBonus(vit, 2)

      // baselv reward p_def
      withEq += this.baseReward('p_def')

      let total = (withEq + withoutEq + vit_to_def) * (1 + multiply)
      this.stats.p_def.withEq = total
      return total
    },
    m_atk() {
      let withoutEq = Number(this.stats.m_atk.withoutEq)
      let withEq = this.searchAttr('????????????', 'm_atk', 'number')
      let multiply = this.searchAttr('????????????', 'm_atk', 'percentage')

      // convert stats to m_atk
      let int = this.stats.int.withEq
      let int_to_matk = this.statBonus(int, 4)

      // baselv reward m_atk
      withEq += this.baseReward('m_atk')

      let total = (withEq + withoutEq + int_to_matk) * (1 + multiply)
      this.stats.m_atk.withEq = total
      return total
    },
    m_def() {
      let withoutEq = Number(this.stats.m_def.withoutEq)
      let withEq = this.searchAttr('????????????', 'm_def', 'number')
      let multiply = this.searchAttr('????????????', 'm_def', 'percentage')

      // convert stats to p_def
      let int = this.stats.int.withEq
      let int_to_def = this.statBonus(int, 2)

      // baselv reward p_def
      withEq += this.baseReward('m_def')

      let total = (withEq + withoutEq + int_to_def) * (1 + multiply)
      this.stats.m_def.withEq = total
      return total      
    },
    m_pen() {
      let withoutEq = Number(this.stats.m_pen.withoutEq)
      let withEq = this.searchAttr('????????????', 'm_pen', 'number')
      let multiply = this.searchAttr('????????????', 'm_pen', 'percentage')
      let total = (withEq + withoutEq) * (1 + multiply)
      this.stats.m_pen.withEq = total
      return total      
    },
    final_m_pen() {
      //
    },
    aspd() {
      let withoutEq = Number(this.stats.aspd.withoutEq)
      let withEq = this.searchAttr('??????', 'aspd', 'number')
      let multiply = this.searchAttr('????????????', 'aspd%', 'percentage')
      let agi = this.stats.agi.withEq
      let agi_to_aspd = this.statBonus(agi, 2)

      // buffs
      let buffs = 0

      let total = Math.floor(withEq + withoutEq + agi_to_aspd + buffs) * (1 + multiply)
      this.stats.aspd.withEq = total
      return total
    },
    final_aspd() {
      let withoutEq = Number(this.stats.final_aspd.withoutEq) / 100
      // let withEq = this.searchAttr('????????????', 'final_aspd', 'number')
      let multiply = this.searchAttr('????????????', 'final_aspd', 'percentage')
      let aspd = Number(this.common(this.stats.aspd.withEq, 50, 1).toFixed(2)) / 100

      // buffs
      let buffs = 0
      buffs += this.passiveSkill.merchant.adrenaline_rush ? Math.floor(parseFloat(this.stats.agi.withEq) / 50) / 100 : 0
      buffs += this.passiveSkill.merchant.adrenaline_rush ? 0.5 : 0

      let total = withoutEq + aspd + multiply + buffs
      this.stats.final_aspd.withEq = total
      return (total * 100) + "%"
    },    
    crit() {
      let withoutEq = Number(this.stats.crit.withoutEq)
      let withEq = this.searchAttr('??????', 'crit', 'number')
      let multiply = this.searchAttr('??????', 'crit', 'percentage')
      let luk = this.stats.luk.withEq
      let luk_to_crit = this.statBonus(luk, 2)
      let total = (withEq + withoutEq + luk_to_crit) * (1 + multiply)
      this.stats.crit.withEq = total
      return total
    },
    final_crit() {
      let withoutEq = Number(this.stats.final_crit.withoutEq) / 100
      // let withEq = this.searchAttr('????????????', 'final_crit', 'number')
      let multiply = this.searchAttr('????????????', 'final_crit', 'percentage')
      let crit = Number(this.common(this.stats.crit.withEq, 25, 5).toFixed(2)) / 100
      let total = (withoutEq + crit + multiply).toFixed(5)
      this.stats.final_crit.withEq = total
      return (total * 100).toFixed(2) + "%"
    },
    crit_bonus() {
      let withoutEq = Number(this.stats.crit_bonus.withoutEq)
      let withEq = this.searchAttr('????????????', 'crit_bonus', 'number')
      let multiply = this.searchAttr('????????????', 'crit_bonus', 'percentage')

      let buffs = 0
      buffs += this.passiveSkill.hunter.falcon_eyes ? 50 : 0

      let total = (withEq + withoutEq + buffs) * (1 + multiply) / 100
      this.stats.crit_bonus.withEq = total
      return (total * 100) + "%"
    },
    haste() {
      let withoutEq = Number(this.stats.haste.withoutEq)
      let withEq = this.searchAttr('??????', 'haste', 'number')
      let multiply = this.searchAttr('??????', 'haste', 'percentage')
      let dex = this.stats.dex.withEq
      let dex_to_haste = this.statBonus(dex, 2)
      let total = (withEq + withoutEq + dex_to_haste) * (1 + multiply)
      this.stats.haste.withEq = total
      return total
    },
    p_pen() {
      let withoutEq = Number(this.stats.p_pen.withoutEq)
      let withEq = this.searchAttr('????????????', 'p_pen', 'number')
      let multiply = this.searchAttr('????????????', 'p_pen', 'percentage')
      let total = (withEq + withoutEq) * (1 + multiply)
      this.stats.p_pen.withEq = total
      return total
    },
    final_p_pen() {
      let withoutEq = Number(this.stats.final_p_pen.withoutEq) / 100
      // let withEq = this.searchAttr('??????????????????', 'final_p_pen', 'number')
      let multiply = this.searchAttr('??????????????????', 'final_p_pen', 'percentage')
      let p_pen = Number(this.common(this.stats.p_pen.withEq, 25, 5).toFixed(2)) / 100
      let total = withoutEq + p_pen + multiply
      this.stats.final_p_pen.withEq = total
      return (total * 100) + "%"
    },
    p_dmg_bonus() {
      let withoutEq = Number(this.stats.p_dmg_bonus.withoutEq)
      let withEq = this.searchAttr('????????????', 'p_dmg_bonus', 'number')
      let multiply = this.searchAttr('????????????', 'p_dmg_bonus', 'percentage')
      let total = (withEq + withoutEq) * (1 + multiply)
      this.stats.p_dmg_bonus.withEq = total
      return total
    },
    final_p_dmg_bonus() {
      let withoutEq = Number(this.stats.final_p_dmg_bonus.withoutEq) / 100
      // let withEq = this.searchAttr('??????????????????', 'final_p_dmg_bonus', 'number')
      let multiply = this.searchAttr('??????????????????', 'final_p_dmg_bonus', 'percentage')
      let total = (withoutEq + multiply).toString()
      total = total.slice(0, (total.indexOf("."))+5)
      total = Number(total)

      this.stats.final_p_dmg_bonus.withEq = total
      return (total * 100) + "%"
    },
    final_haste() {
      let withoutEq = Number(this.stats.final_haste.withoutEq) / 100
      // let withEq = this.searchAttr('????????????', 'final_haste', 'number')
      let multiply = this.searchAttr('????????????', 'final_haste', 'percentage')
      let total = withoutEq + multiply
      this.stats.final_haste.withEq = total
      return (total * 100) + "%"
    },
  },
})
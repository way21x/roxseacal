export default {
  template: `
  <b-tabs pills card>
    
  <b-tab title="Weapons" active>
      <!-- left hand weapon -->
      <b-row>
          <b-col cols="4">

              <v-select v-model="equipmentResults.equipment_1" :disabled="job.name == null" @input="change()"
                  :options="filteredWeapons(job.name)" :get-option-label="getLabel" :reduce="getValue"
                  :placeholder="$t('weapon')">
              </v-select>

              <v-select v-model="upgradeResults.upgrade_1" :disabled="equipmentResults.equipment_1 == null" @input="change()"
                  :options="filteredUpgrade('equipment_1')" :get-option-label="getUpgradeLabel"
                  :reduce="getUpgradeValue" placeholder="-- Upgrade --">
              </v-select>

              <v-select v-model="refineResults.refine_1" :disabled="equipmentResults.equipment_1 == null" @input="change()"
                  :options="filteredRefine('equipment_1')" :get-option-label="getRefineLabel" :reduce="getRefineValue"
                  placeholder="-- Refine --">
              </v-select>

          </b-col>

          <b-col cols="3" style="padding-right: 0%;">

              <div v-for="(item, index) in ['enchant_1','enchant_2','enchant_3']">
                  <v-select v-model="enchantResults[item][0]" :disabled="equipmentResults.equipment_1 == null" @input="change()"
                      :options="filteredEnchant('equipment_1')" :get-option-label="getEnchantLabel"
                      :reduce="getEnchantValue" :placeholder="'-- Enchant ' + ('I').repeat(index+1) + '--'">
                  </v-select>
              </div>

          </b-col>

          <b-col cols="2" style="padding-left: 0%;">

              <div v-for="(item, index) in ['enchant_1','enchant_2','enchant_3']">
                  <b-form-select v-model="enchantResults[item][1]" :disabled="enchantResults[item][0] == null" @input="change()"
                      :options="filteredEnchantLevel(item)" value-field="attrValue" text-field="level">
                      <template #first>
                          <b-form-select-option :value="null">-- Enchant Level --</b-form-select-option>
                      </template>
                  </b-form-select>
              </div>

          </b-col>

          <b-col cols="3" style="padding-right: 0%;">

              <div v-for="(item, index) in ['card_1','card_2','card_3']">
                  <v-select v-model="cardResults[item]" :disabled="equipmentResults.equipment_1 == null" @input="change()"
                      :options="filteredCards('武器卡片')" :get-option-label="getCardLabel" :reduce="getCardValue"
                      :placeholder="'-- card ' + ('I').repeat(index+1) + '--'">
                  </v-select>
              </div>

          </b-col>
      </b-row>

      <hr class="my-4" v-show="job.name != '弓箭手'">

      <!-- right hand weapon -->
      <b-row v-show="job.name != '弓箭手'">
          <b-col cols="4">
              <b-form-select v-model="equipmentResults.equipment_2" :disabled="equipmentResults.equipment_1 == null" @input="change()"
                  :options="filteredWeapons(job.name, 'offHand')" value-field=baseProperty
                  text-field="baseProperty.name">
                  <template #first>
                      <b-form-select-option :value="null">-- Weapon --</b-form-select-option>
                  </template>
              </b-form-select>

              <b-form-select v-model="upgradeResults.upgrade_2" :disabled="equipmentResults.equipment_2 == null" @input="change()"
                  :options="filteredUpgrade('equipment_2')" value-field="upgradeValue" text-field="level">
                  <template #first>
                      <b-form-select-option :value="null">-- Upgrade --</b-form-select-option>
                  </template>
              </b-form-select>

              <b-form-select v-model="refineResults.refine_2" :disabled="equipmentResults.equipment_2 == null" @input="change()"
                  :options="filteredRefine('equipment_2')" value-field="refineValue" text-field="refine_lv">
                  <template #first>
                      <b-form-select-option :value="null">-- Refine --</b-form-select-option>
                  </template>
              </b-form-select>
          </b-col>

          <b-col cols="3" style="padding-right: 0%;">

              <div v-for="(item, index) in ['enchant_4','enchant_5','enchant_6']">
                  <v-select v-model="enchantResults[item][0]" :disabled="equipmentResults.equipment_2 == null" @input="change()"
                      :options="filteredEnchant('equipment_2')" :get-option-label="getEnchantLabel"
                      :reduce="getEnchantValue" :placeholder="'-- Enchant ' + ('I').repeat(index+1) + '--'">
                  </v-select>
              </div>

          </b-col>

          <b-col cols="2" style="padding-left: 0%;">

              <div v-for="(item, index) in ['enchant_4','enchant_5','enchant_6']">
                  <b-form-select v-model="enchantResults[item][1]" :disabled="enchantResults[item][0] == null" @input="change()"
                      :options="filteredEnchantLevel(item)" value-field="attrValue" text-field="level">
                      <template #first>
                          <b-form-select-option :value="null">-- Enchant Level --</b-form-select-option>
                      </template>
                  </b-form-select>
              </div>

          </b-col>
          <b-col cols="3" style="padding-right: 0%;">

              <div v-for="(item, index) in ['card_4','card_5','card_6']">
                  <v-select v-model="cardResults[item]" :disabled="equipmentResults.equipment_2 == null" @input="change()"
                      :options="filteredCards('武器卡片')" :get-option-label="getCardLabel" :reduce="getCardValue"
                      :placeholder="'-- card ' + ('I').repeat(index+1) + '--'">
                  </v-select>
              </div>

          </b-col>
      </b-row>


  </b-tab>

  <b-tab title="Accessories">
      <!-- talisman -->
      <b-row>
          <b-col cols="4">

              <v-select v-model="equipmentResults.equipment_3" :disabled="job.name == null" @input="change()"
                  :options="filteredTalisman()" :get-option-label="getLabel" :reduce="getValue"
                  placeholder="-- Talisman --">
              </v-select>

              <v-select v-model="upgradeResults.upgrade_3" :disabled="equipmentResults.equipment_3 == null" @input="change()"
                  :options="filteredUpgrade('equipment_3')" :get-option-label="getUpgradeLabel"
                  :reduce="getUpgradeValue" placeholder="-- Upgrade --">
              </v-select>

              <v-select v-model="refineResults.refine_3" :disabled="equipmentResults.equipment_3 == null" @input="change()"
                  :options="filteredRefine('equipment_3')" :get-option-label="getRefineLabel" :reduce="getRefineValue"
                  placeholder="-- Refine --">
              </v-select>

          </b-col>

          <b-col cols="3" style="padding-right: 0%;">

              <div v-for="(item, index) in ['enchant_7','enchant_8','enchant_9']">
                  <v-select v-model="enchantResults[item][0]" :disabled="equipmentResults.equipment_3 == null" @input="change()"
                      :options="filteredEnchant('equipment_3')" :get-option-label="getEnchantLabel"
                      :reduce="getEnchantValue" :placeholder="'-- Enchant ' + ('I').repeat(index+1) + '--'">
                  </v-select>
              </div>

          </b-col>

          <b-col cols="2" style="padding-left: 0%;">

              <div v-for="(item, index) in ['enchant_7','enchant_8','enchant_9']">
                  <b-form-select v-model="enchantResults[item][1]" :disabled="enchantResults[item][0] == null" @input="change()"
                      :options="filteredEnchantLevel(item)" value-field="attrValue" text-field="level">
                      <template #first>
                          <b-form-select-option :value="null">-- Enchant Level --</b-form-select-option>
                      </template>
                  </b-form-select>
              </div>

          </b-col>

          <b-col cols="3" style="padding-right: 0%;">

              <v-select v-model="cardResults.card_7" :disabled="equipmentResults.equipment_3 == null" @input="change()"
                  :options="filteredCards('饰品卡片')" :get-option-label="getCardLabel" :reduce="getCardValue"
                  placeholder="-- Card I --">
              </v-select>

              <v-select v-model="cardResults.card_8" disabled placeholder="-- Card II --">
              </v-select>

              <v-select v-model="cardResults.card_9" disabled placeholder="-- Card III --">
              </v-select>

          </b-col>

      </b-row>

      <hr class="my-4">

      <!-- accessory left -->
      <b-row>
          <b-col cols="4">

              <v-select v-model="equipmentResults.equipment_4" :disabled="job.name == null" @input="change()"
                  :options="filteredAccessory()" :get-option-label="getLabel" :reduce="getValue"
                  placeholder="-- Accessory --">
              </v-select>

              <v-select v-model="upgradeResults.upgrade_4" :disabled="equipmentResults.equipment_4 == null" @input="change()"
                  :options="filteredUpgrade('equipment_4')" :get-option-label="getUpgradeLabel"
                  :reduce="getUpgradeValue" placeholder="-- Upgrade --">
              </v-select>

              <v-select v-model="refineResults.refine_4" :disabled="equipmentResults.equipment_4 == null" @input="change()"
                  :options="filteredRefine('equipment_4')" :get-option-label="getRefineLabel" :reduce="getRefineValue"
                  placeholder="-- Refine --">
              </v-select>

          </b-col>

          <b-col cols="3" style="padding-right: 0%;">

              <div v-for="(item, index) in ['enchant_10','enchant_11','enchant_12']">
                  <v-select v-model="enchantResults[item][0]" :disabled="equipmentResults.equipment_4 == null" @input="change()"
                      :options="filteredEnchant('equipment_4')" :get-option-label="getEnchantLabel"
                      :reduce="getEnchantValue" :placeholder="'-- Enchant ' + ('I').repeat(index+1) + '--'">
                  </v-select>
              </div>

          </b-col>
          <b-col cols="2" style="padding-left: 0%;">

              <div v-for="(item, index) in ['enchant_10','enchant_11','enchant_12']">
                  <b-form-select v-model="enchantResults[item][1]" :disabled="enchantResults[item][0] == null" @input="change()"
                      :options="filteredEnchantLevel(item)" value-field="attrValue" text-field="level">
                      <template #first>
                          <b-form-select-option :value="null">-- Enchant Level --</b-form-select-option>
                      </template>
                  </b-form-select>
              </div>

          </b-col>

          <b-col cols="3" style="padding-right: 0%;">

              <v-select v-model="cardResults.card_10" :disabled="equipmentResults.equipment_4 == null" @input="change()"
                  :options="filteredCards('饰品卡片')" :get-option-label="getCardLabel" :reduce="getCardValue"
                  placeholder="-- Card I --">
              </v-select>

              <v-select v-model="cardResults.card_8" disabled placeholder="-- Card II --">
              </v-select>

              <v-select v-model="cardResults.card_9" disabled placeholder="-- Card III --">
              </v-select>

          </b-col>

      </b-row>

      <hr class="my-4">

      <!-- accessory right -->
      <b-row>
          <b-col cols="4">

              <v-select v-model="equipmentResults.equipment_5" :disabled="job.name == null" @input="change()"
                  :options="filteredAccessory()" :get-option-label="getLabel" :reduce="getValue"
                  placeholder="-- Accessory --">
              </v-select>

              <v-select v-model="upgradeResults.upgrade_5" :disabled="equipmentResults.equipment_5 == null" @input="change()"
                  :options="filteredUpgrade('equipment_5')" :get-option-label="getUpgradeLabel"
                  :reduce="getUpgradeValue" placeholder="-- Upgrade --">
              </v-select>

              <v-select v-model="refineResults.refine_5" :disabled="equipmentResults.equipment_5 == null" @input="change()"
                  :options="filteredRefine('equipment_5')" :get-option-label="getRefineLabel" :reduce="getRefineValue"
                  placeholder="-- Refine --">
              </v-select>

          </b-col>

          <b-col cols="3" style="padding-right: 0%;">

              <div v-for="(item, index) in ['enchant_13','enchant_14','enchant_15']">
                  <v-select v-model="enchantResults[item][0]" :disabled="equipmentResults.equipment_5 == null" @input="change()"
                      :options="filteredEnchant('equipment_5')" :get-option-label="getEnchantLabel"
                      :reduce="getEnchantValue" :placeholder="'-- Enchant ' + ('I').repeat(index+1) + '--'">
                  </v-select>
              </div>

          </b-col>

          <b-col cols="2" style="padding-left: 0%;">

              <div v-for="(item, index) in ['enchant_13','enchant_14','enchant_15']">
                  <b-form-select v-model="enchantResults[item][1]" :disabled="enchantResults[item][0] == null" @input="change()"
                      :options="filteredEnchantLevel(item)" value-field="attrValue" text-field="level">
                      <template #first>
                          <b-form-select-option :value="null">-- Enchant Level --</b-form-select-option>
                      </template>
                  </b-form-select>
              </div>

          </b-col>

          <b-col cols="3" style="padding-right: 0%;">

              <v-select v-model="cardResults.card_13" :disabled="equipmentResults.equipment_5 == null" @input="change()"
                  :options="filteredCards('饰品卡片')" :get-option-label="getCardLabel" :reduce="getCardValue"
                  placeholder="-- Card I --">
              </v-select>

              <v-select v-model="cardResults.card_8" disabled placeholder="-- Card II --">
              </v-select>

              <v-select v-model="cardResults.card_9" disabled placeholder="-- Card III --">
              </v-select>

          </b-col>

      </b-row>

  </b-tab>

  <b-tab title="Armor">
      <!-- Armor -->
      <b-row>
          <b-col cols="4">

              <v-select v-model="equipmentResults.equipment_6" :disabled="job.name == null" @input="change()"
                  :options="filteredArmor(job.name, '盔甲')" :get-option-label="getLabel" :reduce="getValue"
                  placeholder="-- Armor --">
              </v-select>

              <v-select v-model="upgradeResults.upgrade_6" :disabled="equipmentResults.equipment_6 == null" @input="change()"
                  :options="filteredUpgrade('equipment_6')" :get-option-label="getUpgradeLabel"
                  :reduce="getUpgradeValue" placeholder="-- Upgrade --">
              </v-select>

              <v-select v-model="refineResults.refine_6" :disabled="equipmentResults.equipment_6 == null" @input="change()"
                  :options="filteredRefine('equipment_6')" :get-option-label="getRefineLabel" :reduce="getRefineValue"
                  placeholder="-- Refine --">
              </v-select>

          </b-col>

          <b-col cols="3" style="padding-right: 0%;">

              <div v-for="(item, index) in ['enchant_16','enchant_17','enchant_18']">
                  <v-select v-model="enchantResults[item][0]" :disabled="equipmentResults.equipment_6 == null" @input="change()"
                      :options="filteredEnchant('equipment_6')" :get-option-label="getEnchantLabel"
                      :reduce="getEnchantValue" :placeholder="'-- Enchant ' + ('I').repeat(index+1) + '--'">
                  </v-select>
              </div>

          </b-col>

          <b-col cols="2" style="padding-left: 0%;">

              <div v-for="(item, index) in ['enchant_16','enchant_17','enchant_18']">
                  <b-form-select v-model="enchantResults[item][1]" :disabled="enchantResults[item][0] == null" @input="change()"
                      :options="filteredEnchantLevel(item)" value-field="attrValue" text-field="level">
                      <template #first>
                          <b-form-select-option :value="null">-- Enchant Level --</b-form-select-option>
                      </template>
                  </b-form-select>
              </div>

          </b-col>

          <b-col cols="3" style="padding-right: 0%;">

              <v-select v-model="cardResults.card_16" :disabled="equipmentResults.equipment_6 == null" @input="change()"
                  :options="filteredCards('盔甲卡片')" :get-option-label="getCardLabel" :reduce="getCardValue"
                  placeholder="-- Card I --">
              </v-select>

              <v-select disabled placeholder="-- Card II --"></v-select>

              <v-select disabled placeholder="-- Card III --"></v-select>

          </b-col>

      </b-row>

      <hr class="my-4">

      <!-- cloak -->
      <b-row>
          <b-col cols="4">

              <v-select v-model="equipmentResults.equipment_7" :disabled="job.name == null" @input="change()"
                  :options="filteredArmor(job.name, '披风')" :get-option-label="getLabel" :reduce="getValue"
                  placeholder="-- Cloak --">
              </v-select>

              <v-select v-model="upgradeResults.upgrade_7" :disabled="equipmentResults.equipment_7 == null" @input="change()"
                  :options="filteredUpgrade('equipment_7')" :get-option-label="getUpgradeLabel"
                  :reduce="getUpgradeValue" placeholder="-- Upgrade --">
              </v-select>

              <v-select v-model="refineResults.refine_7" :disabled="equipmentResults.equipment_7 == null" @input="change()"
                  :options="filteredRefine('equipment_7')" :get-option-label="getRefineLabel" :reduce="getRefineValue"
                  placeholder="-- Refine --">
              </v-select>

          </b-col>

          <b-col cols="3" style="padding-right: 0%;">

              <div v-for="(item, index) in ['enchant_19','enchant_20','enchant_21']">
                  <v-select v-model="enchantResults[item][0]" :disabled="equipmentResults.equipment_7 == null" @input="change()"
                      :options="filteredEnchant('equipment_7')" :get-option-label="getEnchantLabel"
                      :reduce="getEnchantValue" :placeholder="'-- Enchant ' + ('I').repeat(index+1) + '--'">
                  </v-select>
              </div>

          </b-col>

          <b-col cols="2" style="padding-left: 0%;">

              <div v-for="(item, index) in ['enchant_19','enchant_20','enchant_21']">
                  <b-form-select v-model="enchantResults[item][1]" :disabled="enchantResults[item][0] == null" @input="change()"
                      :options="filteredEnchantLevel(item)" value-field="attrValue" text-field="level">
                      <template #first>
                          <b-form-select-option :value="null">-- Enchant Level --</b-form-select-option>
                      </template>
                  </b-form-select>
              </div>

          </b-col>
          <b-col cols="3" style="padding-right: 0%;">

              <v-select v-model="cardResults.card_19" :disabled="equipmentResults.equipment_7 == null" @input="change()"
                  :options="filteredCards('披风卡片')" :get-option-label="getCardLabel" :reduce="getCardValue"
                  placeholder="-- Card I --">
              </v-select>

              <v-select disabled placeholder="-- Card II --"></v-select>

              <v-select disabled placeholder="-- Card III --"></v-select>

          </b-col>

      </b-row>

      <hr class="my-4">

      <!-- shoes -->
      <b-row>
          <b-col cols="4">

              <v-select v-model="equipmentResults.equipment_8" :disabled="job.name == null" @input="change()"
                  :options="filteredArmor(job.name, '鞋子')" :get-option-label="getLabel" :reduce="getValue"
                  placeholder="-- Shoes --">
              </v-select>

              <v-select v-model="upgradeResults.upgrade_8" :disabled="equipmentResults.equipment_8 == null" @input="change()"
                  :options="filteredUpgrade('equipment_8')" :get-option-label="getUpgradeLabel"
                  :reduce="getUpgradeValue" placeholder="-- Upgrade --">
              </v-select>

              <v-select v-model="refineResults.refine_8" :disabled="equipmentResults.equipment_8 == null" @input="change()"
                  :options="filteredRefine('equipment_8')" :get-option-label="getRefineLabel" :reduce="getRefineValue"
                  placeholder="-- Refine --">
              </v-select>

          </b-col>

          <b-col cols="3" style="padding-right: 0%;">

              <div v-for="(item, index) in ['enchant_22','enchant_23','enchant_24']">
                  <v-select v-model="enchantResults[item][0]" :disabled="equipmentResults.equipment_8 == null" @input="change()"
                      :options="filteredEnchant('equipment_8')" :get-option-label="getEnchantLabel"
                      :reduce="getEnchantValue" :placeholder="'-- Enchant ' + ('I').repeat(index+1) + '--'">
                  </v-select>
              </div>

          </b-col>

          <b-col cols="2" style="padding-left: 0%;">

              <div v-for="(item, index) in ['enchant_22','enchant_23','enchant_24']">
                  <b-form-select v-model="enchantResults[item][1]" :disabled="enchantResults[item][0] == null" @input="change()"
                      :options="filteredEnchantLevel(item)" value-field="attrValue" text-field="level">
                      <template #first>
                          <b-form-select-option :value="null">-- Enchant Level --</b-form-select-option>
                      </template>
                  </b-form-select>
              </div>

          </b-col>

          <b-col cols="3" style="padding-right: 0%;">

              <v-select v-model="cardResults.card_22" :disabled="equipmentResults.equipment_8 == null" @input="change()"
                  :options="filteredCards('鞋子卡片')" :get-option-label="getCardLabel" :reduce="getCardValue"
                  placeholder="-- Card I --">
              </v-select>

              <v-select disabled placeholder="-- Card II --"></v-select>

              <v-select disabled placeholder="-- Card III --"></v-select>

          </b-col>

      </b-row>

  </b-tab>

  <b-tab title="Costume">
      <!-- Head -->
      <b-row>
          <b-col cols="3" style="padding-right: 0%;">
              <b-form-select v-model="equipmentResults.equipment_9" :disabled="job.name == null" @input="change()"
                  :options="filteredCostume('头部')" value-field="baseProperty" text-field="baseProperty.name">
                  <template #first>
                      <b-form-select-option :value="null">-- Head --</b-form-select-option>
                  </template>
              </b-form-select>
          </b-col>

          <b-col cols="3" style="padding-right: 0%;">

              <v-select v-model="cardResults.card_25" :disabled="equipmentResults.equipment_9 == null" @input="change()"
                  :options="filteredCards('头饰卡片')" :get-option-label="getCardLabel" :reduce="getCardValue"
                  placeholder="-- Card I --">
              </v-select>

          </b-col>

          <b-col cols="3" style="padding-right: 0%;">
              <b-form-select disabled>
              </b-form-select>
          </b-col>

          <b-col cols="3" style="padding-right: 0%;">
              <b-form-select disabled>
              </b-form-select>
          </b-col>
      </b-row>

      <hr class="my-4">

      <!-- eyes -->
      <b-row>
          <b-col cols="3" style="padding-right: 0%;">
              <b-form-select v-model="equipmentResults.equipment_10" :disabled="job.name == null" @input="change()"
                  :options="filteredCostume('眼睛')" value-field="baseProperty" text-field="baseProperty.name">
                  <template #first>
                      <b-form-select-option :value="null">-- Eyes --</b-form-select-option>
                  </template>
              </b-form-select>
          </b-col>

          <b-col cols="3" style="padding-right: 0%;">

              <v-select v-model="cardResults.card_26" :disabled="equipmentResults.equipment_10 == null" @input="change()"
                  :options="filteredCards('头饰卡片')" :get-option-label="getCardLabel" :reduce="getCardValue"
                  placeholder="-- Card I --">
              </v-select>

          </b-col>

          <b-col cols="3" style="padding-right: 0%;">
              <b-form-select disabled>
              </b-form-select>
          </b-col>

          <b-col cols="3" style="padding-right: 0%;">
              <b-form-select disabled>
              </b-form-select>
          </b-col>
      </b-row>

      <hr class="my-4">

      <!-- mouth -->
      <b-row>
          <b-col cols="3" style="padding-right: 0%;">
              <b-form-select v-model="equipmentResults.equipment_11" :disabled="job.name == null" @input="change()"
                  :options="filteredCostume('嘴巴')" value-field="baseProperty" text-field="baseProperty.name">
                  <template #first>
                      <b-form-select-option :value="null">-- Mouth --</b-form-select-option>
                  </template>
              </b-form-select>
          </b-col>

          <b-col cols="3" style="padding-right: 0%;">

              <v-select v-model="cardResults.card_27" :disabled="equipmentResults.equipment_11 == null" @input="change()"
                  :options="filteredCards('头饰卡片')" :get-option-label="getCardLabel" :reduce="getCardValue"
                  placeholder="-- Card I --">
              </v-select>

          </b-col>

          <b-col cols="3" style="padding-right: 0%;">
              <b-form-select disabled>
              </b-form-select>
          </b-col>

          <b-col cols="3" style="padding-right: 0%;">
              <b-form-select disabled>
              </b-form-select>
          </b-col>
      </b-row>

  </b-tab>

</b-tabs>

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
      weapons: [],
      upgrade: [],
      refine: [],
      cards: [],
      enchants: [],
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
      // var weapons = this.weapons.filter(v => v.jobLimit != null 
      //   && v.slotList != null 
      //   && v.name != null 
      //   && v.slotList.indexOf('武器') > -1 
      //   && v.jobLimit.indexOf(job) > -1
      //   )

      var weapons = this.weapons.filter(v => v.jobLimit != null &&
        v.equipmentType &&
        v.baseProperty &&
        v.baseProperty.en_name &&
        Object.keys(v.equipmentType).indexOf('武器') > -1 &&
        v.jobLimit.indexOf(job) > -1
      )

      if (job != '弓箭手') {
        if (type == 'offHand') {
          weapons = this.weapons.filter(v => v.equipmentType &&
            v.baseProperty != null &&
            v.baseProperty.en_name != null &&
            Object.values(v.equipmentType).indexOf('盾牌') > -1
          )
        }
      }

      weapons.sort(function (a, b) {
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
    filteredArmor(job, parts) {

      var weapons = this.weapons.filter(v => v.jobLimit != null &&
        v.slotList != null &&
        v.baseProperty &&
        v.baseProperty.en_name &&
        v.slotList.indexOf(parts) > -1 &&
        v.jobLimit.indexOf(job) > -1
      )

      // var weapons = this.weapons.filter(v => v.jobLimit != null 
      //   && v.slotList != null 
      //   && v.name != null 
      //   && v.slotList.indexOf(parts) > -1 
      //   && v.jobLimit.indexOf(job) > -1
      //   )

      weapons.sort(function (a, b) {
        var nameA = a.baseProperty.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.baseProperty.name.toUpperCase(); // ignore upper and lowercase
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
      var weapons = this.weapons.filter(v =>
        v.baseProperty != null &&
        v.baseProperty.en_name != null &&
        v.baseProperty.parts != null &&
        v.baseProperty.parts == parts
      )

      // 头部 眼睛 嘴巴
      // var weapons = this.weapons.filter(v => v.jobLimit != null 
      //   && v.equipmentType
      //   && v.name != null 
      //   && Object.keys(v.equipmentType).indexOf('武器') > -1
      //   && v.jobLimit.indexOf(job) > -1
      //   )

      weapons.sort(function (a, b) {
        var nameA = a.baseProperty.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.baseProperty.name.toUpperCase(); // ignore upper and lowercase
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
          for (var i in res[key]) {
            if (i == "StrengthenID") {
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
          if (res[key] !== null) {
            for (var i in res[key]) {
              if (i == "RefineID" && this.refine) {
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
    filteredTalisman() {
      var weapons = this.weapons.filter(v =>
        v.slotList != null &&
        v.baseProperty &&
        v.baseProperty.en_name != null &&
        v.slotList.indexOf('护符') > -1
      )

      weapons.sort(function (a, b) {
        var nameA = a.baseProperty.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.baseProperty.name.toUpperCase(); // ignore upper and lowercase
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
      var weapons = this.weapons.filter(v =>
        v.slotList != null &&
        v.baseProperty &&
        v.baseProperty.en_name != null &&
        v.slotList.indexOf('饰品') > -1
      )

      weapons.sort(function (a, b) {
        var nameA = a.baseProperty.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.baseProperty.name.toUpperCase(); // ignore upper and lowercase
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
      return this.cards.filter(v => v.en_itemname != null && v.itemSubType != null && v.itemSubType.match(attr))
    },
    filteredEnchant(equipment_x) {
      var res = this.equipmentResults
      var parts
      for (var key in res) {
        if (key == equipment_x) {
          if (this.equipmentResults[key] !== null) {
            parts = this.equipmentResults[key].parts

            const k = this.enchants.filter(v => v.parts.match(parts))
            let tempArray = [];
            for (let item of k) {
              (tempItem => {
                if (!(tempItem.length > 0 && tempItem.find(x => x.text === item.text))) tempArray.push(item);
              })(tempArray.filter(x => x.text === item.text))
            }
            return tempArray;

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
          if (this.enchantResults[key][0] !== null) {
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
    change(e) {
      this.$emit("input", {
        cardResults: this.cardResults,
        equipmentResults: this.equipmentResults,
        enchantResults: this.enchantResults,
        upgradeResults: this.upgradeResults,
        refineResults: this.refineResults,

      });
    },
    getLabel(option) {
      if (typeof option === 'object' && option.baseProperty) {
        return this.$i18n.locale == 'en' ? option.baseProperty.en_name : option.baseProperty.name
      }
      return option
    },
    getValue(option) {
      if (typeof option === 'object') {
        return option.baseProperty
      }
      return option
    },
    getEnchantLabel(option) {
      if (option && typeof option === 'object') {
        return this.$i18n.locale == 'en' ? option.en_text : option.text
      }
      return option
    },
    getEnchantValue(option) {
      if (option && typeof option === 'object') {
        return option.data
      }
      return option
    },
    getEnchantLevelLabel(option) {
      if (option && typeof option === 'object') {
        return option.level
      }
      return option
    },
    getEnchantLevelValue(option) {
      if (option && typeof option === 'object') {
        return option.attrValue
      }
      return option
    },
    getCardLabel(option) {
      if (option && typeof option === 'object') {
        return this.$i18n.locale == 'en' ? option.en_itemname : option.itemname
      }
      return option
    },
    getCardValue(option) {
      if (option && typeof option === 'object') {
        return option.effect
      }
      return option
    },
    getUpgradeLabel(option) {
      if (option && typeof option === 'object') {
        return option.level
        // return this.lang == 'en'? option.baseProperty.en_name : option.baseProperty.name
      }
      return option
    },
    getUpgradeValue(option) {
      if (option && typeof option === 'object') {
        return option.upgradeValue
      }
      return option
    },
    getRefineLabel(option) {
      if (option && typeof option === 'object') {
        return option.refine_lv
        // return this.lang == 'en'? option.baseProperty.en_name : option.baseProperty.name
      }
      return option
    },
    getRefineValue(option) {
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
  }
}
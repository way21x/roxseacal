export default {
  template: `
  <select class="form-control" @change="change">
    <option value="">{{ title }}</option>
    <option v-for="option in options" :value="option.effectbase || option.effect">{{ option.itemname }}</option>
  </select>
  `,
  props: ['options', 'title'],
  data() {
    return {
      test: [],
    }
  },
  methods: {
    change(e) {
      this.$emit("input", e.target.value);
    }
  }
}
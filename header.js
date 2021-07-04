export default {
  template: `
  <select class="form-control" @change="change">
    <option value="">{{ title }}</option>
    <option v-for="option in options" :value="option.valueData">{{ option.y }}</option>
  </select>
  `,
  props: ['options', 'title', 'valueData', 'y'],
  data() {
    return {
      test: 'itemName',
    }
  },
  methods: {
    change(e) {
      this.$emit("input", e.target.value);
    }
  }
}
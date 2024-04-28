export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    createdAt() {
      return this.data.created_at.slice(0, 10)
    },
    dateShort() {
      return this.data.date.slice(0, 10)
    }
  }
}

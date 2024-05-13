import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['increment', 'decrement']),
    plus() {
      this.increment()
    },
    minus() {
      this.decrement()
    }
  },
  data: () => ({ value: 1 }),

  computed: {
    color() {
      switch (this.value) {
        case 0:
          return 'grey'
        case 1:
          return 'light-blue-darken-3'
        // case 2:
        //   return 'brown'
        // case 3:
        //   return 'indigo'
        // default:
        // return 'blue-grey'
      }
    }
  }
}

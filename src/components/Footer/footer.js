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

  // computed: {
  //   color() {
  //     switch (this.value) {
  //       case 0:
  //         return 'blue-grey'
  //       case 1:
  //         return 'teal'
  //       case 2:
  //         return 'brown'
  //       case 3:
  //         return 'indigo'
  //       default:
  //         return 'blue-grey'
  //     }
  //   }
  // }
}

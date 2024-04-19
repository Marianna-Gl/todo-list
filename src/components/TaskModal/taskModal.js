export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      title: '',
      description: '',
      dueDate: ''
    }
  },
  methods: {
    onClose() {
      this.$emit('close')
    },
    onSave() {
      const newTask = {
        title: this.title,
        description: this.description,
        date: this.dueDate
      }
      this.$emit('taskSave', newTask)
      this.onClose()
    },
    onTitleInput(event) {
      this.title = event.target.value
    }
  }
}

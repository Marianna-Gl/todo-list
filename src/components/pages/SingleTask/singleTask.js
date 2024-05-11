import { mapMutations } from 'vuex'
import TaskApi from '../../../utils/taskApi.js'
import TaskModal from '../../TaskModal/TaskModal.vue'

const taskApi = new TaskApi()

export default {
  components: {
    TaskModal
  },
  data() {
    return {
      task: null,
      isEditModalOpen: false
    }
  },
  created() {
    this.getTask()
  },
  computed: {
    createdAt() {
      return this.task.created_at.slice(0, 10)
    },
    dueDate() {
      return this.task.date?.slice(0, 10) || 'none'
    },
    checked() {
      return this.task.status === 'active' ? 'success' : 'primary'
    },
    active() {
      return this.task.status === 'active'
    }
  },

  methods: {
    toggleTaskModal() {
      this.isEditModalOpen = !this.isEditModalOpen
    },
    ...mapMutations(['toggleLoading']),

    getTask() {
      const taskId = this.$route.params.taskId
      taskApi
        .getSingleTask(taskId)
        .then((task) => {
          this.task = task
        })
        .catch(this.handleError)
    },
    onTaskSave(editingTask) {
      this.toggleLoading()
      this.task = editingTask
      taskApi
        .updateTask(editingTask)
        .then(() => {
          this.toggleTaskModal()
          this.$toast.success('The task have been updated successfully!')
        })
        .catch(this.handleError)
        .finally(() => {
          this.toggleLoading()
        })
    },

    onDelete() {
      const taskId = this.task._id
      taskApi
        .deleteTask(taskId)
        .then(() => {
          this.$router.push('/')
          this.$toast.success('The task have been deleted successfully!')
        })
        .catch(this.handleError)
    },
    onStatusChange(editingTask) {
      this.toggleLoading()
      this.task.status = editingTask.status === 'active' ? 'done' : 'active'
      taskApi
        .updateTask(editingTask)
        .then(() => {
          let message =
            this.task.status === 'done' ? 'The task have been done!' : 'The task have been active!'
          this.$toast.success(message)
        })
        .catch(this.handleError)
        .finally(() => {
          this.toggleLoading()
        })
    },
    handleError(error) {
      this.$toast.error(error.message)
    }
  }
}

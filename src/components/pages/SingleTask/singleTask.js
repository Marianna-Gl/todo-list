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
          this.$toast.success('The task has been updated successfully!')
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
          this.$toast.success('The task has been deleted successfully!')
        })
        .catch(this.handleError)
    },
    onStatusChange(editingTask) {
      const editedTask = {
        ...this.task,
        status: editingTask.status === 'active' ? 'done' : 'active'
      }

      taskApi
        .updateTask(editedTask)
        .then(() => {
          this.task.status = editedTask.status
          let message
          if (editedTask.status === 'done') {
            message = 'The task is marked as Done successfully!'
          } else {
            message = 'The task is restored successfully!'
          }
          this.$toast.success(message)
        })
        .catch((err) => {
          this.handleError(err)
        })
    },
    handleError(err) {
      this.$toast.error(err.message)
    }
  }
}

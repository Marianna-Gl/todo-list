<template>
  <div id="singleTask">
    <v-card v-if="task" class="mx-auto my-8" elevation="16" width="auto">
      <task-modal
        v-if="isEditModalOpen"
        :isOpen="isEditModalOpen"
        :editingTask="task"
        @close="toggleTaskModal"
        @taskSave="onTaskSave"
      />
      <v-card-item>
        <v-card-title class="text-wrap" id="taskText"> {{ task.title }} </v-card-title>
      </v-card-item>

      <v-card-text class="description">
        {{ task.description }}
      </v-card-text>

      <v-card-text class="taskText"> Status: {{ task.status }} </v-card-text>

      <v-card-text class="taskText"> Created at: {{ createdAt }} </v-card-text>

      <v-card-text class="taskText"> Due date: {{ dueDate }} </v-card-text>

      <v-card-actions>
        <v-btn class="button" color="success" variant="elevated" @click="onStatusChange(task)">
          <v-icon v-if="active" icon="mdi-check-outline" />
          <v-icon color="#B2DFDB" v-else icon="mdi-undo-variant" />
        </v-btn>

        <v-btn class="button" color="warning" variant="elevated" @click="toggleTaskModal">
          <v-icon icon="mdi-archive-edit-outline" />
        </v-btn>
        <v-btn class="button" color="error" variant="elevated" @click="onDelete">
          <v-icon icon="mdi-delete-outline" />
        </v-btn>
      </v-card-actions>
    </v-card>
    <h4 v-else>Task not found!</h4>
  </div>
</template>

<script src="./singleTask.js"></script>

<style scoped>
#singleTask {
  margin-top: 200px;
  width: 20%;
  margin-left: 650px;
}

.description {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: x-large;
}
.taskText {
  font-size: x-large;
}
.showText {
  font-size: larger;
}
.button {
  font-size: x-large;
}
.singleTaskButtons {
  margin-top: 30px;
}
#taskText {
  margin-bottom: 20px;
  font-size: x-large;
}
</style>

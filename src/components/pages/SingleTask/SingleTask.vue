<template>
  <div class="container">
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

        <v-card-actions class="allButtons">
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
      <h4 v-else>
        <div class="backButton">
          <v-btn class="homeBtn"><RouterLink to="/">GO BACK HOME</RouterLink></v-btn>
        </div>
        <div><img src="/src/assets/images/404-error-page-examples-best.webp" alt="" /></div>
      </h4>
    </div>
  </div>
</template>

<script src="./singleTask.js"></script>

<style scoped>
#singleTask {
  position: absolute; /* Fix the card position */
  top: 50%; /* Place it in the middle vertically */
  left: 50%; /* Place it in the middle horizontally */
  transform: translate(-50%, -50%); /* Center the card */
  width: 300px; /* Set a fixed width */
  padding: 20px;

  border-radius: 8px;
}

.description {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: larger;
}
.taskText {
  font-size: larger;
}
.showText {
  font-size: large;
}
.button {
  font-size: larger;
}
.singleTaskButtons {
  margin-top: 30px;
}
#taskText {
  margin-bottom: 20px;
  font-size: x-large;
}
.homeBtn {
  font-size: xx-large;
  background-color: rgb(5, 5, 7);
  color: rgb(255, 240, 249);
}
.container {
  position: relative; /* Container for positioning */
  width: 100%; /* Full width */
  height: 100vh; /* Full viewport height */
}
.allButtons {
  margin-top: 20px;
}
</style>

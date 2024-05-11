<template>
  <v-card class="mx-auto my-8" elevation="16" width="auto">
    <v-card-item>
      <v-checkbox @update:modelValue="onSelect" :modelValue="isSelected"></v-checkbox>
      <v-card-title class="taskText"> {{ data.title }} </v-card-title>
    </v-card-item>

    <v-card-text class="description">
      {{ data.description }}
    </v-card-text>

    <v-card-text class="taskText"> Status:{{ data.status }} </v-card-text>

    <v-card-text class="taskText"> Created at: {{ createdAt }} </v-card-text>

    <v-card-text class="taskText"> Due date: {{ dueDate }} </v-card-text>

    <v-card-text>
      <RouterLink class="showText" :to="`/task/${data._id}`">Show more...</RouterLink>
    </v-card-text>

    <v-card-actions>
      <v-btn
        class="button"
        v-if="data.status === 'active'"
        color="success"
        variant="elevated"
        @click="onStatusChange('done')"
      >
        <v-icon icon="mdi-check-outline" />
      </v-btn>
      <v-btn
        class="button"
        v-else
        color="#B2DFDB"
        variant="elevated"
        @click="onStatusChange('active')"
      >
        <v-icon icon="mdi-undo-variant" />
      </v-btn>
      <v-btn class="button" color="warning" variant="elevated" @click="onEdit">
        <v-icon icon="mdi-archive-edit-outline" />
      </v-btn>
      <v-btn class="button" color="error" variant="elevated" @click="onDelete">
        <v-icon icon="mdi-delete-outline" />
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script src="./task.js"></script>
<style scoped>
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
</style>

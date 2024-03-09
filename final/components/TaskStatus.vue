TaskStatus.vue---------------
<template>
    <div :class="'status ' + status.color">
      <h2>{{ status.title }} ({{ status.tasks.length }})</h2>
      <div class="tasks">
        <task-card v-for="task in status.tasks" :key="task.id" :task="task" />
      </div>
      <button @click="addTask">New</button>
    </div>
  </template>
  
  <script>
  import TaskCard from '~/components/TaskCard.vue';
  
  export default {
    components: {
      TaskCard
    },
    props: ['status'],
    methods: {
      addTask() {
        const newTask = { id: Date.now(), title: 'New Task', description: '', status: this.status.title };
        this.status.tasks.push(newTask);
      }
    }
  };
  </script>
  
  <style scoped>
  .status {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
  }
  
  .tasks {
    margin-top: 10px;
  }
  
  .to-do {
    color: #f44e4e; /* Red */
  }
  
  .in-progress {
   color: #e8c239; /* Yellow */
  }
  button{
    margin-top: .5rem;
    font-size: 1.30rem;
    background-color:#04AA6D;
    font-family: 'Source Sans Pro', sans-serif;
    border: none;
    border-radius: 5px;
    display: inline-block;
    padding: 6px 18px;
    vertical-align: middle;
    overflow: hidden;
    text-decoration: none;
    color: white;
    text-align: center;
    cursor: pointer;
  }
  
  .done {
    color: #589f58; /* Green */
  }
  </style>
  
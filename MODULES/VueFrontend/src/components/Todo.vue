<script setup>

import {ref} from 'vue'
let todos = ref([])
let inputValue = ref('')

function addTodo(){



  const todo = {
    id: todos.value.length + 1,
    title: inputValue.value
  }

  todos.value.push(todo)

  inputValue.value=''
}
//jsdocs
/**
 * @param {object} todo
 */
const deleteTodo = todo => {
  todos.value = todos.value.filter(t => t !== todo)
};


</script>

<template>
  <section>
    <h1 class="text-3xl">Todos</h1>
    <form @submit.prevent="addTodo" class="my-3">
      <input required v-model="inputValue" class="px-2 py-3 border rounded-md shadow-md" type="text" placeholder="Write your todos here!">
      <input type="submit"  class="mx-2 px-2 py-3 border rounded-md shadow-md transition active:shadow-sm"/>
    </form>
    <TransitionGroup  name="list" >
    <div v-for="todo in todos" class="flex my-3 border p-5 rounded-md shadow-sm min-w-full max-w-xl items-center" :key="todo">
      <h1>{{ todo.title }}</h1>
      <button @click="deleteTodo(todo)" class="ml-auto px-2 py-3 rounded-md border transition-colors hover:bg-red-500 hover:shadow-md active:shadow-sm">Delete</button>
    </div>
    </TransitionGroup>

  </section>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
<script setup>
import {ref} from 'vue'
let count = ref(0)
let inputValue= ref('')
let todos = ref([])
let pictures = ["https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png","data:image/png;base64,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","https://upload.wikimedia.org/wikipedia/commons/d/d2/C_Sharp_Logo_2023.svg"]
function increment() {
  count.value++
  console.log(count)
}
function addTodo(){
  const todo = {
    id: todos.value.length + 1,
    title: inputValue.value
  }
  todos.value.push(todo)

  inputValue.value=''
}
function deleteTodo(todo){
  todos.value = todos.value.filter(t => t !== todo)
}
</script>

<template>
    <div class="max-w-3xl ">
      <h1 class="text-3xl">About Me</h1>
      <div  class="my-6">
        <div class="w-full ">
          <img  src="https://plashspeed-aiman.github.io/static/media/hero.8f57c18b4f89b54fb462.jpg" alt="Aiman Rahim" class="mx-auto rounded-full w-48 h-48 object-cover object-center">
        </div>
        <p>I just recently graduated from IIUM with a Bachelor of Engineering</p>
        <p>I spend most of my time making server applications</p>
        <p>My skills are mostly on the backend using languages like C#, Python, and Go</p>
        <div class="flex  gap-2 my-5">
          <div class=" border rounded-xl p-2 gap-2" v-for="pic in pictures">
            <img :src="pic" alt="C#" class="w-48 h-48 object-cover object-center">
          </div>
        </div>

      </div>
    </div>
</template>

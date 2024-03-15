<template>
  <div class="flex flex-row h-full w-full max-w-full max-h-full">

    <Sidebar />

    <div class="flex flex-row items-top justify-between h-full w-full py-4 px-8">

      <div class="flex flex-col items-left w-1/2 gap-6 p-16">
        <h1>
          Henry Ford Health
        </h1>
        <p class="font-title">
          Contact Beeline if you need to make changes to your healthcare system.
        </p>
      </div>

      <div class="grow flex flex-col w-1/2 h-full p-6 bg-white rounded-2xl">

        <div class="flex flex-row justify-between items-end">
          <div class="flex flex-col items-left justify-end ml-6">
            <p class="font-label text-gray">
              Manage
            </p>
            <h3 class="font-title-bold">
              Your Beeline Account
            </h3>
          </div>
        </div>

      </div>

    </div>
  </div>

</template>

<script>

import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
  }
}

</script>

<template>
  <div id="app">
    <transition name="animate" enter-active-class="animated slideInRight" leave-active-class="animated slideOutLeft">
    <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
@import './assets/styles/_reset';
</style>

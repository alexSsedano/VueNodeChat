<template>
  <div id="app">
    <navB></navB>
    <keep-alive>
            <router-view/>
        </keep-alive>
        <chatOnline></chatOnline>
    <foo></foo>
    <notifications group="foo" />
  </div>
  
</template>

<script>


import foo from './components/footer.vue';
import navB from './components/navBar.vue';
import chatOnline from './components/chat.vue'


export default {
  components: {
   navB,
  foo,
  chatOnline
  }
}
</script>
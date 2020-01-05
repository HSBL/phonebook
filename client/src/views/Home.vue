<template>
  <div class="container">
    <div class="card-columns justify-content-center d-flex flex-wrap">
      <ContactItem v-for="contact in $store.state.contacts" :key="contact.id" :contact="contact"/>
    </div>
  </div>
</template>

<script>
import ContactItem from '../components/ContactItem.vue'

export default {
  name: 'home',
  components: {
    ContactItem
  },
  created () {
    this.$store.dispatch('fetchContacts')
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 2rem
}
</style>

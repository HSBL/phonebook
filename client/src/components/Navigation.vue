<template>
  <b-navbar toggleable="lg" type="dark" variant="info" class="fixed-top">
    <b-navbar-brand href="#">Kontakkku</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <!-- <router-link to="/" class="btn btn-sm btn-info mx-2">
          Home
        </router-link> -->
        <b-nav-form @submit.prevent="search">
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model="searchString"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0 mx-2" type="submit">Search</b-button>
          <b-button size="sm" class="my-2 my-sm-0 mx-2" @click="reset" v-if="searched">Reset</b-button>
        </b-nav-form>
        <router-link to="/add" class="btn btn-sm mx-2" id="btn-add">
          Add
        </router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      searchString: '',
      searched: false
    }
  },
  methods: {
    search () {
      this.$store.commit('FILTER_CONTACTS', this.searchString)
      this.searched = true
      this.searchString = ''
    },
    reset () {
      this.$store.dispatch('fetchContacts')
      this.searched = false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

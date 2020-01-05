<template>
  <div class="container text-center">
      <div class="alert alert-danger" role="alert" v-if="error">
        {{error}}
      </div>
    <form @submit.prevent="addContact">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" aria-describedby="name" v-model="name" required>
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <input type="number" class="form-control" id="phone" v-model="phone" required>
      </div>
      <button type="submit" class="btn btn-primary mx-2">Add</button>
      <button class="btn btn-primary mx-2" @click="cancel">Cancel</button>
    </form>
  </div>
</template>

<script>
import axios from '../config/api'
export default {
  name: 'Add',
  data () {
    return {
      name: '',
      phone: '',
      error: ''
    }
  },
  methods: {
    cancel () {
      this.$router.push('/')
    },
    addContact () {
      axios({
        method: 'POST',
        url: '/',
        data: {
          name: this.name,
          phone: this.phone
        }
      })
        .then(({ data }) => {
          this.name = ''
          this.phone = ''
          this.$router.push('/')
        })
        .catch(err => {
          if (err.response.data.errors[0].message === 'Validation len on phone failed') {
            this.error = 'insert a valid phone number'
          } else {
            this.error = 'invalid input'
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 30vw;
  margin-top: 20vh;
  min-width: 200px
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance:textfield;
}
</style>

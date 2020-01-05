<template>
  <div class="card text-center col-md-3 m-3 p-1">
    <img
      class="card-img-top img-fluid"
      src="https://image.flaticon.com/icons/svg/265/265674.svg"
      alt="Card image"
    />
    <div class="card-body">
      <span class="h4 card-title">{{contact.name}} </span><a href="#" @click="showEditName"><i class="fa fa-edit"></i></a>
      <p class="card-text">{{getNumber}} <a href="#" @click="showEditPhone"><i class="fa fa-edit"></i></a></p>
      <a href="#" class="btn btn-danger mx-2" @click="remove"><i class="fa fa-trash"></i> Delete </a>
    </div>
      <b-modal :id="`modal-edit-name-${contact.id}`" title="Edit Name" hide-footer>
        <form @submit.prevent="editName">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" aria-describedby="name" required v-model="name">
          </div>
          <button type="submit" class="btn btn-primary">Save</button>
        </form>
      </b-modal>
      <b-modal :id="`modal-edit-phone-${contact.id}`" title="Edit Phone" hide-footer>
        <form @submit.prevent="editPhone">
          <div class="form-group">
            <label for="phone">Phone</label>
            <input type="text" class="form-control" id="phone" required v-model="phone">
          </div>
          <button type="submit" class="btn btn-primary">Save</button>
        </form>
      </b-modal>
  </div>
</template>

<script>
import axios from '../config/api'
export default {
  name: 'ContactItem',
  data () {
    return {
      name: this.contact.name,
      phone: this.contact.phone
    }
  },
  props: {
    contact: Object
  },
  computed: {
    getNumber () {
      return this.phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1 - $2 - $3')
    }
  },
  methods: {
    showEditName () {
      this.$bvModal.show(`modal-edit-name-${this.contact.id}`)
    },
    showEditPhone () {
      this.$bvModal.show(`modal-edit-phone-${this.contact.id}`)
    },
    editName () {
      axios({
        method: 'PATCH',
        url: `/${this.contact.id}/name`,
        data: {
          name: this.name
        }
      })
        .then(() => {
          this.$bvModal.hide(`modal-edit-name-${this.contact.id}`)
          this.$store.dispatch('fetchContacts')
        })
        // .catch(err => {
        //   console.log(err)
        // })
    },
    editPhone () {
      axios({
        method: 'PATCH',
        url: `/${this.contact.id}/phone`,
        data: {
          phone: this.phone
        }
      })
        .then(() => {
          this.$bvModal.hide(`modal-edit-phone-${this.contact.id}`)
          this.$store.dispatch('fetchContacts')
        })
        // .catch(err => {
        //   console.log(err)
        // })
    },
    remove () {
      axios({
        method: 'DELETE',
        url: `/${this.contact.id}`
      })
        .then(() => {
          this.$store.dispatch('fetchContacts')
        })
        // .catch(err => {
        //   console.log(err)
        // })
    }
  }
}
</script>

<style lang="scss" scoped>
.fa-edit {
  color: lightgrey
}
</style>

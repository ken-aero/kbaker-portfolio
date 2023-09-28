<template>
  <div class="demo">
    <teleport to="#modals" v-if="showModal" :posts="posts">
      <Modal @close="toggleModalTwo">
        <h1>Submission</h1>
        <p>Email: {{ email }}</p>
        <p>Password: {{ password }}</p>
        <p>State: {{ state }}</p>
        <p>Interests: {{ interestString }}</p>
      </Modal>
    </teleport>
    <form @submit.prevent="handleSubmit">
      <h3>Vue3 Demo</h3>
      <label>Email:</label>
      <input type="email" v-model="email" required />

      <label>Password:</label>
      <input type="password" v-model="password" required />
      <div v-if="passwordErr" class="err">{{ passwordErr }}</div>

      <label>State:</label>
      <select v-model="state">
        <option value="VIC">Victoria</option>
        <option value="WA">Western Australia</option>
        <option value="NT">Northern Territory</option>
        <option value="QLD">Queensland</option>
        <option value="NSW">New South Wales</option>
        <option value="SA">South Australia</option>
        <option value="TAS">Tasmania</option>
      </select>

      <label>Interests (press ctrl to save):</label>
      <input type="text" v-model="tempInterest" @keyup="addInterest" />
      <div v-for="interest in interests" :key="interest" class="pill">
        <span @click="deleteInterest(interest)">{{ interest }}</span>
      </div>

      <div class="privacy">
        <input type="checkbox" v-model="terms" required />
        <label>Agree to privacy policy</label>
      </div>

      <div class="submit">
        <button>Sign Up</button>
      </div>
    </form>
  </div>
</template>

<script>
import Modal from '../components/Modal.vue'

export default {
  name: 'Demo',
  components: { Modal },
  data() {
    return {
      email: '',
      password: '',
      state: 'vic',
      privacy: false,
      interests: [],
      tempInterest: '',
      passwordErr: null,
      showModal: false,
      interestString: '',
    }
  },
  methods: {
    addInterest($event) {
      if ($event.key === 'Control' && this.tempInterest) {
        if (!this.interests.includes(this.tempInterest)) {
          this.interests.push(this.tempInterest)
        }
        this.tempInterest = ''
      }
    },
    deleteInterest(interest) {
      this.interests = this.interests.filter((item) => {
        return interest !== item
      })
    },
    handleSubmit() {
      // validate password
      this.passwordErr =
        this.password.length >= 5 ? '' : 'Password must be at least 5 characters'

      let strText = ''
      let counter = 0

      if (!this.passwordErr) {
        if (this.interests) {
          for (const interest of this.interests) {
            strText += interest
            counter++
            if (counter < this.interests.length) {
              strText += ', '
            }
          }
        }
        this.interestString = strText
        console.log('email: ', this.email)
        console.log('password: ', this.password)
        console.log('role: ', this.role)
        console.log('interests: ', this.interests)
        console.log('terms accepted: ', this.privacy)
        this.showModal = !this.showModal
      }
    },
  },
}
</script>

<style>
.demo {
  background: #000031;
  min-height: 90vh;
  padding: 40px;
}
form {
  max-width: 420px;
  text-align: left;
  padding: 20px;
  border-radius: 10px;
  background: white;
  margin: 30px auto;
}
label {
  color: #aaa;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  margin: 15px 0 15px;
  font-size: 0.6em;
}
input,
select {
  display: block;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
}
input[type='checkbox'] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>

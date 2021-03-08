const app = Vue.createApp({

  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/10.jpg'
    }
  },
  methods: {
    async getUser()  {
      const res = await fetch('https://randomuser.me/api')
      const { results } = await res.json()
      
      const user = results[0]
      this.firstName = user.name.first,
      this.lastName = user.name.last,
      this.email = user.email,
      this.gender = user.gender,
      this.picture = user.picture.large
    }
  }
})

app.mount('#app')
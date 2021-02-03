const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manual Lorenz',
          phone: '329-230-3829',
          email: 'm_lorenz@email.com',
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '205-230-3829',
          email: 'j_jones@email.com',
        },
      ],
      // We don't need this data anymore because we have created our own component below
      // isDetailsVisible: false,
    };
  },
  // methods: {
  // We don't need this method anymore because we have created our own component below
  //     showDetails() {
  //         return this.isDetailsVisible = !this.isDetailsVisible;
  //     }
  // }
});

// Component are basically like custom HTML elements. Note: 1st element should always use an identifier that has a dash i.e. friend-contact; second element is a config object so it can have its own data just like our app; third element needs its own template option. In a nutshell, components are reusable pieces of HTML with data and logic
app.component('friend-contact', {
  // Copied from HTML but removed the v-for and :key binding
  template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click='showDetails'>{{ isDetailsVisible ? 'Hide' : 'Show'}}  Details</button>
        <ul v-if='isDetailsVisible'>
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
        `,
  data() {
    return {
      isDetailsVisible: false,
      // Adding in a friend object
      friend: {
        id: 'manuel',
        name: 'Manual Lorenz',
        phone: '329-230-3829',
        email: 'm_lorenz@email.com',
      },
    };
  },
  methods: {
    showDetails() {
      return (this.isDetailsVisible = !this.isDetailsVisible);
    },
  },
});

// Mount app (Must come last when using components in this way)
app.mount('#app');
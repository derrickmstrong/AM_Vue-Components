const app = Vue.createApp({
    data() {
        return {
            friends: [
                {id: 'manuel', name: 'Manual Lorenz', phone: "329-230-3829", email: 'm_lorenz@email.com'},
                {id: 'julie', name: 'Julie Jones', phone: "205-230-3829", email: 'j_jones@email.com'},
            ],
            isDetailsVisible: false,
        }
    },
    methods: {
        showDetails() {
            return this.isDetailsVisible = !this.isDetailsVisible;
        }
    }
}).mount('#app')
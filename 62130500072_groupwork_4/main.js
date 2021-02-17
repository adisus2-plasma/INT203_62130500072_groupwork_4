const app = {
    data() {
        return {
            tasks: [{ info: 'In the afternoon', Image: './images/cityInAfterNoon.jpg', done: false },
            { info: 'Empire state and the sunset', Image: './images/cityInSunset.jpg', done: false },
            { info: 'Street in small town', Image: './images/cityInNight.jpg', done: false }
            ],
            search: { toggle: false, cancel: true}
        }
    },
    methods: {
        toggleDone(index) {
            this.tasks[index].done = !this.tasks[index].done
        },

        toggleicon:
        function () {
            this.search.toggle = !this.search.toggle
            this.search.cancel = !this.search.cancel
            console.log(this.search.toggle);
        },

        
    },
    computed: {
        countUndone() {
            return this.tasks.filter(t => !t.done).length
        }
    }
}

Vue.createApp(app).mount('#app')

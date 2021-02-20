const app = {
    data() {
        return {
            tasks: [{ info: 'In the afternoon', Image: './images/cityInAfterNoon.jpg', done: false },
            { info: 'Empire state and the sunset', Image: './images/cityInSunset.jpg', done: false },
            { info: 'Street in small town', Image: './images/cityInNight.jpg', done: false }
            ],
            search: { toggle: false, cancel: true },
            index: "",
            backup: [{ info: 'In the afternoon', Image: './images/cityInAfterNoon.jpg', done: false },
            { info: 'Empire state and the sunset', Image: './images/cityInSunset.jpg', done: false },
            { info: 'Street in small town', Image: './images/cityInNight.jpg', done: false }],
            invisible: true,
            pathImage: ""
        }
    },
    methods: {
        toggleDone(index) {
            this.tasks[index].done = !this.tasks[index].done;
        },

        toggleicon:
            function () {
                this.search.toggle = !this.search.toggle
                this.search.cancel = !this.search.cancel
                console.log(this.search.toggle);
                this.index = "";
            },

        togglePicture(position){
            this.pathImage = position
            this.invisible = false
        },

        quitCanvas(){
            this.invisible = true
        }

    },
    computed: {
        countUndone() {
            return this.tasks.filter(t => !t.done).length
        },
        inputMassage() {
            this.tasks = this.backup
            if (this.index) {
                return this.tasks = this.tasks.filter(c => {
                    return c.info.toLowerCase().includes(this.index.toLowerCase())
                });
            }
        }
    }
}

Vue.createApp(app).mount('#app')

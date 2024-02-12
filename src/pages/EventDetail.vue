<script>
import { store } from "../store.js";
import axios from 'axios';

export default {
    name: "EventDetail",
    props: ["id"],


    data() {
        return {
            store,
            event: null
        };
    },
    methods: {
        showEventDetail() {
            if (this.id !== undefined) {
                let url = `${this.store.apiUrl}${this.store.apiEvents}/${this.id}`;

                axios.get(url).then(response => {
                    console.log("API Response:", response);

                    if (response.status === 200 && response.data.success) {
                        console.log("Results:", response.data.results);
                        this.event = response.data.results;
                    } else {
                        console.error("Oops, something went wrong");
                    }
                }).catch(error => {
                    console.error(error);
                    this.$router.push({ name: 'home' }) //if event does not exist then push user to home page
                });
            }
        }
    },

    mounted() {
        console.log("EventDetail ID:", this.id);
        this.showEventDetail();
    },

}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 gy-4">
                <div v-if="!event">Loading...</div>
                <div class="card h-100" v-else>
                    <div class="card-header">{{ event?.date }}</div>
                    <div class="card-body">
                        <h5 class="card-title">{{ event?.name }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">
                            <span><em>{{ event.user ? event.user.name : "Unknown User" }}</em></span>
                        </h6>
                        <p class="card-text"><b>{{ event?.capacity }}</b>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
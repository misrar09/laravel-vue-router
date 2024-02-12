<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "AppComponent",


    data() {
        return {
            store
        }
    },
    methods: {
        doThings() {
            console.log("AppComponent does things");
        }
    },
    mounted() {
        register(this); //per debuggare il componente da console
        this.doThings();
    }
}
</script>

<template>
    <div>
        <h1>All Events</h1>
    </div>


    <div class="container-fluid mt-4">
        <div class="row justify-content-center mb-2">
            <div v-for="event in store.allEvents" class="col-md-3 mb-4">
                <div class="card h-100">
                    <div class="card-header"><strong>{{ event.name }}</strong></div>
                    <div class="card-body">
                        <strong>Organizer:</strong> {{ event.organizer }} <br>
                        <strong>Date:</strong> {{ event.date }} <br>
                        <strong>Capacity:</strong> {{ event.capacity }}
                    </div>
                    <div class="card-footer">
                        <span><em>{{ event.user ? event.user.name : "Unknown User" }}</em></span>
                        <div>

                            <router-link :to="{ name: 'event-detail', params: { id: event.id } }" class="btn btn-primary">
                                <font-awesome-icon icon="fa-solid fa-circle-info" class="me-2" />
                                <span>Dettagli</span>
                            </router-link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di AppComponent
</style>
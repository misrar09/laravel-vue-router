<script>

import { store } from "../store.js";
import axios from 'axios';


export default {
    name: "TagsPage",

    data() {
        return {
            store,
            tags: null

        };
    },
    methods: {
        getApiTags() {

            let url = this.store.apiUrl + this.store.apiTags;

            axios.get(url).then(risultato => {
                if (risultato.status === 200 && risultato.data.success) {
                    console.log(risultato.data.results);
                    this.tags = risultato.data.results;
                } else {

                    console.error("oops, something went wrong");
                }
            }).catch(errore => {
                console.error(errore);
            });
        }
    },

    mounted() {
        this.getApiTags();
    },
}
</script>

<template>
    <div class="container">
        <div class="row">
            <h1 class="mb-3">All Tags</h1>
            <ul>
                <li v-for="tag in tags" :key="tag.id">
                    {{ tag.name }}
                </li>
            </ul>

        </div>
    </div>
</template>

<style scoped></style>
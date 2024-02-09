<script>
import AppComponent from "../components/AppComponent.vue"

export default {
    name: "HomePage",

    components: {
        AppComponent
    },
}
</script>

<template>
    <main>
        <AppComponent />
        <button class="btn btn-primary">
            <font-awesome-icon icon="fa-solid fa-home" class="me-1" />
            <span>Primary button</span>
        </button>
    </main>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue
main {
    padding: 1rem;
}
</style>
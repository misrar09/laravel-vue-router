<script>
import AppComponent from "./components/AppComponent.vue"

import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management

export default {
	components: {
		AppComponent
	},
	data() {
		return {
			store
		}
	},
	mounted() {
		this.getApiEvents();
	},

	methods: {
		getApiEvents() {

			let url = this.store.apiUrl + this.store.apiEvents;

			axios.get(url).then(risultato => {
				if (risultato.status === 200 && risultato.data.success) {
					console.log(risultato.data.results);
					this.store.allEvents = risultato.data.results;
				} else {

					console.error("oops, something went wrong");
				}
			}).catch(errore => {
				console.error(errore);
			});
		}

	}
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

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue
main {
	padding: 1rem;
}
</style>
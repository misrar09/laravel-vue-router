<script>


import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management

export default {

	data() {
		return {
			store,
			menuItems: [
				{
					routeName: 'home',
					label: 'Home'
				},
				{
					routeName: 'about',
					label: 'About Us'
				},


			]
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
					/* console.log(risultato.data.results); */
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
	<header>
		<nav class="navbar navbar-expand-lg bg-light">
			<div class="container-fluid">
				<a class="navbar-brand" href="#"><b>LOGO</b></a>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item" v-for="(item, index) in menuItems" :key="index">
							<router-link :to="{ name: item.routeName }" class="nav-link">
								{{ item.label }}
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
	<router-view></router-view>

	<main>

	</main>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss"></style>
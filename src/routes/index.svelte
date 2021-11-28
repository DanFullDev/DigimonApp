<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { fetchDigimon } from '../api/digimon-api';
	import DigimonCard from '../components/digimonCard.svelte';

	let digimonList: any[];
	let filteredList: any[];
	let searchFilter: string = 'name';

	onMount(async () => {
		const data = await fetchDigimon();
		digimonList = data;
		filteredList = digimonList;
		digimonList[
			digimonList.findIndex((element) => {
				return element.name === 'Magnamon';
			})
		].img = '/Magnamon_b.jpg';
	});

	function searchDigimonByName(name: string) {
		let checkName = name.toLowerCase();
		filteredList = digimonList.filter((element) => {
			return element.name.toLowerCase().includes(checkName);
		});
	}

	function searchDigimonByStage(stage: string) {
		let checkStage = stage.toLowerCase();
		filteredList = digimonList.filter((element) => {
			return element.level.toLowerCase().includes(checkStage);
		});
	}

	function filterDigimon(event: any) {
		let digiValue = event.target.value;
		if (digiValue === '') {
			filteredList = digimonList;
			return;
		}
		if (searchFilter === 'name') {
			searchDigimonByName(digiValue);
			return;
		}
		searchDigimonByStage(digiValue);
	}

	function saveFilter(filter: string) {
		filteredList = digimonList;
		searchFilter = filter;
	}
</script>

<svelte:head>
	<title>Digi-Svelte</title>
</svelte:head>

<main class="flex flex-wrap flex-col align-middle justify-center">
	<div class="content text-center">
		<h1 class="text-4xl m-3">The Digimon API using Svelte!</h1>
		<div>Search for a Digimon by either it's name or Evolution stage</div>
	</div>
	<div class="text-center mb-5">
		<div class="flex flex-row justify-center">
			<button
				class="{searchFilter === 'name' ? 'activeButton' : 'modeButton'} active:scale-90 transition 
				duration-500 ease-linear"
				on:click={() => saveFilter('name')}>Name</button
			>
			<button
				class="{searchFilter === 'level'
					? 'activeButton'
					: 'modeButton'} active:scale-90 transition 
				duration-500  ease-linear"
				on:click={() => saveFilter('level')}>Level</button
			>
		</div>
		<input
			on:input={(e) => filterDigimon(e)}
			class="border border-gray-600 p-3 w-5/6"
			type="text"
			placeholder="Search by Digimon's {searchFilter}..."
		/>
	</div>
	{#if digimonList}
		<div class="flex flex-row justify-center align-middle flex-wrap">
			{#each filteredList as Digimon}
				<DigimonCard inputDigimon={Digimon} />
			{/each}
		</div>
	{/if}
</main>

<style lang="postcss">
	.content {
		@apply text-lg text-gray-600 m-5;
	}
	.modeButton {
		@apply m-5 bg-gray-500 p-5 cursor-pointer rounded-full h-24 w-24 text-white;
	}
	.activeButton {
		@apply m-5 bg-gray-800 p-5 cursor-pointer rounded-full h-24 w-24 text-white;
	}
</style>

<script lang="ts">
	export let inputDigimon;
</script>

{#if inputDigimon}
	<div
		class=" bg-gray-400 m-5 border 
		border-solid border-gray-600 
		border-opacity-70 sm:w-1/6 w-4/6 shadow-2xl transition 
		duration-500 ease-in-out 
		transform hover:-translate-y-1 hover:scale-110 rounded-b-xl"
	>
		<img src={inputDigimon.img} alt="{inputDigimon.name}'s look" class="w-full" />
		<div class="p-5">
			<div><span>Name: </span>{inputDigimon.name}</div>
			<div><span>Level: </span>{inputDigimon.level}</div>
		</div>
	</div>
{/if}

<style lang="postcss">
	span {
		@apply font-extrabold;
	}
</style>

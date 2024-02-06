<script lang="js">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import ChannelCard from '$lib/components/ChannelCard.svelte';
	import SearchVideoCard from '$lib/components/searchVideoCard.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	export let data;
</script>

<Dialog.Root>
	<div class="flex justify-end my-2">
		<Dialog.Trigger class="font-medium ml-auto border px-4 py-1 rounded-full hover:bg-red-600"
			>Filter</Dialog.Trigger
		>
	</div>
	<Dialog.Content class=" bg-green-300 rounded-lg fixed left-[50%] top-[25%] translate-x-[-50%]">
		<div class="">
			<Dialog.Header>
				<Dialog.Title class="mx-auto capitalize text-lg font-normal">Search filters</Dialog.Title>
			</Dialog.Header>
			<div class="flex gap-5 justify-center">
				{#if Array.isArray(data.filterGroups)}
					{#each data.filterGroups as filterGroups}
						<div class="w-full">
							<h1 class="font-medium text-xs uppercase py-5 border-b mt-5 text-center">
								{filterGroups.title}
							</h1>
							<div class="mt-5 space-y-5 flex flex-col">
								{#each filterGroups.filters as filter}
									<button
										on:click={() => {
											const searchParams = new URLSearchParams($page.url.search);
											searchParams.set('filters', filter.cursorSelect);
											goto(`?${searchParams.toString()}`);
										}}
										class="font-medium text-xs captalize pb-2 hover:text-red-700 text-blue-600"
									>
										{filter.label}
									</button>
								{/each}
							</div>
						</div>
					{/each}
				{/if}
			</div>
		</div>
	</Dialog.Content>
</Dialog.Root>

<div class="space-y-5 z-1">
	{#each data.contents as { type, channel, video }}
		{#if type === 'video'}
			<SearchVideoCard
				avatar={video.author.avatar[0].url}
				badges={video.badges}
				views={video.stats.views}
				channelName={video.author.title}
				descriptionSnippet={video.descriptionSnippet}
				publishedTimeText={video.publishedTimeDate}
				thumbnails={video.thumbnails[0].url}
				title={video.title}
				videoId={video.videoId}
			/>
		{:else if type === 'channel'}
			<ChannelCard
				avatar={channel.avatar[0].url}
				descriptionSnippet={channel.descriptionSnippet}
				subscribers={channel.stats.subscribersText}
				title={channel.title}
				userName={channel.username}
			/>
		{/if}
	{/each}
</div>

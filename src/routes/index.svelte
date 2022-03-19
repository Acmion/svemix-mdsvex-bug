<script context="module" lang="ts" ssr>
    import fsp from "fs/promises"

	export async function loader(event) 
    {
		return { entries: await fsp.readdir(".") }
	}
</script>

<script lang="ts">
	export let data;
</script>

# Hello World

<div>
	{JSON.stringify(data)}
</div>

<svelte:options customElement="sefaria-plugin" />

<script>
  let { sref } = $props();
</script>

<p>Hi! I am a plugin rendering the current <code>sref</code> value: <strong>{sref}</strong></p>

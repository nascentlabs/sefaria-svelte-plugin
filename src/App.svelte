<script>
  import Plugin from "./lib/Plugin.svelte";
</script>

<main>
  <div>
  </div>
  <h1>Sefaria Svelte Plugin Template</h1>
  <div class="card">
    <Plugin sref="Genesis 1.1"></Plugin>
  </div>
  <h2>Everything inside the above border is the plugin.</h2>
  <h3>
    Here is some information about what you are seeing:
  </h3>
  <ul>
    <li>This is a Svelte App.</li>
    <li>The plugin seen within the above border is located in this repo at <code>src/lib/Plugin.svelte</code></li>
    <li>Look at <code>src/App.svelte</code> to see the this application that you are reading right now</li>
    <li>Notice it is using <code>src/lib/Plugin.svelte</code> and giving it an <code>sref</code> attribute</li>
    <li>Back in <code>src/lib/Plugin.svelte</code> you can see it using <code>let &lbrace; sref &rbrace; = $props();</code></li>
    <li>This is where the Svelte component uses the <code>sref</code> value</li>
  </ul>

  <ul>
    <li>Once you have an understanding of how this works, clone the repo!</li>
    <li>You can make whatever changes you want, as long as
        <ul>
          <li>Plugin.svelte remains the entrypoint</li>
          <li>You keep the <code>&lt;svelte:options customElement=&quot;sefaria-plugin&quot; /&gt;</code> configuration at the top of <code>Plugin.svelte</code></li>
          <li>This is what allows Sefaria to properly consume the Plugin</li>
        </ul>
    </li>
    <li>This <code>plugin.js</code> is actually a Web Component, with the name <code>sefaria-plugin</code>, which allows Sefaria to consume it as a Plugin</li>
    <li>Sefaria will inject the plugin with an <code>sref</code> value based on what the Sefaria user is currenty looking at</li>
    <li>Any time the <code>sref</code> changes, that attribute will be updated, and the Plugin will see the change internally</li>
    <li>Build the plugin by running <code>npm run build</code></li>
    <li>The build is configured to create a <code>plugin.js</code> file in the <code>dist</code> directory</li>
    <li>This <code>plugin.js</code> is the Web Component that Sefaria requires to use properly</li>
    <li>The current Sefaria Plugin Engine requires a <code>plugin.js</code> at the root of the repository</li>
    <li>So to do this, you can easily move <code>dist/plugin.js</code> after it is built to the root of the repository by running <code>npm run build-to-root</code></li>
    <li>Enable Github Pages on your repo, so that the plugin artifact is publically available</li>
    <li>Copy the repository url into the plugin engine to see magic!</li>
  </ul>
</main>

<style>
  .card{
    border: 1px solid gray;
    border-radius: 1rem;
  }
</style>

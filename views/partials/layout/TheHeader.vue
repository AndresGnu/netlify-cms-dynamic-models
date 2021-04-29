<template>
  <div class="container px-4 mx-auto">
    <nav class="flex justify-between items-center py-6">
      <a class="text-3xl font-semibold leading-none" href="/"
        ><img
          class="h-10"
          src="/images/logos/metis/metis.svg"
          alt=""
          width="auto"
      /></a>
      <div class="lg:hidden">
        <button
          class="navbar-burger flex items-center py-2 px-3 text-blue-600 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300"
        >
          <svg
            class="fill-current h-4 w-4"
            viewbox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <ul class="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
        <li>
          <a class="text-sm text-gray-400 hover:text-blue-500" href="/examples"
            >Examples</a
          >
        </li>
        <li>
          <a class="text-sm text-gray-400 hover:text-blue-500" href="/sal"
            >Scroll Animations</a
          >
        </li>
        <li>
          <a class="text-sm text-gray-400 hover:text-blue-500" href="/blog"
            >Blog Netlify</a
          >
        </li>
        <li>
          <a class="text-sm text-gray-400 hover:text-blue-500" href="/blog-wp"
            >Blog Worpress</a
          >
        </li>
      </ul>
      <div class="hidden lg:block">
        <a
          class="inline-block px-4 py-3 text-xs font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded"
          href="#"
          >Documentation</a
        >
      </div>
    </nav>
  </div>
  <!-- <div id="info">
    <div id="header" class="p-6 flex items-center bg-gray-400">
      <mk-link to="home" class="flex items-center">
        <mk-icon>vuejs</mk-icon>

        <div class="font-bold pl-3 text-xl leading-none" cms="title">
          {{ info.title }}
        </div>
      </mk-link>
      <div class="flex-auto"></div>
      <div class="space-x-5 flex pr-6">
        <div>
          <mk-link to="sal">Scroll Animations </mk-link>
        </div>
        <div>
          <mk-link to="blog"> Blog </mk-link>
        </div>
        <div>Formulario</div>
      </div>

      <div class="cursor-pointer" @click="openMenu">
        <mk-icon>{{ info.icon }}</mk-icon>
      </div>
    </div>
  </div> -->
</template>
<script>
export default {
  setup() {
    const { info } = useContext('home');
    return {
      info
    };
  }
};
</script>

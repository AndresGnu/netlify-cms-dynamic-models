<template>
  <div>
    <div
      v-for="(blog, index) in blogs"
      class="mb-3 flex flex-col p-3 text-center"
    >
      <div class="text-lg">{{ index + 1 }}. {{ blog.title }}</div>
      <div class="text-xs">
        {{ blog.slug }}
      </div>
      <div class="pl-8">
        <mk-link :to="`blogs/${blog.slug}`">
          <u> Ir a blog </u>
        </mk-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    const { blogs } = useContext('blog');
    const { locale } = usePage();
    return {
      blogs,
      locale
    };
  }
};
</script>

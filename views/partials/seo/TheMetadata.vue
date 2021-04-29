<template>
  <title>{{ seo.title }}</title>
  <meta name="description" :content="seo.description" />
  <meta name="keywords" :content="seo.keywords" />
  <template v-if="seo.google">
    <meta itemprop="name" :content="seo.title" />
    <meta itemprop="description" :content="seo.description" />
    <meta itemprop="image" :content="imageSocial" />
  </template>
  <template v-if="seo.twitter">
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" :content="seo.pageUrl" />
    <meta name="twitter:title" :content="seo.title" />
    <meta name="twitter:description" :content="seo.description" />
    <meta name="twitter:image" :content="imageSocial" />
  </template>
  <template v-if="seo.facebook">
    <meta property="og:title" :content="seo.title" />
    <meta property="og:type" content="website" />
    <meta property="og:description" :content="seo.description" />
    <meta property="og:image" :content="imageSocial" />
    <meta property="og:url" :content="seo.pageUrl" />
    <meta property="og:site_name" :content="seo.title" />
  </template>
</template>
<script>
export default {
  setup() {
    const seo = useSeo();
    const imageSocial = `${seo.url}${seo.image}`;
    return {
      seo,
      imageSocial
    };
  }
};
</script>

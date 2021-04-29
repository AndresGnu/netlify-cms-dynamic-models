<template>
  <section class="section section--code">
    <div class="mx-auto">
      <h2 class="section-title">Fade</h2>
      <div class="code code--small code--left" data-sal="fade-up">
        <pre><code class="html">&lt;div data-sal="fade-up">&lt;/div></code></pre>
      </div>
      <div class="code code--small code--right" data-sal="fade-down">
        <pre><code>&lt;div data-sal="fade-down">&lt;/div></code></pre>
      </div>
      <div class="code code--small code--left" data-sal="fade-right">
        <pre><code>&lt;div data-sal="fade-right">&lt;/div></code></pre>
      </div>
      <div class="code code--small code--right" data-sal="fade-left">
        <pre><code>&lt;div data-sal="fade-left">&lt;/div></code></pre>
      </div>
      <div class="code code--small code--left" data-sal="fade-up-right">
        <pre><code>&lt;div data-sal="fade-up-right">&lt;/div></code></pre>
      </div>
      <div class="code code--small code--right" data-sal="fade-up-left">
        <pre><code>&lt;div data-sal="fade-up-left">&lt;/div></code></pre>
      </div>
      <div class="code code--small code--left" data-sal="fade-down-right">
        <pre><code>&lt;div data-sal="fade-down-right">&lt;/div></code></pre>
      </div>
      <div class="code code--small code--right" data-sal="fade-down-left">
        <pre><code>&lt;div data-sal="fade-down-left">&lt;/div></code></pre>
      </div>
    </div>
  </section>

  <section class="section section--code">
    <div class="">
      <h2 class="section-title">Flip</h2>
      <div class="code code--small code--left" data-sal="flip-left">
        <pre><code>&lt;div data-sal="flip-left">&lt;/div></code></pre>
      </div>
      <div class="code code--small code--right" data-sal="flip-right">
        <pre><code>&lt;div data-sal="flip-right">&lt;/div></code></pre>
      </div>
      <div class="code code--small code--left" data-sal="flip-up">
        <pre><code>&lt;div data-sal="flip-up">&lt;/div></code></pre>
      </div>
      <div class="code code--small code--right" data-sal="flip-down">
        <pre><code>&lt;div data-sal="flip-down">&lt;/div></code></pre>
      </div>
    </div>
  </section>

  <section class="section section--code">
    <div class="">
      <h2 class="section-title">Zoom</h2>
      <div class="code code--small code--left" data-sal="zoom-in">
        <pre><code>&lt;div data-sal="zoom-in">&lt;/div></code></pre>
      </div>
      <div class="code code--small code--right" data-sal="zoom-in-up">
        <pre><code>&lt;div data-sal="zoom-in-up">&lt;/div></code></pre>
      </div>
      <div class="code code--small code--left" data-sal="zoom-in-down">
        <pre><code>&lt;div data-sal="zoom-in-down">&lt;/div></code></pre>
      </div>
      <div class="code code--small code--right" data-sal="zoom-in-left">
        <pre><code>&lt;div data-sal="zoom-in-left">&lt;/div></code></pre>
      </div>
      <div class="code code--small code--left" data-sal="zoom-in-right">
        <pre><code>&lt;div data-sal="zoom-in-right">&lt;/div></code></pre>
      </div>

      <div class="code code--small code--right" data-sal="zoom-out">
        <pre><code>&lt;div data-sal="zoom-out">&lt;/div></code></pre>
      </div>
      <div class="code code--small code--left" data-sal="zoom-out-up">
        <pre><code>&lt;div data-sal="zoom-out-up">&lt;/div></code></pre>
      </div>
      <div class="code code--small code--right" data-sal="zoom-out-down">
        <pre><code>&lt;div data-sal="zoom-out-down">&lt;/div></code></pre>
      </div>
      <div class="code code--small code--left" data-sal="zoom-out-right">
        <pre><code>&lt;div data-sal="zoom-out-right">&lt;/div></code></pre>
      </div>
      <div class="code code--small code--right" data-sal="zoom-out-left">
        <pre><code>&lt;div data-sal="zoom-out-left">&lt;/div></code></pre>
      </div>
    </div>
  </section>

  <section class="section section--code">
    <div class="">
      <h2 class="section-title">Different settings examples</h2>
      <div class="code code--left" data-sal="fade-up" data-sal-duration="3000">
        <pre><code>&lt;div data-sal="fade-up"&#13;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data-sal-duration="3000">&#13;&lt;/div></code></pre>
      </div>
      <div
        class="code code--right"
        data-sal="fade-down"
        data-sal-easing="linear"
        data-sal-duration="1500"
      >
        <pre><code>&lt;div data-sal="fade-down"&#13;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data-sal-easing="linear"&#13;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data-sal-duration="1500">&#13;&lt;/div></code></pre>
      </div>
      <div
        id="example-anchor"
        class="code code--left"
        data-sal="fade-right"
        data-sal-offset="300"
        data-sal-easing="ease-in-sine"
      >
        <pre><code>&lt;div data-sal="fade-right"&#13;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data-sal-offset="300"&#13;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data-sal-easing="ease-in-sine">&#13;&lt;/div></code></pre>
      </div>
      <div
        class="code code--right"
        data-sal="fade-left"
        data-sal-anchor="#example-anchor"
        data-sal-offset="500"
        data-sal-duration="500"
      >
        <pre><code>&lt;div data-sal="fade-left"&#13;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data-sal-anchor="#example-anchor"&#13;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data-sal-offset="500"&#13;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data-sal-duration="500">&#13;&lt;/div></code></pre>
      </div>
      <div
        class="code code--left"
        data-sal="fade-zoom-in"
        data-sal-easing="ease-in-back"
        data-sal-delay="300"
        data-sal-offset="0"
      >
        <pre><code>&lt;div data-sal="fade-zoom-in"&#13;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data-sal-easing="ease-in-back"&#13;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data-sal-delay="300"&#13;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data-sal-offset="0">&#13;&lt;/div></code></pre>
      </div>
      <div
        class="code code--right"
        data-sal="flip-left"
        data-sal-easing="ease-out-cubic"
        data-sal-duration="2000"
      >
        <pre><code>&lt;div data-sal="flip-left"&#13;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data-sal-easing="ease-out-cubic"&#13;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data-sal-duration="2000">&#13;&lt;/div></code></pre>
      </div>
    </div>
  </section>

  <section class="section section--code">
    <div class="">
      <h2 class="section-title">Anchor placement</h2>

      <div
        class="code code--wider code--left"
        data-sal="fade-up"
        data-sal-anchor-placement="top-bottom"
      >
        <pre><code>&lt;div data-sal="fade-up"&#13;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data-sal-anchor-placement="top-bottom">&#13;&lt;/div></code></pre>
      </div>
      <div
        class="code code--wider code--right"
        data-sal="fade-up"
        data-sal-anchor-placement="center-bottom"
      >
        <pre><code>&lt;div data-sal="fade-up"&#13;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data-sal-anchor-placement="center-bottom">&#13;&lt;/div></code></pre>
      </div>
      <div
        class="code code--wider code--left"
        data-sal="fade-up"
        data-sal-anchor-placement="bottom-bottom"
      >
        <pre><code>&lt;div data-sal="fade-up"&#13;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data-sal-anchor-placement="bottom-bottom">&#13;&lt;/div></code></pre>
      </div>

      <div
        class="code code--wider code--right"
        data-sal="fade-up"
        data-sal-anchor-placement="top-center"
      >
        <pre><code>&lt;div data-sal="fade-up"&#13;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data-sal-anchor-placement="top-center">&#13;&lt;/div></code></pre>
      </div>
      <div
        class="code code--wider code--left"
        data-sal="fade-up"
        data-sal-anchor-placement="center-center"
      >
        <pre><code>&lt;div data-sal="fade-up"&#13;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data-sal-anchor-placement="center-center">&#13;&lt;/div></code></pre>
      </div>
      <div
        class="code code--wider code--right"
        data-sal="fade-up"
        data-sal-anchor-placement="bottom-center"
      >
        <pre><code>&lt;div data-sal="fade-up"&#13;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data-sal-anchor-placement="bottom-center">&#13;&lt;/div></code></pre>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  setup() {
    return {};
  }
};
</script>

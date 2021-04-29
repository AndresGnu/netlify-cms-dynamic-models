<template>
  <div id="app" class="p-3">
    <client-only>
      <div class="text-primary text-center" v-if="!menu">
        App [{message}] [{menu}]
      </div>
    </client-only>

    <home-example name="Imagenes">
      <mk-image src="home/phone.png" />
    </home-example>

    <home-example name="Iconos">
      <div class="space-x-3 flex">
        <mk-icon size="2">
          {{ context.info.icon }}
        </mk-icon>
        <mk-icon size="2"> domain </mk-icon>
        <mk-icon size="2" type="fa"> phone </mk-icon>
        <mk-icon size="2" type="mdi"> phone </mk-icon>
      </div>
    </home-example>

    <home-example name="Links">
      <ul class="list-square pl-6">
        <li>
          <mk-link to="home"> Home </mk-link>
        </li>
        <li>
          <mk-link to="home" is-slot v-slot:default="{ href }">
            <a :href="href" title=""> Inicio {{ href }} </a>
          </mk-link>
        </li>
      </ul>
    </home-example>

    <home-example name="Client component">
      <client-only>
        <p-accordion>
          <server-only>
            <template v-for="i in 3">
              <client-only :index="i" x>
                <p-accordion-tab header="Header {%= it.index %}">
                  Content {%= it.index %} -
                  <server-only>
                    {{ i }} -
                    <client-only :ex="i">
                      <mk-btn>Hola mundo #{%= it.ex %}</mk-btn>
                    </client-only>
                    <mk-icon size="2">account</mk-icon>
                  </server-only>
                </p-accordion-tab>
              </client-only>
            </template>
          </server-only>
        </p-accordion>
      </client-only>
    </home-example>
  </div>
</template>
<script>
export default {
  setup() {
    const context = useContext();
    // const {} = useGlobal()
    return {
      context
    };
  }
};
</script>

<template>
  <div id="app">

    <div class="nav-bar">
      <b-card title="Card Title" no-body>
        <b-card-header header-tag="nav">
          <b-button-group size="lg">
            <b-button @click="add('server')">Server</b-button>
            <b-button @click="add('Https')">Https</b-button>
            <b-button>Reverse Proxy</b-button>
          </b-button-group>
        </b-card-header>
      </b-card>
      <div class="button-content">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </div>
    </div>

    <pre class="config-content">
      worker_processes  1;

      events {
      worker_connections  1024;
      }

      http {
      include       mime.types;
      default_type  application/octet-stream;

      #access_log  logs/access.log  main;

      sendfile        on;

      keepalive_timeout  65;

      #gzip  on;
      {{addServers}}
      location / {
      root   html;
      index  index.html index.htm;
      }

      error_page   500 502 503 504  /50x.html;
      location = /50x.html {
      root   html;
      }
<div>
  <span>Message: {{message}}}</span>
</div>
      }
    </pre>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        addServer: null,
        addServers: null,
        serverChecked: false
      }
    },
    methods: {
      add (param) {
        this.$router.push({name: param})
      },
      isServerChecked () {
        this.addServers = null
        if (!this.serverChecked) {
          this.addServers = this.addServer
        }
      }
    },
    props: {
      message: 'From child'
    }
  }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

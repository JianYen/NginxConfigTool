<template>
    <div id="home">

        <div class="nav-bar">
            <b-card title="Card Title" no-body>
                <b-card-header header-tag="nav">
                    <b-button-group size="lg">
                        <b-button @click="add('Server')">Server</b-button>
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

      }
    </pre>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'home',
        components: {
            HelloWorld
        }
    }
</script>
<style>
    .config-content{
        background-color: #f9f9f9;
        box-shadow: 0 1px 1px rgba(0,0,0,.125);
        text-align: left;
    }
    .button-content{
        width:80%;
        margin: 20px 10% 20px 10%;
    }
    .nav-bar{
        width: 90%;
        margin: auto;
    }
    .card-header{
        box-shadow: 5px 5px 8px #c5c5c5;
    }
    .btn-secondary:hover {
        background-color: #b4e1ff;
        color: darkblue;
        width: 230px;
    }
</style>

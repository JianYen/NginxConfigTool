<template>
    <div>
        <div >
            <H2 class="title">NGINX Config</H2>
        </div>
                <div >
                    <b-card-header class="b-card-header " >
                        <b-button-group>
                            <b-button v-bind:class="buttonScope[0]" @click="showArea('1')">Server</b-button>
                            <b-button v-bind:class="buttonScope[1]" @click="showArea('2')">HTTPS</b-button>
                            <b-button v-bind:class="buttonScope[2]" @click="showArea('3')">Reverse Proxy</b-button>
                        </b-button-group>
                    </b-card-header>

                    <!--Server區塊-->
                    <div class=" button-content" v-if="col==1">
                        <div class="row server-scope1">
                            <div class="col-md-4 server-scope1">Domain</div>
                            <div class="col-md-4">Path</div>
                            <div class="col-md-4">Document root</div>
                        </div>
                        <div class="row server-scope2">
                            <div class="col-md-4"><input type="text" placeholder="example.com"></div>
                            <div class="col-md-4"><input type="text" placeholder="/var/www/example.com"></div>
                            <div class="col-md-4"><input type="text" placeholder="/public"></div>
                        </div>
                        <div class="row">
                        <div class="col-md-2 server-scope3">www.subdomain</div>
                        <div class="co-md-10">

                            <label for="sub-domain-checkbox">
                                <input type="checkbox" id="sub-domain-checkbox" >enabled(example.com)
                            </label>
                        </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2 col-md-2 server-scope4">Redirect subdomains</div>
                            <div class="co-md-10">

                                <label for="Redirect-subdomains-checkbox">
                                    <input type="checkbox" id="Redirect-subdomains-checkbox" >enabled(example.com)
                                </label>
                            </div>
                        </div>
                        <div class="row server-scope5">
                            <div class="col-md-4">listen</div>
                            <div class="col-md-4">IPv4<input type="text" value="*"></div>
                            <div class="col-md-4">IPv6<input type="text" value="::"></div>
                        </div>

                    </div>
                    <div class="button-content" v-if="col==2">
                        BBB
                    </div>
                    <div class="button-content" v-if="col==3">
                        CCC
                    </div>
                </div>

        <div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        methods: {
            showArea (col) {
                this.col=col;

                this.buttonScope[col-1]="buttonScopeNotClicked"
            }
        },
        data () {
            return {
                buttonScope:['buttonScopeClicked','buttonScopeClicked','buttonScopeClicked'],
                col: 1,
            }
        }
    }

</script>

<style scoped>
    .title{
        width: 100%;
        height: 150px;
        text-align: center;
        line-height: 125px;
    }
    .b-card-header{
        margin: 0 auto;
        text-align: center;
    }
    .buttonScopeClicked{
        background-color: bisque;
    }
    .buttonScopeNotClicked{
        background-color: #a9865d;
    }
    .server-scope1{
        margin: auto;
    }
    .server-scope2{
        margin: auto;
    }
    .server-scope3{
        margin: 3px 15px;
    }
    .server-scope4{
        margin: 3px 15px;
    }
    .server-scope5{
        margin: 3px 5px;
    }


</style>

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
                            <div class="col-md-4 ">Domain</div>
                            <div class="col-md-4">Path</div>
                            <div class="col-md-4">Document root</div>
                        </div>
                        <div class="row server-scope2">
                            <div class="col-md-4"><input type="text" placeholder="example.com" v-model="domainInput"></div>
                            <div class="col-md-4"><input id="server-path-input" type="text" :placeholder="serverPathPlaceholder + domainInput"   v-model="serverPathInput" @input="inputServerPath()"></div>
                            <div class="col-md-4"><input type="text" placeholder="/public" v-model="documentRootInput"></div>
                        </div>
                        <div class="row">
                        <div class="col-md-2 server-scope3">www.subdomain</div>
                        <div class="co-md-10">

                            <label for="sub-domain-checkbox">
                                <input type="checkbox" id="sub-domain-checkbox" v-model="subDomainCheckbox">enabled(example.com)
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
                            <div class="col-md-4">IPv4<input type="text" value="*" v-model="ipv4Input"></div>
                            <div class="col-md-4">IPv6<input type="text" value="::" v-model="ipv6Input"></div>
                        </div>

                    </div>

                    <!--HTTPS區塊-->
                    <div class="button-content" v-if="col==2">
                        <div class="row https-scope">
                            <div class="col-md-4">HTTPS</div>
                            <div class="col-md-4"><b-form-checkbox v-model="httpEnabled" :click="httpSwitch()">enabled</b-form-checkbox></div>
                            <div class="col-md-4"></div>
                        </div>
                        <div :class=httpConfig>
                            <div class="row https-scope2">
                                <div class="col-md-4">HTTPS/2</div>
                                <div class="col-md-4"><b-form-checkbox>enabled</b-form-checkbox></div>
                                <div class="col-md-4"></div>
                            </div>
                            <div class="row https-scope3">
                                <div class="col-md-4">Force HTTPS</div>
                                <div class="col-md-4"><b-form-checkbox>enabled (http://example.com -> https://example.com)</b-form-checkbox></div>
                                <div class="col-md-4"></div>
                            </div>
                            <div class="row https-scope4">
                                <div class="col-md-4">HSTS HTTPS</div>
                                <div class="col-md-4"><b-form-checkbox>enabled</b-form-checkbox></div>
                                <div class="col-md-4"></div>
                            </div>
                            <div class="row https-scope5">
                                <div class="col-md-4"></div>
                                <div class="col-md-4"><b-form-checkbox>includeSubDomains</b-form-checkbox></div>
                                <div class="col-md-4"></div>
                            </div>
                            <div class="row https-scope6">
                                <div class="col-md-4"></div>
                                <div class="col-md-4"><b-form-checkbox>preload</b-form-checkbox></div>
                                <div class="col-md-4"></div>
                            </div>
                            <div class="row https-scope7">
                                <div class="col-md-4">Certification type</div>
                                <div class="col-md-4">
                                    <b-form-group>
                                        <b-form-radio-group
                                                v-model="CertificationSelected"
                                                :options="CertificationOptions"
                                                name="radios-stacked"
                                                stacked
                                        ></b-form-radio-group>
                                    </b-form-group>
                                </div>
                            </div>
                            <div class="row https-scope8" v-if="CertificationSelected=='first'">
                                <div class="col-md-4">Let's Encrypt e-mail</div>
                                <div class="col-md-4"><input type="text" placeholder="info@example.com"></div>
                                <div class="col-md-4"></div>
                            </div>
                            <div class="row https-scope9-1" v-if="CertificationSelected=='second'">
                                <div class="col-md-4">ssl_certificate</div>
                                <div class="col-md-4"><input type="text" placeholder="/etc/nginx/ssl/example.com.crt"></div>
                                <div class="col-md-4"></div>
                            </div>
                            <div class="row https-scope9-2" v-if="CertificationSelected=='second'">
                                <div class="col-md-4">ssl_certificate_key</div>
                                <div class="col-md-4"><input type="text" placeholder="/etc/nginx/ssl/example.com.key"></div>
                                <div class="col-md-4"></div>
                            </div>
                        </div>


                    </div>

                    <!--Reverse Proxy區塊-->
                    <div class="button-content " v-if="col==3">
                        <div class="row reverse-proxy-scope1">
                            <div class="col-md-2">Reverse Proxy</div>
                            <div class="col-md-10"><label for="reverse-proxy-checkbox"><input type="checkbox" id="reverse-proxy-checkbox" v-model="reverseProxyEnabled">enabled</label></div>
                        </div>
                        <div class="row reverse-proxy-scope2">
                            <div class="col-md-3">Path</div>
                            <div class="col-md-9"><input type="text" v-model="reverseProxyPathInput"></div>
                        </div>
                        <div class="row reverse-proxy-scope3">
                            <div class="col-md-3">proxy_pass</div>
                            <div class="col-md-9"><input type="text" value="http://127.0.0.1:80" v-model="reverseProxyPass"></div>
                        </div>
                    </div>
                </div>

        <div class="config-preview">
            <pre>
                <code>
                    server {
                        {{ConfigPreview.LISTEN}} {{ipv4Input}};
                        {{ConfigPreview.LISTEN}} [::]{{ipv6Input}};

                    {{ConfigPreview.SERVER_NAME}} <span v-if="subDomainCheckbox">www.</span>{{domainInput}};
                        {{ConfigPreview.SET}} {{serverPathPlaceholder}}{{domainInput}}
                        {{ConfigPreview.ROOT}} {{documentRootInput}};

                        <span v-if="reverseProxyEnabled">
                            location /{{reverseProxyPathInput}}{
                                {{ConfigPreview.PROXY_PASS}} {{reverseProxyPass}}
                            }
                        </span>
                    }
                </code>
            </pre>

        </div>


    </div>
</template>

<script>
    import ConfigPreview from '../config.preview'

    export default {
        name: "Home",
        methods: {
            showArea (col) {
                this.col=col;

                this.buttonScope[col-1]="buttonScopeNotClicked"
            },
            inputServerPath () {
                this.serverPathPlaceholder = this.serverPathInput
            },
            httpSwitch () {
                if(this.httpEnabled == true) {
                    this.httpConfig = 'httpEnabled'
                }
                else{
                    this.httpConfig = 'httpClose'
                }
            }
        },
        data () {
            return {
                buttonScope:['buttonScopeClicked','buttonScopeClicked','buttonScopeClicked'],
                col: 1,
                domainInputBox: '',
                pathInputBox: '',
                documentRootInputBox: '',
                ConfigPreview: ConfigPreview,
                domainInput: '',
                serverPathInput: '',
                serverPathPlaceholder: '/var/www/',
                documentRootInput: '',
                ipv4Input: '',
                ipv6Input: '',
                subDomainCheckbox: false,
                CertificationSelected: 'first',
                CertificationOptions: [
                    { text: 'Let\'sEncrypt', value: 'first' },
                    { text: 'custom certificate', value: 'second' }
                ],
                reverseProxyPathInput: '',
                reverseProxyPass: '',
                reverseProxyEnabled: false,
                httpEnabled: true,
                httpConfig: 'httpEnabled',
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
    .config-preview{
        margin-top: 100px;
    }
    .httpEnabled{
    }
    .httpClose{
        opacity:0.5;
        pointer-events:none;
    }


</style>

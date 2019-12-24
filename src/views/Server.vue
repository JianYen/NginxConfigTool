<template>
    <div  class="row server-content">
        <div class="col-md-6 xxx">
            <div class="row">
                <div class="col-md-4 xxx">
                    <div>Domain</div>
                </div>
                <div class="col-md-8 xxx">
                    <input class="server-input" type="text" placeholder="example.com">
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 xxx">
                    <div>Path</div>
                </div>
                <div class="col-md-8 xxx">
                    <input class="server-input" type="text" placeholder="/var/www/example.com">
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 xxx">
                    <div>Document root</div>
                </div>
                <div class="col-md-8 xxx">
                    <input class="server-input" type="text" placeholder="/public">
                </div>
            </div>
        </div>


        <div class="col-md-6 xxx">Domain
            <div>
                <input type="checkbox" id="checkbox-1"  v-model="serverChecked" @click="isServerChecked()">
                <label for="checkbox-1">I accept</label>
            </div>
            <div>
                <input type="text" v-bind:serverInput="serverInput">
            </div>
        </div>

    </div>
</template>

<script>
    import App from '../App'


    export default {
        name: "Server",
        components: {
            App,
        }
    }
</script>

<style scoped>

</style>

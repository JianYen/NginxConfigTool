<template>
  <div class="about">
    <h1>This is an about page</h1>
    <b-table show-empty :items="items" :fields="fields" :current-page="currentPage" :per-page="0"></b-table>
    <b-pagination size="md" :total-rows="totalItems" v-model="currentPage" :per-page="perPage"></b-pagination>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        items: [],
        fields: [{
          key: 'postId',
          label: 'Post ID'
        },
          {
            key: 'id',
            label: 'ID'
          },
          {
            key: 'name',
            label: 'Name'
          },
          {
            key: 'email',
            label: 'Email'
          },
          {
            key: 'body',
            label: 'Body'
          }
        ],
        currentPage: 0,
        perPage: 10,
        totalItems: 0
      }
    },
    mounted() {
      this.fetchData().catch(error => {
        console.error(error)
      })
    },
    methods: {
      async fetchData() {
        this.items = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${this.currentPage}&_limit=${this.perPage}`)
                .then(res => {
                  this.totalItems = parseInt(res.headers.get('x-total-count'), 10)

                  return res.json()
                })
                .then(items => items)
      }
    },
    watch: {
      currentPage: {
        handler: function(value) {
          this.fetchData().catch(error => {
            console.error(error)
          })
        }
      }
    }
  }
</script>

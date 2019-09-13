<template>
    <div id="app">
        <div class="container">
            <h1>Top 100 cryptocurrencies</h1>
            <table-top v-if="top100cryptocurrencies.length" :top100cryptocurrencies="top100cryptocurrencies" :url="url"/>
            <section v-if="addcryptocurrencies.length">
                <h2>Other cryptocurrencies</h2>
                <infinity-table :addcryptocurrencies="addcryptocurrencies" :url="url"/>
            </section>
        </div>
    </div>
</template>

<script>
    import TableTop from "./components/TableTop"
    import InfinityTable from "./components/InfinityTable"
    import axios from 'axios'

    export default {
        name: 'app',
        data() {
            return {
                top100cryptocurrencies: [],
                allcryptocurrencies: [],
                addcryptocurrencies: [],
                url: {
                    base: 'https://www.cryptocompare.com',
                    top100cryptocurrencies: 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD',
                    allcryptocurrencies: 'https://min-api.cryptocompare.com/data/all/coinlist'
                }
            }
        },
        methods: {
            scroll (addcryptocurrencies) {
                window.onscroll = () => {
                    let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
                    if (bottomOfWindow) {
                        var arrLength = addcryptocurrencies.length;
                        var counter = 0;
                        for (let i in this.allcryptocurrencies){
                            if (counter == arrLength && counter < arrLength + 2){
                                addcryptocurrencies.push(this.allcryptocurrencies[i])
                            }
                            else if(counter >= arrLength + 2){
                                break
                            }
                            counter++;
                        }
                    }
                };
            },
            getCryptocurrencies: function () {
                axios
                    .get(this.url.top100cryptocurrencies)
                    .then((response) => {
                        this.top100cryptocurrencies = response.data.Data;
                    })
                    .catch(error => {
                        console.log(error);
                        alert(error)
                    });
            },
            getAllCryptocurrencies: function () {
                axios
                    .get(this.url.allcryptocurrencies)
                    .then((response) => {
                        this.allcryptocurrencies = response.data.Data;
                    })
                    .catch(error => {
                        console.log(error);
                        alert(error)
                    });
            }
        },
        created() {
            this.getCryptocurrencies();
            this.interval = setInterval(() => {
              this.getCryptocurrencies();
            }, 3000 );
        },
        beforeMount(){
            this.getAllCryptocurrencies();
        },
        mounted(){
            this.scroll(this.addcryptocurrencies);
        },
        components: {
            TableTop,
            InfinityTable
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .container {
        width: 100%;
        max-width: 1200px;
        margin: 50px auto;
    }
</style>

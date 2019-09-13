<template>
    <table class="table">
        <tr>
            <th class="table__header text-right">#</th>
            <th class="table__header"></th>
            <th class="table__header">Name</th>
            <th class="table__header">Market cap $</th>
        </tr>
        <tr v-for="(cryptocurrency, index) in sortByCost">
            <td class="table__data text-right">{{ index+1 }}</td>
            <td class="table__data text-right"><img class="table__img" :src="url.base + cryptocurrency.CoinInfo.ImageUrl" alt="icon"></td>
            <td class="table__data">{{ cryptocurrency.CoinInfo.FullName }}</td>
            <td class="table__data">{{ cryptocurrency.RAW.USD.PRICE }}</td>
        </tr>
    </table>
</template>

<script>

    export default {
        name: "TableTop",
        props: {
            top100cryptocurrencies: Array,
            url: Object
        },
        computed: {
            sortByCost: function () {
                return this.top100cryptocurrencies.sort((a, b) => a.RAW.USD.PRICE > b.RAW.USD.PRICE ? -1 : 1);
            }
        }
    }
</script>

<style lang="scss">
    .table {
        width: 100%;
        border-collapse: collapse;
        background-color: #f0f0f0;
        &__header{
            padding: 15px 10px;
            border-bottom: 2px solid #bbb;
            text-align: left;
        }
        &__data{
            padding: 10px;
            border-bottom: 1px solid #bbb;
            text-align: left;
        }
        &__data_half{
            width: 50%;
        }
        &__img{
            width: 25px;
        }
    }
    .text-right{
        text-align: right;
    }
</style>
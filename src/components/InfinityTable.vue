<template>
    <div>
        <table class="table">
            <tr>
                <th class="table__header"></th>
                <th class="table__header">Name</th>
            </tr>
            <tr v-for="cryptocurrency in addcryptocurrencies">
                <td class="table__data text-right table__data_half"><img class="table__img" :src="url.base + cryptocurrency.ImageUrl" alt="icon"></td>
                <td class="table__data">{{ cryptocurrency.CoinName }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "InfinityTable",
        props: {
            addcryptocurrencies: {},
            url: Object
        },
    }
</script>

<style scoped>

</style>
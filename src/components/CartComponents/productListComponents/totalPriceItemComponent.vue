<template lang="">
    <tr>
        <td></td>
        <td>Total price</td>
        <td><div class='price-holder'>{{this.totalPrice}}<div class='price-currency'>USD</div></div></td>
        <td></td>
        <td width='40px'></td>
    </tr>
</template>
<script>
export default {
    props:{
        totalPrice: Number
    }
}
</script>
<style scoped>
.price-holder{
    display: flex;
    align-items: baseline;
}
.price-currency{
    font-size: 13px;
    margin-left: 2%;
}
</style>
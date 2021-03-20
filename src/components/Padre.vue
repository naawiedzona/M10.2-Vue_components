<template>
     <div id="padre">
        <p>Componente padre</p>
        <Hijo v-for="hijo in hijos" :title="hijo.title" v-bind:key="hijo.id"></Hijo>
    </div>
</template>

<script src="./../scripts/padre.js"></script>
<style src="./../styles/padre.css" scoped></style>

<script setup>

import { ref } from 'vue';

const name = ref('');
const lastname = ref('');
const mail = ref('');
const address = ref('');
const zipcode = ref('');

const formdata = () => {


const data = {
    "Navn": name.value,
    "Efternavn": lastname.value,
    "E-mail": mail.value,
    "Adresse": address.value,
    "Postnummer": zipcode.value
};

    fetch('https://valideringsform-web-default-rtdb.europe-west1.firebasedatabase.app/valideringsdata.json', {
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then (response => {
        if (!response.ok) {
            throw new Error('Der er opstået en fejl');
        }
        return response.json();
    })
    .then(() => {
    console.log(data)
})
.catch(error => {
    console.log('Der er opstået en fejl', error)
});
}

</script>
<template>
    <main>
        <div class="wrapper">
            <div class="wrapper-heading">
                <h2>Valideringsform</h2>
            </div>
            <div class="container-name-lastname">
                <div class="container-name span">
                <h4>Indtast dit fornavn</h4>
                <input type="text" v-model="name">
            </div>
            <div class="container-lastname span">
                <h4>Indtast dit efternavn</h4>
                <input type="text" v-model="lastname">
            </div>
        </div>
            <div class="container-mail span">
                <h4>Indtast din e-mail (Påkrævet)</h4>
                <input type="email" v-model="mail">
            </div>
            <div class="container-name-lastname">
                <div class="container-name span">
                <h4>Adresse</h4>
                <input type="text" v-model="address">
            </div>
            <div class="container-lastname span">
                <h4>Postnummer</h4>
                <input type="text" v-model="zipcode">
            </div>
        </div>
            <button @click="formdata">Send til database</button>
        </div> 
    </main>
</template>
<template>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="handleSubmit">
        <label> Email
            <input type="text" name="email" v-model="email">
        </label>

        <br/>

        <label> Password
            <input type="password" name="email" v-model="password">
        </label>


        <input type="submit" name="submitBtn" value="Login">

    </form>
</template>

<script>
import { ref } from 'vue';

export default {
    name: "Login",
    setup(){
        const email = ref("");
        const password = ref("");


        const handleSubmit = () =>{
            console.log(email.value, password.value);
            console.log("submit");

            axios.get('/sanctum/csrf-cookie').then(response => {
                let xsrf = response.config.headers["X-XSRF-TOKEN"];
                //console.log(response.config.headers["X-XSRF-TOKEN"]);
                axios.post('/api/login', {email, password}).then((response) => {
                    console.log(response);
                });
            });
        }

        return {
            handleSubmit,
            email,
            password,
        }
    }
}
</script>

<style scoped>

</style>

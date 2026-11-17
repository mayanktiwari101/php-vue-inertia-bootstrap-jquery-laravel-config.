
<script setup>
import { Head } from '@inertiajs/vue3';
import { onMounted, onUnmounted } from 'vue';

defineProps({
    message: String
});

onMounted(() => {
    $('#myButton').on('click', function () {

        console.log('Button clicked!');

        $('#message')
            .text('Updated via jQuery!')
            .fadeOut(200)
            .fadeIn(200);

    });
});

onUnmounted(() => {
    $('#myButton').off('click');
});
</script>

<template>
    <Head title="Home" />

    <div class="container mt-5">
        <div class="card shadow p-4">

            <h1 class="text-primary">
                Welcome to Laravel + Vue!
            </h1>

            <p class="mt-3" id="message">
                {{ message }}
            </p>

            <button
                class="btn btn-primary"
                id="myButton"
            >
                Click Me
            </button>

        </div>
    </div>
</template>

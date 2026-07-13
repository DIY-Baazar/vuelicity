<template>
    <div class="space-y-2">
        <pub-checkbox v-for="(fruit, i) in fruits" :key="i" v-model="selectedFruits" :label="fruit" :value="fruit"
            name="fruits" />
        <p class="mb-4 text-sm text-gray-500">
            Selected fruits: {{ selectedFruits }}
        </p>
        <pub-checkbox v-for="(name, id) in planets" :key="id" v-model="selectedPlanets" :label="name" :value="parseInt(id)"
            name="planets" />
        <p class="text-sm text-gray-500">
            Selected planets: {{ selectedPlanets }}
        </p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { PubCheckbox } from 'vuelicity';

const selectedFruits = ref(['Banana', 'Strawberry']);
const fruits = [
    'Apple',
    'Banana',
    'Orange',
    'Strawberry'
];

const selectedPlanets = ref([3]);
const planets = {
    1: 'Mercury',
    2: 'Venus',
    3: 'Earth',
    4: 'Mars',
    5: 'Jupiter',
    6: 'Saturn',
    7: 'Uranus',
    8: 'Neptune',
};
</script>
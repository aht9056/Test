<template>
    <div class="home">
        <HelloWorld />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
    name: 'HomeView',
    components: {
        HelloWorld,
    },
    setup() {
        const createArray = <T,>(length: number, value: T): Array<T> => {
            let result: T[] = []
            for (let i = 0; i < length; i++) {
                result[i] = value
            }
            return result
        }
        const user = ref<number[]>([0, 1, 2])
        const sayHello = (person: string | number[]) => {
            return 'Hello, ' + person
        }
        const sayHello2 = () => {
            return sayHello(user.value)
        }
        onMounted(() => {})
        return {
            user,
            sayHello,
        }
    },
})
</script>
<style scoped>
.home {
    width: 100%;
}
</style>

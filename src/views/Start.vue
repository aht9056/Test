<template>
    <div class="component-a">
        <div class="login position-absolute">
            <article class="l-design-width">
                <div class="card">
                    <h2>Administrator</h2>
                    <label class="input">
                        <input
                            class="input__field"
                            type="text"
                            placeholder=" "
                            v-model="userName"
                        />
                        <span class="input__label">userName</span>
                    </label>
                    <label class="input">
                        <input
                            class="input__field"
                            type="password"
                            placeholder=" "
                            v-model="password"
                        />
                        <span class="input__label">password</span>
                    </label>
                    <div class="button-group">
                        <button @click="login()">login</button>
                        <button type="reset">Reset</button>
                    </div>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName: '',
            password: '',
        }
    },
    methods: {
        login() {
            // 登入邏輯
            console.log('執行登入操作')
            this.$router.push('/home')
        },
    },
}
</script>

<style lang="scss" scoped>
.login {
    width: 460px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 450px) {
        width: 300px;
    }
}
h1,
h2,
h3 {
    font-weight: 900;
}

.card {
    background: white;
    padding: calc(4 * 0.5rem);
    border-radius: var(--size-radius);
    border: 3px solid var(--color-shadow, var(--color-signal));
    box-shadow: 0.5rem 0.5rem 0 var(--color-shadow, var(--color-signal));
}

.l-design-width {
    padding: 1rem;
}

.input {
    position: relative;
    margin-top: 12px;
    &__label {
        position: absolute;
        left: 0;
        top: 0;
        padding: calc(var(--size-bezel) * 0.75) calc(var(--size-bezel) * 0.5);
        margin: calc(var(--size-bezel) * 0.75 + 3px)
            calc(var(--size-bezel) * 0.5);
        white-space: nowrap;
        transform: translate(0, 0);
        transform-origin: 0 0;
        background: var(--color-background);
        transition: transform 120ms ease-in;
        font-weight: bold;
        line-height: 1.2;
    }
    &__field {
        font-weight: 900;
        box-sizing: border-box;
        display: block;
        width: 100%;
        border: 3px solid var(--color-signal);
        padding: calc(var(--size-bezel) * 1.5) var(--size-bezel);
        color: var(--color-signal);
        background: transparent;
        border-radius: var(--size-radius);
        outline: none;
        &:focus,
        &:not(:placeholder-shown) {
            & + .input__label {
                transform: translate(-0.25rem, -65%) scale(0.8);
                color: var(--color-signal);
            }
            border: 3px solid var(--color-primary);
        }
    }
}
.button-group {
    margin-top: calc(var(--size-bezel) * 2.5);
}

button {
    color: var(--color-signal);
    padding: var(--size-bezel) calc(var(--size-bezel) * 2);
    background: var(--color-primary);
    border: none;
    border-radius: var(--size-radius);
    font-weight: 900;

    &[type='reset'] {
        background: var(--color-background);
        font-weight: 900;
    }
}

button + button {
    margin-left: calc(var(--size-bezel) * 2);
}
</style>

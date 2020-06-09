<template>
    <div>
        <Header></Header>
        <div class="container">
            <div class="py-5">
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './components/Header.vue'

    export default {
        components: {
            Header
        },
        created(){
            return this.$store.dispatch('initStocks');
        }
    }
</script>

<style>
    .slide-enter-active {
        animation: slide-in 200ms ease-in forwards;
    }
    .slide-leave-active {
        animation: slide-out 200ms ease-in forwards;
    }
    @keyframes slide-in{
        from{
            transform: translateY(30px);
            opacity: 0;
        }
        to{
            transform: translateY(0px);
            opacity: 1;
        }
    }
        @keyframes slide-out{
        from{
            transform: translateY(0px);
            opacity: 1;
        }
        to{
            transform: translateY(-30px);
            opacity: 0;
        }
    }
</style>

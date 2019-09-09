<template>
    <div/>
</template>

<script>
    export default {
        name: 'Intercom',
        computed: {
            intercomId() {
                return FRAMEPAY_DOCS_INTERCOM_ID;
            },
        },
        mounted() {
            let counter = 30;
            const timer = () => setTimeout(() => {
                counter -= 1;
                if (counter <= 0) {
                    return;
                }
                if (window.Intercom) {
                    this.setup();
                } else {
                    timer();
                }
            }, 1000);

            this.timer = timer();
        },
        beforeDestroy() {
            clearTimeout(this.timer);
        },
        methods: {
            setup() {
                window.Intercom('boot', {
                    app_id: this.intercomId,
                });
            },
        },
    };
</script>

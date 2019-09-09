(function () {
    Rebilly.initialize({publishableKey: 'pk_sandbox_1234567890'});

    var form = document.querySelector('form');

    Rebilly.on('ready', () => {
        var card = Rebilly.card.mount('#mounting-point');
    });


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();

        Rebilly.createToken(form)
            .then((result) => {
                console.log(result);
            })
            .catch(error => alert(JSON.stringify(error)));
    });
})();

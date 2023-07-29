const estrelas = document.querySelectorAll('.estrela')

estrelas.forEach((esse) => {
    esse.addEventListener('click', function spanEstrela(){
        const p = document.getElementById('pErro');
        p.innerText = "Entre ou Cadastre-se para avaliar. ";
    })
})

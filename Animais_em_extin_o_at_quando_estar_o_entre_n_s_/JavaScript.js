const selectPagamento = document.getElementById('pagamento');
const grupoCartao = document.getElementById('grupo-cartao');
const grupoBoleto = document.getElementById('grupo-boleto');
const grupoPix = document.getElementById('grupo-pix');
const formulario = document.getElementById('form-doacao');
 
function esconderGrupos() {
    [grupoCartao, grupoBoleto, grupoPix].forEach(function (grupo) {
        if (grupo) grupo.style.display = 'none';
    });
}
 
if (selectPagamento) {
    selectPagamento.addEventListener('change', function () {
        if (grupoCartao) grupoCartao.style.display = this.value === 'cartao' ? 'flex' : 'none';
        if (grupoBoleto) grupoBoleto.style.display = this.value === 'boleto' ? 'flex' : 'none';
        if (grupoPix) grupoPix.style.display = this.value === 'pix' ? 'flex' : 'none';
    });
}
 
if (formulario) {
    
    formulario.addEventListener('reset', esconderGrupos);
 
    formulario.addEventListener('submit', function (event) {

        event.preventDefault();
 
        if (selectPagamento && selectPagamento.value === 'cartao') {
 
            const numeroCartao = document.getElementById('num-cartao').value.trim();
            const validade = document.getElementById('validade').value.trim();
            const cvv = document.getElementById('cvv').value.trim();
 
            if (numeroCartao.replace(/\s/g, '').length !== 16) {
                alert('Digite um número de cartão válido.');
                return;
            }
 
            if (!/^\d{2}\/\d{2}$/.test(validade)) {
                alert('Digite a validade no formato MM/AA.');
                return;
            }
 
            if (!/^\d{3,4}$/.test(cvv)) {
                alert('Digite um CVV válido.');
                return;
            }
        }
 
        if (selectPagamento && selectPagamento.value === 'boleto') {
 
            const cpf = document.getElementById('cpf-boleto').value.trim();
            const endereco = document.getElementById('endereco-boleto').value.trim();
            const cep = document.getElementById('cep-boleto').value.trim();
 
            if (cpf === '') {
                alert('Digite o CPF.');
                return;
            }
 
            if (endereco === '') {
                alert('Digite o endereço.');
                return;
            }
 
            if (!/^\d{5}-\d{3}$/.test(cep)) {
                alert('Digite um CEP válido.');
                return;
            }
        }
 
        if (selectPagamento && selectPagamento.value === 'pix') {
 
            const chavePix = document.getElementById('chave-pix').value.trim();
 
            if (chavePix === '') {
                alert('Digite uma chave Pix.');
                return;
            }
        }
 
        alert('Doação realizada com sucesso! (simulação, nenhum dado foi enviado)');
        formulario.reset();
    });
}
 
document.addEventListener('click', function (event) {
    const lightbox = document.getElementById('lightbox');
    const imagemAmpliada = document.getElementById('imagem-ampliada');
 
    if (event.target.matches && event.target.matches('.galeria img')) {
        if (lightbox && imagemAmpliada) {
            imagemAmpliada.src = event.target.src;
            imagemAmpliada.alt = event.target.alt;
            lightbox.style.display = 'flex';
        }
    }
 
    if (lightbox && (event.target === lightbox || (event.target.matches && event.target.matches('.fechar')))) {
        lightbox.style.display = 'none';
        if (imagemAmpliada) imagemAmpliada.src = '';
    }
});
 
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        const lightbox = document.getElementById('lightbox');
        const imagemAmpliada = document.getElementById('imagem-ampliada');
        if (lightbox) {
            lightbox.style.display = 'none';
            if (imagemAmpliada) imagemAmpliada.src = '';
        }
    }
});
 
document.addEventListener('click', function (event) {
    if (event.target.matches('.hamburguer')) {
        const menu = document.querySelector('.menu');
        if (menu) menu.classList.toggle('aberto');
    }
});
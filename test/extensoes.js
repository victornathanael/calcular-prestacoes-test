const calculaValor = require('../src/calcula-valor.js');

expect.extend({
    tenhaSomaDeValoresIgual(itens, soma) {
        const somaReal = calculaValor.arredondar(itens.reduce((a, t) => a + t));
        const passou = somaReal === calculaValor.arredondar(soma);

        return {
            message: () => `A soma ${somaReal} deve ser igual a ${soma}`,
            pass: passou,
        };
    },

    sejaDecrescente(itens) {
        for (let i = 0; i < itens.length - 1; i++) {
            const j = i + 1;
            expect(itens[i]).toBeGreaterThanOrEqual(itens[j]);
        }

        return {
            message: () => 'O array deve estar em ordem decrescente',
            pass: true,
        };
    },
});

export function retornaValorProporcional(valor, porcentagem) {
    const valorProporcional = (valor * porcentagem) / 100;

    return valorProporcional;
}

export function retornaTotalJuros(valorDivida, jurosDivida) {
    const total = parseFloat(valorDivida) + parseFloat(jurosDivida);

    return total;
}

export function retornaTotalDesconto(valorDivida, descontoDivida) {
    const total = parseFloat(valorDivida) - parseFloat(descontoDivida);

    return total;
}
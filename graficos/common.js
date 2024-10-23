const getCSS = (variavel) => {
  return getComputedStyle(document.body).getPropertyValue(variavel)
}

const tickConfig = {
  family: getCSS('--font'),
  size: 16,
  color: getCSS('--primary-color')
}

function criarGrafico(data, layout) {
  const grafico = document.createElement('div');
  grafico.className = 'grafico';
  document.getElementById('graficos-container').appendChild(grafico);
  Plotly.newPlot(grafico, data, layout)
}

export { getCSS, tickConfig, criarGrafico }
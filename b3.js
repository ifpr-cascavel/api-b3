// URL da API pública e gratuita BRAPI para dados da B3
const API_BASE_URL = 'https://brapi.dev/api/quote/';

const inputTicker = document.getElementById('ticker-input');
const btnSearch = document.getElementById('search-btn');

const cardResult = document.getElementById('result-card');
const loadingElement = document.getElementById('loading');
const errorElement = document.getElementById('error-message');

const elSymbol = document.getElementById('stock-symbol');
const elName = document.getElementById('stock-name');
const elLogo = document.getElementById('stock-logo');
const elPrice = document.getElementById('stock-price');
const elChange = document.getElementById('stock-change');
const elLow = document.getElementById('stock-low');
const elHigh = document.getElementById('stock-high');
const elTime = document.getElementById('stock-time');

btnSearch.addEventListener('click', searchStock);
inputTicker.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    searchStock();
  }
});

async function searchStock() {
  const symbol = inputTicker.value.trim().toUpperCase();

  if (!symbol) {
    showError('Por favor, digite um código de ação válido.');
    return;
  }

  showLoading();

  try {
    const response = await fetch(`${API_BASE_URL}${symbol}`);

    if (!response.ok) {
      throw new Error('Ação não encontrada ou falha no serviço.');
    }

    const data = await response.json();
    
    if (!data.results || data.results.length === 0) {
      throw new Error('Nenhum dado encontrado para este código.');
    }

    renderStockData(data.results[0]);
  } catch (error) {
    showError(error.message);
  }
}

function renderStockData(stock) {
  elSymbol.textContent = stock.symbol;
  elName.textContent = stock.shortName || stock.longName || 'N/A';
  
  if (stock.logourl) {
    elLogo.src = stock.logourl;
    elLogo.classList.remove('hidden');
  } else {
    elLogo.classList.add('hidden');
  }

  elPrice.textContent = formatCurrency(stock.regularMarketPrice);
  
  const change = stock.regularMarketChangePercent || 0;
  elChange.textContent = `${change >= 0 ? '+' : ''}${change.toFixed(2)}%`;
  elChange.className = `badge ${change >= 0 ? 'positive' : 'negative'}`;

  elLow.textContent = formatCurrency(stock.regularMarketDayLow);
  elHigh.textContent = formatCurrency(stock.regularMarketDayHigh);

  const date = new Date(stock.regularMarketTime);
  elTime.textContent = date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

  hideLoading();
  hideError();
  cardResult.classList.remove('hidden');
}

function formatCurrency(value) {
  if (value === undefined || value === null) return 'R$ 0,00';
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function showLoading() {
  loadingElement.classList.remove('hidden');
  cardResult.classList.add('hidden');
  hideError();
}

function hideLoading() {
  loadingElement.classList.add('hidden');
}

function showError(message) {
  hideLoading();
  cardResult.classList.add('hidden');
  errorElement.textContent = message;
  errorElement.classList.remove('hidden');
}

function hideError() {
  errorElement.classList.add('hidden');
}

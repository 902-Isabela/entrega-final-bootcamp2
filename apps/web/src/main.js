// apps/web/main.js

// O endereço é injetado pelo Docker Compose
const API_BASE_URL = window.location.origin.includes('localhost') 
    ? 'http://localhost:3000' // Para rodar localmente fora do Docker
    : ''; // Se estiver no Docker/Pages, assume-se o caminho relativo

// Função de Teste Rápido da API (crucial para o Playwright)
async function testApi() {
  const statusEl = document.getElementById('api-status');
  try {
    const res = await fetch(`${API_BASE_URL}/api/hello`);
    const data = await res.json();
    statusEl.textContent = data.msg;
    statusEl.setAttribute('data-testid', 'api-ok');
  } catch (error) {
    statusEl.textContent = 'API OFFLINE ou Erro de CORS.';
  }
}

// Lógica para buscar o CEP
async function buscarCep() {
  const cepInput = document.getElementById('cep-input');
  const resultadoDiv = document.getElementById('resultado');
  const cep = cepInput.value.replace(/\D/g, '');

  if (cep.length !== 8) {
    resultadoDiv.innerHTML = '<p style="color: red;">CEP deve ter 8 dígitos.</p>';
    return;
  }

  resultadoDiv.innerHTML = '<p>Buscando...</p>';
  
  try {
    const res = await fetch(`${API_BASE_URL}/api/cep/${cep}`);
    const data = await res.json();
    
    if (res.status === 404) {
      resultadoDiv.innerHTML = '<p style="color: red;">CEP não encontrado.</p>';
      return;
    }

    resultadoDiv.innerHTML = `
      <h3>${data.endereco}</h3>
      <p>Cidade/Estado: ${data.cidade_estado}</p>
    `;

  } catch (error) {
    resultadoDiv.innerHTML = '<p style="color: red;">Falha ao conectar com a API.</p>';
  }
}


document.addEventListener('DOMContentLoaded', () => {
  testApi();
  document.getElementById('buscar-btn').addEventListener('click', buscarCep);
});
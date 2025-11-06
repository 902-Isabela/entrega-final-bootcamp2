// apps/api/index.js
import express from 'express';
import fetch from 'node-fetch'; 
import cors from 'cors'; 

const app = express();
app.use(cors()); 
app.use(express.json());

// Rota de Teste (para Playwright)
app.get('/api/hello', (req, res) => {
  res.json({ status: 'API OK', msg: 'API está online e conectada!' });
});

// Rota de Busca de CEP (ViaCEP)
app.get('/api/cep/:cep', async (req, res) => {
  const { cep } = req.params;
  const cepLimpo = cep.replace(/\D/g, '');
  
  if (cepLimpo.length !== 8) {
    return res.status(400).json({ error: 'CEP inválido' });
  }

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
    const data = await response.json();
    
    if (data.erro) {
      return res.status(404).json({ error: 'CEP não encontrado' });
    }
    
    res.json({
      endereco: `${data.logradouro}, ${data.bairro}`,
      cidade_estado: `${data.localidade} - ${data.uf}`,
      cep: data.cep
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
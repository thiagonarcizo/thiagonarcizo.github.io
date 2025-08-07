# 🏖️ Vendée Trip - Planificateur de Voyage

Aplicação web para planejamento de viagem colaborativa para a Vendée (10-13 Agosto 2025).

## 🚀 Funcionalidades

- ✅ **Planejamento colaborativo** em tempo real
- 📅 **Gerenciamento de planos** por dia
- 💰 **Controle de gastos** compartilhado
- 🌤️ **Previsão do tempo** para La Roche-sur-Yon
- 📊 **Dashboard** com gráficos de gastos
- 🔄 **Sincronização automática** entre dispositivos
- 📱 **Design responsivo** para mobile

## 🔧 Configuração

### 1. Clone o repositório
```bash
git clone https://github.com/thiagonarcizo/thiagonarcizo.github.io.git
cd thiagonarcizo.github.io
```

### 2. Configure o Firebase
1. Acesse o [Console Firebase](https://console.firebase.google.com/)
2. Crie um novo projeto
3. Configure o Realtime Database
4. Copie as configurações do projeto

### 3. Configure as credenciais
```bash
# Copie o arquivo de exemplo
cp firebase-config.example.js firebase-config.js

# Edite o arquivo com suas credenciais reais
# NUNCA commite este arquivo!
```

### 4. Regras do Firebase
No Console Firebase > Realtime Database > Regras:
```json
{
  "rules": {
    "plans": {
      ".read": true,
      ".write": true
    },
    "costs": {
      ".read": true,
      ".write": true
    }
  }
}
```

## 🔐 Segurança

- ⚠️ **NUNCA** commite credenciais Firebase
- 📁 O arquivo `firebase-config.js` está no `.gitignore`
- 🔑 Use o arquivo `firebase-config.example.js` como template
- 🛡️ Configure regras de segurança no Firebase

## 🚀 Deploy

### GitHub Pages
1. Configure suas credenciais em `firebase-config.js`
2. Faça upload manual do arquivo via interface web do GitHub
3. Ative o GitHub Pages nas configurações do repositório

### Netlify/Vercel
1. Configure variáveis de ambiente:
   - `FIREBASE_API_KEY`
   - `FIREBASE_AUTH_DOMAIN`
   - `FIREBASE_DATABASE_URL`
   - etc.
2. Use build script para gerar `firebase-config.js` automaticamente

## 👥 Usuários

- **Thiago**: senha `tvendee2025`
- **Laurine**: senha `lvendee2025`

## 🛠️ Tecnologias

- HTML5, CSS3, JavaScript ES6+
- Firebase Realtime Database
- Tailwind CSS
- Chart.js
- Weather API

## 📱 Recursos

- **Offline-first**: funciona sem internet usando localStorage
- **Real-time sync**: mudanças aparecem instantaneamente
- **Responsive**: otimizado para mobile e desktop
- **PWA-ready**: pode ser instalado como app

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commite suas mudanças
4. Push para a branch
5. Abra um Pull Request

---

**⚠️ Lembre-se**: Nunca commite credenciais sensíveis! Use sempre o arquivo de configuração externo.
# Vendée Trip - Deploy configurado com sucesso! 🏖️

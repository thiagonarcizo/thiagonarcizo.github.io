# 🔐 Variáveis de Ambiente para Netlify

Configure estas variáveis exatas no painel do Netlify:

## 📝 Como configurar:

1. Vá para **Site settings > Environment variables** no Netlify
2. Clique em **"Add variable"** para cada uma abaixo:

## 🔑 Variáveis necessárias:

```
FIREBASE_API_KEY = SUA_API_KEY_AQUI

FIREBASE_AUTH_DOMAIN = seu-projeto.firebaseapp.com

FIREBASE_DATABASE_URL = https://seu-projeto-default-rtdb.REGIAO.firebasedatabase.app

FIREBASE_PROJECT_ID = seu-projeto-id

FIREBASE_STORAGE_BUCKET = seu-projeto.firebasestorage.app

FIREBASE_MESSAGING_SENDER_ID = 123456789

FIREBASE_APP_ID = 1:123456789:web:abc123def456

FIREBASE_MEASUREMENT_ID = G-XXXXXXXXXX
```

## ⚠️ IMPORTANTE:
- Copie e cole EXATAMENTE como mostrado acima
- NÃO inclua aspas ao redor dos valores
- Use exatamente estes nomes de variáveis
- Substitua pelos valores reais do seu Firebase Console

## 🚀 Após configurar:
1. Faça um novo deploy clicando em "Deploy site" 
2. Ou faça um novo commit para triggar deploy automático

## 📍 Onde encontrar suas credenciais:
1. Acesse [Console Firebase](https://console.firebase.google.com/)
2. Selecione seu projeto
3. Vá em **⚙️ Configurações do projeto**
4. Role até **"Seus aplicativos"**
5. Clique no ícone **Web** `</>`
6. Copie as configurações mostradas

---

**🔒 Segurança:** Estas credenciais ficam seguras como variáveis de ambiente no Netlify e não aparecem no código público do GitHub.

# 🔐 Variáveis de Ambiente para Netlify

Configure estas variáveis exatas no painel do Netlify:

## 📝 Como configurar:

1. Vá para **Site settings > Environment variables** no Netlify
2. Clique em **"Add variable"** para cada uma abaixo:

## 🔑 Variáveis necessárias:

```
FIREBASE_API_KEY = AIzaSyC882xWyLH3BplVttnlI2DmaqD5K7X_M3g

FIREBASE_AUTH_DOMAIN = vendee-tl.firebaseapp.com

FIREBASE_DATABASE_URL = https://vendee-tl-default-rtdb.europe-west1.firebasedatabase.app

FIREBASE_PROJECT_ID = vendee-tl

FIREBASE_STORAGE_BUCKET = vendee-tl.firebasestorage.app

FIREBASE_MESSAGING_SENDER_ID = 458594171973

FIREBASE_APP_ID = 1:458594171973:web:ce0c22e01e164dd481372c

FIREBASE_MEASUREMENT_ID = G-BVRQXHJC4F
```

## ⚠️ IMPORTANTE:
- Copie e cole EXATAMENTE como mostrado acima
- NÃO inclua aspas ao redor dos valores
- Use exatamente estes nomes de variáveis

## 🚀 Após configurar:
1. Faça um novo deploy clicando em "Deploy site" 
2. Ou faça um novo commit para triggar deploy automático

---

**🔒 Segurança:** Estas credenciais ficam seguras como variáveis de ambiente no Netlify e não aparecem no código público do GitHub.

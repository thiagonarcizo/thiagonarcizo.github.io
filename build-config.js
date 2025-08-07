// build-config.js
// Script para gerar firebase-config.js a partir de variáveis de ambiente
// Usado durante o deploy em produção

const fs = require('fs');

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || "FIREBASE_API_KEY_NOT_SET",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || "FIREBASE_AUTH_DOMAIN_NOT_SET",
  databaseURL: process.env.FIREBASE_DATABASE_URL || "FIREBASE_DATABASE_URL_NOT_SET",
  projectId: process.env.FIREBASE_PROJECT_ID || "FIREBASE_PROJECT_ID_NOT_SET",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "FIREBASE_STORAGE_BUCKET_NOT_SET",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "FIREBASE_MESSAGING_SENDER_ID_NOT_SET",
  appId: process.env.FIREBASE_APP_ID || "FIREBASE_APP_ID_NOT_SET",
  measurementId: process.env.FIREBASE_MEASUREMENT_ID || "FIREBASE_MEASUREMENT_ID_NOT_SET"
};

const configContent = `// firebase-config.js
// Gerado automaticamente durante o build
// NÃO edite este arquivo manualmente

window.firebaseConfig = ${JSON.stringify(firebaseConfig, null, 2)};
`;

fs.writeFileSync('firebase-config.js', configContent);
console.log('✅ firebase-config.js gerado com sucesso!');

// Verificar se as variáveis foram definidas
const missingVars = Object.entries(firebaseConfig)
  .filter(([key, value]) => value.includes('_NOT_SET'))
  .map(([key]) => key);

if (missingVars.length > 0) {
  console.warn('⚠️  Variáveis de ambiente não definidas:', missingVars);
  process.exit(1); // Falhar o build se variáveis não estiverem definidas
} else {
  console.log('✅ Todas as variáveis de ambiente configuradas!');
}

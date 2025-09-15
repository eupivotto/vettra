// scripts/prepare-static.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Para usar __dirname em ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const apiDir = path.join(__dirname, '../src/app/api');
const apiBackupDir = path.join(__dirname, '../src/app/api_backup');

if (process.env.DEPLOY_TARGET === 'hostgator') {
  // Mover API routes para backup antes do build estático
  if (fs.existsSync(apiDir)) {
    if (fs.existsSync(apiBackupDir)) {
      fs.rmSync(apiBackupDir, { recursive: true });
    }
    fs.renameSync(apiDir, apiBackupDir);
    console.log('✅ API routes movidas para backup (build estático)');
  } else {
    console.log('📁 Pasta api não encontrada - provavelmente já foi movida');
  }
} else {
  // Restaurar API routes para build normal
  if (fs.existsSync(apiBackupDir) && !fs.existsSync(apiDir)) {
    fs.renameSync(apiBackupDir, apiDir);
    console.log('✅ API routes restauradas (build normal)');
  } else if (!fs.existsSync(apiBackupDir)) {
    console.log('📁 Nenhum backup de API encontrado');
  } else {
    console.log('📁 API routes já estão no lugar correto');
  }
}

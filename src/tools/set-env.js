const fs = require('fs');
const envPath = './src/environments/environment.prod.ts';

const content = `
export const environment = {
  production: true,
  emailServiceID: '${process.env.NG_APP_EMAIL_SERVICE_ID}',
  emailTemplateID: '${process.env.NG_APP_EMAIL_TEMPLATE_ID}',
  emailPublicKey: '${process.env.NG_APP_EMAIL_PUBLIC_KEY}'
};
`;

fs.writeFileSync(envPath, content);
console.log('environment.prod.ts generated via set-env.js');

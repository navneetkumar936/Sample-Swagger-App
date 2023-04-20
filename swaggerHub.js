import { exec } from 'child_process';

const parsedArgs = {};

process.argv.slice(2).forEach((arg) => {
  const parts = arg.split('=');

  parsedArgs[parts[0]] = parts[1];
});

console.log('out here ==> ', parsedArgs);

if (parsedArgs.createSwagger) {
  exec(`swaggerhub api:create NAVNEETKUMAR936_2/Product_App_5/1.0.0 --file swagger.json`, (err, stdout, stderr) => {
    if (err) {
      // node couldn't execute the command
      return;
    }
  
    // the *entire* stdout and stderr (buffered)
    console.log(`stdout in create: ${stdout}`);
    console.log(`stderr in create: ${stderr}`);
});
}

if (parsedArgs.updateSwagger) {
  exec(`swaggerhub api:update OWNER/API_NAME/1.0.0 --file swagger.json`);
}

if (parsedArgs.listSwagger) {
}

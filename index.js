if (!process.env.page_token) {
    console.log('Error: Specify page_token in environment');
    process.exit(1);
}

if (!process.env.verify_token) {
  console.log('Error: Specify verify_token in environment');
  process.exit(1);
}

if (!process.env.server_url) {
  console.log('Error: Specify server_url in environment');
  process.exit(1);
}

require('./bot').bootstrap(process.env.page_token, process.env.verify_token, process.env.server_url);

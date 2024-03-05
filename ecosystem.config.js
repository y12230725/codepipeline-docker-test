module.exports = {
  apps: [
    {
      name: 'api-gateway',
      script: './dist/apps/api-gateway/main.js',
      out_file: './.pm2/logs/api-gateway/out.log',
      error_file: './.pm2/logs/api-gateway/error.log',
      env_production: {
        NODE_ENV: 'production',
        TZ: 'Asia/Seoul',
        NO_COLOR: true,
      },
      env_staging: {
        NODE_ENV: 'staging',
        TZ: 'Asia/Seoul',
        NO_COLOR: true,
      },
      env_development: {
        NODE_ENV: 'development',
        TZ: 'Asia/Seoul',
        NO_COLOR: true,
      },
      exec_mode: 'cluster',
      time: true,
      merge_log: true,
    },
    {
      name: 'svc-hello',
      script: './dist/apps/svc-hello/main.js',
      out_file: './.pm2/logs/svc-hello/out.log',
      error_file: './.pm2/logs/svc-hello/error.log',
      env_production: {
        NODE_ENV: 'production',
        TZ: 'Asia/Seoul',
        NO_COLOR: true,
      },
      env_staging: {
        NODE_ENV: 'staging',
        TZ: 'Asia/Seoul',
        NO_COLOR: true,
      },
      env_development: {
        NODE_ENV: 'development',
        TZ: 'Asia/Seoul',
        NO_COLOR: true,
      },
      exec_mode: 'cluster',
      time: true,
      merge_log: true,
    },
  ],
};

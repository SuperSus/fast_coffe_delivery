# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

#### In development start
```bash
rake telegram:bot:poller
```

### CONFIG SERVER
https://kukicola.io/posts/deploying-rails-6-application-with-dokku/

ssh root@ip

### upgrade dokku
https://dokku.com/docs/getting-started/upgrading/
###### update your local apt cache
sudo apt-get update -qq
###### update dokku and its dependencies
sudo apt-get -qq -y --no-install-recommends install dokku herokuish sshcommand plugn gliderlabs-sigil dokku-update dokku-event-listener
dokku ps:rebuild --all

- add swap file to prevent oom
```bash
fallocate -l 4G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
```
- vi /etc/fstab
- add this line to the bottom
```bash
/swapfile none swap sw 0 0
```


dokku apps:create fastcoffedelivery
dokku buildpacks:add fastcoffedelivery https://github.com/heroku/heroku-buildpack-nodejs.git
dokku buildpacks:add fastcoffedelivery https://github.com/heroku/heroku-buildpack-ruby.git

dokku config:set fastcoffedelivery RAILS_ENV=production
dokku config:set fastcoffedelivery RAILS_MASTER_KEY=your_master_key #config/credentials/production.key

dokku plugin:install https://github.com/dokku/dokku-postgres.git
dokku postgres:create fastcoffedelivery_db
dokku postgres:link fastcoffedelivery_db fastcoffedelivery

dokku plugin:install https://github.com/dokku/dokku-redis.git redis
dokku redis:create fastcoffedelivery_redis
dokku redis:link fastcoffedelivery_redis fastcoffedelivery

##### SSL
dokku domains:add fastcoffedelivery fastcoffedeliverybot.ml
dokku domains:add fastcoffedelivery www.fastcoffedeliverybot.ml
dokku domains:set fastcoffedelivery fastcoffedeliverybot.ml


dokku plugin:install https://github.com/dokku/dokku-letsencrypt.git
dokku config:set --no-restart fastcoffedelivery DOKKU_LETSENCRYPT_EMAIL=sikorskyalexandr08@gmail.com
dokku letsencrypt:enable fastcoffedelivery
-- to update certificates automatically
dokku letsencrypt:cron-job --add

### MOUNT persisted storage
dokku storage:ensure-directory --chown fastcoffedelivery_storage
chmod -R 'a+w' /var/lib/dokku/data/storage/fastcoffedelivery_storage
dokku storage:mount fastcoffedelivery /var/lib/dokku/data/storage/fastcoffedelivery_storage:/app/storage
dokku storage:list fastcoffedelivery

PROCFILE:
web: bundle exec puma -C config/puma.rb
release: bundle exec rails db:migrate

### DEPLOYMNET

git remote add dokku dokku@IP_ADDRESS:fastcoffedelivery
git push dokku main:master

#### LOGS
dokku logs fastcoffedelivery -t
dokku logs:failed --all

#### PROD CONSOLE
dokku run fastcoffedelivery rails c

#### LINTERS
```bash
  eslint --ext .jsx app/javascript --fix
```

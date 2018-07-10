- [ ] knex-config is the same as database-connection
- [ ] how to avoid error when trying to migrate table to heroku: 
``` 
Error: connect ECONNREFUSED 127.0.0.1:5432
    at Object._errnoException (util.js:992:11)
    at _exceptionWithHostPort (util.js:1014:20)
    at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1186:14)
```

- [ ] do I have a prob w/ my environment variable in my knex-config file
- [ ] do I have a prob with the development.connection string in knexfile
- [ ] I have 2 tables when looking at heroku online under postgres addon link
- [ ] tried destroying db on heroku 
- [ ] tried commmenting out the alter seq in the seeds- no joy.
- [ ] tried renaming table to 'rezs' in migrations, seeds, and queries- WORKING, but why?
- [ ] how to switch app name in heroku to another existing heroku
- [ ] ran heroku run psql (anything I need to stop it?)
- [ ] ran heroku pg:reset (settings > config vars now empty)
    - [ ] tried to remigrate with:
        - heroku run rake db:migrate (failed)
        - heroku run db:migrate (failed)
- [ ] how to migrate to another hosted db
- [ ] how to permanently kill a heroku db from cli
- [ ] is this a case for naming my migrations 1 increment higher 00_tableName > 01_tableName
- [ ] how to configure knexfile/ nodemodules
- [ ] is ```\'../knexfile\'``` one folder up
- [ ] ON NEW DB 7-10: migration table pres locally

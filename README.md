# Online Shop Project

### Database 

```shell
mysql -u root
```

```sql
create database modernshopdb;
use modernshopdb;
create user modernshopuser identified with mysql_native_password by 'modernshoppass';
grant all privileges on modernshopdb.* to modernshopuser;
flush privileges;
```
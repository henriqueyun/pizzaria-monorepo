MYSQL_USER=root
echo "Digite o nome do usuário MySQL (default: $MYSQL_USER):"
read MYSQL_USER
echo "(Digite a senha para o $MYSQL_USER):"
mysql -u $MYSQL_USER -p < create-db.sql
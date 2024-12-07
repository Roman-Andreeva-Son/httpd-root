//Вход на гелоиос на определенный порт
ssh -p 2222 -l s413014 -L 8081:localhost:24027 helios.cs.ifmo.ru

//Запуск апач сервера
httpd -f /home/studs/s413014/httpd-root/mutex-dir/httpd1.conf -k start

//запуск fastCGI джарника(бекенда)
java -jar -DFCGI_PORT=24028 httpd-root/fcgi-bin/web1-0.jar

//возможно для запуска апач сервера придется переимновать проект c lab1 на httpd-root

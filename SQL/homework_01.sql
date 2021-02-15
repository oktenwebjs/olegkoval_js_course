
-- 1. Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.
SELECT * FROM client WHERE LENGTH(firstname) < 6;

-- 2. +Вибрати львівські відділення банку.+
SELECT * FROM department WHERE departmentcity = 'Lviv';

-- 3. +Вибрати клієнтів з вищою освітою та посортувати по прізвищу.
SELECT * FROM client WHERE education = 'high' ORDER BY lastname;

-- 4. +Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.
SELECT * FROM application ORDER BY idapplication DESC LIMIT 5;

-- 5. +Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA.
SELECT * FROM client WHERE lastname LIKE '%ov' OR lastname LIKE '%ova';

-- 6. +Вивести клієнтів банку, які обслуговуються київськими відділеннями.
SELECT client.* FROM client INNER JOIN department ON client.department_iddepartment = department.iddepartment WHERE department.departmentcity = 'Kyiv';

-- 7. +Вивести імена клієнтів та їхні номера телефону, погрупувавши їх за іменами.
SELECT firstname, lastname, GROUP_CONCAT(passport) FROM client GROUP BY firstname, lastname;

-- 8. +Вивести дані про клієнтів, які мають кредит більше ніж на 5000 тисяч гривень.
SELECT c.* as not_returned FROM client c INNER JOIN application a ON c.idclient = a.client_idclient WHERE a.creditstate = 'Not returned' GROUP BY a.client_idclient, c.idclient HAVING SUM(a.sum) > 5000;

-- 9. +Порахувати кількість клієнтів усіх відділень та лише львівських відділень.
SELECT COUNT(idclient) FROM client;
SELECT COUNT(c.*) FROM client c INNER JOIN department d ON d.iddepartment = c.department_iddepartment WHERE d.departmentcity = 'Lviv';

-- 10. Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.
SELECT MAX(a.sum), c.firstname, c.lastname FROM application a INNER JOIN client c on c.idclient = a.client_idclient WHERE a.creditstate = 'Not returned' GROUP BY c.idclient, a.client_idclient;

-- 11. Визначити кількість заявок на крдеит для кожного клієнта.
SELECT count(a.*), c.firstname, c.lastname FROM application a INNER JOIN client c on c.idclient = a.client_idclient GROUP BY c.idclient, a.client_idclient;

-- 12. Визначити найбільший та найменший кредити.
SELECT MAX(a.sum) as max_application, MIN(a.sum) as min_application FROM application a WHERE a.creditstate = 'Not returned';

-- 13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.
SELECT count(a.*) FROM application a INNER JOIN client c on c.idclient = a.client_idclient WHERE c.education = 'high';

-- 14. Вивести дані про клієнта, в якого середня сума кредитів найвища.
SELECT AVG(a.sum) as avg_sum, c.* FROM application a INNER JOIN client c on c.idclient = a.client_idclient WHERE a.creditstate = 'Not returned' GROUP BY c.idclient, a.client_idclient ORDER BY avg_sum DESC LIMIT 1;

-- 15. Вивести відділення, яке видало в кредити найбільше грошей
SELECT SUM(a.sum) as application_sum, d.* as application_sum FROM application a INNER JOIN client c on c.idclient = a.client_idclient INNER JOIN department d on d.iddepartment = c.department_iddepartment WHERE a.creditstate = 'Not returned' GROUP BY d.iddepartment ORDER BY application_sum DESC LIMIT 1;

-- 16. Вивести відділення, яке видало найбільший кредит.
SELECT MAX(a.sum) as application_max, d.* as application_sum FROM application a INNER JOIN client c on c.idclient = a.client_idclient INNER JOIN department d on d.iddepartment = c.department_iddepartment WHERE a.creditstate = 'Not returned' GROUP BY d.iddepartment ORDER BY application_max DESC LIMIT 1;

-- 17. Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.
UPDATE application a SET sum = 6000 FROM client c WHERE c.idclient = a.client_idclient AND c.education = 'high';

-- 18. Усіх клієнтів київських відділень пересилити до Києва.
UPDATE client c SET city = 'Kyiv' FROM department d WHERE c.department_iddepartment = d.iddepartment AND d.departmentcity = 'Kyiv';

-- 19. Видалити усі кредити, які є повернені.
DELETE FROM application WHERE creditstate = 'Returned';

-- 20. Видалити кредити клієнтів, в яких друга літера прізвища є голосною.
DELETE FROM application WHERE client_idclient IN (SELECT idclient FROM client WHERE SUBSTRING(LOWER(lastname), 2, 1) IN ('a', 'e', 'y', 'i', 'o'));

-- Знайти львівські відділення, які видали кредитів на загальну суму більше ніж 5000
SELECT d.*, SUM(a.sum) FROM department d INNER JOIN client c ON d.iddepartment = c.department_iddepartment INNER JOIN application a on c.idclient = a.client_idclient WHERE d.departmentcity = 'Lviv' AND a.creditstate = 'Not returned' GROUP BY d.iddepartment HAVING SUM(a.sum) > 5000;

-- Знайти клієнтів, які повністю погасили кредити на суму більше ніж 5000
SELECT c.* FROM client c INNER JOIN application a ON c.idclient = a.client_idclient WHERE a.creditstate = 'Returned' GROUP BY c.idclient HAVING SUM(a.sum) > 5000;

-- Знайти максимальний неповернений кредит.
SELECT MAX(sum) FROM application WHERE creditstate = 'Not returned';

-- Знайти клієнта, сума кредиту якого найменша
SELECT c.* FROM client c INNER JOIN application a on c.idclient = a.client_idclient ORDER BY a.sum LIMIT 1;

-- Знайти кредити, сума яких більша за середнє значення усіх кредитів
SELECT * FROM application WHERE sum > (SELECT AVG(sum) FROM application);

-- Знайти клієнтів, які є з того самого міста, що і клієнт, який взяв найбільшу кількість кредитів
SELECT * FROM client WHERE city IN (SELECT city FROM client WHERE idclient IN (SELECT client_idclient FROM (SELECT COUNT(idapplication) as max_app, client_idclient FROM application GROUP BY client_idclient ORDER BY max_app DESC LIMIT 1) t3));

-- місто чувака який набрав найбільше кредитів
SELECT city FROM client WHERE idclient IN (SELECT client_idclient FROM (SELECT SUM(sum) as max_sum, client_idclient FROM application GROUP BY client_idclient ORDER BY max_sum DESC LIMIT 1) t3);

# 1. +Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.
select * from client where length(FirstName)<6;
#2. +Вибрати львівські відділення банку.+
select * from department where DepartmentCity='Lviv';
#3. +Вибрати клієнтів з вищою освітою та посортувати по прізвищу.
select * from client where Education='high' order by LastName;
#4. +Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.
select * from client order by idClient desc limit 5;
#5. +Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA.
select * from client where LastName like ('%ov' or '%ova');
#6. +Вивести клієнтів банку, які обслуговуються київськими відділеннями.
select client.FirstName,client.LastName,d.DepartmentCity from client join department d on client.Department_idDepartment = d.idDepartment
where d.DepartmentCity='kyiv';
#7. +Вивести імена клієнтів та їхні номера телефону, погрупувавши їх за іменами.
select FirstName,Passport from client group by FirstName;
#8. +Вивести дані про клієнтів, які мають кредит більше ніж на 5000 тисяч гривень.
select client.FirstName,client.LastName,a.Sum as SumaCredit from client
join application a on client.idClient = a.Client_idClient where a.Sum<5000;
#9. +Порахувати кількість клієнтів усіх відділень та лише львівських відділень.
select count(client.idClient) from client;
select count(Client.idClient) from client join department d on client.Department_idDepartment = d.idDepartment
where d.DepartmentCity='lviv';
#10. Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.
select sum(Sum) as sumOfCredits,FirstName,LastName,idClient from application join
    client c on application.Client_idClient = c.idClient  group by idClient  order by sumOfCredits desc;
#11. Визначити кількість заявок на крдеит для кожного клієнта.
select FirstName,LastName, count(Client_idClient) as Num_of_applications from application join
    client c on application.Client_idClient = c.idClient group by Client_idClient;
#12. Визначити найбільший та найменший кредити.
select max(Sum),min(Sum) from application;
#13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.
select FirstName,LastName, count(Client_idClient) as Num_of_Credits from application
    join client c on application.Client_idClient = c.idClient where Education='high' group by Client_idClient;
#14. Вивести дані про клієнта, в якого середня сума кредитів найвища.
select FirstName,LastName,Client_idClient,avg(Sum) as Avg_Sum from application
    join client c on application.Client_idClient = c.idClient group by Client_idClient order by Avg_Sum desc limit 1;

#15. Вивести відділення, яке видало в кредити найбільше грошей
select idDepartment,DepartmentCity,Sum(sumOfCreditsClients) as SumOfCreditsDepartment from(

select FirstName,LastName,idDepartment,DepartmentCity,Sum(Sum) as sumOfCreditsClients from department
    join client c on department.idDepartment = c.Department_idDepartment
    join application a on c.idClient = a.Client_idClient
group by idClient) as T group by idDepartment order by SumOfCreditsDepartment desc limit 1;
#16. Вивести відділення, яке видало найбільший кредит.
select idDepartment,DepartmentCity,Sum from (
SELECT idClient,FirstName,LastName,Sum,Department_idDepartment from application
join client c on application.Client_idClient = c.idClient
order by Sum desc limit 1) as T  join department d on Department_idDepartment=d.idDepartment;
#17. Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.
update application join client c on application.Client_idClient = c.idClient
set Sum=6000
where Education='high';
#18. Усіх клієнтів київських відділень пересилити до Києва.
update client  join department d on client.Department_idDepartment = d.idDepartment
set City='Kyiv'
where DepartmentCity='Kyiv';
#19. Видалити усі кредити, які є повернені.
delete  from application where CreditState='Returned';
#20. Видалити кредити клієнтів, в яких друга літера прізвища є голосною.
delete a from application a
    join client c on a.Client_idClient = c.idClient
where LastName like '_e%' or  LastName like '_u%' or LastName like '_i%' or LastName like '_o%' or LastName like '_a%' ;

#Знайти львівські відділення, які видали кредитів на загальну суму більше ніж 5000
select  idDepartment,DepartmentCity,suma from(
select idDepartment,DepartmentCity, sum(sum) as suma from application
join client c on application.Client_idClient = c.idClient
join department d on c.Department_idDepartment = d.idDepartment
  group by idDepartment order by idDepartment) as T where suma>5000 and DepartmentCity='lviv';

#Знайти клієнтів, які повністю погасили кредити на суму більше ніж 5000
select idClient, FirstName, LastName, Sum, CreditState, Currency  from client
join application a on client.idClient = a.Client_idClient
where Sum>5000 and CreditState='returned';

#/* Знайти максимальний неповернений кредит.*/
select idClient, FirstName, LastName, Sum, CreditState, Currency  from client
join application a on client.idClient = a.Client_idClient
where  CreditState='not returned' order by Sum desc limit 1;

#/*Знайти клієнта, сума кредиту якого найменша*/
select idClient, FirstName, LastName, sum(Sum) as suma, CreditState, Currency  from client
join application a on client.idClient = a.Client_idClient
 group by idClient order by suma limit 1;

#/*Знайти кредити, сума яких більша за середнє значення усіх кредитів*/
SELECT idApplication,CreditState,Currency,suma,(select avg(Sum) from application) as average from (
SELECT *,Sum(sum) as suma from application
group by Client_idClient) as t where suma> (select avg(Sum) from application);

#/*Знайти клієнтів, які є з того самого міста, що і клієнт, який взяв найбільшу кількість кредитів*/
select * from client where City=

(SELECT City from(
select *,count(Client_idClient) as num,Client_idClient as id from application
right join client c on application.Client_idClient = c.idClient
    group by Client_idClient order by num desc limit 1) as t where id=idClient);

#місто чувака який набрав найбільше кредитів
select City from(
select *,Sum(Sum) as suma,Client_idClient as id from application
join client c on application.Client_idClient = c.idClient
group by Client_idClient order by suma desc limit 1) as t where id=idClient;
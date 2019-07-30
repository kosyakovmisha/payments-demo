drop table if exists categories;

create table categories (
    category_id serial primary key ,
    category_name varchar(15) not null unique ,
    category_description varchar(30)
);

drop table if exists payments;

create table payments (
    payment_id serial primary key,
    payment_name varchar(20) not null unique,
    payment_description varchar(30),
    category_id int references categories(category_id)
);

insert into categories values (1, 'Social', 'Social Payments');
insert into categories values (2, 'Medicine', 'Medicine Payments');
insert into categories values (3, 'Tax', 'Tax Payments');
insert into categories values (4, 'Education', 'Education Payments');

insert into payments values (1, 'Cinema', 'Payment for cinema.', 1);
insert into payments values (2, 'Internet', 'Payment for internet.', 1);
insert into payments values (3, 'Education in BSTU', 'Payment for education in BSTU.', 4);



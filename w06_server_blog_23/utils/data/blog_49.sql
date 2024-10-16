create table blog_49 (
    id int not null primary key,
    title varchar(255),
    descrip text,
    category varchar(255),
    img text,
    remote_img text
);

insert into blog_49 (id, title, descrip, category, img, remote_img)
values
(1, 'seven reasons why coffee is awesome', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', 'lifestyle', '/images/photo-1.jpg', ''),
(2, 'travel to paris', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', 'travel', '/images/photo-2.jpg', ''),
(3, 'seven reasons why coffee is awesome', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', 'lifestyle', '/images/photo-3.jpg', ''),
(4, 'travel to paris', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', 'travel', '/images/photo-4.jpg', ''),
(5, 'travel to paris', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', 'travel', '/images/photo-5.jpg', ''),
(6, 'travel to paris', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', 'travel', '/images/photo-6.jpg', ''),
(7, 'travel to paris', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', 'travel', '/images/photo-7.jpg', ''),
(8, 'travel to paris', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', 'travel', '/images/photo-8.jpg', ''),
(9, 'travel to paris', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', 'travel', '/images/photo-9.jpg', '')
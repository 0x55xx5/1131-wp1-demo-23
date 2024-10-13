CREATE TABLE blog_post_23 (
    id INT not null PRIMARY KEY,
    title VARCHAR(255),
    desp TEXT,
     catlog VARCHAR(255),
     img  TEXT,
     remote_img TEXT
);
-- Insert rows into table 'blog_post_23'
INSERT INTO blog_post_23
( -- columns to insert data into
 [id], [title], [desp], [catlog], [img], [remote_img]
)
VALUES ( -- values to insert
 1, 'seven reasons why coffee is awesome', 'orem ipsum dolor, sit amet consectetur adipisicing elit.', 'lifestyle', './images/photo-1.jpg', 'remote_img1'
),
( -- values to insert
 2, 'travel to paris', 'orem ipsum dolor, sit amet consectetur adipisicing elit.', 'travel', './images/photo-1.jpg', 'remote_img1'
);
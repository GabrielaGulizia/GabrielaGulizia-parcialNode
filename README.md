# GabrielaGulizia-parcialNode
1-  
sequelize model:generate --name Brand --attributes name:string 

2
sequelize model:generate --name Category --attributes name:string

3-
sequelize model:generate --name Address --attributes street:string,number:integer,state_id:integer

4-
sequelize model:generate --name Size --attributes name:string

5-
sequelize model:generate --name State --attributes name:string

6-
sequelize model:generate --name Gender --attributes name:string

7-
sequelize model:generate --name Payment --attributes type:string



FOREIGN KEY


8-
sequelize model:generate --name Imagen --attributes name:string,url:string,description:string

9-
sequelize model:generate --name Shipping --attributes type:string,date:date,address_id:integer

10-
sequelize model:generate --name OrderDetail --attributes quantity:decimal,subtotal:decimal,order_id:integer,product_id:integer

11-
sequelize model:generate --name User --attributes first_name:string,last_name:string,username:string,email:string,password:string,address_id:integer

12-
sequelize model:generate --name Product --attributes name:string,price:decimal,brand_id:integer,category_id:integer,size_id:integer,gender_id:integer,image_id:integer

13-
sequelize model:generate --name Order --attributes number:integer,date:date,user_id:integer,payment_id:integer,shipping_id:integer

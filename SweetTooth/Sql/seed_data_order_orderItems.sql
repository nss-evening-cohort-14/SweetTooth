-- insert snack data
insert into Snack (Id, [Name], Category, Price, [Description], [Image])
	values 
		('abd18a81-fd9c-47ef-a931-9320bf33276a', 'Skittles', 'Sweet', 2.50, 'A variety of bite-sized chewy candies with a colorful candy shell.', 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Skittles-Louisiana-2003.jpg'),
		('bce4630e-3810-4cf1-a136-252f76ed70d1', 'Jolly Rancher', 'Sweet', 3.00, 'Sweet, hard candy with bold fruit flavors.', 'https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/jolly-ranchers-sup----sup-bulk-candy-2000-pc-~13872198'),
		('0e12f4a6-9ce6-4462-b040-c14daa553485', 'Brownies', 'Sweet', 4.00, 'The best brownie recipe! Made with cocoa powder and chocolate chips.', 'https://www.cookingclassy.com/wp-content/uploads/2019/05/brownies-22.jpg'),
		('4626b769-13fa-46bc-ae2d-ee4c2fbbf4e8', 'Chocolate Covered Pretzles', 'Savory', 4.00, 'Chocolate Covered Pretzels are sweet, salty, and crunchy, made with pretzel twists, melted chocolate and flaky sea salt.', 'https://superiornutchicago.com/wp-content/uploads/2015/09/520.jpg'),
		('2a0e5980-0527-4e96-b03f-cde30990a9e7', 'Kettle Chips', 'Savory', 3.50, 'Kettle Brand chips are made out of whole potatoes that are sliced thick and flavorfully seasoned.', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2016%2F03%2Fhd-fw200404_078chips.jpg'),
		('51d577a2-45c3-4bee-80ba-65d2becf76f8', 'Beef Jerky', 'Savory', 5.00, 'The freshest and highest quality beef jerky.', 'https://www.freshoffthegrid.com/wp-content/uploads/teriyaki-beef-jerky-recipe.jpg')
;

-- insert mood data
insert into Mood (Id, [Name])
	values
		('c4892c07-e999-4bfc-aef6-50b4989a2544','Happy'),
		('efae66d0-afc7-49d8-9285-1c180bebec3c', 'Feels'),
		('c3f35310-bc3c-42d7-b747-443aa859afa3','Angry'),
		('5172c391-5275-4f82-8306-098a00d841d8','Rage'),
		('01a95448-05d7-45bc-b19b-25ae507f0fe9','Intoxicated'),
		('8764a369-6160-4df1-93dc-d317c8719462','Feelin Myself'),
		('7262ac83-1bfa-4eab-85db-b11ffff34f46','Thirsty'),
		('05289132-9926-49b9-a35e-608ffa9c9555','Stressed Out'),
		('b8e1d228-f8a4-4a42-af14-9f7ea555d813','Sick/Ill'),
		('04523550-3862-458c-841b-6d010b9e0b18','Futuristic'),
		('08296969-64d6-4916-89f5-1201422ea75b','Grizzly'),
		('11a6d15d-20c2-4b39-b86a-686637950c97','Extra'),
		('0e628817-e344-4335-9933-4c827d5ec2ad','Flex'),
		('81530eb5-27ab-475a-b0cc-3f03001ae9bd','LowKey')
;

-- insert snackMood data
insert into SnackMood (Id, MoodId, SnackId)
	values
		('7f52567a-7b2f-419f-8a55-259ae903bc33','c4892c07-e999-4bfc-aef6-50b4989a2544','abd18a81-fd9c-47ef-a931-9320bf33276a'),
		('36479c8b-372a-4a55-b72b-53843eecebd3','8764a369-6160-4df1-93dc-d317c8719462','abd18a81-fd9c-47ef-a931-9320bf33276a'),
		('e3d44ce9-3181-4754-8510-af643ce7dac4','0e628817-e344-4335-9933-4c827d5ec2ad','bce4630e-3810-4cf1-a136-252f76ed70d1'),
		('5f7e5259-d6bb-4f18-95ed-584879234bab','81530eb5-27ab-475a-b0cc-3f03001ae9bd','bce4630e-3810-4cf1-a136-252f76ed70d1'),
		('bf440428-73b8-4037-bcbf-71b204ded23e','05289132-9926-49b9-a35e-608ffa9c9555','0e12f4a6-9ce6-4462-b040-c14daa553485'),
		('cca19a5c-d000-4213-8bea-a7e371162df2','8764a369-6160-4df1-93dc-d317c8719462','0e12f4a6-9ce6-4462-b040-c14daa553485'),
		('22cc9c60-fad0-4e41-89db-680568882763','11a6d15d-20c2-4b39-b86a-686637950c97','4626b769-13fa-46bc-ae2d-ee4c2fbbf4e8'),
		('2e132083-fe60-4e3a-8a06-85468a82ec53','5172c391-5275-4f82-8306-098a00d841d8','4626b769-13fa-46bc-ae2d-ee4c2fbbf4e8'),
		('6fd5d1cc-6c1a-4bcc-a691-7b8cff312a12','04523550-3862-458c-841b-6d010b9e0b18','2a0e5980-0527-4e96-b03f-cde30990a9e7'),
		('5e577f20-b8ed-4b7b-9865-ceba70a38541','11a6d15d-20c2-4b39-b86a-686637950c97','2a0e5980-0527-4e96-b03f-cde30990a9e7'),
		('0e71c2bf-5607-4c2d-8c72-302506983bb2','7262ac83-1bfa-4eab-85db-b11ffff34f46','51d577a2-45c3-4bee-80ba-65d2becf76f8'),
		('f48aaa0e-d69b-46fd-8a3b-e6d02fe73fc8','01a95448-05d7-45bc-b19b-25ae507f0fe9','51d577a2-45c3-4bee-80ba-65d2becf76f8')
;

-- insert user data -- note: will need to test datetime constructor with C# first
/*insert into [User] (Id, FirstName, LastName, DateCreated, MoodId)
	values
		('1542282b-620c-47a1-a1ac-b538160ae161', 'TestUser', 'Juan', '', 'c4892c07-e999-4bfc-aef6-50b4989a2544'),
		('b6f71a9f-2496-4364-9069-03024b233e15', 'TestUser', 'Dos', '', '')
;*/


-- insert paymentMethod data -- note: will use enum on backend possibly for Payment Method
/*insert into PaymentMethod (Id, UserId, Method, CardNumber, ExpDate, SecurityCode)
	values
		()
;*/


-- note: likely leave population of this to development
-- insert order data
insert into [Order] (Id, UserId, OrderDate, OrderNumber, Total, PaymentMethodId, Processed, Shipped)
	values	
		('31C6502C-2531-EC11-A549-782B467938C5', '3D0DF9C9-7F30-EC11-A549-782B467938C5', cast('2021-10-19 05:50:06.000', datetime), 1234567895, 35.99, 'CA702FFE-2231-EC11-A549-782B467938C5', 1, 0)
;

-- insert userAddress data
/*insert into UserAddress (Id, UserId, Street, City, [State], Zip)
	values	
		()
;
*/

-- insert orderItem data
insert into OrderItem (Id, OrderId, SnackId, Quantity)
	values	
		('6FB5B9C1-2931-EC11-A549-782B467938C5', '31C6502C-2531-EC11-A549-782B467938C5', '0E12F4A6-9CE6-4462-B040-C14DAA553485', 5)
;


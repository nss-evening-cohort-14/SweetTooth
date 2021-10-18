-- create snack table
CREATE TABLE dbo.Snack
	(
	Id uniqueidentifier NOT NULL primary key default(newsequentialid()),
	[Name] varchar(50) NOT NULL,
	Category varchar(50) NOT NULL,
	Price money NOT NULL,
	[Description] varchar(500) NOT NULL,
	[Image] nvarchar(4000) NOT NULL
	);

-- create mood table
CREATE TABLE dbo.Mood
	(
	Id uniqueidentifier NOT NULL primary key default(newsequentialid()),
	[Name] varchar(50) NOT NULL
	);

-- create user table
CREATE TABLE dbo.[User]
	(
	Id uniqueidentifier NOT NULL primary key default(newsequentialid()),
	[Admin] bit NOT NULL,
	FirstName varchar(50) NOT NULL,
	LastName varchar(50) NOT NULL,
	DateCreated datetime NOT NULL,
	MoodId uniqueidentifier,
	CONSTRAINT FK_User_Mood FOREIGN KEY (MoodId)
		REFERENCES dbo.Mood (Id)
	);

-- create paymentMethod table
CREATE TABLE dbo.PaymentMethod
	(
	Id uniqueidentifier NOT NULL primary key default(newsequentialid()),
	UserId uniqueidentifier NOT NULL,
	Method varchar(20) NOT NULL,
	CardNumber int NOT NULL,
	ExpDate date NOT NULL,
	SecurityCode int NOT NULL,
	CONSTRAINT FK_PaymentMethod_User FOREIGN KEY (UserId)
		REFERENCES dbo.[User] (Id)
	);

-- create snackMood table
CREATE TABLE dbo.SnackMood
	(
	Id uniqueidentifier NOT NULL primary key default(newsequentialid()),
	MoodId uniqueidentifier NOT NULL,
	SnackId uniqueidentifier NOT NULL,
	CONSTRAINT FK_SnackMood_Snack FOREIGN KEY (SnackId)
		REFERENCES dbo.Snack (Id),
	CONSTRAINT FK_SnackMood_Mood FOREIGN KEY (MoodId)
		REFERENCES dbo.Mood (Id),
	);

-- create order table
CREATE TABLE dbo.[Order]
	(
	Id uniqueidentifier NOT NULL primary key default(newsequentialid()),
	UserId uniqueidentifier NOT NULL,
	OrderDate datetime NOT NULL,
	OrderNumber int NOT NULL,
	Total money NOT NULL,
	PaymentMethodId uniqueidentifier NOT NULL,
	Processed bit NOT NULL,
	Shipped bit NOT NULL,
	CONSTRAINT FK_Order_User FOREIGN KEY (UserId)
		REFERENCES dbo.[User] (Id),
	CONSTRAINT FK_Order_PaymentMethod FOREIGN KEY (PaymentMethodId)
		REFERENCES dbo.PaymentMethod (Id)
	);



-- create userAddress table
CREATE TABLE dbo.UserAddress
	(
	Id uniqueidentifier NOT NULL primary key default(newsequentialid()),
	UserId uniqueidentifier NOT NULL,
	Street varchar(50) NOT NULL,
	City varchar(50) NOT NULL,
	[State] varchar(2) NOT NULL,
	Zip varchar(10) NOT NULL,
	CONSTRAINT FK_UserAddress_User FOREIGN KEY (UserId)
		REFERENCES dbo.[User] (Id)
	);

-- create orderItem table
CREATE TABLE dbo.OrderItem
	(
	Id uniqueidentifier NOT NULL primary key default(newsequentialid()),
	OrderId uniqueidentifier NOT NULL,
	SnackId uniqueidentifier NOT NULL,
	Quantity int NOT NULL,
	CONSTRAINT FK_OrderItem_Order FOREIGN KEY (OrderId)
		REFERENCES dbo.[Order] (Id),
	CONSTRAINT FK_OrderItem_Snack FOREIGN KEY (SnackId)
		REFERENCES dbo.Snack (Id)
	);
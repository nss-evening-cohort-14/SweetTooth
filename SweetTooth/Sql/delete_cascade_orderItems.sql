ALTER TABLE dbo.OrderItem
	drop 
	CONSTRAINT FK_OrderItem_Order

alter table dbo.OrderItem
	add CONSTRAINT FK_OrderItem_Order FOREIGN KEY (OrderId)
		REFERENCES dbo.[Order] (Id) on delete cascade
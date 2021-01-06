CREATE TABLE IF NOT EXISTS `Customer`(
 `CustomerId`   int NOT NULL AUTO_INCREMENT ,
 `CustomerName` varchar(40) NOT NULL ,
 `Phone`        varchar(20) NULL ,

  PRIMARY KEY (`CustomerId`),
  UNIQUE KEY `AK1_Customer_CustomerName` (`CustomerName`)
) AUTO_INCREMENT=1;

CREATE TABLE IF NOT EXISTS `Order`
(
 `OrderId`     int NOT NULL AUTO_INCREMENT ,
 `OrderNumber` varchar(10) NULL ,
 `CustomerId`  int NOT NULL ,
 `OrderDate`   datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ,
 `TotalPrice`  decimal(12,2) NOT NULL ,
 `TotalPay`    decimal(12,2) NOT NULL ,

  PRIMARY KEY (`OrderId`),
  UNIQUE KEY `AK1_Order_OrderNumber` (`OrderNumber`),
  KEY `FK_Order_CustomerId_Customer` (`CustomerId`),
  CONSTRAINT `FK_Order_CustomerId_Customer` FOREIGN KEY `FK_Order_CustomerId_Customer` (`CustomerId`) REFERENCES `Customer` (`CustomerId`)
) AUTO_INCREMENT=1;


CREATE TABLE IF NOT EXISTS `OrderItem`
(
 `OrderId`   int NOT NULL ,
 `barcode_1` varchar(45) NOT NULL ,
 `UnitPrice` decimal(12,2) NOT NULL ,
 `Quantity`  int NOT NULL ,

  PRIMARY KEY (`OrderId`, `barcode_1`), KEY `FK_OrderItem_OrderId_Order` (`OrderId`),
  CONSTRAINT `FK_OrderItem_OrderId_Order` FOREIGN KEY `FK_OrderItem_OrderId_Order` (`OrderId`) REFERENCES `Order` (`OrderId`), KEY `FK_OrderItem_ProductId_Product` (`barcode_1`),
  CONSTRAINT `FK_OrderItem_ProductId_Product` FOREIGN KEY `FK_OrderItem_ProductId_Product` (`barcode_1`) REFERENCES `Product` (`barcode_1`)
);

CREATE TABLE IF NOT EXISTS `Product`
(
 `barcode_1`    varchar(45) NOT NULL ,
 `ProductName`  varchar(50) NOT NULL ,
 `SupplierId`   int NOT NULL ,
 `BasePrice`    decimal(12,2) NULL ,
 `Price`        decimal(12,2) NOT NULL DEFAULT 0 ,
 `Category`     varchar(45) NOT NULL ,
 `stock`        int NOT NULL ,
 `expire_date`  date NOT NULL ,
 `buy_date`     date NOT NULL ,
 `trademark`    varchar(45) NOT NULL ,
 `total_profit`  NOT NULL ,

PRIMARY KEY (`barcode_1`),
  UNIQUE KEY `AK1_Product_SupplierId_ProductName` (`ProductName`, `SupplierId`),
  KEY `FK_Product_SupplierId_Supplier` (`SupplierId`),
  CONSTRAINT `FK_Product_SupplierId_Supplier` FOREIGN KEY `FK_Product_SupplierId_Supplier` (`SupplierId`) REFERENCES `Supplier` (`SupplierId`)
);

CREATE TABLE IF NOT EXISTS `Supplier`(
    `SupplierId`  int NOT NULL AUTO_INCREMENT ,
    `CompanyName` varchar(40) NOT NULL ,
    `Phone`       varchar(20) NULL ,
  PRIMARY KEY (`SupplierId`),
  UNIQUE KEY `AK1_Supplier_CompanyName` (`CompanyName`)
) AUTO_INCREMENT=1;

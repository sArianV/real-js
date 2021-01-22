const sequelize = require("../../sequelize");
const get = require("./get");
const save = require("./save");

//{barcode_1, ProductName, SupplierId, BasePrice , Price, Category, stock, expire_date, buy_date, trademark, total_profit:0 },
const values = [{barcode_1: "1001", ProductName:"atun", SupplierId:1, BasePrice:10 , Price:15, Category:"Comida", stock:5, expire_date:null, buy_date:null, trademark:"Marolio", total_profit:0 }, 
    {barcode_1: "1002", ProductName:"mayonesa", SupplierId:2, BasePrice:20 , Price:25, Category:"Comida", stock:15, expire_date:null, buy_date:null, trademark:"Marolio", total_profit:0 },
    {barcode_1: "1003", ProductName:"choclo", SupplierId:1, BasePrice:30 , Price:35, Category:"Comida", stock:25, expire_date:null, buy_date:null, trademark:"Marolio", total_profit:0 },]

test('save and get all', async () => {
    await sequelize.sync();
    values.forEach(async (element) => {
        await save(element);
    });
    const result = await get();
    let i = 0;
    result.forEach((product) =>{
        expect(product.barcode_1).toEqual(values[i].barcode_1);
        expect(product.ProductName).toEqual(values[i].ProductName);
        expect(product.SupplierId).toEqual(values[i].SupplierId);
        i++;
    })
});
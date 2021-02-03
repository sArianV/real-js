const sequelize = require("../../sequelize");
const get = require("./get");
const save = require("./save");

const values = [
  { CompanyName: "Arcor", Phone: "1233321" },
  { CompanyName: "Maroleo", Phone: "555333777" },
  { CompanyName: "Grido", Phone: "221122" },
];

test("save and get all", async () => {
  await sequelize.sync();
  values.forEach(async (element) => {
    await save(element);
  });
  const result = await get();
  let i = 0;
  result.forEach((supplier) => {
    expect(supplier.CompanyName).toEqual(values[i].CompanyName);
    expect(supplier.Phone).toEqual(values[i].Phone);
    i++;
  });
});

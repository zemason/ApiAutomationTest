const request = require("supertest");
const { expect } = require("chai");
const baseUrl = require("../globalVariable/baseUrl");

const url = baseUrl;

async function getMethod() {
  const response = await request(url).get("/objects/12");
  expect(response.status).to.equal(200);
}

async function postMethod() {
  const response = await request(url)
    .post("/objects")
    .send({
      name: "Lumix G85",
      data: {
        Generation: "8th",
        Price: "6500",
        Capacity: "120 GB",
      },
    });
  expect(response.status).to.equal(200);
  expect(response.body.name).to.equal("Lumix G85");
}

async function patchMethod() {
  const response = await request(url)
    .post("/objects")
    .send({
      name: "Lumix G90",
      data: {
        Generation: "9th",
        Price: "8000",
        Capacity: "150 GB",
      },
    });
  expect(response.status).to.equal(200);
  expect(response.body.name).to.equal("Lumix G90");
}



module.exports = {getMethod, postMethod,patchMethod };
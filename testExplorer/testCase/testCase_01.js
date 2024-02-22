const request = require ("supertest");
const {expect} = require("chai");
const baseUrl = require("../globalVariable/baseUrl");


// const url = supertest("https://api.restful-api.dev/");
const url = `${baseUrl}`;

describe("Test API restful", function (){
    it("GET", async function () {
        const response = await request(url).get("/objects");
        expect(response.status).to.equal(200);
    }); 
    
})
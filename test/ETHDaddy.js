/* eslint-disable no-undef */
const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("ETHDaddy", () => {

  let ethdaddy;
  let deployer, owner1;

  beforeEach(async ()=> {
    [ deployer, owner1] = await ethers.getSigners();

    const ETHDaddy = await ethers.getContractFactory("ETHDaddy");
    ethdaddy = await ETHDaddy.deploy('ETHDaddy', 'ETHD');
  });

  describe("Deployment", () => {
    it("has a name", async () => {
      let result = await ethdaddy.name();
      expect(result).to.equal('ETHDaddy');    
    });
  
    it("has a symbol", async () => {
      let result = await ethdaddy.symbol();
      expect(result).to.equal('ETHD');
    });

    it("has a owner", async () => {
      let result = await ethdaddy.owner();
      expect(result).to.equal(deployer.address);
    });
  })
  
});

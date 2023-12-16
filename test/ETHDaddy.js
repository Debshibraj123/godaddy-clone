/* eslint-disable no-undef */
const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("ETHDaddy", () => {
  it("has a name", async () => {
    const ETHDaddy = await ethers.getContractFactory("ETHDaddy");
    let ethdaddy = await ETHDaddy.deploy();
    const result = await ethdaddy.name();
    expect(result).to.equal("Eth daddy");
  });
});

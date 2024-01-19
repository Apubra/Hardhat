const { expect } = require("chai");

describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const hardhatToken = await ethers.deployContract("Token");
    console.log("hardhatToken", hardhatToken.target);

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    console.log("ownerBalance", ownerBalance);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});


describe("Token contract", function () {
    // ...previous test...
  
    it("Should transfer tokens between accounts", async function() {
      const [owner, addr1, addr2] = await ethers.getSigners();
  
      const hardhatToken = await ethers.deployContract("Token");
  
      // Transfer 50 tokens from owner to addr1
      await hardhatToken.transfer(addr1.address, 50);
      console.log(addr1.address, "Balance Now after received:", await hardhatToken.balanceOf(addr1.address));
      expect(await hardhatToken.balanceOf(addr1.address)).to.equal(50);
  
      // Transfer 50 tokens from addr1 to addr2
      await hardhatToken.connect(addr1).transfer(addr2.address, 50);
      console.log(addr1.address, "Balance Now after transferred:", await hardhatToken.balanceOf(addr1.address));
      console.log(addr2.address, "Balance Now after received:", await hardhatToken.balanceOf(addr2.address));
      expect(await hardhatToken.balanceOf(addr2.address)).to.equal(50);
    });
  });
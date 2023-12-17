// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ETHDaddy is ERC721 {
    uint256 public maxSupply;
    address public owner;

    struct Domain {
        string name;
        uint256 cost;
        bool isOwned;
    }

    mapping (uint256 => Domain) public domains;

    modifier onlyOwner() {
      require(msg.sender == owner);
      _;
    }
    
    constructor(
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) 
    {
      owner =msg.sender;
    }

    //list all the domain name
    function list(string memory _name, uint256 _cost) public payable onlyOwner{
      
      maxSupply = maxSupply + 1;
      //create a domain from above struct
      domains[1] = Domain(_name, _cost, false);

      //save the domain using mapping

      
    }

}

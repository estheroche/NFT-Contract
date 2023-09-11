// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Cat is ERC721URIStorage, Ownable{
constructor() ERC721("KittyCatty", "KCT"){}

function mint(address _to, uint _tokenId, string calldata _uri) external onlyOwner{
    _mint(_to, _tokenId);
    _setTokenURI(_tokenId, _uri);

}

}
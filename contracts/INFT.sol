// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;

interface INFT {
    function mint(address _to, uint _tokenId, string calldata _uri) external;
}

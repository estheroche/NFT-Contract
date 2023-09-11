# EIP/ ERC 721 NFT

# KittyCatty Contract Address:

# 0xe2a1FcD65Ab92a203280Ed326DD6395499CbB7c8

The ERC-721 token standard is a set of guidelines for creating non-fungible tokens (NFTs) on the Ethereum blockchain. NFTs are unique digital assets that cannot be exchanged on a one-to-one basis due to their distinct properties. The ERC-721 standard ensures that tokens originating from any ERC-721 contract implement a minimum interface, making them compatible throughout the Ethereum ecosystem.

Here are the key features and functions defined in the ERC-721 standard:

# Functions:

- `balanceOf`: This function returns the number of NFTs owned by a specific address.
- `ownerOf`: This function returns the address of the owner of a specific token.

- `safeTransferFrom (without data)`: This function safely transfers the ownership of a specific token from one address to another. It checks if the recipient is a smart contract and if it implements the onERC721Received function.

- `transferFrom`: This function is used to transfer the ownership of a token from one address to another. It is generally used when the sender has been approved to transfer the token.

- `approve`: This function is used to give approval to an address to transfer a specific token. It allows for delegated transfers, where an owner can allow another party to transfer a token on their behalf.

- `getApproved`: This function is used to get the approved address for a specific token.
- `setApprovalForAll`: This function allows an owner of one or more tokens to approve or revoke approval for an operator to manage all of their tokens.

- `isApprovedForAll`: This function is used to check if an operator is approved to manage all of an owner's tokens.
- `safeTransferFrom (with data)`: This function is similar to safeTransferFrom (without data), but with an additional data parameter. This extra data can be used to pass additional information during the transfer if the recipient is a smart contract.

Events:

- `Transfer`: This event is emitted when the ownership of a token changes from one address to another. It includes details about the sender, recipient, and the specific token that was transferred.
- `Approval`: This event is triggered when an address is approved to transfer a specific token. It includes the current owner of the token, the approved address, and the specific token that has been approved for transfer.
- `ApprovalForAll` : This event is emitted when an owner approves or revokes the approval for an operator to manage all of their tokens.

These functions and events provide the necessary functionality to create, transfer, and manage NFTs on the Ethereum blockchain. ERC-721 tokens have become widely used in various industries, including art, gaming, collectibles, and more.

It's worth noting that while ERC-721 was the first NFT standard, there are now other standards like ERC-1155 that are more suitable for production purposes. However, ERC-721 is still used for learning purposes and simpler projects.

For further technical details and implementation examples, you can refer to the Ethereum Improvement Proposal (EIP) documentation, specifically EIP-721. Additionally, the Ethereum.org developer documentation provides examples of implementing ERC-721 tokens using the web3.py library

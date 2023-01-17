//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.16;

import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "./ChildToken/UpgradeableChildERC20/ERC20.sol";
import "./common/AccessControlMixin.sol";
import "./common/NativeMetaTransaction.sol";
import "./common/ContextMixin.sol";
import "./ChainConstants.sol";

contract TestToken is ERC20,
    AccessControlMixin,
    NativeMetaTransaction,
    ChainConstants,
    ContextMixin
{
    bytes32 public constant OWNER = keccak256("OWNER");

    constructor() ERC20("", "") {}

    /**
     * @notice Initialize the contract after it has been proxified
     * @dev meant to be called once immediately after deployment
     */
    function initialize(
        string calldata name_,
        string calldata symbol_,
        uint8 decimals_,
        address owner,
        uint256 amount
    )
        external
        initializer
    {
      setName(name_);
      setSymbol(symbol_);
      setDecimals(decimals_);
      _setupContractId(string(abi.encodePacked("Child", symbol_)));
      _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
      _setupRole(OWNER, owner);
      _initializeEIP712(name_, ERC712_VERSION);
       _mint(_msgSender(), amount);
      
    }

    // This is to support Native meta transactions
    // never use msg.sender directly, use _msgSender() instead
    function _msgSender()
        internal
        override
        view
        returns (address sender)
    {
        return ContextMixin.msgSender();
    }

    /**
     * @notice called when token is deposited on root chain
     * @dev Should be callable only by ChildChainManager
     * Should handle deposit by minting the required amount for user
     * Make sure minting is done only by this function
     * @param user user address for whom deposit is being done
     * @param amount tokens to mint
     */
    function mint(address user, uint256 amount)
        external
        only(OWNER)    
    {
        _mint(user, amount);
    }

    /**
     * @notice called when user wants to withdraw tokens back to root chain
     * @dev Should burn user's tokens. This transaction will be verified when exiting on root chain
     * @param amount amount of tokens to withdraw
     */
    function burn(uint256 amount) external {
        _burn(_msgSender(), amount);
    }
}

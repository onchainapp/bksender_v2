(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{378:function(e,t,n){"use strict";var o,r,l=n(5),c={EN:{header:{vip:"VIP",welcome:"Welcome to ",tutorial:"Tutorial",faq:"FAQ",checkBulksend:"Verification",faucet:"Faucet",dappSupports:"Network supports",step1Title:"Prepare",step2Title:"Confirm",step3Title:"Send",stepApproveTitle:"Approve",oldVersion:"Old",mainnet:"Ethereum Mainnet",ethereum:"Ethereum",ropsten:"Ropsten",matic:"Polygon",tron:"TRON",bnb:"BNB Chain",rinkeby:"Rinkeby",kovan:"Kovan",gorli:"Görli",xDai:"Gnosis (formerly xDai)",polkadot:"Polkadot",huobiEco:"Huobi ECO Chain",heco:"HECO",conflux:"Conflux",avalanche:"Avalanche C Chain",avalancheShort:"Avalanche",avax:"AVAX",fantom:"Fantom",quark:"Quark",okexChain:"OKExChain",okex:"OKEx",kucoin:"KCC",kcc:"KCC",xinfin:"XinFin",harmony:"Harmony",arbitrum:"Arbitrum",cronos:"Cronos",celo:"Celo",moonriver:"Moonriver",iotex:"ioTeX",moreNetwors:"More Networks",allTestnets:"All Ethereum Testnets",referral:"Referral",connectWallet:"Connect Wallet",moreTools:"More",moreOptions:{revokeAllowance:"Revoke Allowance",refundBurnerKeyBalance:"Refund self-generated Key",tokenMaker:"Create ERC20 Token",checkBulksend:"Batch Verification"}},footer:{contract:"Bulksender Address"},home:{addAmount:"Add amount",decimalsTitle:"Decimals",parsingTitle:"Checking the address list...",tokenSelectedTitle:"Token",tokenSelectedPlaceholder:"Select Or Insert your token/nft address",addressesTitle:"Addresses with Amounts",addressesUploadDesc:"Drop your files here or ",addressesUploadDescClickUpload:"click to upload",addressesUploadFooterDesc:"Accepted: ",addressesInsertFooterDesc:"Separated by commas",addressesInsertExampleButtonText:"Show examples",addressesFileExampleButtonText:"Example files",madalExamplesTitle:"Examples",madalExamplesERC20:"for ERC20 or Native Coin(address, amount)",madalExamplesERC721:"for ERC721(address, token id)",madalExamplesERC1155:"for ERC1155(address, token id, amount)",madalExamplesFooterDesc:"Separated by commas",filesERC20:"ERC20 or Native Coin",filesERC721:"ERC721 (NFT)",filesERC1155:"ERC1155 (NFT)",manuallyInsert:"Insert manually",uploadInsert:"Upload file",manuallyInsertPlaceholder:"Insert address and amount, separate with comma",approveTitle:"Amount to approve",approveButton:"Approve",approveOption1:"Exact amount to be sent",approveOption2:"Your token balance",approveOptionUnlimited:"Unlimited",approveOptionUnlimitedRecommend:" amount",addressesTitleERC721:"Addresses with Token IDs",addressesTitleERC1155:"Addresses with Token IDs and Amounts",addressesInsertFooterDescERC721:"Separated by commas",manuallyInsertPlaceholderERC721:"Insert address and token id, separate with comma",manuallyInsertPlaceholderERC1155:"Insert address、token id and amount, separate with comma",manuallyInsertTokenAddress:"For NFT distribution, please insert token address manually"},info:{prepareStep0:"Checking the address list...",prepareStep1:"Checking the token information...",prepareStep2:"Checking the token balance...",prepareStep3:"Checking the token allowance...",prepareStep4:"Checking the token balance...",prepareStep5_1:"Checking the possible errors of the address list...",prepareStep5_2:"Checking the balances of he address list...",prepareStep5:"Constructing the bulksending data...",addressConfirming:"Checking addresses",addressSorting:"Sorting addresses",addressContructing:"Preparing transactions ",txChecking:"Checking transactions ",from:"from",to:"to",copied:"Copied"},confirm:{approveHashTitle:"Approve transaction hash",waitToBeMined:"Please wait a while till this transaction was mined",prepareTransactionStatus:"Please wait a while, preparing transactions...",summaryTitle:"Summary",networkSpeedTitle:"Network Speed",networkSpeedInfo:"The max fee that might be applied for your transaction is $maxfee Gwei, inclusive of the estimated base fee ($basefee Gwei) and max priority fee ($priority Gwei), the priority fee goes directly to miners as an incentive to prioritize your transaction, and the difference between max fee and actual used network fee will be refunded",networkSpeedSlow:"Slow",networkSpeedStandard:"",networkSpeedFast:"Fast",networkSpeedInstant:"Instant",resetApproval:"Reset allowance transaction hash",sendType:"Options for sending transactions",fastWay:"Use self-generated Key (recommended)",metamask:"Use MetaMask (might be slow)",burnKeyTitle:"Your burn key",fastWayTitle:"Fastest recommended way to use bulksender.",fastWayDesc1:"It will generate a burner key on your device",fastWayDesc2:"After the burner key receives the funds, it will automatically post all txs to the blockchain",fastWayDesc3:"Once the bulksend is complete, the burner key will send the remaining ",fastWayDesc4:" balance to your address",metamaskDesc:"We highly recommend using self-generated key option, since your wallet can be slow and does not always function properly.",otherWalletDesc:"We highly recommend using self-generated key option, since this requires you to manually confirm transactions one by one.",copyPrivateKeyDes:"Please make a copy of your temporary private key",estimatedInfo:"Your token contains many complex rules or processing logics, so the system estimate twice the gas fee to ensure that all transactions can be sent successfully. The actual used fee will be less than 50% of the estimated, and the remaining will be automatically refunded",summary:{totalAddressesTitle:"Total number of addresses",totalAmountTitle:"Total number of tokens to be sent",totalTxsTitle:"Total number of transactions needed",totalTokenBalanceTitle:"Your token balance",totalTokenAllowanceTitle:"Your current bulksender allowance",balanceTitle:" balance",approximateCostTitle:"Approximate cost of operation",yourTitle:"Your ",gasPriceTitle:"Gas price",unknowBalance:"N/A"}},send:{pleaseSignTransactionsTitle1:"Please confirm the transaction on",pleaseSignTransactionsTitle2:"",sentTransactionsTitle:"Bulksent transactions",sendTransactionsTitle:"You are sending the transaction",checkingTransactionsTitle:"Now wait till all the transactions were mined.",transactionSentoutTitle:"Transactions were sent out. ",congratulationsTransactionsTitle:"Congratulations, your bulksend transactions were sent out successfully",topUpTxTitle:"Top-up process transaction hash",refundRemainingTxTitle:"Refund remaining funds transaction hash",refundingRemainingTxTitle:"Refunding remaining funds to ",prepareTransactionStatus:"Please wait a while, preparing transactions ",prepareTransactionStatusMiddle:" of ",prepareTransactionStatusEnd:"...",verificationInfo1:"Some of your transactions failed or rejected, you can download the result below and resend or use ",verificationInfo2:" page to identify recipients who received the tokens or ",verificationInfo3:" us to get the supports",contact:"Contact",verify:"Verification"},vip:{vipDesc:"Just only pay 1 ETH to be a vip member, all your transactions sent through Bulksender.app will be free forever! Keep in mind, you would still need to pay for the mining fees. If you need additional information, feel free to ask in our Telegram channel. ",hasBeenVipDesc:"You have become a VIP member, all your transactions sent through Bulksender.app will be free forever! Keep in mind, you would still need to pay for the mining fees. If you need additional information, feel free to ask in our Telegram channel. ",vipTxHash:"VIP buying transaction hash",vipBuySuccess:"Congratulations, you have been a vip member",sendNow:"Send now",txFreeTitle:"TX FREE",welcomeToJoinVIPTitle:"Welcome to join VIP",descLine0:"You have become a VIP member",descLine1:"Just only pay 1 ETH to be a vip member.",descLine1Start:"Just only pay ",descLine1End:" to be a vip member.",descLine2:"All your transactions sent through Bulksender.app will be free forever!",descLine3:"Keep in mind, you would still need to pay for the mining fees.",descLine4:"If you need additional information, feel free to ask in our Telegram channel "},tutorial:{tutorialDesc:"Just only pay 1 ETH to be a vip member, all your transactions sent through Bulksender.app will be free forever! Keep in mind, you would still need to pay for the mining fees. If you need additional information, feel free to ask in our Telegram channel. ",tutorialTitle:"Instruction",tutorialVedeoTitle:"Video Demo",demoTabTokens:"Bulksend Tokens",demoTabNFTs:"Bulksend NFTs",demoTabFAQ:"FAQ",step1Title:"Prepare data",step2Title:"Approving & Confirm",step3Title:"Send transaction",step0Title1:"Please make sure that you have installed and unlocked",step0Title2:"or visit our dapp in mobile browser of",step0Title3:"",step1:{li1:"Connect a wallet and select the network you want",li2:"Wait for token balances to load, if failed to load the tokens, you can manually insert your token address",li3:"Select the token that you would like to send from the list",li4:"Upload Excel, CSV, Txt addresses with amounts or manually insert addresses separated by comma",li5:"Click NEXT"},step2:{li6:"Send Approve transaction",li7:"Confirm bulksending data, include txs, fees",li8:"Click SEND"},step3:{li9:"Confirm transaction in your wallet",li10:"Wait for an airdrop to complete"},stepNFT1:{li1:"Connect a wallet and select the network you want",li2:"Manually insert your NFT smart contract address, the dapp will automatically detect your token is ERC721 or ERC1155",li3:"Provide list of recipients, you can upload file(CSV, XLS, XLSX) or manually insert ERC721 addresses with token IDs or ERC1155 addresses with token IDs and amounts, separated by comma",li4:"Click NEXT"},done:"Done"},blockMultitabs:{blockTitle:"Multiple tabs detected",blockDesc:"You have been redirected to this page because there are more than one Bulksender.app page opened. It may cause problems with Browser LocalStorage. Please close this page and go to the previous one."},refund:{refundTitle:"Refund self-generated Key",currentBurnerKeyTitle:"Current Burner Key",historyBurnerKeyTitle:"History Burner Keys",copyPrivateKey:"Copy Privatekey",refundDesc:"If you have used the self-generated burner Key, but it stucks or the transactions were all completed but there are remaining fees in the burner key, you can do the refund by yourself",balanceHas:"balance",loading:"Loading address",refundSent:"Sent, please check your balance later"},referral:{referralTitle:"BulkSender Referral Program",referralDesc1:"Put your address below, copy and share the generated link with your referrals. You will earn",referralDesc2:" 0.01 ETH ",referralDesc3:"from any airdrop done by your referral.",copied:"Link Copied",referralDesc:"You will earn 0.01 ETH from any airdrop done by your referral.",referralDescStart:"You will earn ",referralDescEnd:" from any airdrop done by your referral.",inputAddressTitle:"Put your ethereum wallet address",linkGeneratedTitle:"Generated referral link",linkGenerated:"Generated"},revoke:{revokeTitle:"Revoke Allowance",revokeDescription:'If you need to remove current approval to bulksender, please select the token address and click "Revoke" button. That will set allowance to zero',currentAllowance:"Your current bulksender allowance",revokeHashTitle:"Revoke allowance transaction hash"},checkBulksend:{title:"Batch Verification",nftSupportsCommingSoon:"Verification feature for NFT is coming soon",description:"If you have a list of recipients and a list of transactions from your previous bulk-send from our app, you can check which recipients received their tokens",yourTxs:"Your TX's hashes",yourTxsPlaceholder:"Insert the TX's hashes sent through Bulksender",yourAddressList:"Original list of recipients",yourAddressListERC721:"Original receiver addresses with token ids",yourAddressListERC1155:"Original receiver addresses with token ids, amounts",duplicates:"Duplicates",matched:"Matched",received:"Received",notReceived:"Not received",matchedDesc:"recipients that were found in your actual txs from your original list.",receivedDesc:"total recipients from your filled txs.",notReceivedDesc:"mismatch was detected from your original list. The address that either did not receive tokens, or it did not receive the full amount.",suggestionDdCheck:"We highly recommend that you double-check the CSV result."},bulksendResult:{received:"Received",notReceived:"Pending received",failedReceived:"Failed received",failedReceivedDesc:"total recipients that were failed to receive due to the failed or rejected transactions",receivedDesc:"total recipients who received the tokens",notReceivedDesc:"total recipients waiting to receive the tokens, including pending transactions and transactions has not yet been sent"},faq:{},delegator:{addVipTitle:"Input the wallet address that need to be added into vip list",checkVipTitle:"Input the wallet address that need to be checked for vip membership"},connectWallet:{connectWalletTitle:"Connect to your wallet",connectWalletDesc:"To start using Bulksender",metamask:"MetaMask",walletLink:"Coinbase Wallet",walletConnect:"WalletConnect",fortmatic:"Fortmatic",mewConnect:"MEW Connect",imToken:"imToken",huobiWallet:"Huobi Wallet",tokenPocket:"Token Pocket",trustWallet:"Trust Wallet",okexWallet:"OKX Wallet",kaikas:"Kaikas",naboxWallet:"Nabox Wallet",walletConnectImTokenConnectingTitle:"Follow imToken Instructions",walletConnectHuobiWalletConnectingTitle:"Follow Huobi Wallet Instructions",walletConnectTrustWalletConnectingTitle:"Follow Trust Wallet Instructions",walletConnectTokenPocketConnectingTitle:"Follow TokenPocket Instructions",metamaskConnectingTitle:"Install and Unlock Metamask",metamaskUnlockTitle:"Please Unlock Metamask",naboxWalletConnectingTitle:"Install and Unlock Nabox Wallet",naboxWalletConnectingDesc:"Please Unlock Nabox Wallet",bitKeepConnectingTitle:"Install and Unlock BitKeep",bitKeepConnectingDesc:"Please Unlock BitKeep",okexWalletConnectingTitle:"Install and Unlock OKX Wallet",okexWalletConnectingDesc:"Please Unlock OKX Wallet",kaikasConnectingTitle:"Install and Unlock Kaikas",kaikasConnectingDesc:"Please Unlock Kaikas",metamaskConnectingDesc:"You need to click the allow button to connect your account",walletConnectConnectingTitle:"Follow WalletConnect Instructions",walletConnectConnectingDesc:"You may need to scan the WalletConnect QR code from screen by Trust Wallet, Rainbow Wallet and more...",walletConnectImTokenConnectingDesc:"You may need to scan the WalletConnect QR code from screen by imToken",walletConnectHuobiWalletConnectingDesc:"You may need to scan the WalletConnect QR code from screen by Huobi Wallet on discover tab",walletConnectTrustWalletConnectingDesc:"You may need to scan the WalletConnect QR code from screen by Trust Wallet",walletConnectTokenPocketConnectingDesc:"You may need to scan the WalletConnect QR code from screen by TokenPocket",walletLinkConnectingTitle:"Follow Coinbase Instructions",walletLinkConnectingDesc:"You may need to scan the wallet link QR code from screen.",fortmaticConnectingDesc:"You need to login using Fortmatic hosted wallet to continue",fortmaticConnectingTitle:"Follow Fortmatic Instructions",dontHaveMetamask:"Dont have MetaMask?",dontHaveCoinbase:"Dont have Coinbase?",dontHaveimToken:"Dont have imToken?",dontHaveNaboxWallet:"Dont have Nabox Wallet?",dontHaveBitKeep:"Dont have BitKeep?",dontHaveOKExWallet:"Dont have OKX Wallet?",dontHaveKaikas:"Dont have Kaikas?",dontHaveHuobiWallet:"Dont have Huobi Wallet?",dontHaveTrustWallet:"Dont have Trust Wallet?",dontHaveTokenPocketWallet:"Dont have TokenPocket?",dontHaveWalletConnect:"Dont have",dontHaveFortmatic:"Dont have Fortmatic wallet",currentUsingWallet:"Current selected wallet",connectToNetworkTitle:"Select a Network",selectASupportedNetwork:"Select a supported network",logoutWallet:"Logout",switchWallet:"Switch"},button:{deleteAllInvalidAddresses:"Delete them",deleteAllInvalidHashes:"Delete them",keepFirstOne:"Keep the first one",combineBalances:"Combine balances",keepDuplicated:"Keep duplicates",ingoreDuplicated:"Ignore",next:"NEXT",back:"Back",send:"SEND",resend:"Resend rejected transactions",checkout:"Chcek out",skip:"Skip",buyVIP:"Buy",signKey:"SIGN KEY",oneClick:"SEND WITH SIGN KEY",gotIt:"Got it",install:"Install",generate:"Generate",copyLink:"Copy Link",connect:"Connect",open:"OPEN",revoke:"Revoke",refund:"Refund",continue:"Continue",check:"Check",add:"Confirm",downloadCSV:"Download CSV",howToFix:" See how to fix ↗"},warning:{unFinishedTasks:"Found you have unFinished tasks! Please wait a while."},error:{tokenSelectedNull:"Please select your token",tokenErrorMessage:"Please insert a valid token or NFT contract address",addressNull:"Please upload or insert addresses with amounts",prepareDataError:"Failed to construct the bulksending data, please try again or contact us to get supports!",prepareTransactionsError:"Failed to prepare the transaction, please try again or contact us to get supports!",processENSError:"Failed to process the ENSes, please try again or manually delete the ens from your list or contact us to get supports",checkOwnersDataError:"Invalid token id, maybe some token id does not exist, please check and try again!",checkBadAddressDataError:"Failed to validate the receiver addresses, please try again or contact us to get supports.",checkSelfBalanceDataError:"Failed to check the balances of addresses list, please try again!",addressInvalid:"Please delete the invalid addresses",addressDuplicated:"Please delete or combine the duplicated addresses",insufficientTokenBalance:"Insufficient token balance on your account",insufficientEtherBalance:"Insufficient ether balance on your account",insufficientBaseEtherBalance:", please have at least ",getEstimatedFee:" to get total estimated cost",invalidEthereumAddress:"is a invalid wallet address",cantSupportsContracts:"is a contract address, unsupported receiver address type",invalidEthereumAmount:"wrong amount",invalidEthereumAmountDecimals:"wrong decimal amount",invalidEthereumAmounOwnership:"wrong ownership, it seems that you dont have this token id ",invalidEthereumAddressAndAmount:"is a invalid wallet address and wrong amount",invalidEthereumAddressAndAmountAndTokenId:"is a invalid wallet address、wrong token id and wrong amount",invalidEthereumAddressAndTokenId:"is a invalid wallet address and wrong token id",invalidTokenIdShouldBeNumber:"wrong token id，it should be an integer",invalidAmountShouldBeNumber:"wrong amount, it should be an integer",invalidAmountShouldNotBeEmpty:"wrong amount, it should be greater than zero",invalidTokenIdAndAmountShouldBeNumber:"wrong token id and amount, they are should be the integer",insufficientTokenIDBalance:"insufficient token balance to send",addressesCannotBeProcessed:" cannot be sent, please delete it",ensError:" is wrong ENS name or an unregistered name",hashMaynotExist:" may not match the selected token or the transaction was not confirmed or does not send through Bulksender, please check it",duplicatedEthereumAddresses:"duplicate address",duplicatedEthereumHash:"duplicate tx hash",duplicatedEthereumAmount:"duplicate token id",duplicatedEthereumAddressesTitle:"Duplicated addresses",duplicatedEthereumHashesTitle:"Duplicated TX hashes",invalidEthereumHash:"is a invalid TX hash",invalidEthereumAddressesTitle:"Invalid wallet addresse or amount",badAddressCantBeProcessed:"The below addresses cannot be processed",badHashesCantBeProcessed:"The below hashes cannot be processed",invalidEthereumAddressesOrTokenIdsTitle:"Invalid wallet addresse or token id",resetApprovalErrorOption1:"Do a smaller batch to spend your current allowance of bulksender",resetApprovalErrorOption2:"Reset the allowance",resetApprovalError:"Detected that your token dont allow to approve when you have remaining allowance, you can do:",approvalError:"Can not approve for your token, please check your token contract source code if it has the approve function",lineOrder:"Line ",line:"",approveError:"Approve error detected",metamaskNotFoundError:"Please install MetaMask wallet firstly",metamaskLockedError:"Please unlock MetaMask wallet",metamaskNotFoundMobileError:"Open in Trust Wallet",invalidWalletAddress:"Invalid wallet address",anyWalletNotFoundError:"Please connect to your Ethereum wallet",openLink1:"https://link.trustwallet.com/open_url?coin_id=60&url=https://bulksender.app",errorConnecting:"Error connecting",errorTryAgain:"try again",unsupportedNetwork:"Current network is not supported, please connect to the supported network below or contact us to get the supports.",transactionRejected:"Transaction was rejected by your wallet, please click the resend button below",openseaIssue:"About the issue of OpenSea NFT bulksendings "},networks:{mainnets:"Mainnets",testnets:"Testnets",ethereumMainnet:"Ethereum",bscMainnet:"BNB Smart Chain",maticMainnet:"Matic (Polygon) Network",huobiMainnet:"Huobi ECO Chain",xdaiMainnet:"Gnosis (formerly xDai)",okexMainnet:"OKX (OKC)",kucoinMainnet:"KuCoin Community Chain",ftmMainnet:"Fantom Opera",avaxMainnet:"Avalanche C Chain",ropsten:"Ropsten",rinkeby:"Rinkeby",kovan:"Kovan",goerli:"Görli",rskMainnet:"RSK",harmonyMainnet:"Harmony",bscTestnet:"BNB Smart Chain Testnet",huobiTestnet:"Huobi ECO Chain Testnet",okexTestnet:"OKExChain Testnet",xinfinMainnet:"XinFin (XDC)",xinfinTestnet:"XinFin Apothem Testnet",quarkMainnet:"Quark Mainnet",arbitrumOne:"Arbitrum One",arbitrumOneRinky:"Arbitrum Testnet Rinky",iotexMainnet:"IoTeX",hpbMainnet:"HPB Mainnet",celoMainnet:"Celo",cronosChain:"Cronos",moonriver:"Moonriver",evmosTestnet:"Evmos Testnet",evmosMainnet:"Evmos",maticMumbaiTestnet:"Polygon Mumbai Testnet",tpayMainnet:"TPAY Chain",solana:"Solana",moonbeam:"Moonbeam",klaytn:"Klaytn",bdlt:"BDLT Blockchain",metis:"Metis (Andromeda)",aurora:"Aurora",astar:"Astar (EVM)",shibuya:"Shibuya (EVM)",shiden:"Shiden (EVM)",oasis:"Oasis Network",tomochain:"TomoChain",l1Mainnet:"GenesisL1",ameChain:"AME Chain",opTestnet:"Optimism Testnet",opMainnet:"Optimism",cube:"Cube Chain",dogechain:"Dogechain",sepoliaTestnet:"Sepolia Testnet",syscoin:"Syscoin",ethfair:"EthereumFair",ethpow:"EthereumPow",songBird:"Songbird",condorTest:"Condor Testnet",pulseChainTestnet:"PulseChain Testnet",coinex:"CoinEx Smart Chain",ubiq:"Ubiq",shardeumTestnet:"Shardeum Liberty 2.X",bitindi:"Bitindi",aptos:"Aptos",flare:"Flare",confluxE:"Conflux eSpace",amStar:"AmStar Network",dogCoin:"DogCoin",maro:"MARO Blockchain",core:"Core Blockchain",canto:"Canto",shardeumSphinx:"Shardeum Sphinx 1.X",filecoin:"Filecoin EVM",zkEVM:"Polygon zkEVM",shyft:"Shyft",ozoneChain:"Ozone Chain",baseGoerli:"Base Goerli",rikeza:"Rikeza Network",pulseChain:"PulseChain"}},CN:{header:(o={vip:"会员",tutorial:"教程",faq:"问题",checkBulksend:"验证",welcome:"欢迎来到 ",dappSupports:"支持网络",step1Title:"准备",step2Title:"确认",step3Title:"发送",stepApproveTitle:"授信",oldVersion:"旧版本",mainnet:"以太坊主网",ethereum:"以太坊",ropsten:"Ropsten",matic:"Polygon",tron:"波场",bnb:"币安链",rinkeby:"火币生态链"},Object(l.a)(o,"rinkeby","Rinkeby"),Object(l.a)(o,"kovan","Kovan"),Object(l.a)(o,"gorli","Görli"),Object(l.a)(o,"xDai","Gnosis (原xDai链)"),Object(l.a)(o,"polkadot","波卡"),Object(l.a)(o,"huobiEco","火币生态链"),Object(l.a)(o,"heco","火币生态链"),Object(l.a)(o,"okexChain","OKExChain"),Object(l.a)(o,"okex","OKEx"),Object(l.a)(o,"kucoin","KCC"),Object(l.a)(o,"kcc","KCC"),Object(l.a)(o,"xinfin","XinFin"),Object(l.a)(o,"harmony","Harmony"),Object(l.a)(o,"arbitrum","Arbitrum"),Object(l.a)(o,"cronos","Cronos"),Object(l.a)(o,"conflux","Conflux"),Object(l.a)(o,"avalanche","Avalanche C Chain"),Object(l.a)(o,"avalancheShort","Avalanche"),Object(l.a)(o,"avax","AVAX"),Object(l.a)(o,"fantom","Fantom"),Object(l.a)(o,"quark","夸克链"),Object(l.a)(o,"celo","Celo"),Object(l.a)(o,"iotex","ioTeX"),Object(l.a)(o,"moonriver","Moonriver"),Object(l.a)(o,"moreNetwors","更多网络"),Object(l.a)(o,"allTestnets","以太坊所有测试网"),Object(l.a)(o,"faucet","测试币"),Object(l.a)(o,"referral","推荐返佣"),Object(l.a)(o,"connectWallet","连接钱包"),Object(l.a)(o,"moreTools","更多"),Object(l.a)(o,"moreOptions",{revokeAllowance:"取消授信额度",refundBurnerKeyBalance:"退款「加速秘钥」",tokenMaker:"创建代币",checkBulksend:"验证批量发送"}),o),footer:{contract:"Bulksender合约"},home:{decimalsTitle:"位数",parsingTitle:"正在检查地址列表...",tokenSelectedTitle:"代币",tokenSelectedPlaceholder:"请选择或粘贴代币/NFT合约地址",addressesTitle:"收款地址和数量",addressesTitleERC721:"收款地址和代币ID",addressesUploadDesc:"将文件拖到此处或",addressesUploadDescClickUpload:"点击上传",addressesUploadFooterDesc:"支持文件类型：",addressesInsertFooterDesc:"每一行应包括地址和数量，逗号分隔",addressesInsertFooterDescERC721:"每一行应包括地址和代币ID，逗号分隔",addressesInsertFooterDescERC1155:"每一行应包括地址、代币ID及数量，逗号分隔",addressesInsertExampleButtonText:"查看例子",addressesFileExampleButtonText:"示例文件",madalExamplesTitle:"查看例子",madalExamplesERC20:"ERC20代币或主网币(接收地址, 数量)",madalExamplesERC721:"ERC721(接收地址, Token ID)",madalExamplesERC1155:"ERC1155(接收地址, Token ID, 数量)",filesERC20:"ERC20代币或主网币",filesERC721:"ERC721 (NFT)",filesERC1155:"ERC1155 (NFT)",madalExamplesFooterDesc:"以逗号分隔",manuallyInsert:"手动输入",uploadInsert:"上传文件",manuallyInsertPlaceholder:"请输入地址和数量，以逗号分隔",manuallyInsertPlaceholderERC721:"请输入地址和代币ID，以逗号分隔",approveTitle:"授信额度",approveButton:"去授信",approveOption1:"发送数量",approveOption2:"代币余额",approveOptionUnlimited:"不限制",approveOptionUnlimitedRecommend:"(之后无需重复授信)",addressesTitleERC1155:"收款地址、代币ID及数量",manuallyInsertPlaceholderERC1155:"请输入地址、代币ID及数量，以逗号分隔",manuallyInsertTokenAddress:"如需发送NFT类型代币，请手动插入代币地址"},info:{prepareStep0:"正在检查地址列表...",prepareStep1:"正在检查代币信息...",prepareStep2:"正在检查代币余额...",prepareStep3:"正在检查代币授信...",prepareStep4:"正在检查代币余额...",prepareStep5_1:"正在检查无效地址...",prepareStep5_2:"正在检查地址余额...",prepareStep5:"正在组装批量发送数据...",addressConfirming:"确认发送地址",addressSorting:"正在排序",txChecking:"正在确认交易 ",addressContructing:"正在准备交易批次",from:"从",to:"到",copied:"复制成功"},vip:{vipDesc:"只需要支付 1 ETH，您将成为VIP会员，之后您在本站的所有交易将永久免费，如果您需要了解更多，请添加微信或直接在电报群中@管理员 ",hasBeenVipDesc:"您已经是VIP会员，您在本站的所有交易将永久免费，请放心使用，使用过程中遇到任何问题，请添加微信或直接在电报群中@管理员 ",vipTxHash:"会员购买交易号",vipBuySuccess:"恭喜，您已经成为会员",sendNow:"开始批量发送",txFreeTitle:"终身免费",welcomeToJoinVIPTitle:"欢迎加入VIP",descLine0:"您已经是VIP会员.",descLine1:"只需要支付 1 ETH，您将成为VIP会员.",descLine1Start:"只需要支付 ",descLine1End:"，您将成为VIP会员.",descLine2:"您在本站的所有交易将永久免费.",descLine3:"",descLine4:"如果您想了解更多相关信息，请添加微信或者直接在电报群中@管理员即可 "},tutorial:{tutorialDesc:"Just only pay 1 ETH to be a vip member, all your transactions sent through Bulksender.app will be free forever! Keep in mind, you would still need to pay for the mining fees. If you need additional information, feel free to ask in our Telegram channel. ",tutorialTitle:"介绍",tutorialVedeoTitle:"视频教程",demoTabTokens:"批量发送代币",demoTabNFTs:"批量发送NFT",demoTabFAQ:"问题列表",step1Title:"准备数据",step2Title:"授信 & 确认",step3Title:"开始发送",step0Title1:"请确保已安装且解锁",step0Title2:"或在",step0Title3:"中打开该Dapp",step1:{li1:"连接钱包，选择要发送的网络",li2:"等待代币列表加载完成，代币列表如果加载失败，你可以尝试手动插入您的代币地址",li3:"从代币列表中选择要空投的代币",li4:"上传包含地址，数量的Excel, CSV, Txt文件或者手动插入地址和数量，逗号分隔",li5:"点击下一步"},step2:{li6:"发送授信交易",li7:"确认批量发送数据摘要，包含代币总数、地址总数、费用等",li8:"点击发送"},step3:{li9:"打开钱包确认交易",li10:"等待空投完成"},stepNFT1:{li1:"连接钱包，选择要发送的网络",li2:"手动粘贴要发送的NFT合约地址, 系统会自动检测是ERC721还是ERC1155",li3:"上传Excel, CSV, Txt文件或者手动插入钱包地址、ERC721代币ID 或者 钱包地址、ERC1155代币ID、发送数量，以逗号分隔",li4:"点击下一步"},done:"完成"},blockMultitabs:{blockTitle:"检测到已打开多个网站标签页",blockDesc:"您被自动跳转到此页面是因为您在浏览器的多个标签中打开了Bulksender.app. 它可能会引起浏览器本地存储(LocalStorage)的问题. 请关闭此页面，前往已打开页面继续使用."},referral:{referralTitle:"BulkSender 推荐返佣",referralDesc1:"在下方输入框中填写您的钱包地址，生成推荐链接，然后复制链接并分享出去，任何通过您的推荐链接产生的每一笔空投发送，您都将获得",referralDesc2:" 0.01 ETH.",referralDesc3:"",copied:"复制成功",referralDescStart:"每笔空投发送您将获得 ",referralDescEnd:" 的佣金",referralDesc:"每笔空投发送您将获得 0.01 ETH 的佣金",inputAddressTitle:"输入您的以太坊钱包地址",linkGeneratedTitle:"已生成链接",linkGenerated:"已生成"},delegator:{addVipTitle:"输入要添加的会员地址",checkVipTitle:"输入要检查的会员地址"},connectWallet:{connectWalletTitle:"选择要使用的钱包",connectWalletDesc:"开始使用Bulksender",metamask:"MetaMask",walletLink:"Coinbase Wallet",walletConnect:"WalletConnect",fortmatic:"Fortmatic",mewConnect:"MEW Connect",imToken:"imToken",huobiWallet:"火币钱包",tokenPocket:"TokenPocket",trustWallet:"Trust Wallet",okexWallet:"OKX Wallet",naboxWallet:"Nabox Wallet",kaikas:"Kaikas",metamaskConnectingTitle:"安装并解锁MetaMask",metamaskConnectingDesc:"你需要同意关联您的账户",naboxWalletConnectingTitle:"安装并解锁Nabox Wallet",naboxWalletConnectingDesc:"你需要同意关联您的账户",bitKeepConnectingTitle:"安装并解锁BitKeep",bitKeepConnectingDesc:"你需要同意关联您的账户",okexWalletConnectingTitle:"安装并解锁OKX Wallet",okexWalletConnectingDesc:"你需要同意关联您的账户",kaikasConnectingTitle:"安装并解锁Kaikas",kaikasConnectingDesc:"你需要同意关联您的账户",metamaskUnlockTitle:"请解锁MetaMask",walletConnectConnectingTitle:"根据WalletConnect的介绍",walletConnectImTokenConnectingTitle:"根据imToken钱包的功能介绍",walletConnectHuobiWalletConnectingTitle:"根据火币钱包的功能介绍",walletConnectTrustWalletConnectingTitle:"根据TrustWallet的功能介绍",walletConnectTokenPocketConnectingTitle:"根据TokenPocket的功能介绍",walletConnectConnectingDesc:"你可以通过imToken、火币钱包、TokenPocket、Trust钱包 (币安官方加密货币钱包)、麦子钱包以及任何WalletConnect兼容的钱包来扫描屏幕中的二维码",walletConnectImTokenConnectingDesc:"你可以通过imToken首页右上角的扫一扫功能，扫描屏幕中的二维码以继续使用",walletConnectHuobiWalletConnectingDesc:"你可以通过火币钱包发现页右上角的扫一扫功能，扫描屏幕中的二维码以继续使用",walletConnectTrustWalletConnectingDesc:"你可以通过TrustWallet中的WalletConnect功能，扫描屏幕中的二维码以继续使用",walletConnectTokenPocketConnectingDesc:"你可以通过TokenPocket首页右上角的扫一扫功能，扫描屏幕中的二维码以继续使用",walletLinkConnectingTitle:"根据Coinbase的介绍",walletLinkConnectingDesc:"你需要通过Coinbase Wallet中的WalletLink来扫描屏幕中的二维码",fortmaticConnectingDesc:"请先登录Fortmatic钱包以继续使用",fortmaticConnectingTitle:"根据Fortmatic介绍",dontHaveMetamask:"没有MetaMask?",dontHaveCoinbase:"没有Coinbase?",dontHaveimToken:"没有imToken?",dontHaveHuobiWallet:"没有火币钱包?",dontHaveTrustWallet:"没有TrustWallet?",dontHaveTokenPocketWallet:"没有TokenPocket?",dontHaveNaboxWallet:"没有Nabox Wallet?",dontHaveOKExWallet:"没有OKX Wallet?",dontHaveBitKeep:"没有BitKeep?",dontHaveKaikas:"没有Kaikas?",dontHaveFortmatic:"没有Fortmatic钱包?",dontHaveWalletConnect:"还没有",currentUsingWallet:"当前使用钱包",connectToNetworkTitle:"选择要连接的网络",selectASupportedNetwork:"选择当前支持的网络",logoutWallet:"退出账户",switchWallet:"切换钱包"},confirm:(r={approveHashTitle:"授信交易号",waitToBeMined:"请耐心等待一会，直到该授信成功",prepareTransactionStatus:"请稍等, 正在准备转账...",summaryTitle:"摘要",networkSpeedTitle:"交易速度",networkSpeedSlow:"慢",networkSpeedStandard:"",networkSpeedFast:"快",networkSpeedInstant:"极速",resetApproval:"重置授信额度交易号",sendType:"批量发送方式",fastWay:"一键转账 (快速模式)",metamask:"MetaMask (操作步骤多)",burnKeyTitle:"「加速秘钥」",fastWayTitle:"建议使用该模式，可节省时间，避免错误",fastWayDesc1:"该模式会在您的设备本地创建一把「加速秘钥」",fastWayDesc2:"在「加速秘钥」接收到批量发送所需要的费用后，它将自动将所有交易发送到区块链中",fastWayDesc3:"一旦批量转账完成，「加速秘钥」会将剩余",fastWayDesc4:"发送回您的钱包地址",copyPrivateKeyDes:"请备份该加速秘钥",metamaskDesc:"我们强烈建议使用「一键转账」, 这样会极大的减少转账的操作步骤，节省时间",otherWalletDesc:"我们强烈建议使用「一键转账」, 因为这种方式，需要一个一个的手动确认交易"},Object(l.a)(r,"copyPrivateKeyDes","请备份「加速秘钥」账户私钥"),Object(l.a)(r,"networkSpeedInfo","交易的最大费用$maxfee Gwei, 包含$basefee Gwei的预估网络基础费用和$priority Gwei的优先打包费用, 优先打包费用会直接支付给矿工作为打包该交易的奖励, 另外, 最大费用和实际费用的差值会自动退回"),Object(l.a)(r,"summary",{totalAddressesTitle:"地址总数",totalAmountTitle:"代币发送总数",totalTxsTitle:"交易总数",totalTokenBalanceTitle:"代币余额",totalTokenAllowanceTitle:"当前授信额度",balanceTitle:"余额",approximateCostTitle:"预估费用",yourTitle:"你的",gasPriceTitle:"交易速度",unknowBalance:"不适用"}),Object(l.a)(r,"estimatedInfo","由于您的代币中包含复杂的模式或者处理逻辑，所以系统会预估两倍的矿工费去保证交易发送成功，实际产生的费用会少于预估费用的50%，剩余部分会自动退回"),r),revoke:{revokeTitle:"取消授信额度",revokeDescription:"如果需要移除对Bulksender智能合约的授信额度，请从下面的列表中选择对应代币，然后点击 “重置”, 成功后授信额度将自动置为零",currentAllowance:"当前对Bulksender的授信额度",revokeHashTitle:"取消授信交易号"},checkBulksend:{title:"验证批量发送",nftSupportsCommingSoon:"NFT批量验证即将上线，请耐心等待",description:"通过已知的交易号和空投发送数据，校验接收地址列表中，哪些地址收到了代币，哪些地址未收到",currentAllowance:"当前对Bulksender的授信额度",revokeHashTitle:"取消授信交易号",yourTxs:"交易哈希号",yourTxsPlaceholder:"请输入通过Bulksender发送的交易哈希号",yourAddressList:"接收地址和数量",yourAddressListERC721:"接收地址和Token ID",yourAddressListERC1155:"接收地址, Token ID以及数量",duplicates:"重复的",matched:"完全匹配",received:"已收到",notReceived:"未收到",matchedDesc:"从输入的交易号和输入的原始发送文件中，完全匹配到的地址和数量信息",receivedDesc:"从输入的交易号中查询到的地址和数量信息",notReceivedDesc:"从输入的交易号和输入的原始发送文件中，未完全匹配到的地址和数量信息，要么是未收到代币，要么就是有收到，但数量不对",suggestionDdCheck:"我们强烈建议您对检查结果再次确认"},bulksendResult:{received:"已收到",notReceived:"等待中",failedReceived:"发送失败",failedReceivedDesc:"因为交易失败或者钱包拒绝，未能成功接收代币的地址列表",receivedDesc:"已成功接收代币的地址列表",notReceivedDesc:"等待接收代币的地址列表，包括正在确认中的交易和未开始发送的交易 "},faq:{},refund:{refundTitle:"退款「加速秘钥」",currentBurnerKeyTitle:"当前「加速秘钥」",historyBurnerKeyTitle:"历史「加速秘钥」",copyPrivateKey:"复制私钥",refundDesc:"如果您曾经使用过本地「加速秘钥」，但在使用过程中出现问题或交易已完成，但有剩余费用，您可以手动处理退款",balanceHas:"剩余",loading:"加载中",refundSent:"发送成功，请稍后检查余额"},send:{pleaseSignTransactionsTitle1:"请打开",pleaseSignTransactionsTitle2:"钱包确认交易",sentTransactionsTitle:"已发送交易",sendTransactionsTitle:"正在发送交易",checkingTransactionsTitle:"请等待交易被确认。",transactionSentoutTitle:"交易已全部发出，",congratulationsTransactionsTitle:"祝贺，批量交易发送成功！",topUpTxTitle:"转移费用至「加速秘钥」交易号",refundRemainingTxTitle:"剩余费用退回交易号",refundingRemainingTxTitle:"正在将剩余费用退回至",prepareTransactionStatus:"请稍等, 正在准备转账第",prepareTransactionStatusMiddle:"笔 (总共",prepareTransactionStatusEnd:"笔)...",verificationInfo1:"有交易失败或被拒绝，你可以从下面的数据中下载结果重新发送或者使用 ",verificationInfo2:"页面校验哪些地址收到了代币或者 ",verificationInfo3:" 我们获得技术支持",contact:"联系",verify:"验证 "},button:{deleteAllInvalidAddresses:"删除无效地址",deleteAllInvalidHashes:"删除无效交易号",keepFirstOne:"保留第一个",combineBalances:"合并重复项",keepDuplicated:"保留重复项",ingoreDuplicated:"保留重复项",next:"下一步",back:"上一步",send:"发送",resend:"重新发送被拒绝的交易",checkout:"查看",skip:"跳过",buyVIP:"购买",signKey:"签名",oneClick:"一键转账",gotIt:"知道了",install:"安装",generate:"生成",copyLink:"复制链接",connect:"连接",open:"打开",revoke:"重置",refund:"退款",continue:"确定",check:"检查",add:"添加",downloadCSV:"下载CSV",howToFix:" 点击查看如何修复 ↗"},warning:{unFinishedTasks:"发现您有未完成的批量发送！请耐心等待!"},error:{tokenSelectedNull:"请选择代币",tokenErrorMessage:"请粘贴正确的代币或NFT合约地址",addressNull:"请上传或插入地址",prepareDataError:"数据组装出错，请重试或联系我们以获得帮助!",prepareTransactionsError:"准备交易出错，请重试或联系我们以获得帮助!",processENSError:"解析ENS名字出错，请重试或联系我们以获得帮助!",checkOwnersDataError:"代币ID错误，某些代币ID不存在，请检查后重试",checkSelfBalanceDataError:"检查地址余额请求异常，请重试！",checkBadAddressDataError:"校验收款地址失败，请重试或联系我们以获得帮助!",addressInvalid:"请处理无效的地址或数量",addressDuplicated:"请删除或合并重复地址",insufficientTokenBalance:"代币余额不足",insufficientEtherBalance:"以太币余额不足",insufficientBaseEtherBalance:", 请保证钱包中至少有",getEstimatedFee:", 以获得总的预估费用",invalidEthereumAddress:"无效的钱包地址",cantSupportsContracts:"为合约地址，不支持发送",invalidEthereumAmount:"无效的发送数量",invalidEthereumAddressAndAmountAndTokenId:" 地址无效、代币ID无效、发送数量无效",invalidEthereumAddressAndTokenId:" 地址无效、代币ID无效",invalidTokenIdShouldBeNumber:" 代币ID无效，ID必须是整数",invalidAmountShouldBeNumber:" 无效的发送数量，发送数量必须是整数",invalidAmountShouldNotBeEmpty:",请填写有效的发送数量(发送数量至少为1)",invalidTokenIdAndAmountShouldBeNumber:" 代币ID和发送数量无效, 它们必须是整数",invalidEthereumAmountDecimals:"发送数量中的小数点位数错误",invalidEthereumAmounOwnership:"权限错误，原因可能是此代币ID不属于你",insufficientTokenIDBalance:"该代币余额不足",duplicatedEthereumAmount:"代币ID重复",invalidEthereumAddressAndAmount:"无效的钱包地址和发送数量",addressesCannotBeProcessed:"无法发送，请删除后重试",ensError:"ENS名字错误或者名字未注册",hashMaynotExist:"可能和选择的代币不匹配或者交易还没被确认或者不是通过Bulksender发送, 请确认后重试",duplicatedEthereumAddresses:"地址重复",duplicatedEthereumHash:"交易号重复",duplicatedEthereumAddressesTitle:"发现有重复钱包地址",duplicatedEthereumHashesTitle:"发现有重复交易号",invalidEthereumHash:"是无效的交易号",badAddressCantBeProcessed:"以下地址或金额不能发送",badHashesCantBeProcessed:"以下交易号不能使用",invalidEthereumAddressesTitle:"钱包地址或发送数量不合法",invalidEthereumAddressesOrTokenIdsTitle:"钱包地址或代币ID无效",resetApprovalErrorOption1:"发送批量交易，将剩余授信额度消耗完",resetApprovalErrorOption2:"重置授信额度",resetApprovalError:"检测到您的代币不允许在有剩余授信额度的情况下，重复进行授信，您有2个选项:",approvalError:"授信失败，请检查您的代币合约代码，是否包含授信功能",lineOrder:"第",line:"行",approveError:"检测到授信错误",metamaskNotFoundError:"请先安装MetaMask钱包",metamaskNotFoundMobileError:'请打开imToken，或在imToken浏览中搜索 "批量打币"',metamaskLockedError:"请打开MetaMask解锁账户",invalidWalletAddress:"钱包地址无效",anyWalletNotFoundError:"请先连接您的以太坊钱包，以继续使用",openLink1:"imtokenv2://navigate?screen=DappView&url=https://www.bulksender.app",errorConnecting:"连接错误",errorTryAgain:"重新连接",unsupportedNetwork:"当前网络不支持，请连接到以下支持的网络或联系我们以获得支持.",transactionRejected:"交易被钱包拒绝，请点击下方的”重新发送“",openseaIssue:"关于OpenSea NFT不能批量发送的问题"},networks:{mainnets:"主网",testnets:"测试网",ethereumMainnet:"以太坊",bscMainnet:"币安智能链 (BSC)",maticMainnet:"Matic (Polygon)",huobiMainnet:"火币生态链 (HECO)",xdaiMainnet:"Gnosis (原xDai链)",okexMainnet:"OKX (OKC)",kucoinMainnet:"KuCoin Community Chain",ftmMainnet:"Fantom Opera",avaxMainnet:"Avalanche C Chain",rskMainnet:"RSK",harmonyMainnet:"Harmony",ropsten:"Ropsten",rinkeby:"Rinkeby",kovan:"Kovan",goerli:"Görli",bscTestnet:"币安链 (BSC) 测试网",huobiTestnet:"火币生态链测试网",okexTestnet:"OKExChain测试网",xinfinMainnet:"XinFin (XDC)",quarkMainnet:"Quark Mainnet",xinfinTestnet:"XinFin Apothem Testnet",arbitrumOne:"Arbitrum One",arbitrumOneRinky:"Arbitrum Testnet Rinky",iotexMainnet:"IoTeX主网",hpbMainnet:"HPB Mainnet",celoMainnet:"Celo",cronosChain:"Cronos",moonriver:"Moonriver",evmosTestnet:"Evmos Testnet",evmosMainnet:"Evmos",maticMumbaiTestnet:"Polygon Mumbai测试链",tpayMainnet:"TPAY Chain",solana:"Solana",moonbeam:"Moonbeam",klaytn:"Klaytn主网",bdlt:"BDLT Blockchain",metis:"Metis (Andromeda)主网",aurora:"Aurora",astar:"Astar (EVM)",shibuya:"Shibuya (EVM)",shiden:"Shiden (EVM)",oasis:"Oasis Network",tomochain:"TomoChain",l1Mainnet:"GenesisL1",ameChain:"AME Chain",opTestnet:"Optimism测试网",opMainnet:"Optimism主网",cube:"Cube主网",dogechain:"Dogechain",sepoliaTestnet:"Sepolia测试网",syscoin:"Syscoin主网",ethfair:"EthereumFair主网",ethpow:"EthereumPow主网",songBird:"Songbird",condorTest:"Condor测试网",pulseChainTestnet:"PulseChain测试网",coinex:"CoinEx智能链",ubiq:"Ubiq",shardeumTestnet:"Shardeum Liberty 2.X",bitindi:"Bitindi",aptos:"Aptos",flare:"Flare",confluxE:"Conflux eSpace",amStar:"AmStar Network",dogCoin:"DogCoin",maro:"MARO Blockchain",core:"Core主网",canto:"Canto",shardeumSphinx:"Shardeum Sphinx 1.X",filecoin:"Filecoin EVM",zkEVM:"Polygon zkEVM",shyft:"Shyft",ozoneChain:"Ozone Chain",baseGoerli:"Base Goerli",rikeza:"Rikeza Network",pulseChain:"PulseChain"}}};t.a=c}},[[1223,103,80,83,79,81,82,74,24,47,71,50,32,35,34,0,16,27,12,42,67,31,18,33,28,56,25,48,5,72,41,64,55,21,7,46,17,54,65,38,37,73,45,22,15,6,39,77,52,53,75,29,69,40,44,1,9,49,36,61,66,78,51,68,58,60,62,23,63,43,8,13,20,11,19,30,26,2,76,3,57,59,70,4,14]]]);
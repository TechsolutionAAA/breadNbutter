require('dotenv').config();

const axios = require("axios");

const Wallet = require("ethereumjs-wallet");

const { ethers } = require("ethers");

const tokenAddr = process.env.TOKEN;

const tokenABI = require("../lib/tokenABI.json");

const Avalanche_net = process.env.AVNET;

const AvalanceProvider = new ethers.providers.JsonRpcBatchProvider(Avalanche_net);
const Contract = new ethers.Contract(tokenAddr, tokenABI, AvalanceProvider);

exports.metajson = async (req, res) => {
    // const response = await axios.get("https://boredapeyachtclub.com/api/mutants/1", {
    //     headers: {
    //         'Host': 'boredapeyachtclub.com',
    //         'Accept': '*/*',
    //         'Accept-Encoding': 'gzip, deflate, br',
    //         'Connection': 'keep-alive',
    //         'Access-Control-Allow-Methods': 'GET',
    //         'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type',
    //         'Access-Control-Allow-Credentials': true,
    //         'Access-Control-Allow-Origin': 'https://boredapeyachtclub.com'
    //     }
    // })
    // res.status(200).json(data.data[req.params.id]);

    let tokenURI = await Contract.tokenURI(req.params.id);

    const tokenuri = tokenURI.replace(":/", "");

    const response = await ipfs_url_from_hash(tokenuri);

    // let resp = await axios.get(response);
    // console.log(resp.data)
    // console.log(JSON.parse(resp.data))
    // console.log(JSON.parse(data).image)

    res.status(200).json({ "tokenURI": tokenURI, "TokenJSON": response });
}

function ipfs_url_from_hash(h) {
    return "https://ipfs.io/" + h;
}

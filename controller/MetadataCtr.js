const data = require("../data/data.js");

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
    res.status(200).json(data.data[req.params.id]);
}
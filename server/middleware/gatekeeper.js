const gatekeeper = (req, res, next) => {
    const { query: { url } } = req;
    const key = Buffer.from(url).toString('base64');
    const db = admin.database();
    
    console.log(`#retrieve: ${key}::${url}`);
    ref.equalTo(key).once("value", e => {
        val = e.val()
    });
}

module.exports = gatekeeper;

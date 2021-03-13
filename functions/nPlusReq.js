const nPlus = require('./nPlus')


const nPlusReq = (req, res) => {
    const queryString = req.query.q;
    const shift = req.params.i;
    const final = nPlus(queryString, shift)

    res.format({
        "html": function () {
            res.send(`<p>${final.replace('\n', "<br/>")}</p>`)
        },
        "application/json": function () {
            res.json({
                "original": queryString,
                "nPlussed": final
            })
        },
        "default": function () {
            res.send(final)
        }
    })
}

module.exports = nPlusReq
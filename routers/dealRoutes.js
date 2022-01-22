app.post('/deal', function (req, res) {
    console.log(req.body);
    const {startTime, endTime, itemNumber} = req.body;
    // // add validations
    const deal = {
        startTime,
        endTime,
        itemNumber,
        isActive: true,
        createdOn: Date.now(),
        updatedOn: Date.now()
    };
    deals[dealId] = deal;
    console.log(deals);
    res.status(200).send({
        insertedDeal: dealId
    });
    dealId++;
});

app.patch('/endDeal/:dealId', function (req, res) {
    const { dealId } = req.params;
    //validations
    deals[dealId].isActive = false;
    console.log(deals[dealId]);
    res.status(200).send({
        message: `dealId = ${dealId} updated!`
    });
});

app.put('/deal/:dealId', function (req, res) {
    const { dealId } = req.params;
    //validations
    const {endTime, itemNumber} = req.body;
    deals[dealId].endTime = endTime;
    deals[itemNumber].itemNumber = endTime;
});


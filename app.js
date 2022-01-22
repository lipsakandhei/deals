const http = require('http');
// const mongoose = require('mongoose');
const express = require('express');
var bodyParser = require('body-parser')
var app = express()

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

let deals = {};
let dealId = 0;
let customerItemsDeals = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

/*
  validate 
  startTime: valid date
  endTime: valid date
  itemNumber: valida number > 0
*/

jest.mockServer()

jest.it('createDeal', mockFunction, ).expect();

app.post('/deal', function (req, res) {
  console.log(req.body);
  const {startTime, endTime, itemNumber} = req.body;
  // add validations
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
  res.status(201).send({
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
  deals[itemNumber].itemNumber = itemNumber;
  res.status(200).send({
      message: `dealId = ${dealId} updated!`
  });
});

  
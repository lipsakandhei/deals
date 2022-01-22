/*
    deal
        _id
        startTime
        endTime
        itemNumber
        isActive
        createdOn
        UpdatedOn


    customerItemsDeals
        itemId
        dealId
        customerId

    APIs
        create deal
        endDeal: make isActive false
        updateDeal: update the endtime or itemNumber
        claimADeal(customerId, dealId, itemId)
            check if the deal time is over:
                throw error
            check the number of entries for a given dealId if == deal.itemNumber:
                throw error;
            check if the there is already an entry in the customerItemsDeals table for customerId:
                throw error
            add an entry (customerId, dealId, itemId)
            

*/
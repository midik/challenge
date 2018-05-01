### Description

This “PricingDataAPI​” based on NodeJS / Express​. The service is be responsible for providing the access to a pricing API. With help of the API, 3rd-party applications can retrieve an actual pricing data in the JSON​ format

### Requirements

* mongodb
* redis

### How to use

* yarn install 
* yarn start
* point your Postman to http://localhost:3000 

### Methods

* GET /pricing[?coupon=couponName]

### Known bugs / todo

1) mock mongo models (mockgoose?). I know that would not to be **unit** testing but.. this is a sandbox after all :)  
2) controller test fails when mongo is unreachable (see #1)
3) move mongo query caching to the schema's post-hook (or to a mongoose plugin)
4) ... freedom for a perfectionist

### Testing

* npm run test - will invoke the tests and show the coverage

#### Comments and code review are welcome!
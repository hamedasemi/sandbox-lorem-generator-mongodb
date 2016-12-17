
var MongoClient = require('mongodb').MongoClient;

var loremIpsum = require('lorem-ipsum'),
    output = loremIpsum();


MongoClient.connect("mongodb://mockup:mockup@ds054118.mongolab.com:54118/book", function (err, db) {
    if (err) { return console.dir(err); }
    /**
     * This command will create the collection on the Mongo DB database before returning the collection object. 
     * If the collection already exists it will ignore the creation of the collection.
     */
    db.createCollection('per', {autoIndexId: false}, function (err, collection) {

        output = Array.apply(0, Array(500)).map(function (data, index) { return {
        en: loremIpsum({
            count: 1,
            units: 'sentence',
            sentenceLowerBound: 5,
            sentenceUpperBound: 25,
            format: 'plain',
            random: Math.random
        }),
        sv: loremIpsum({
            count: 1,
            units: 'sentence',
            sentenceLowerBound: 5,
            sentenceUpperBound: 25,
            format: 'plain',
            random: Math.random
        }),
        fr: loremIpsum({
            count: 1,
            units: 'sentence',
            sentenceLowerBound: 5,
            sentenceUpperBound: 25,
            format: 'plain',
            random: Math.random
        }),
        fa: loremIpsum({
            count: 1,
            units: 'sentence',
            sentenceLowerBound: 5,
            sentenceUpperBound: 25,
            format: 'plain',
            random: Math.random
        }),
        _id: false,
        index: index
   }; 
});

        
        console.log(output);
        collection.insert(output);
    });
});

var arr = Array.apply(0, Array(5000)).map(function (data, index) { 
    return {
        en: loremIpsum({
            count: 1,
            units: 'sentence',
            sentenceLowerBound: 5,
            sentenceUpperBound: 25,
            format: 'plain',
            random: Math.random
        }),
        sv: loremIpsum({
            count: 1,
            units: 'sentence',
            sentenceLowerBound: 5,
            sentenceUpperBound: 25,
            format: 'plain',
            random: Math.random
        }),
        fr: loremIpsum({
            count: 1,
            units: 'sentence',
            sentenceLowerBound: 5,
            sentenceUpperBound: 25,
            format: 'plain',
            random: Math.random
        }),
        fa: loremIpsum({
            count: 1,
            units: 'sentence',
            sentenceLowerBound: 5,
            sentenceUpperBound: 25,
            format: 'plain',
            random: Math.random
        }),
        index: index
   }; 
});

console.log(arr);




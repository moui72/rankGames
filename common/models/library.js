'use strict';

module.exports = function(Library) {
  Library.bggFetch = function(req, cb) {
    // consumes req and calls BGG_XML_API2, returns games
  };

  Library.remoteMethod('bggFetch', {accepts: [
    {
      arg: 'command',
      description: ['Maps to one of the [BGG_XML_API2](https://boardgamegeek.',
      'com/wiki/page/BGG_XML_API2) commands.'],
      required: true,
      type: 'string',
    }, {
      arg: 'arguments',
      description: ['Arguments for the BGG_XML_API2 call'],
      required: true,
      type: 'Object',
    },
  ]});
};

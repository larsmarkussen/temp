/// <reference path="jquery-1.8.0.min.js" />
/// <reference path="xml2json.js" />
/// <reference path="jasmine.js" />

describe("XML load test", function ()
{
  var xml = null;

  beforeEach(function ()
  {
    $.ajax({
      url: "XMLFile1.xml",
      async: false,
      success: function (data)
      {
        xml = data;
      }
    });
  });

  it("xml is loaded", function(){
    expect(xml.length).toBeGreaterThan(0);
  });
});
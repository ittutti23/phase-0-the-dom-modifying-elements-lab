require ( './helpers.js' );

describe("index.html", () => {
  describe("after index.js is processed", () => {
    it("no longer has DOM node 'main#main'", () => {
      expect(document.querySelector('main#main'), "Make sure you remove the <main> with id 'main'").to.not.exist
    });

    it("has a 'newHeader' variable that points to an <h1> node", () => {
      expect(
        newHeader.nodeName,
        "Make sure you create an <h1> and assign it to the 'newHeader' variable"
      ).eql("H1");
    });


   

  });
})
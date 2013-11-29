'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Monster App', function() {

  it('should redirect index.html to index.html#/monsters', function() {
    browser().navigateTo('app/index.html');
    expect(browser().location().url()).toBe('/monsters');
  });

  describe('Monster list view', function() {

    beforeEach(function() {
      browser().navigateTo('app/index.html#/monsters');
    });


    it('should filter the monster list as user types into the search box', function() {
      expect(repeater('.monsters li').count()).toBe(2);

      input('query').enter('king');
      expect(repeater('.monsters li').count()).toBe(1);

      input('query').enter('');
      expect(repeater('.monsters li').count()).toBe(2);
    });


    // it('should be possible to control monster order via the drop down select box', function() {
    //   input('query').enter('tablet'); //let's narrow the dataset to make the test assertions shorter

    //   expect(repeater('.monsters li', 'Phone List').column('monster.name')).
    //       toEqual(["Motorola XOOM\u2122 with Wi-Fi",
    //                "MOTOROLA XOOM\u2122"]);

    //   select('orderProp').option('Alphabetical');

    //   expect(repeater('.monsters li', 'Phone List').column('monster.name')).
    //       toEqual(["MOTOROLA XOOM\u2122",
    //                "Motorola XOOM\u2122 with Wi-Fi"]);
    // });


    // it('should render monster specific links', function() {
    //   input('query').enter('nexus');
    //   element('.monsters li a').click();
    //   expect(browser().location().url()).toBe('/monsters/nexus-s');
    // });
  });


  // describe('Phone detail view', function() {

  //   beforeEach(function() {
  //     browser().navigateTo('app/index.html#/monsters/nexus-s');
  //   });


  //   it('should display nexus-s page', function() {
  //     expect(binding('monster.name')).toBe('Nexus S');
  //   });


  //   it('should display the first monster image as the main monster image', function() {
  //     expect(element('img.monster.active').attr('src')).toBe('img/monsters/nexus-s.0.jpg');
  //   });


  //   it('should swap main image if a thumbnail image is clicked on', function() {
  //     element('.monster-thumbs li:nth-child(3) img').click();
  //     expect(element('img.monster.active').attr('src')).toBe('img/monsters/nexus-s.2.jpg');

  //     element('.monster-thumbs li:nth-child(1) img').click();
  //     expect(element('img.monster.active').attr('src')).toBe('img/monsters/nexus-s.0.jpg');
  //   });
  // });
});

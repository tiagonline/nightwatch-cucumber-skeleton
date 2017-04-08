module.exports = function() {

  this.After(function(browser, scenario){
    browser
        .end();
  });
};

exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(value);
      }, 10);
    });
  },

  manipulateRemoteData : function(url) {
    return new Promise(function(resolve, reject) {
      var req = new XMLHttpRequest();
      req.open('GET', url);

      req.onload = function() {
        if (req.status == 200) {
          resolve(req.response);
        }
        else {
          reject(Error(req.statusText));
        }
      }
      req.send();
    })
      .then(JSON.parse)
      .then(function(data) {
        return data.people.map(function(el) {
          return el.name;
        });
      })
      .then(function(data) {
        return data.sort();
      });
  }
};

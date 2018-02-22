module.exports = function(options) {
  return function(req, res, next) {
    console.log('LOGGED')
    res.locals.createPagination = function (pages, page) {
      var url = require('url')
        , qs = require('querystring')
        , params = qs.parse(url.parse(req.url).query)
        , str = ''

      params.page = 0
      var clas = page == 0 ? "active" : "no"
      str += '<li class="'+clas+'"><a href="?'+qs.stringify(params)+'">First</a></li>'
      for (var p = 1; p < pages; p++) {
        params.page = p
        clas = page == p ? "active" : "no"
        str += '<li class="'+clas+'"><a href="?'+qs.stringify(params)+'">'+ p +'</a></li>'
      }
      params.page = --p
      clas = page == params.page ? "active" : "no"
      str += '<li class="'+clas+'"><a href="?'+qs.stringify(params)+'">Last</a></li>'

      return str
    }
    next()
  }
}
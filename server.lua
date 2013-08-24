local http = require 'http'

http.createServer(function(req, res)
  local body = 'It works! And EMR figured it out!'
  res:writeHead(200, {
    ['Content-Type'] = 'text/plain',
    ['Content-Length'] = #body
  })
  res:finish(body)
end):listen(8080)

print('Listening on 8080')
# Redirect apex/naked domain to www subdomain

Node.js server that redirects incoming traffic on apex/naked domain to www subdomain dynamically with a configurable status code.


## Usage

### Start server

Run it with `npm run start`.


### With Zeit's Now.sh

Your domain should use [Zeit World](https://zeit.co/dns)

Deploy this app to [Now](https://now.sh)

Alias any apex/naked domain to this app and it will redirect traffic to www for that domain.

For example:
```
$ now
  ...
  > https://apex-to-www-lacycoqnnm.now.sh [in clipboard] (bru1) [12s]
  ...
  > Success! Deployment ready
$ now alias set https://apex-to-www-lacycoqnnm.now.sh yourdomain.com
$ curl -I https://yourdomain.com
HTTP/1.1 301 Moved Permanently
...
Location: https://www.yourdomain.com/
...
```
Replace `yourdomain.com` above with your domain.

You can alias as many apex/naked domains as you want for this apps instance(s). You are not required to have an instance of this app per domain you want to redirect. YMMV.


### Configuration

Set environment variable `STATUS_CODE` to configure redirect status code. Defaults to `301`.


## License
[X11](LICENSE)

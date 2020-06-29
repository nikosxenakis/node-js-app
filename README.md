# node-js-app

<div align="center">

[![Build Status](https://travis-ci.org/nikosxenakis/node-js-app.svg?branch=master)](https://travis-ci.org/nikosxenakis/node-js-app)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/nikosxenakis/node-js-app/issues)
[![HitCount](http://hits.dwyl.io/nikosxenakis/node-js-app.svg)](http://hits.dwyl.io/nikosxenakis/node-js-app)


http://localhost:6561/lights?color=white

Lifx API
https://api.developer.lifx.com/docs/set-states


Examples:

http://192.168.1.100:6561/
http://192.168.1.100:6561/lights?power=1
http://192.168.1.100:6561/lights?color=white

Script on startup:
sudo nano /etc/rc.local

# Open Browser
DISPLAY=:0 chromium-browser --kiosk http://192.168.1.100:6561/ &

</div>
# Welcome to cake

## Debug Mode
Debug mode is a bit quirky.

* To start run `foreman start --procfile Procfile-Debug`
* Once running you'll need to type `c` to get rolling. Otherwise the server is just hanging. Not sure why this is, but it seems to work.
* Next use your browser to run the code that will hit the breakpoint.
* Then at the breakpoint you'll need to type `repl` if you want to get access to the running environment. Again not sure why, but it works.
* Lastly Crtl-C will break out of `repl` but doesn't return to executing code. Sighhhhhhh.

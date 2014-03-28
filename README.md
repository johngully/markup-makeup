Markup -> Makeup
============
This project has been created as a starting place for interaction design prototypes.  This version of the bootstrap variables has been configured for a minimal look that should help focus on the interaction design elements rather than the "look and feel".

How to starting using this?
===========================
The easiest way to get going is to use the bootstrap.css directly.  Simply download the file and include it in your markup.  Then author your code as you would normally for any bootstrap based site/app.

####Easy way
```
<!DOCTYPE html>
<html>
  <head>
    <link href="css/markup-makeup.css" rel="stylesheet" />
    <script src="scripts/bootstrap.min.js"></script>
  </head>
  <body>
    ...
  </body>
</html>
```


####Preferred way

The modifications to bootstrap have been implemented as overrides to the bootstrap LESS variables.  This means that **no changes to bootstrap itself have been made**.  Simply include the bootstrap less files and @import the markup-makup.less  It will override the appropriate variables and generate the required styles.

Assuming the following file structure:
```
- less
  - bootstrap
    - bootstrap.less
    - { other-bootstrap-less-files ... }
  - markup-makeup.less
  - styles.less
```

styles.less
```
@import 'bootstrap/bootstrap.less';
@import 'markup-makeup.less';
```

# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).


## 2.1.1

### Removed
- requestAnimationFrame debounce deleted because it triggered false changes in scrolling direction


## 2.1.0

### Fixed
- Improve frame rate adding deboucing actions with requestAnimationFrame

### Removed
- No more support for Internet Explorer 8
- Provided **up** and **down** methods are not wrapped in try/catch statements anymore

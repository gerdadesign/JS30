![](https://javascript30.com/images/JS3-social-share.png)
[JavaScript 30 Day Challenge](https://JavaScript30.com)

# Notes
## 01 JavaScript Drum Kit
###### Monday, August 15, 2022
- Feels like a big step from the free JavaScript intro course from codecademy.
- How do you know which events are available to you? [HTML DOM Events](https://www.w3schools.com/jsref/dom_obj_event.asp)

## 02 JS and CSS Clock
###### Wednesday, August 17, 2022
- Spent a LOT of time discovering how to make the hands different sizes and maintain position. At smaller widths, the divs kept aligning left and I eventually was able to realign them with `right: 0;`
- I wanted to add a digital clock underneath. I found this difficult and tried many methods. I kept running into an issue that `document.getElementById('digitalTime').value` would only work for inputs, but not `p`, `div`, or `span`. Eventually, realized that is because inputs have a `value`, but this needed to use `innerHTML` instead. 
- `toLocaleTimeString` also seems like an easier to way to get time than separating seconds, minutes, and hours? But the separation seems necessary for rotation. 

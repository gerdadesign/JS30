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

## 03 CSS Variables
###### Thursday, August 18, 2022
- This one felt good! I extended the ideas of the exercise to also affect the color of the range selector and border radius of the image. 
- I sunk down the rabbit hole of [cross-browser range selector styling](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/_), but it didn't allow an option to adjust the color to the left of the slider as it grows in value. After a while, I later realized that `accent-color` was all I needed for this exercise. 

## 04 Array Cardio Day 1 
###### Friday, August 19, 2022
- This one felt pretty shaky and over my head many times. I grasped the first few examples, but as they got more complex, I couldn't really figure anything out on my own. 
- Could not complete Exercise 6 as wikipedia kept giving me this error: `Error with Permissions-Policy header: Unrecognized origin: 'intake-analytics.wikimedia.org'.`
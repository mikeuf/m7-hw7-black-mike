# m7-hw7-black-mike

I used StackOverflow and W3Schools for tips on the methods to use to update the DOM with the response text. 
The text came from https://www.lipsum.com/feed/html
The background gradient is from https://uigradients.com/#Margo

The only issue that I ran into was figuring out the best way to append text to an existing DOM element, without creating a separate element. It looks like this can be done with InsertAdjacentText(), but support for this is apparently fairly new. The instructions hint at using createTextNode, so I used that for the weather description.

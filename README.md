# **sentBlobJS**
## Generate and display sentiment 

### [Open Joe Biden example](https://ed100miles.github.io/sentBlobJS/)

---

## What does it do?
Categorises tweets as being positive or negative and stores a rolling mean as a CSV. This is data is then displayed on a line graph. 

In my example I've collected sentiment data on Joe Biden for around a month. The code can be easily edited to collect data for any twitter handle. 

---

## How does it work?
The Tweepy python library accesses the Twitter API to stream tweets from the Twitter firehose. The TextBlob library is then used to perform some rudimentary sentiment analysis on the tweets. Each tweet is given a value between 1 and -1 depending on how positive or negative TextBlob believes the tweet to be. A rolling mean of 200 tweets is then calculated and the value is output to a CSV file along with a timestamp. 

The data in the CSV is converted to two JavaScript arrays, one containing the mean sentiment, the other containing the timestamps. This is then fed into Chart.js data visualization library which renders a responsive linegraph to the browser. 

---

## Does it work?
This is undoubtably a blunt instrument for measuring sentiment. And given the granularity of the data, it's not easy to use other measures such as opinion polling to draw conclusions on the accuraccy of the analysis. 

But, in my data, there does appear to be some correlation between the results of the analysis and key actions of Biden and his administration. For example, the highest peak in positive sentiment comes soon after Biden announces plans for a full withdrawal of US troops from Afghanistan, and the lowest trough comes after Biden makes a speach acknowledging systemic racism within parts of the US justice system following the conviction of Derek Chauvin for the murder of George Floyd.
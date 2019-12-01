# udacity-nd9990-p7
Udacity Cloud Developer Capstone Project

## Project Description
Using the [Open Weather API](https://openweathermap.org), explore the weather across the United States to see real time information on current weather. This is my submission for the Udacity Cloud Developer Capstone

### Rate Limits
This is a free API license so there is a rate limit of no more than 60 queries per minute. To serve this project, this should not be an issue.

### Tech Stack
  * [HTTPD Alpine Docker Image](https://hub.docker.com/layers/httpd/library/httpd/alpine/images/sha256-38c803ee5466e996b1070cdd8745c69fac82ad351d28908c8ee81b69e920bd72) to serve as the web service
  * jQuery for logic
  * [Open Weather API](https://openweathermap.org) for data collection
  * Docker - to containerize and publish this image

## How to Run
  1. Ensure docker is installed and running
  2. run the command `docker pull noahross/weather-udacity-capstone` via terminal of choice
  3. run the command `docker run -dit --name weather-applet -p 8080:80 noahross/weather-udacity-capstone` via terminal of choice
  4. Browse to [localhost](http://127.0.0.1:8080) on port 8080 to use the web applet.

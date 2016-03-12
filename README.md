#apig-timeout-test
APIGateway Timeout Confirmation(10sec -> 29sec)

## Installation 
### clone project & local run
```
git clone git@github.com:goto63/apig-timeout-test.git

cd apig-timeout-test
sls function run nodejscomponent/sleep
```
### Deploy to APIGateway & Lambda
```
sls function dash

Serverless: Select the assets you wish to deploy:
    nodejscomponent/sleep
      function - nodejscomponent/sleep
      endpoint - nodejscomponent/sleep@sleep~GET
    - - - - -
  > Deploy
    Cancel
```

## Usage
```
curl -w "\n%{time_total} sec\n" https://xxxxxxxxxx.execute-api.ap-northeast-1.amazonaws.com/dev/sleep?delay=0
```

# Logs
```
$ curl -w "\n%{time_total} sec\n" https://xxxxxxxxxx.execute-api.ap-northeast-1.amazonaws.com/dev/sleep?delay=0
{"message":"Your Serverless function ran successfully!"}
0.406 sec
$ curl -w "\n%{time_total} sec\n" https://xxxxxxxxxx.execute-api.ap-northeast-1.amazonaws.com/dev/sleep?delay=5000
{"message":"Your Serverless function ran successfully!"}
5.304 sec
$ curl -w "\n%{time_total} sec\n" https://xxxxxxxxxx.execute-api.ap-northeast-1.amazonaws.com/dev/sleep?delay=10000
{"message":"Your Serverless function ran successfully!"}
10.471 sec
$ curl -w "\n%{time_total} sec\n" https://xxxxxxxxxx.execute-api.ap-northeast-1.amazonaws.com/dev/sleep?delay=15000
{"message":"Your Serverless function ran successfully!"}
15.526 sec
$ curl -w "\n%{time_total} sec\n" https://xxxxxxxxxx.execute-api.ap-northeast-1.amazonaws.com/dev/sleep?delay=20000
{"message":"Your Serverless function ran successfully!"}
20.509 sec
$ curl -w "\n%{time_total} sec\n" https://xxxxxxxxxx.execute-api.ap-northeast-1.amazonaws.com/dev/sleep?delay=25000
{"message":"Your Serverless function ran successfully!"}
25.474 sec

$ curl -w "\n%{time_total} sec\n" https://xxxxxxxxxx.execute-api.ap-northeast-1.amazonaws.com/dev/sleep?delay=26000
{"message":"Your Serverless function ran successfully!"}
26.353 sec
$ curl -w "\n%{time_total} sec\n" https://xxxxxxxxxx.execute-api.ap-northeast-1.amazonaws.com/dev/sleep?delay=27000
{"message":"Your Serverless function ran successfully!"}
28.844 sec
$ curl -w "\n%{time_total} sec\n" https://xxxxxxxxxx.execute-api.ap-northeast-1.amazonaws.com/dev/sleep?delay=28000
{"message":"Your Serverless function ran successfully!"}
28.346 sec
$ curl -w "\n%{time_total} sec\n" https://xxxxxxxxxx.execute-api.ap-northeast-1.amazonaws.com/dev/sleep?delay=29000
{"message":"Your Serverless function ran successfully!"}
29.373 sec
$ curl -w "\n%{time_total} sec\n" https://xxxxxxxxxx.execute-api.ap-northeast-1.amazonaws.com/dev/sleep?delay=30000
{"message": "Endpoint request timed out"}
30.819 sec
```
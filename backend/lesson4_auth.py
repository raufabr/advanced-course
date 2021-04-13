from flask import Flask, request
import json

# 1. make sure you have request imported from the flask library
# 2. make sure you are using POST so you allow for data to be sent with the request
# 3. You need a global var that will be checked on subsequent requests to make sure they are done post autherisation
# 4. Need to update the other requests to check that a valid token has been autherised

## Extra challenge: how would you make a 'refresh token'?

data = ""
AUTH_VALID = False


with open('WeatherDatav2.json') as json_file:
    data = json.load(json_file)

# --------- API CODE --------- 
api = Flask(__name__)

# GET all the data from the file
@api.route('/allData', methods=['GET'])
def get_companies():
  if AUTH_VALID:
    return data
  else:
    return "Sorry you need a valid token! Try /auth with a token."

# AUTH - check if a token is valid
@api.route('/auth', methods=['POST'])
def foo():
  expectedValue = "PythonIntermediate"
  data = request.get_json()
  if data["token"] == expectedValue:
    AUTH_VALID = True
    return "you have a token!"
  else:
    return "this was not expected"


# This will start the Flask API
if __name__ == '__main__':
    api.run()



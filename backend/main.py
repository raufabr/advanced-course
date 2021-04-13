# 1. make sure you have request imported from the flask library
# 2. make sure you are using POST so you allow for data to be sent with the request
# 3. You need a global var that will be checked on subsequent requests to make sure they are done post autherisation
# 4. Need to update the other requests to check that a valid token has been autherised

## Extra challenge: how would you make a 'refresh token'?

from flask import Flask
import json
from flask_cors import CORS
from datetime import datetime

# --------- API CODE --------- 
api = Flask(__name__)
CORS(api)

# AUTH - check if a token is valid
@api.route('/auth', methods=['POST'])
def foo():
  return "yourCodeHere"

# GET all the data from the file
@api.route('/test', methods=['GET'])
def get_companies():
  return "The /test endpoint is working!"

@api.route('/api/loc/<location>', methods=['GET'])
def getlocation(location):
  return "yourCodeHere"

# Date expected in YYYY-DD-MM format
@api.route('/api/date/<date>/loc/<location>', methods=['GET'])
def getdate(_date, location):
  return "yourCodeHere"

# Expected format for dates are YYYY-DD-MM
@api.route('/api/date/<_dateFrom>/<_dateTo>/loc/<location>', methods=['GET'])
def getdaterange(_dateFrom, _dateTo, location):
  return "yourCodeHere"

if __name__ == '__main__':
    api.run()
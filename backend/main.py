from flask import Flask
import json
from flask_cors import CORS
from datetime import datetime

# 1. make sure you have request imported from the flask library
# 2. make sure you are using POST so you allow for data to be sent with the request
# 3. You need a global var that will be checked on subsequent requests to make sure they are done post autherisation
# 4. Need to update the other requests to check that a valid token has been autherised

## Extra challenge: how would you make a 'refresh token'? 

AUTH_VALID = False

def getLocationDataFile(location):
  if(location == "london" ):
    return "weather-london.json"
  elif(location == "edinburgh"):
    return "weather-edinburgh.json"
  elif(location == "dublin"):
    return "weather-dublin.json"
  elif(location == "belfast"):
    return "weather-belfast.json"
  else:
    return "Do not have any data on this location! Please try another location."

def checkDate(date):
  print("this is the date:", date)
  if("01-01" in date):
      return 0
  elif("02-01" in date):
      return 1
  elif("03-01" in date):
      return 2
  elif("04-01" in date):
      return 3
  elif("05-01" in date):
      return 4
  elif("06-01" in date):
      return 5
  elif("07-01" in date):
      return 6


# --------- API CODE --------- 
api = Flask(__name__)
CORS(api)

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

# GET all the data from the file
@api.route('/allData', methods=['GET'])
def get_companies():
  if AUTH_VALID:
    return data
  else:
    return "Sorry you need a valid token! Try /auth with a token."

# GET all the data from the file
@api.route('/test', methods=['GET'])
def get_companies():
  if AUTH_VALID:
    return "The /test endpoint is working!"
  else:
    return "Sorry you need a valid token! Try /auth with a token."

@api.route('/api/loc/<location>', methods=['GET'])
def getlocation(location):
  if AUTH_VALID:
    filename = getLocationDataFile(location)
    if (filename == "error"):
      return "Do not have any data on this location! Please try another location."

    # Get the data from the file and return it
    data = ""
    with open(filename) as json_file:
      data = json.load(json_file)
    return data
  else:
    return "Sorry you need a valid token! Try /auth with a token."

# Date expected in YYYY-DD-MM format
@api.route('/api/date/<date>/loc/<location>', methods=['GET'])
def getdate(_date, location):
  if AUTH_VALID:
    filename = getLocationDataFile(location)
    if (filename == "error"):
      return "Do not have any data on this location! Please try another location."

    date = _date + "T23:00:00.000Z"

    with open(filename) as json_file:
      data = json.load(json_file)
    for i in range(0,6):
      if(data["data"][i]["date"] == date):
        return data["data"][i]
  else:
    return "Sorry you need a valid token! Try /auth with a token."

# Expected format for dates are YYYY-DD-MM
@api.route('/api/date/<_dateFrom>/<_dateTo>/loc/<location>', methods=['GET'])
def getdaterange(_dateFrom, _dateTo, location):
  if AUTH_VALID:
    filename = getLocationDataFile(location)
    if (filename == "error"):
      return "Do not have any data on this location! Please try another location."

    dateFrom = _dateFrom + "T23:00:00.000Z"
    dateTo = _dateTo + "T23:00:00.000Z"
    startingIndex = checkDate(dateFrom)
    endingIndex = checkDate(dateTo) + 1

    print("starting number:", startingIndex)
    print("ending number:", endingIndex)

    with open(filename) as json_file:
      data = json.load(json_file)

    collatedData = []
    for i in range(startingIndex,endingIndex):
      collatedData.append(data["data"][i])
    returnData =  json.dumps(collatedData)
    return returnData
  else:
    return "Sorry you need a valid token! Try /auth with a token."

if __name__ == '__main__':
    api.run()
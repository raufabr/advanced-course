from flask import Flask
import json
from flask_cors import CORS
from datetime import datetime

# --------- API CODE --------- 
api = Flask(__name__)
CORS(api)

# GET all the data from the file
@api.route('/test', methods=['GET'])
def get_companies():
  return "The /test endpoint is working!"

@api.route('/api/loc/<location>', methods=['GET'])
def getlocation(location):
  return "Your code here!"

# Date expected in YYYY-DD-MM format
@api.route('/api/date/<date>/loc/<location>', methods=['GET'])
def getdate(_date, location):
  return "Your code here!"

# Expected format for dates are YYYY-DD-MM
@api.route('/api/date/<_dateFrom>/<_dateTo>/loc/<location>', methods=['GET'])
def getdaterange(_dateFrom, _dateTo, location):
  return "Your code here!"

if __name__ == '__main__':
    api.run()


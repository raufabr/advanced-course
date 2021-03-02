from flask import Flask
import json
from flask_cors import CORS

data = ""
# Extracting the data from the JSON file
with open('WeatherDatav2.json') as json_file:
    data = json.load(json_file)

# --------- API CODE --------- 
api = Flask(__name__)
CORS(api)

# GET all the data from the file
@api.route('/test', methods=['GET'])
def get_companies():
  return data

# GET weather data for a specific day
# @api.route('/weather/<day>', methods=['GET'])
# def get_companies(day):
#   # Replace the below line of code with your code
#   return "yourCodeHere"

# # GET 6hourly weather data for specific day
# @api.route('/weather/<day>/6hourly', methods=['GET'])
# def get_companies(day):
#   # Replace the below line of code with your code
#   return "yourCodeHere"

if __name__ == '__main__':
    api.run()
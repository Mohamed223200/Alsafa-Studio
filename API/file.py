from flask import Flask, request, jsonify
import csv
import os
app = Flask(__name__)
filename = "numbers.csv"

# لو الملف مش موجود، نعمله
if not os.path.exists(filename):
    with open(filename, "w", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(["number"])

# API لعرض كل الأرقام
@app.route("/data", methods=["GET"])
def get_data():
    with open(filename, "r") as f:
        reader = csv.DictReader(f)
        data = [row for row in reader]
    return jsonify(data)

# API لإضافة رقم جديد
@app.route("/add", methods=["POST"])
def add_number():
    number = request.json.get("number")
    with open(filename, "a", newline="") as f:
        writer = csv.writer(f)
        writer.writerow([number])
    return jsonify({"message": "تمت إضافة الرقم", "number": number})

if __name__ == "__main__":
    app.run(debug=True)

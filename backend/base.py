# app.py
from flask import Flask, jsonify, render_template, request, send_file
import pandas as pd
from io import BytesIO

app = Flask(__name__, static_folder='build', static_url_path='/')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api')
def api():
    return jsonify(message="Hello from Flask!")

@app.route('/upload', methods=['POST'])
def upload():
    try:
        file = request.files['file']
        file_type = request.form.get('fileType')

        df = pd.read_csv(file)

        # Process the DataFrame based on file type
        if file_type == 'inbound':
            # Process for inbound shipments
            # For example, adding a new column named 'Inbound_Column'
            df['Inbound_Column'] = df['Existing_Column'] * 3
        elif file_type == 'outbound':
            # Process for outbound orders
            # For example, adding a new column named 'Outbound_Column'
            df['Outbound_Column'] = df['Existing_Column'] + 5

        # Create a buffer to store the CSV file
        csv_buffer = BytesIO()
        df.to_csv(csv_buffer, index=False)

        # Set up response headers to force file download
        response_headers = {
            'Content-Type': 'text/csv',
            'Content-Disposition': f'attachment; filename=processed_{file_type}_data.csv'
        }

        return send_file(csv_buffer, headers=response_headers, as_attachment=True)
    except Exception as e:
        print('Error:', e)
        return jsonify(error=str(e)), 500

if __name__ == '__main__':
    app.run(debug=True)

# from flask import Flask

# api = Flask(__name__)

# @api.route('/profile')
# def my_profile():
#     response_body = {
#         "name": "Nagato",
#         "about" :"Hello! I'm a full stack developer that loves python and javascript"
#     }

#     return response_body

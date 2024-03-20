import sys
import numpy as np
import pickle
import json

# Print Python version and executable path
# print("Python version:", sys.version)
# print("Python executable path:", sys.executable)

with open('./ai-models/diabetes.pkl', 'rb') as model_fileL:
    model = pickle.load(model_fileL)

data = list(json.loads(sys.argv[3]).values())
# print(f"data is {data}")
# Reshape data into a 2D array
data_array = np.array(data).reshape(1, -1)

prediction = model.predict(data_array)
values = np.asarray(data)
model.predict(values.reshape(1, -1))[0]

# print("doing prediction")
print(json.dumps(prediction.tolist()))

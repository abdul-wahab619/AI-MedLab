import sys
import numpy as np
import pickle
import json
print("Python version:", sys.version)
print("Python executable path:", sys.executable)

with open('./ai-models/kidney.pkl', 'rb') as model_fileL:
    model = pickle.load(model_fileL)

data = list(json.loads(sys.argv[3]).values())
data_array = np.array(data).reshape(1, -1)
prediction = model.predict(data_array)
values = np.asarray(data)
model.predict(values.reshape(1, -1))[0]
print(json.dumps(prediction.tolist()))
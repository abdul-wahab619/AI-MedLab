import sys
import numpy as np
import pickle
import json

with open('./aimodels/diabetes.pkl', 'rb') as model_fileL:
    model = pickle.load(model_fileL)

data = list(json.loads(sys.argv[3]).values())
data_array = np.array(data).reshape(1, -1)
prediction = model.predict(data_array)
values = np.asarray(data)
model.predict(values.reshape(1, -1))[0]
print(json.dumps(prediction.tolist()))

# import sys
# import numpy as np
# import pickle
# import json

# def load_model(disease):
#     try:
#         model_path = f'./ai-models/{disease}.pkl'
#         with open(model_path, 'rb') as model_file:
#             model = pickle.load(model_file)
#         return model
#     except Exception as e:
#         print(f"Error loading model for {disease}: {e}")
#         return None

# def predict(disease, data):
#     model = load_model(disease)
#     if model:
#         try:
#             data_array = np.array(data).reshape(1, -1)
#             prediction = model.predict(data_array)
#             return prediction.tolist()
#         except Exception as e:
#             print(f"Error predicting {disease}: {e}")
#     return None

# if __name__ == "__main__":
#     if len(sys.argv) < 3:
#         print("Usage: python predict.py <disease> <input_data>")
#         sys.exit(1)

#     disease = sys.argv[1]
#     input_data = sys.argv[2]

#     prediction = predict(disease, json.loads(input_data))
#     if prediction:
#         print(json.dumps(prediction))
#     else:
#         print("Error occurred during prediction.")

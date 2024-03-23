import sys
import numpy as np
from tensorflow.keras.models import load_model
from PIL import Image

def preprocess_image(image_path):
    img = Image.open(image_path).convert('L')  # Open the image and convert to grayscale
    img = img.resize((36, 36))  # Resize the image to the desired dimensions
    img_array = np.asarray(img)  # Convert the image to a numpy array
    img_array = img_array.reshape((1, 36, 36, 1))  # Reshape to match model input shape
    img_array = img_array / 255.0  # Normalize pixel values
    return img_array

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python predict_pneumonia.py <image_path>")
        sys.exit(1)

    image_path = sys.argv[1]

    try:
        img_array = preprocess_image(image_path)  # Preprocess the image
        model = load_model("./aimodels/pneumonia.h5")  # Load the trained model
        prediction = model.predict(img_array)[0]  # Perform prediction
        print(prediction.tolist())  # Print the prediction as a list
    except Exception as e:
        print("Error:", e)
        sys.exit(1)

# AI-based Medical Laboratory

## Project Overview

The AI-based Medical Laboratory project aims to revolutionize laboratory medicine through the use of artificial intelligence (AI) and machine learning (ML). By enhancing the precision and speed of laboratory processes, the project seeks to reduce human errors, cut costs, and ultimately improve patient outcomes and satisfaction.

### Features

- **Customer Module**: Allows patients to submit samples and receive results.
- **Doctor Module**: Provides doctors with tools to analyze lab results and make informed decisions.
- **Lab Assistant Module**: Assists lab technicians with managing samples and running analyses using AI/ML tools.

### Pros and Cons

#### Pros

- Enhances precision and speed of laboratory medicine.
- Reduces human errors and operational costs.
- Improves patient outcomes and satisfaction.

#### Cons

- Challenges with data quality and availability.
- Requires significant computing power.
- Issues of trust, acceptance, and the need for education.

### Technologies Used

- **Frontend**: React, Redux, HTML, CSS, JavaScript
- **Backend**: Node.js, Express, MongoDB
- **AI/ML Tools**: Python, R, TensorFlow, PyTorch, scikit-learn, pandas, NumPy, matplotlib, seaborn

## Project Structure

The project is structured into two main directories:

- `frontend`: Contains the frontend code built with React.
- `backend`: Contains the backend code built with Node.js and Express.

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running.

### Steps

1. **Clone the repository**

```bash
   git clone https://github.com/your-username/ai-medical-lab.git
   cd ai-medical-lab
```

2. **Install dependencies for backend**

```bash
   cd backend
   npm install
```

3. **Install dependencies for frontend**

```bash
   cd ../frontend
   npm install
```

4. **Set up environment variables**

   - Create a `.env` file in the `backend` directory and add the following:

```text
   MONGO_URI=your_mongodb_uri
   PORT=5000
```

5. **Run the backend server**

```bash
   cd ../backend
   npm start or nodemon
```

6. **Run the frontend server**

```bash
   cd ../frontend
   npm start
```

## Usage

- Access the application at `http://localhost:5173`.
- Use the frontend interface to interact with the different modules (Customer, Doctor, Lab Assistant).

## Contributors

- **[Abdul Wahab](https://github.com/abdul-wahab619)** - Full Stack Developer
- **[Nafeesa Shehzadi](https://github.com/nafeesa-shehzadi)** - Frontend Developer

## Collaboration

We welcome contributions from everyone! If you are interested in contributing to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a Pull Request.

For major changes, please open an issue first to discuss what you would like to change.

Feel free to reach out to us with any questions or suggestions. Let's collaborate to extend the exposure and impact of this project!


## License

This project is licensed under the [MIT License](https://github.com/abdul-wahab619/AI-MedLab/blob/main/LICENSE).
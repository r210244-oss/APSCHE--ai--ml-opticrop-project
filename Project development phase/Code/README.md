# 🌱 OptiCrop – Smart Agricultural Production Optimization Engine

OptiCrop is a Machine Learning-based web application that recommends the most suitable crop based on soil nutrients and environmental conditions. The system uses a trained Random Forest classifier to predict the best crop using seven agricultural parameters.

---

## 📌 Features

- 🌾 Crop recommendation using Machine Learning
- 📊 Random Forest Classifier with 99.32% accuracy
- 📈 Confidence score for predictions
- 💧 Water requirement information
- 🌡️ Suitable temperature range
- 📝 Crop description
- ✅ Client-side and server-side input validation
- 🔄 Reset functionality
- 🌐 User-friendly Flask web interface

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- Bootstrap 5
- JavaScript

### Backend
- Python
- Flask

### Machine Learning
- Scikit-learn
- Pandas
- NumPy
- Pickle

---

## 📂 Project Structure

```
OptiCrop/
│
├── app.py
├── train.py
├── requirements.txt
├── notebook.ipynb
│
├── data/
│   ├── Crop_recommendation.csv
│   └── crop_info.py
│
├── models/
│   ├── crop_model.pkl
│   └── scaler.pkl
│
├── templates/
│   └── index.html
│
├── static/
│   ├── css/
│   │   └── style.css
│   │
│   └── js/
│       └── script.js
│
└── README.md
```

---

## 📊 Dataset

The project uses the **Crop Recommendation Dataset**, containing agricultural parameters for predicting the most suitable crop.

### Input Features

- Nitrogen (N)
- Phosphorous (P)
- Potassium (K)
- Temperature
- Humidity
- Soil pH
- Rainfall

### Output

- Recommended Crop (22 Crop Categories)

---

## 🤖 Machine Learning Models Evaluated

| Model | Accuracy |
|--------|----------|
| Logistic Regression | 96.36% |
| K-Nearest Neighbors | 95.68% |
| Decision Tree | 98.64% |
| ⭐ Random Forest | **99.32%** |

The Random Forest model was selected as the final model because it achieved the highest prediction accuracy.

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Dharshansai-k/OptiCrop-Samrt-Agricultural-Production-Optimization-Engine.git
cd APSCHE-AI-ML-Project
```

---

### 2. Create Virtual Environment

```bash
python -m venv venv
```

Windows

```bash
venv\Scripts\activate
```

Linux / macOS

```bash
source venv/bin/activate
```

---

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

---

### 4. Train the Model

```bash
python train.py
```

This generates:

```
models/
├── crop_model.pkl
└── scaler.pkl
```

---

### 5. Run the Application

```bash
python app.py
```

Open your browser and visit:

```
http://127.0.0.1:5000
```

---

## 💻 Usage

1. Open the OptiCrop web application.
2. Enter:
   - Nitrogen
   - Phosphorous
   - Potassium
   - Temperature
   - Humidity
   - Soil pH
   - Rainfall
3. Click **Predict Crop**.
4. View:
   - Recommended Crop
   - Confidence Score
   - Water Requirement
   - Temperature Range
   - Crop Description

---

## 📸 Application Screens

- Home Page
- Prediction Form
- Prediction Result

(Add screenshots here if available.)

---

## 📈 Model Workflow

```
User Input
      │
      ▼
Input Validation
      │
      ▼
Feature Scaling
      │
      ▼
Random Forest Model
      │
      ▼
Crop Prediction
      │
      ▼
Confidence Calculation
      │
      ▼
Crop Information
      │
      ▼
Display Result
```

---

## 🎯 Future Enhancements

- Weather API integration
- Fertilizer recommendation
- Crop disease detection
- Cloud deployment
- Mobile application
- IoT sensor integration
- Multilingual support

---

## 👨‍💻 Developer

**Kalavakunta Dharshan Sai**

B.Tech – Computer Science and Engineering

Rajiv Gandhi University of Knowledge Technologies (RGUKT RK Valley)

---

## 📜 License

This project was developed for academic purposes as part of the APSCHE AI & ML Internship Program.

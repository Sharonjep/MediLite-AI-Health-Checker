# MediLite: AI-Powered Symptom Checker

MediLite is a lightweight, accessible AI web application designed to provide instant, personalized health insights for underserved communities. It leverages AWS AI services to analyze user-reported symptoms and return helpful guidance, while respecting data sensitivity and encouraging medical consultation.

---

##  Features

- 🌍 Mobile-first UI for accessibility in rural/low-connectivity areas
-  AI-powered response using **Amazon Comprehend**
-  Key phrase extraction from user-reported symptoms
-  Real-time API integration via **API Gateway + Lambda**
-  (Optional) S3 Logging of interactions
-  Secure, scalable, and fully serverless

---

##  Technologies Used

| Service         | Purpose                            |
|----------------|------------------------------------|
| **Amazon Comprehend** | Extracts key medical phrases from symptom text |
| **AWS Lambda**        | Serverless backend for inference & logic |
| **API Gateway**       | Secure REST API for frontend/backend communication |
| **Amazon S3**         | Optional session storage for audit logs |
| **React (Vite)**      | Lightweight, responsive frontend |
| **Bootstrap**         | Clean, mobile-first UI framework |

---

##  How It Works

1. User enters their name, age, and symptoms in a web form.
2. The data is POSTed to an API Gateway endpoint.
3. A Lambda function parses the input and uses **Amazon Comprehend** to extract key phrases.
4. The Lambda returns a response such as:
   > "Hi Faith, based on what you described (keywords: headache, nausea), you may be experiencing a condition related to headache. Please consult a healthcare provider."

---

##  Demo Video

 [Watch the Demo](#)  
> *(Link will be added once the video is uploaded)*

---

##  Project Structure


---

##  Impact

MediLite empowers users in low-resource or remote settings to receive quick, context-aware health information. It bridges the gap between basic symptom reporting and medical insight using affordable, serverless cloud services.

---

##  Disclaimer

MediLite is not a diagnostic tool. It provides AI-generated suggestions based on language patterns. For medical emergencies or chronic conditions, users are strongly advised to consult a licensed healthcare provider.

---

## Built With Love by Sharon Jepngetich


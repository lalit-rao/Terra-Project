
# Backend Setup and Running Instructions

## Getting Started

Follow the steps below to set up and run the backend server for your project. Instructions are provided for both Windows and macOS.

### Prerequisites

- Python installed on your system. You can download it from [python.org](https://www.python.org/downloads/).

### Setup Instructions

1. **Navigate to the Backend Directory**

    Open your terminal or command prompt and navigate to the backend directory of your project:

    ```sh
    cd backend
    ```

2. **Create a Virtual Environment**

    Creating a virtual environment is recommended to manage your project dependencies separately from your global Python environment.

    - **For Windows:**

      ```sh
      python -m venv venv
      ```

    - **For macOS:**

      ```sh
      python3 -m venv venv
      ```

3. **Activate the Virtual Environment**

    - **For Windows:**

      ```sh
      venv\Scripts\activate
      ```

    - **For macOS:**

      ```sh
      source venv/bin/activate
      ```

4. **Install Dependencies**

    After activating the virtual environment, install the necessary dependencies:

    ```sh
    pip install -r requirements.txt
    ```

5. **Start the Server**

    To start the backend server, run the following command:

    ```sh
    python app.py
    ```

    This will start the server, and it will be ready to handle requests.

## Notes

- also uncomment the line in nltk_utils.py 
for punkt
after that run this file: 
python nltk_utils.py,   

after downloading it comment the line again

- Ensure you have all the necessary packages listed in your `requirements.txt` file.
- If you encounter any issues, make sure you have activated the virtual environment correctly.

### Deactivating the Virtual Environment

When you're done working, you can deactivate the virtual environment by simply typing:

```sh
deactivate

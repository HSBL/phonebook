# phonebook
simple phonebook app

## Client:
https://phonebook.amilhasbala.com

## Server Documentation: 
### base url:
https://kontakkku.herokuapp.com/api

**Get All Contacts**
----
  Returns json data of all the contacts.

* **URL**

  /all

* **Method:**

  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    ```javascript
        [
              {
                  "id": 3,
                  "name": "putra hasbala",
                  "phone": "08132913543",
                  "createdAt": "2020-01-03T11:54:21.872Z",
                  "updatedAt": "2020-01-03T11:54:21.872Z"
              },
              {
                  "id": 2,
                  "name": "has hasbala",
                  "phone": "+62813291435467",
                  "createdAt": "2020-01-03T11:54:06.004Z",
                  "updatedAt": "2020-01-04T02:18:46.325Z"
              }
        ]
    ```
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />

* **Sample Call:**

  ```javascript
        axios({
          method: 'GET',
          url: `https://kontakkku.herokuapp.com/api/all`
        })
          .then(({ data }) => {
            this.$router.push('/home')
          })
          .catch(() => {
            this.$swal.fire(
              'Access Denied'
            )
          })
  ```

**Create**
----
  Returns json data about newly created contact.

* **URL**

  /

* **Method:**

  `POST`

* **Data Params**

  name: STRING
  phone: STRING

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```javascript
    {
        "id": 13,
        "name": "John Doe",
        "phone": "08132913542",
        "updatedAt": "2020-01-05T01:24:45.319Z",
        "createdAt": "2020-01-05T01:24:45.319Z"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** 
    ```javascript
    {
        "message": "input invalid."
    }
    ```

* **Sample Call:**

  ```javascript
        axios({
          method: 'POST',
          url: `https://kontakkku.herokuapp.com/api/`,
          data: {
            name: Jhon Doe,
            phone: 08122353345
          }
        })
          .then(({ data }) => {
            this.$router.push('/home')
          })
          .catch(err => {
            this.$swal.fire(
              'invalid input'
            )
          })
  ```

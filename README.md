1. request list render
2. request list for - ALL
3. Update request status
```
PUT - http://localhost:3000/api/v1/provider/request
BODY - 
   {
      "bookingId": "65a2a2b01565445370c831ba",
      "status": "CANCELLED"
   }
CURL - 
curl --location --request PUT 'http://localhost:3000/api/v1/provider/request' \
--header 'Content-Type: application/json' \
--header 'Accept-Language: en-GB,en-US;q=0.9,en;q=0.8' \
--header 'Cookie: token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTVhMjIwM2MyZmU4NzY4OWM3NWI1OSIsImlhdCI6MTcwNTE2NDM2MywiZXhwIjoxNzA1MTY3OTYzfQ.iEnArOUQig5f70Y8tr4Vvi950g6d59-sEBM0-uRI_4s' \
--header 'Origin: http://localhost:5173' \
--header 'Pragma: no-cache' \
--header 'Referer: http://localhost:5173/' \
--header 'Sec-Fetch-Dest: empty' \
--header 'Sec-Fetch-Mode: cors' \
--header 'Sec-Fetch-Site: cross-site' \
--header 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
--header 'sec-ch-ua-mobile: ?0' \
--header 'sec-ch-ua-platform: "macOS"' \
--data '{
    "bookingId": "65a2a2b01565445370c831ba",
    "status": "CANCELLED"
}'
```
User Model
firstName
lastName
email
password (hashed)
paymentMethods (array of PaymentMethod objects)
addresses (array of Address objects)
orders (array of Order objects)

PaymentMethod Model
cardNumber
expiryMonth
expiryYear
nameOnCard
Address Model
firstName
lastName
phoneNumber
country
city
postcode
address

Order Model
orderNo
shippingData
delivery Method
deliveryAddress (Address object)
items (array of Item objects)
paymentType
subTotal
deliveryFee
total

Item Model
productName
size
price

For the endpoints

Auth Endpoints
Register
Login
Logout
forget password

User Endpoints
View profile details
Edit profile details
Add/Edit Payment Method
Add/Edit/Delete Address
Change password
View order history
Link social media accounts

Order Endpoints
View order details
Track order
Notifications Endpoints
Update notification preferences

Help Endpoints
Contact us
FAQ
Privacy policy
Chat with an agent
Report a problem
Admin Endpoints
View/Edit/Delete Users
View/Edit/Delete Orders

The folder structure

src
auth
auth.controller.ts
auth.module.ts
auth.service.ts

users
users.controller.ts
users.module.ts
users.service.ts

orders
orders.controller.ts
orders.module.ts
orders.service.ts

notifications
notifications.controller.ts
notifications.module.ts
notifications.service.ts

help
help.controller.ts
help.module.ts
help.service.ts

admin
admin.controller.ts
admin.module.ts
admin.service.ts

shared models
user.model.ts
paymentMethod.model.ts
address.model.ts
order.model.ts
item.model.ts

services
database.service.ts
email.service.ts
payment.service.ts

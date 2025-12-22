const express = require('express');
const cors = require('cors');
const setupSwagger = require('./swagger/swagger');
const {sequelize} = require('./model');
require('dotenv').config();
//Routes
const types = require('./routes/types.routes')
const lang = require('./routes/lang.routes')
const human_category = require('./routes/human_category.routes')
const region = require('./routes/region.routes')
const district = require('./routes/district.routes')
const vanue = require('./routes/vanue.routes')
const vanue_types = require('./routes/vanue_types.routes')
const vanue_photo = require('./routes/vanue_photo.routes')
const event_type = require('./routes/event_type.routes')
const event = require('./routes/event.routes')
const seat_type = require('./routes/seat_type.routes')
const seat = require('./routes/seat.routes');
const ticket_status = require('./routes/ticket_status.routes');
const ticket = require('./routes/ticket.routes');
const customer = require('./routes/customer.routes');
const customer_address = require('./routes/customer_address.routes');
const cart = require('./routes/cart.routes');
const cart_item = require('./routes/cart_item.routes');
const customer_card = require('./routes/customer_card.routes');
const admin = require('./routes/admin.routes');
const payment_method = require('./routes/payment_method.routes');
const delivery_method = require('./routes/delivery_method.routes');
const booking = require('./routes/booking.routes');


const app = express();

app.use(express.json());
app.use(cors());

// Swagger UI setup
setupSwagger(app);

// CONNECT ROUTES
app.use('/api', types)
app.use('/api', lang)
app.use('/api', human_category)
app.use('/api', region)
app.use('/api', district)
app.use('/api', vanue)
app.use('/api', vanue_types)
app.use('/api', vanue_photo)
app.use('/api', event_type)
app.use('/api', event)
app.use('/api', seat_type)
app.use('/api', seat)
app.use('/api', ticket_status)
app.use('/api', ticket)
app.use('/api', customer)
app.use('/api', customer_address)
app.use('/api', cart)
app.use('/api', cart_item)
app.use('/api', customer_card)
app.use('/api', admin)
app.use('/api', payment_method)
app.use('/api', delivery_method)
app.use('/api', booking)

const PORT = process.env.PORT || 7777;
 
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });
});

const Sequelize = require("sequelize");
const sequelize = require("../configs/database");

const Types = require("./types.model")(sequelize, Sequelize.DataTypes);
const Lang = require("./lang.model")(sequelize, Sequelize.DataTypes);
const Human_category = require("./human_category.model")(
  sequelize,
  Sequelize.DataTypes
);
const Region = require("./region.model")(sequelize, Sequelize.DataTypes);
const District = require("./district.model")(sequelize, Sequelize.DataTypes);
const Vanue = require("./vanue.model")(sequelize, Sequelize.DataTypes);
const Vanue_types = require("./vanue_types.model")(
  sequelize,
  Sequelize.DataTypes
);
const Vanue_photo = require("./vanue_photo.model")(
  sequelize,
  Sequelize.DataTypes
);
const Event_type = require("./event_type.model")(
  sequelize,
  Sequelize.DataTypes
);
const Event = require("./event.model")(sequelize, Sequelize.DataTypes);
const Seat_type = require("./seat_type.model")(sequelize, Sequelize.DataTypes);
const Seat = require("./seat.model")(sequelize, Sequelize.DataTypes);
const Ticket_status = require("./ticket_status.model")(
  sequelize,
  Sequelize.DataTypes
);
const Ticket = require("./ticket.model")(sequelize, Sequelize.DataTypes);
const Customer = require("./customer.model")(sequelize, Sequelize.DataTypes);
const Customer_address = require("./customer_address.model")(
  sequelize,
  Sequelize.DataTypes
);
const Cart = require("./cart.model")(sequelize, Sequelize.DataTypes);
const Cart_item = require("./cart_item.model")(sequelize, Sequelize.DataTypes);
const Customer_card = require("./customer_card.model")(
  sequelize,
  Sequelize.DataTypes
);
const Admin = require("./admin.model")(sequelize, Sequelize.DataTypes);
const Payment_method = require("./payment_method.model")(
  sequelize,
  Sequelize.DataTypes
);
const Delivey_method = require("./delivery_method.model")(
  sequelize,
  Sequelize.DataTypes
);
const Booking = require("./booking.model")(sequelize, Sequelize.DataTypes);

Types.associate(sequelize.models);
Lang.associate(sequelize.models);
Human_category.associate(sequelize.models);
Region.associate(sequelize.models);
District.associate(sequelize.models);
Vanue.associate(sequelize.models);
Vanue_types.associate(sequelize.models);
Vanue_photo.associate(sequelize.models);
Event_type.associate(sequelize.models);
Event.associate(sequelize.models);
Seat_type.associate(sequelize.models);
Seat.associate(sequelize.models);
Ticket_status.associate(sequelize.models);
Ticket.associate(sequelize.models);
Customer_address.associate(sequelize.models);
Customer.associate(sequelize.models);
Cart.associate(sequelize.models);
Cart_item.associate(sequelize.models);
Customer_card.associate(sequelize.models);
Payment_method.associate(sequelize.models);
Delivey_method.associate(sequelize.models);
Booking.associate(sequelize.models);

module.exports = {
  Types,
  Lang,
  Human_category,
  Region,
  District,
  Vanue,
  Vanue_types,
  Vanue_photo,
  Event_type,
  Event,
  Seat_type,
  Seat,
  Ticket_status,
  Ticket,
  Customer,
  Customer_address,
  Cart,
  Cart_item,
  Customer_card,
  Admin,
  Payment_method,
  Delivey_method,
  Booking,
  sequelize,
};

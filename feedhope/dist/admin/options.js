import componentLoader from './component-loader.js';

// Import all models
import Campaign from './models/campaign.js';
import ContactUs from './models/contact_us.js';
import Event from './models/event.js';
import FoodDonation from './models/food_donation.js';
import FoodMatch from './models/food_match.js';
import FoodRequest from './models/food_request.js';
import MoneyDonation from './models/money_donation.js';
import Subscription from './models/subscription.js';
import User from './models/user.js';
import Volunteer from './models/volunteer.js';

const options = {
  componentLoader,
  rootPath: '/admin',
  resources: [
    Campaign,
    ContactUs,
    Event,
    FoodDonation,
    FoodMatch,
    FoodRequest,
    MoneyDonation,
    Subscription,
    User,
    Volunteer,
  ],
  databases: [],
};

export default options;
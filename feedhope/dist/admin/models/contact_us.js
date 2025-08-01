import mongoose from 'mongoose';

const contactUsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    validate: {
      validator: v => v.split(' ').filter(Boolean).length <= 2,
      message: props => `${props.value} should contain at least two words`
    }
  },
  email: { type: String, required: true, unique: true },
  contact: {
    type: String,
    required: true,
    validate: {
      validator: v => /^\d{10}$/.test(v),
      message: props => `${props.value} is not a valid 10-digit number!`
    }
  },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const ContactUs = mongoose.model('ContactUs', contactUsSchema);

export default ContactUs;
import mongoose from 'mongoose';

export const LogSchema = new mongoose.Schema({ 
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  recordId: { type: String, required: true },
  recordTitle: { type: String },
  difference: { type: Object },
  action: { type: String },
  resource: { type: String },
  userId: { type: String },
});

export const LogModel = mongoose.model('Log', LogSchema);

export default LogModel;
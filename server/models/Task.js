import mongoose from 'mongoose'

const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  checked: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }
})

export default mongoose.model('Task', TaskSchema)

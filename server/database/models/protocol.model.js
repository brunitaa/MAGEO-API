import mongoose from "mongoose";

const requirementAndServicesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: String,
      required: true,
      trim: true,
    },
    unit: {
      type: String,
      required: true,
      trim: true,
    },
    unit_price: {
      type: String,
      trim: true,
    },
    observations: {
      type: String,
      trim: true,
    },
  },
  {
    _id: false,
  }
);

const participantSchema = new mongoose.Schema(
  {
    participant_number: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    academic_degree: {
      type: String,
      required: true,
    },
    company_institution: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    observations: {
      type: String,
      required: true,
    },
  },
  {
    _id: false,
  }
);

const masterOfCeremoniesSchema = new mongoose.Schema(
  {
    status: {
      type: Boolean,
      required: true,
    },
    first_name: {
      type: String,
      trim: true,
    },
    last_name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
  },
  {
    _id: false,
  }
);

const protocolSchema = new mongoose.Schema({
  event_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
  },
  state: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending",
    required: true,
  },
  observations: {
    type: String,
  },
  master_of_ceremonies: [{ type: masterOfCeremoniesSchema }],
  service_requirements: [{ type: requirementAndServicesSchema }],
  inauguration_data: [{ type: participantSchema }],
  closing_data: [{ type: participantSchema }],
});

export default mongoose.model("Protocol", protocolSchema);

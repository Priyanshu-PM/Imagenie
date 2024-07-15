import { Schema, model, models } from "mongoose";

export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    photo?: string;
    clerkId?: string;
    planId?: string;
    creditBalance?: number;
}

const userSchema = new Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    photo: {
        type: String
    },
    planId: {
        type: String
    },
    creditBalance: {
        type: Number,
        default: 10,
    },
});

const User = models?.User || model("User", userSchema);

export default User;
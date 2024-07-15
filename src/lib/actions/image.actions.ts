"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database/db";
import { handleError } from "../utils";
import Image from "../database/models/image.models";
import User from "../database/models/user.models";
import { redirect } from "next/navigation";
import { v2 as cloudinary } from "cloudinary";

const populateUser = (query: any) => query.populate({
    path: 'author',
    model: 'User',
    select: '_id firstName lastName clerkId'
})

//ADD IMAGE
export async function addImage({
    image, userId, path
}: AddImageParams) {
    try {
        await connectToDatabase();

        const author = await User.findById(userId);

        if (!author) {
            throw new Error("Author not found");
        }

        const newImage = await Image.create({
            ...image,
            author: author._id
        });

        revalidatePath(path);

        return JSON.parse(JSON.stringify(newImage));
    } catch (error) {
        handleError(error);
    }
}
//UPDATE IMAGE
export async function updateImage({
    image, userId, path
}: UpdateImageParams) {
    try {
        await connectToDatabase();

        const imageToUpdate = await Image.findById(image._id);

        if (!imageToUpdate || imageToUpdate.author.toHexString() !== userId) {
            throw new Error("Unauthorised or Image not found");
        }

        const updateImage = await Image.findByIdAndUpdate(
            imageToUpdate._id,
            image,
            { new: true }
        )

        revalidatePath(path);

        return JSON.parse(JSON.stringify(updateImage));
    } catch (error) {
        handleError(error);
    }
}
//DELETE IMAGE
export async function deleteImage(imageId: string) {
    try {
        await connectToDatabase();

        await Image.findById(imageId);
    } catch (error) {
        handleError(error);
    } finally {
        redirect("/");
    }
}
//GET IMAGE
export async function getImageById(imageId: string) {
    try {
        await connectToDatabase();

        const image = await populateUser(Image.findById(imageId));

        if (!image) {
            throw new Error("Image not found");
        }

        return JSON.parse(JSON.stringify(image));
    } catch (error) {
        handleError(error);
    }
}

//GET IMAGES
export async function getAllImages({
    limit = 9, page = 1, searchQuery = ""
}: {
    limit?: number;
    page?: number;
    searchQuery?: string;
}) {
    try {
        await connectToDatabase();

        cloudinary.config({
            cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
            secure: true
        });

        let expression = 'folder=imaginify';
        if (searchQuery) {
            expression += ` AND ${searchQuery}`;
        }

        const { resources } = await cloudinary.search.expression(expression).execute();
        const resourceIds = resources.map((resource: any) => resource.public_id);

        let query = {};

        if (searchQuery) {
            query = {
                publicId: {
                    $in: resourceIds
                }
            }
        }

        const skipAmount = (Number(page) - 1) * limit;

        const images = await populateUser(Image.find(query).skip(skipAmount).limit(limit).sort({ createdAt: -1 }));

        const totalImages = await Image.countDocuments();
        const savedImages = await Image.find().countDocuments();

        return {
            data: JSON.parse(JSON.stringify(images)),
            totalPages: Math.ceil(totalImages / limit),
            savedImages
        }

    } catch (error) {
        handleError(error);
    }
}


//GET USER IMAGES
export async function getUserImages({
    userId, limit = 9, page = 1
}: {
    userId: string;
    limit?: number;
    page: number;
}) {
    try {
        await connectToDatabase();

        const skipAmount = (Number(page) - 1) * limit;

        const images = await populateUser(Image.find({ author: userId }).skip(skipAmount).limit(limit).sort({ createdAt: -1 }));

        const totalImages = await Image.countDocuments({ author: userId });

        return {
            data: JSON.parse(JSON.stringify(images)),
            totalPages: Math.ceil(totalImages / limit)
        }
    } catch (error) {
        handleError(error);
    }
}
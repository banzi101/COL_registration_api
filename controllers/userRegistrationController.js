const UserRegistration = require("../modules/userRegistrationModule");

exports.postUserRegistration = async (request, response) => {
    try {
        const { userRegistrationId, eventId, userId, eventName, eventDescription, eventLocation, state, eventDate } = request.body;
        const userRegistration = await UserRegistration.create({
            userRegistrationId,
            eventId,
            userId,
            eventName,
            eventDescription,
            eventLocation,
            state,
            eventDate
        });

        response.status(201).json({ message: "Entry created successfully", id: userRegistration._id });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

exports.getUserRegistration = async (request, response) => {
    try {
        const userRegistrationId = request.params.id;
        const userRegistration = await UserRegistration.findOne({ userRegistrationId });

        if (!userRegistration) {
            return response.status(404).json({ message: "User registration not found" });
        }
        response.status(200).json(userRegistration);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

exports.putUserRegistration = async (request, response) => {
    try {
        const userRegistrationId = request.params.id;
        const { eventId, userId, eventName, eventDescription, eventLocation, state, eventDate } = request.body;
        const userRegistration = await UserRegistration.updateOne(
            { userRegistrationId },
            {
                $set: {
                    eventId,
                    userId,
                    eventName,
                    eventDescription,
                    eventLocation,
                    state,
                    eventDate
                }
            });

        if (userRegistration.matchedCount === 0) {
            return response.status(404).json({ message: "User registration not found" });
        }

        response.status(200).json({ message: "Entry updated successfully", userRegistrationId });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

exports.deleteUserRegistration = async (request, response) => {
    try {
        const userRegistrationId = request.params.id;
        const result = await UserRegistration.deleteOne({ userRegistrationId });

        if (result.deletedCount === 0) {
            return response.status(404).json({ message: "User registration not found" });
        }

        response.status(200).json({ message: "User registration deleted successfully" });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

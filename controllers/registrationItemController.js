const RegistrationItem = require("../modules/registrationItemModule");

exports.postRegistrationItem = async (request, response) => {
    try {
        const { registrationItemId, sectionCode, itemDescription, sectionType, registrationId, status } = request.body;
        const registrationItem = await RegistrationItem.create({
            registrationItemId,
            sectionCode,
            itemDescription,
            sectionType,
            registrationId,
            status
        });

        response.status(201).json({ message: "Entry created successfully", id: registrationItem._id });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

exports.getRegistrationItem = async (request, response) => {
    try {
        const registrationItemId = request.params.id;
        const registrationItem = await RegistrationItem.findOne({ registrationItemId });

        if (!registrationItem) {
            return response.status(404).json({ message: "Registration item not found" });
        }
        response.status(200).json(registrationItem);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

exports.putRegistrationItem = async (request, response) => {
    try {
        const registrationItemId = request.params.id;
        const { sectionCode, itemDescription, sectionType, registrationId, status } = request.body;
        const registrationItem = await RegistrationItem.updateOne(
            { registrationItemId },
            {
                $set: {
                    sectionCode,
                    itemDescription,
                    sectionType,
                    registrationId,
                    status
                }
            });

        if (registrationItem.matchedCount === 0) {
            return response.status(404).json({ message: "Registration item not found" });
        }

        response.status(200).json({ message: "Entry updated successfully", registrationItemId });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

exports.deleteRegistrationItem = async (request, response) => {
    try {
        const registrationItemId = request.params.id;
        const result = await RegistrationItem.deleteOne({ registrationItemId });

        if (result.deletedCount === 0) {
            return response.status(404).json({ message: "Registration item not found" });
        }

        response.status(200).json({ message: "Registration item deleted successfully" });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

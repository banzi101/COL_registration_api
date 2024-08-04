const Answer = require("../modules/answersModule");

exports.postAnswer = async (request, response) => {
    try {
        const { registrationItemId, isItemStartOnStage, isPropsUsed, isItemNameApplicable, notes } = request.body;
        const answer = await Answer.create({
            registrationItemId,
            isItemStartOnStage,
            isPropsUsed,
            isItemNameApplicable,
            notes
        });

        response.status(201).json({ message: "Entry created successfully", id: answer._id });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

exports.getAnswer = async (request, response) => {
    try {
        const registrationItemId = request.params.id;
        const answer = await Answer.findOne({ registrationItemId });

        if (!answer) {
            return response.status(404).json({ message: "Answer not found" });
        }
        response.status(200).json(answer);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

exports.putAnswer = async (request, response) => {
    try {
        const registrationItemId = request.params.id;
        const { isItemStartOnStage, isPropsUsed, isItemNameApplicable, notes } = request.body;
        const answer = await Answer.updateOne(
            { registrationItemId },
            {
                $set: {
                    isItemStartOnStage,
                    isPropsUsed,
                    isItemNameApplicable,
                    notes
                }
            });

        if (answer.matchedCount === 0) {
            return response.status(404).json({ message: "Answer not found" });
        }

        response.status(200).json({ message: "Entry updated successfully", registrationItemId });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

exports.deleteAnswer = async (request, response) => {
    try {
        const registrationItemId = request.params.id;
        const result = await Answer.deleteOne({ registrationItemId });

        if (result.deletedCount === 0) {
            return response.status(404).json({ message: "Answer not found" });
        }

        response.status(200).json({ message: "Answer deleted successfully" });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

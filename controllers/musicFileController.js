const MusicFile = require("../modules/musicFileModule");

exports.postMusicFile = async (request, response) => {
    try {
        const { registrationItemId, fileName, filePath, fileType, status } = request.body;
        const musicFile = await MusicFile.create({
            registrationItemId,
            fileName,
            filePath,
            fileType,
            status
        });

        response.status(201).json({ message: "Entry created successfully", id: musicFile._id });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

exports.getMusicFile = async (request, response) => {
    try {
        const registrationItemId = request.params.id;
        const musicFile = await MusicFile.findOne({ registrationItemId });

        if (!musicFile) {
            return response.status(404).json({ message: "Music file not found" });
        }
        response.status(200).json(musicFile);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

exports.putMusicFile = async (request, response) => {
    try {
        const registrationItemId = request.params.id;
        const { fileName, filePath, fileType, status } = request.body;
        const musicFile = await MusicFile.updateOne(
            { registrationItemId },
            {
                $set: {
                    fileName,
                    filePath,
                    fileType,
                    status
                }
            });

        if (musicFile.matchedCount === 0) {
            return response.status(404).json({ message: "Music file not found" });
        }

        response.status(200).json({ message: "Entry updated successfully", registrationItemId });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

exports.deleteMusicFile = async (request, response) => {
    try {
        const registrationItemId = request.params.id;
        const result = await MusicFile.deleteOne({ registrationItemId });

        if (result.deletedCount === 0) {
            return response.status(404).json({ message: "Music file not found" });
        }

        response.status(200).json({ message: "Music file deleted successfully" });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

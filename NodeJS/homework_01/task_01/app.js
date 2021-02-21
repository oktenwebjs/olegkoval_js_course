const fs = require('fs');
const path = require('path');

const femaleFolderPath = path.resolve(__dirname, '1800');
const maleFolderPath = path.resolve(__dirname, '2000');

const moveGenderFiles = (startFolder, endFolder, gender) => {
    fs.readdir(startFolder, (err, filesList) => {
        if (err) {
            console.log('Can not read folder:' + startFolder);
            return;
        }

        filesList.forEach(fileName => {
            fs.readFile(path.resolve(startFolder, fileName), (err, data) => {
                if (err) {
                    console.log('Can not read file: '+ fileName);
                    return;
                }

                const personData = JSON.parse(data.toString());
                if (personData.gender === gender) {
                    fs.rename(path.resolve(startFolder, fileName), path.resolve(endFolder, fileName), err => {
                        if (err) {
                            console.log('Can not move file: '+ fileName);
                        }
                    });
                }
            });
        })
    });
}

moveGenderFiles(femaleFolderPath, maleFolderPath, 'male');
moveGenderFiles(maleFolderPath, femaleFolderPath, 'female');
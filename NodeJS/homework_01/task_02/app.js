const fs = require('fs');
const path = require('path');

const moveFromTreeToFlat = (treeFolder, flatFolder) => {
    fs.readdir(treeFolder, (err, childrenList) => {
        if (err) {
            console.log('Can not read folder: '+ treeFolder);
            return;
        }

        childrenList.forEach(childElem => {
           fs.stat(path.resolve(treeFolder, childElem), (err, stats) => {
              if (stats.isFile()) {
                  fs.rename(path.resolve(treeFolder, childElem), path.resolve(flatFolder, childElem), err1 => {
                      if (err1) {
                          console.log('Can not move file: '+ childElem);
                          return;
                      }
                  });
              } else {
                  moveFromTreeToFlat(path.resolve(treeFolder, childElem), flatFolder);
              }
           });
        });
    })
}

moveFromTreeToFlat(path.resolve(__dirname, 'tree'), path.resolve(__dirname, 'flat'));
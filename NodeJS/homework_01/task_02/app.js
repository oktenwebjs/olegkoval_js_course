const fs = require('fs');
const path = require('path');

const moveFromTreeToFlat = (treeFolder, flatFolder) => {
    fs.readdir(treeFolder, (err, childrenList) => {
        if (err) {
            console.log('Can not read folder: '+ treeFolder);
            return;
        }

        childrenList.forEach(childElem => {
           fs.stat(path.join(treeFolder, childElem), (err, stats) => {
              if (stats.isFile()) {
                  fs.rename(path.join(treeFolder, childElem), path.join(flatFolder, childElem), err1 => {
                      if (err1) {
                          console.log('Can not move file: '+ childElem);
                          return;
                      }
                  });
              } else {
                  moveFromTreeToFlat(path.join(treeFolder, childElem), flatFolder);
              }
           });
        });
    })
}

moveFromTreeToFlat(path.join(__dirname, 'tree'), path.join(__dirname, 'flat'));
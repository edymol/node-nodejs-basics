const create = async () => {
  const fs = require('fs');
  const path = require('path');

  const filePath = path.join(__dirname, 'files', 'fresh.txt');

  try {
    await fs.promises.access(filePath);
    throw new Error('FS operation failed: file already exists');
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.promises.writeFile(filePath, 'I am fresh and young');
      console.log('File created successfully!');
    } else {
      throw error;
    }
  }
};

await create();

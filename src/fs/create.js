import * as fs from "fs/promises";

const create = async () => {
  const fs = require('fs');
  const path = require('path');

  const filePath = "src/fs/files";

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

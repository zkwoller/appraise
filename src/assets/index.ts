
const files = require.context('./', false, /\.(jpg|png)$/);

const fileList: any[] = []

files.keys().forEach((key:string) => { 
  fileList.push(files(key))
})

export default fileList;
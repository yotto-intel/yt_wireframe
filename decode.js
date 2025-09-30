// hash.js
const bcrypt = require("bcrypt");

const password = process.argv[2]; // 从命令行参数取密码

(async () => {
  if (!password) {
    console.error("请在命令行输入要加密的密码，例如： node hash.js 123456");
    process.exit(1);
  }

  const hashed = await bcrypt.hash(password, 10);
  console.log("加密后的结果：", hashed);
})();

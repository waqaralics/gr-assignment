"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = process.env.PORT || 3000;
app_1.default.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`Example app listening on port ${PORT}!`);
});
//# sourceMappingURL=main.js.map
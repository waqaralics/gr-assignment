import app from "./app";
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`Example app listening on port ${PORT}!`)
});

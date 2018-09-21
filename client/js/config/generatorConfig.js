module.exports = (type) => {
    const config = {};
    switch (type){

        case "incrGen":
            config.regionId = "createRegion";
            config.type     = "incrementer";
            config.id       = "counterAdd";
        break;

        case "delGen":
            config.regionId = "createRegion";
            config.type     = "deleter";
            config.id       = "nodeDelete";
        break;

    }

    return config;
}

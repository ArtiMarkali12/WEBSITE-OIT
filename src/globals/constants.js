const baseUrl = process.env.PUBLIC_URL

export function publicUrlFor(path) {
    return baseUrl + "/assets/" + path;
}

export function loadScript(src, fromPublic) {

    return new Promise(function (resolve, reject) {
        var script = document.createElement('script');

        script.src = (
            fromPublic === undefined ||
            fromPublic == null ||
            fromPublic
        ) ? publicUrlFor(src) : src;

        script.addEventListener('load', function () {
            resolve();
        });
        script.addEventListener('error', function (e) {
            reject(e);
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
    })
};
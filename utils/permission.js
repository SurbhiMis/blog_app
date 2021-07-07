const PERMISSIONS = {
    user : {
        'posts' : ["GET"],
    },
    admin : {
        'posts' : ["GET","POST","PUT","DELETE"]
    }

}

function isAuthorized(role,route,method){
    const permission = PERMISSIONS[role];
    const permissionArray = permission[route];
    const idx = permissionArray.indexOf(method);
    if(idx < 0) return false;
    return true;
}

module.exports= isAuthorized;
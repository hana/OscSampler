
var reverse = false;

if(jsarguments.length > 1 && jsarguments[1] == 1) {
    reverse = true;
}

function read(path) {
    var folder = new Folder(path);    
    folder.typelist = ["TEXT"];
    var files = [];
    while (!folder.end) {
        if(folder.filetype == "TEXT" && folder.extension == ".txt") {    
            files.push(folder.filename);
        }       
        folder.next();
    }
    folder.close();

    // sort the array
    files.sort(
        function(a, b){
            if(reverse) return b > a;
            else return b < a;            
        }
    );

    for(index in files) {
        outlet(0, files[index]);
    }
}

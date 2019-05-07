

function saveState(){
    var storage = {}; var select_ids = ["departements", "communes", "sections", "parcelles", "daterange"]; for(var i in select_ids) {
        var key = select_ids[i];  storage[key] = document.getElementById(key).value
    }
    localStorage.setItem("location", JSON.stringify(storage))
}

function recurisve_select(result, keys) {
    var key = keys.shift();
    if(key != null) {
        var value = result[key];
        var elem = document.getElementById(key);
        console.log(" " + key + " <= " + value);
        var timeout = 0;
        if(value != ""){
          elem.value =  value;
          elem.dispatchEvent(new Event('change'));
          timeout = 2000;
        }
        setTimeout(function(){ recurisve_select(result, keys) }, timeout);
    }
}
function resoreState(){
  var json_storage = localStorage.getItem("location");
    if (json_storage != null){
        var storage = JSON.parse(json_storage);
        var keys = Object.keys(storage);
        recurisve_select(result, keys);
    }
}

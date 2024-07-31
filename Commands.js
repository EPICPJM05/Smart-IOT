var A0  = "A0";
var A1  = "A1";
var A2  = "A2";
var A3  = "A3";
var True = "HIGH"
var False = "LOW"
var HIGH = "HIGH"
var LOW  = "LOW"
var debug = 0

//I have hosted my application via Bolt's Cloud services. The api_key and d_name are kept private on the cloud.
var api_key = "";
var d_name = "";
var base_url = "https://cloud.boltiot.com/remote/"

function digitalWrite(pin,val){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200 && debug == 1) {
            //document.getElementById("javascript_response").innerHTML = "Javascript Response : "+xmlhttp.responseText;
            alert(xmlhttp.responseText);
            var obj = JSON.parse(xmlhttp.responseText);
            if(obj.success=="1"){
                    alert(obj.value);
            }
        }
    };  
    xmlhttp.open("GET", base_url+api_key+"/digitalWrite?pin="+pin+"&state="+val+"&deviceName="+d_name,true);
    xmlhttp.send();    
}

 
function analogWrite(pin,val) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200 && debug == 1) {
        //document.getElementById("javascript_response").innerHTML = "Javascript Response : "+xmlhttp.responseText;
            alert(xmlhttp.responseText);
            var obj = JSON.parse(xmlhttp.responseText);
                if(obj.success=="1"){
                    alert(obj.value);
                }
        }
    };  
    xmlhttp.open("GET",base_url+api_key+"/analogWrite?pin="+pin+"&value="+val+"&deviceName="+d_name,true);
    xmlhttp.send();
}

function servoWrite(pin,val) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState != 4 || xmlhttp.status != 200 || debug != 1) {
            return;
        }
        alert(xmlhttp.responseText);
        var obj = JSON.parse(xmlhttp.responseText);
        if(obj.success=="1"){
             alert(obj.value);
        }
    };
    xmlhttp.open("GET",base_url+api_key+"/servoWrite?pin="+pin+"&value="+val+"&deviceName="+d_name,true);
    xmlhttp.send();
}   

function digitalRead(pin,element_id) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {

        //document.getElementById(element_id).innerHTML = xmlhttp.responseText;
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            alert(xmlhttp.responseText);
            //document.getElementById("javascript_response").innerHTML = "Javascript Response : "+xmlhttp.responseText;
            var obj = JSON.parse(xmlhttp.responseText);
            if(obj.success=="1"){
                    document.getElementById(element_id).innerHTML = "Pin Val = "+obj.value;
            }
            else{
                    document.getElementById(element_id).innerHTML = "Error = "+xmlhttp.responseText;
            }
        }
    };
    xmlhttp.open("GET",base_url+api_key+"/digitalRead?pin="+pin+"&deviceName="+d_name,true);
    xmlhttp.send();
}


function analogRead(pin,element_id) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        //document.getElementById(element_id).innerHTML = xmlhttp.responseText;
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            alert(xmlhttp.responseText);
            //document.getElementById("javascript_response").innerHTML = "Javascript Response : "+xmlhttp.responseText;
            var obj = JSON.parse(xmlhttp.responseText);
            if(obj.success=="1"){
                 document.getElementById(element_id).innerHTML = "Pin Val = "+obj.value;
            }
            else{
                    document.getElementById(element_id).innerHTML = "Error = "+xmlhttp.responseText;
            }
        }
    };
    xmlhttp.open("GET",base_url+api_key+"/analogRead?pin="+pin+"&deviceName="+d_name,true);
    xmlhttp.send();
}

function serialBegin(baud) {
    var xmlhttp = new XMLHttpRequest();
    //var baud = parseInt(document.getElementById("baudset").value);
    //alert(document.getElementById("baudset").value)
    switch(baud) {
        case 2400:
            baud = 0;
            break;
        case 4800:
            baud = 1;
            break;
        case 9600:
            baud = 2;
            break;
        case 19200:
            baud = 3;
            break;
        default:
            baud = 2;
    }
    xmlhttp.onreadystatechange = function() {
        //document.getElementById("demo").innerHTML = xmlhttp.responseText;
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200 && debug == 1) {
            //document.getElementById("javascript_response").innerHTML = "Javascript Response : "+xmlhttp.responseText;
            //var obj = JSON.parse(xmlhttp.responseText);
            //if(obj.success=="1")
            alert(xmlhttp.responseText);
        }
    };
    xmlhttp.open("GET",base_url+api_key+"/serialBegin?baud="+baud+"&deviceName="+d_name,true);
    xmlhttp.send();
}

function serialWrite(serialdata) {
    var xmlhttp = new XMLHttpRequest();
    //var serialdata = document.getElementById("serialdata").value;
    xmlhttp.onreadystatechange = function() {
        //document.getElementById("demo").innerHTML = xmlhttp.responseText;
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200 && debug == 1) {
            //document.getElementById("javascript_response").innerHTML = "Javascript Response : "+xmlhttp.responseText;
            //var obj = JSON.parse(xmlhttp.responseText);
            //if(obj.success=="1")
                alert(xmlhttp.responseText);
        }
    };
    xmlhttp.open("GET",base_url+api_key+"/serialWrite?data="+serialdata+"&deviceName="+d_name,true);
    xmlhttp.send();
}

function serialRead(till,element_id) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        //document.getElementById("demo").innerHTML = xmlhttp.responseText;
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            alert(xmlhttp.responseText);
            //document.getElementById("javascript_response").innerHTML = "Javascript Response : "+xmlhttp.responseText;
            var obj = JSON.parse(xmlhttp.responseText);
            if(obj.success=="1"){
                    document.getElementById(element_id).innerHTML = "Read Val = "+obj.value;
            }
            else{
                    document.getElementById(element_id).innerHTML = "Error = "+xmlhttp.responseText;
            }
        }
    };
    xmlhttp.open("GET",base_url+api_key+"/serialRead?till="+till+"&deviceName="+d_name,true);
    xmlhttp.send();
}

function serialWR(data,till,element_id) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        //document.getElementById("demo").innerHTML = xmlhttp.responseText;
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            alert(xmlhttp.responseText);
            //document.getElementById("javascript_response").innerHTML = "Javascript Response : "+xmlhttp.responseText;
            var obj = JSON.parse(xmlhttp.responseText);
            if(obj.success=="1"){
                    document.getElementById(element_id).innerHTML = "Read Val = "+obj.value;
            }
            else{
                    document.getElementById(element_id).innerHTML = "Error = "+xmlhttp.responseText;
            }
        }
    };
    xmlhttp.open("GET",base_url+api_key+"/serialWR?data="+data+"&till="+till+"&deviceName="+d_name,true);
    xmlhttp.send();
}

function digitalMultiWrite(pins,values) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200 && debug == 1) {

            alert("Javascript Response : "+xmlhttp.responseText);
        }
    };
    xmlhttp.open("GET",base_url+api_key+"/digitalMultiWrite?pins="+pins+"&states="+values+"&deviceName="+d_name,true);
    xmlhttp.send();
}

function analogMultiWrite(pins,values) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200 && debug == 1) {

            alert("Javascript Response : "+xmlhttp.responseText);
        }
    };
    xmlhttp.open("GET",base_url+api_key+"/analogMultiWrite?pins="+pins+"&values="+values+"&deviceName="+d_name,true);
    xmlhttp.send();
}

function servoMultiWrite(pins,values) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200 && debug == 1) {

            alert("Javascript Response : "+xmlhttp.responseText);
        }
    };
    xmlhttp.open("GET",base_url+api_key+"/servoMultiWrite?pins="+pins+"&values="+values+"&deviceName="+d_name,true);
    xmlhttp.send();
}

function digitalMultiRead(pins,element_id) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        document.getElementById(element_id).innerHTML = xmlhttp.responseText;
    };
    xmlhttp.open("GET",base_url+api_key+"/digitalMultiRead?pins="+pins+"&deviceName="+d_name,true);
    xmlhttp.send();
}

function setKey(key,dev_name){
    api_key = key;
    d_name = dev_name;
}

function setDebug(bool){
    if (bool == true){
        debug = 1;
    }
    else{
        debug = 0;
    }
}

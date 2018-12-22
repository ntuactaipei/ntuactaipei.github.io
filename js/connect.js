function connectServer(type, dataset, server, callback){
    $.ajax({
        type: type,
        data: dataset,
        contentType: 'application/json',
        dataType: 'json',
        crossDomain: true,
        url: "https://ntuchorus.ddns.net:3002/" + server,
        success: function(data){
        	callback(data);
        },
        error: function(xhr, ajaxOptions, thrownError){
            callback({'status': '1'});
        }
    });
}

(function(){
    let loc = window.location.pathname; // ===> /admin/elections/party/7/change/
    let arr = loc.split('/');
    let change_chunk_index = arr.indexOf('change');
    console.log(arr, change_chunk_index);
    if(change_chunk_index == -1){
        return;
    }
    if(!(/\d+/.test(arr[change_chunk_index-1]))){
        return;
    }
    let prev_record_id = document.getElementById('prev_record_id').value || '';
    let next_record_id = document.getElementById('next_record_id').value || '';
    let data = {prev: prev_record_id, next: next_record_id};
    if(data.prev){
        let record_path = loc.replace('/'+arr[change_chunk_index-1]+'/', '/'+data.prev+'/')
        $('.prev_next').append('<a href="'+record_path+'">Prev</a>');
    }
    if(data.next){
        let record_path = loc.replace('/'+arr[change_chunk_index-1]+'/', '/'+data.next+'/')
        $('.prev_next').append('<a href="'+record_path+'">Next</a>');
    }
})();
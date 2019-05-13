module.exports = function(app){
    app.get('/api/tagList', (req, res) => {
        res.send([{
            "id":"1",
            "title":"小学一年级"
         },{
             "id":"2",
             "title":"小学二年级"
         },{
             "id":"3",
             "title":"小学3年级"
         },{
             "id":"4",
             "title":"小学4年级"
         }]);
    });
}
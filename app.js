new Vue({

el:'#vue-app',
data: {
    name:'Shaun',
    job:'Ninja',
    website:'www.netning.com',
    websiteTag:'<a href="www.website.com">Net</a>',
    num: 9
},
methods: {
    greet: function(time){
        
        return 'Good ' + time +' '+this.name;
    },
    add:function(inc){
        this.num += inc;
    },
    subtract:function(dec){
        this.num -dec;
    }
}

});
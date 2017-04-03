var configValues = require('./config'); //retrieve configuration file from locally

module.exports = {
        //exporting mongoDB database link where I set it up sample DB in mLab. 
    getDbConnectionString: function(){
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds161175.mlab.com:61175/nodetodosample';
    }

}


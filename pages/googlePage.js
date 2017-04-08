
module.exports = {
    url: function() {
        return this.api.launchUrl+"/";
    },
    elements: {
        searchField: {
            //locateStrategy: 'xpath',
            selector: "#lst-ib"
        },
        searchBtn:{
            selector: '#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)'
        },
        allResults:{
            selector: '#hdtb-msb-vis > div.hdtb-mitem.hdtb-msel.hdtb-imb'
        }
    }
}
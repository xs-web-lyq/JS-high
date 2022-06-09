(function(){
    // 私有数据
    var msg = 'myModule1'
    function doSomething(){
        console.log('doSomething()' + msg.toUpperCase());
    }

    function doOtherThing(){
        console.log('doOtherThing()' + msg.toLowerCase());
    }

    window.myModule1 = {
        doSomething:doSomething,
        doOtherThing:doOtherThing
    }
})()

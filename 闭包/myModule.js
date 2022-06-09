function myModule(){
    // 私有数据
    var msg = 'myModule'
    function doSomething(){
        console.log('doSomething()' + msg.toUpperCase());
    }

    function doOtherThing(){
        console.log('doOtherThing()' + msg.toLowerCase());
    }

    return {
        doSomething:doSomething,
        doOtherThing:doOtherThing
    }
}

//callback

function asyncWithCallback(callback) {
    setTimeout(callback, 1000);
}

function test() {
    console.log('before');
    asyncWithCallback(() => console.log('after'));
}

// test();


//promises
function asyncWithPromise() {
    let x = 0;
    return new Promise((res, rej) => {
        setTimeout((res) => { }, 1000)
        // if (x == 0) {
        //     rej();
        // }
    });
}

function test2() {
    console.log('before');
    asyncWithPromise().then(() => console.log("Executes after 1 second..")).catch(() => { console.log('errro') });
    console.log('after');
}

// test2();

//async await

async function display() {
    let p = new Promise((res) => {
        setTimeout(() => { res("Aloo") }, 3000);
    });
    return await p;
}

async function test3() {
    // let x = display();
    let x = await display();
    console.log(x);
    console.log("after test 3");
}

// test3();

exports.hello = test;

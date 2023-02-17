//async

function asyncWithCallback() {
    setTimeout(() => console.log("Execute after 1 second"), 1000);
}

function test() {
    console.log('before');
    asyncWithCallback();
    console.log('after');
}

// test();


//promises
function asyncWithPromise() {
    return new Promise((res, rej) => { setTimeout(res, 1000) });
}

function test2() {
    console.log('before');
    asyncWithPromise().then(() => console.log("Executes after 1 second..")).catch((_) => console.log('error'));
    console.log('after');
}

// test2();

//async await

async function test3() {
    console.log('before');
    await setTimeout(() => console.log("Executes after 1 second.."), 1000);
    console.log('after');
}

// test3();

exports.hello = test3;

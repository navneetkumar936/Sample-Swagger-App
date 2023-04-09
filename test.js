function dummyFunc() {
    setTimeout(() => {throw new Error('Some error occurred !!!')}, 6000);
}

dummyFunc();
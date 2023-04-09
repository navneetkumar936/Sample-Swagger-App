function dummyFunc() {
    setTimeout(() => {throw new Error('Some error occurred !!!')}, 5000);
}

dummyFunc();
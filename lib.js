function create() {
    console.log('Hello from TestPlugin');
}

function destroy() {
    console.log('Bye!');
}

function createWindow() {
    Windows.create({ url: 'https://github.com' });
}

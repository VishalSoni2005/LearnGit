let map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key3', 'value3');

for(let [key, value] of map) {
    console.log(key, value);
    console.log('key: ' + key + ', value: ' + value);
}
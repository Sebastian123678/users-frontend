function camelCase(string) {
    // code here
    const varia = []
    for (let i = 0; i < string.length; i++){
        if (string.charAt(i) === string.charAt(i).toUpperCase()) {
            varia.push(' ');
            varia.push(string.charAt(i));
        } else {
            varia.push(string.charAt(i));
        }
        
    }
    return varia.join('');
    
}

console.log(camelCase('setIsLoading'));

function camel_case(str) {
    var arr = [];
    var input = Array.from(str);
    var count = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i].toUpperCase() === input[i]) {
            if (count !== i) {
                arr.push(input.slice(count, i).join('').replace(/\s/g, ''));
            }
            count = i;
        }
    }

    arr.push(input.slice(count, input.length).join('').replace(/\s/g, ''));

    arr = arr.map(item => item.replace(/[^a-zA-Z0-9]/g, ''))
        .filter(item => item.length !== 0);


    // it is not really good logic, but could not find so far in the main  part so i wrote this 
    let result = [];
    let temp = '';

    for (let i = 0; i < arr.length; i++) {
        if ((arr[i].length === 1 && arr[i] === arr[i].toUpperCase()) || !isNaN(arr[i])) {
            temp += arr[i];
        } else {
            if (temp !== '') {
                result.push(temp);
                temp = '';
            }
            result.push(arr[i]);
        }
    }

    if (temp !== '') {
        result.push(temp);
    }

    arr = result;
    /// till here 

    return arr.join("_").toLowerCase();
}



console.clear();
console.log(camel_case("CamelCase")); //  => camel_case
console.log(camel_case("XMLProducer")); // => xml_producer
console.log(camel_case("myXXXObject")); // => my_xxx_object
console.log(camel_case("lkajASDFasdf")); // => lkaj_asd_fasdf
console.log(camel_case("cABcc")); // c_a_bcc
console.log(camel_case("  LeadingSpaces"));       // leading_spaces
console.log(camel_case("TrailingSpaces   "));     // trailing_spaces
console.log(camel_case("!@#Special123Chars"));   // special123chars
console.log(camel_case("CamelCase123"));          // camel_case123
console.log(camel_case("snake_case_example"));    // snake_case_example
console.log(camel_case("kebab-case-string"));     // kebab_case_string
console.log(camel_case("MiXeDCaSeS"));            // mi_xe_d_ca_se_s
console.log(camel_case("   "));                   // (empty string)
console.log(camel_case(""));
console.log(camel_case("ThisIsATest"));       // this_is_a_test
console.log(camel_case("AnotherExample"));    // another_example
console.log(camel_case("123Numeric456"));     // 123_numeric_456
console.log(camel_case("Space Separated"));   // space_separated
console.log(camel_case("Special-Characters")); // special_characters



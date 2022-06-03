//forEach

//doubleValues function

function doubleValues(arr){
    let newArr = []
    arr.forEach(function(i){
        number = i * 2;
        newArr.push(number)
    })
    return newArr;
    };

//onlyEvenValues

function onlyEvenValues(arr){
    let newArr = []
    arr.forEach(function(i) {
        if (i % 2 === 0){
            newArr.push(i)
        }
    })
    return newArr;
}

//showFirstAndLast

function showFirstAndLast(arr){
    let newArr = []
    let newStr = ''
    let first ='';
    let last ='';
    arr.forEach(function(str) {
        first = str.slice(0,1);
        last = str.slice(str.length-1);
        newStr = first + last
        newArr += `'${newStr}'`
    })
    return newArr;
}

//addKeyAndValue

function addKeyandValue(arr, key, value) {
    arr.forEach(function(obj){
        obj[key] = value;
    })
    return arr;
}

//vowelCount

function vowelCount(str){   
    let obj = {}
    let vowel = 'aeiou'
    let splitStr = str.toLowerCase().split("")
    splitStr.forEach(function(char){
        if(vowel.indexOf(char) !== -1){
            if(obj[char]){
                obj[char]++
            } else {
                obj[char] = 1;
            }
        }
    });
    return obj;
}

//map

//doubleValuesWithMap

function doubleValuesWithMap(arr){
    return arr.map(function(value){
        return value * 2;
    }) 
}

//valTimesIndex

function valTimesIndex(arr){
    return arr.map(function(value){
        return value * arr.indexOf(value);
    })
}

//extractKey

function extractKey(arr, key){
    return arr.map(function(value){
        return value.key;
    })
}

//extractFullName

function extractFullName(arr){
    return arr.map(function(value){
        return value.first + ' ' + value.last;
    })
}

//filter

//filterByValue

function filterByValue(arr, key){
    return arr.filter(function(value){
        return arr[key] = value.isCatOwner;
    })
}

//find
function find(arr, value){
    return arr.filter(function(num){
        if(num === value) {
            return num;
        }
        else return undefined;
    })
}

//findInObj
function findInObj(arr){
    return arr.filter(function(value){
        return value[true] === value.isCatOwner;
    })

}

//removeVowels
function removeVowels(str){
    const vowels = "aeiou";
    return str
        .toLowerCase()
        .split("")
        .filter(function(value){
            return vowels.indexOf(value) === -1
        })
        .join("");
}

//doubleOddNumbers
function doubleOddNumbers(arr){
    return arr
        .filter (function(value){
            return value % 2 !== 0;
        })
        .map(function(value){
            return value * 2;
        })
}
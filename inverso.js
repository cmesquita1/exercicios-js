function inverso(BoolOrNum) {
    if (typeof BoolOrNum == 'number') {
        return BoolOrNum*-1;
    }
    else if(typeof BoolOrNum == 'boolean') {
        return !BoolOrNum;
    }
    else {
        return 'booleano ou números esperado, mas o parâmetro é do tipo string';
    }
}
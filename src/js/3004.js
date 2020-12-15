function rule(str) {

    return JSON.parse(calCreditPriod15(str));
}

function calCreditPriod15(str) {
    var obj = JSON.parse(str);
    var ret = {};
    var rfc = {};
    if (obj.biz_001_is_inloan_users == 1) {
        ret.result = {
            "fk_004_refuse_code": "|",
            "fk_017_all_refuse_code": obj.fk_017_all_refuse_code,
            "biz_001_is_inloan_users": obj.biz_001_is_inloan_users,
            "fk_003_periods": obj.fk_003_periods,
            "fk_002_rate": obj.fk_002_rate,
            "fk_009_dayrate": obj.fk_002_rate / obj.fk_003_periods,
            "fk_005_preloan_score_card": obj.fk_005_preloan_score_card,
            "fk_001_amount": obj.fk_001_amount
        };
        return JSON.stringify(ret)
    }


    if (obj.biz_025_has_debt_all != 0) {

        var refuse_code = "|"
        if (obj.fk_046_pmml_lr_score == "-999999" && checkWhiteListRule(obj, "SI402") == 0) {
            refuse_code = "|SI402";
        }
        if (checkCutoff(obj) == 0 && checkWhiteListRule(obj, "SI402") == 0) {
            refuse_code = "|SI402";
        }
        if (obj.fk_017_all_refuse_code != "|" || refuse_code == "|SI402") {
            ret.result = {
                "fk_004_refuse_code": refuse_code,
                "fk_017_all_refuse_code": obj.fk_017_all_refuse_code + refuse_code,
                "biz_001_is_inloan_users": obj.biz_001_is_inloan_users,
                "fk_003_periods": obj.fk_003_periods,
                "fk_002_rate": obj.fk_002_rate,
                "fk_009_dayrate": obj.fk_002_rate / obj.fk_003_periods,
                "fk_005_preloan_score_card": obj.fk_005_preloan_score_card,
                "fk_001_amount": obj.fk_001_amount,
                "fk_046_pmml_lr_score": obj.fk_046_pmml_lr_score


            }
            return JSON.stringify(ret)
        }


    }

    if (obj.fk_046_pmml_lr_score == "-999999" && checkWhiteListRule(obj, "SI402") == 0) {
        rfc.fk_refuse_code += "|SI402";
        rfc.fk_amount = 0;
        rfc.period = "0";
        rfc.rate = "1";
        rfc.dayRate = "1";
        obj.fk_017_all_refuse_code += "|SI402"
    }
    if (checkCutoff(obj) == 0 && checkWhiteListRule(obj, "SI402") == 0) {
        rfc.fk_refuse_code += "|SI402";
        rfc.fk_amount = 0;
        rfc.period = "0";
        rfc.rate = "1";
        rfc.dayRate = "1";
        obj.fk_017_all_refuse_code += "|SI402"
    }
    if (obj.fk_046_pmml_lr_score >= 531) {
        rfc.fk_amount = 400000;
        rfc.period = 14;
        rfc.rate = "0.1246";
        rfc.dayRate = "0.0089"
    }


    if (obj.fk_017_all_refuse_code != "|") {
        rfc.fk_amount = 0;
        rfc.period = "0";
        rfc.rate = "1";
        rfc.dayRate = "1"
    } else {
        if (obj.fk_020_is_white_user == 1) {
            rfc.rate = obj.fk_020_is_white_rate;
            rfc.fk_amount = obj.fk_020_is_white_amount;
            rfc.period = obj.fk_020_is_white_period;
            rfc.dayRate = obj.fk_020_is_white_day_rate;
        }
    }
    ret.result = {
        "fk_004_refuse_code": rfc.fk_refuse_code,
        "biz_001_is_inloan_users": obj.biz_001_is_inloan_users,
        "fk_001_amount": rfc.fk_amount,
        "fk_003_periods": rfc.period,
        "fk_002_rate": rfc.rate,
        "fk_009_dayrate": rfc.dayRate,
        "fk_005_preloan_score_card": obj.fk_005_preloan_score_card,
        "fk_017_all_refuse_code": obj.fk_017_all_refuse_code,
        "fk_046_pmml_lr_score": obj.fk_046_pmml_lr_score

    };
    return JSON.stringify(ret)
}



function checkWhiteListRule(obj, code) {
    if (obj.fk_020_is_white_user == 0) {
        return 0;
    }
    var arr = obj.fk_020_filter_rule_code.split("|");
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == code) {
            return 1;
        }
    }
    return 0;
}

function checkCutoff(obj) {

    if (obj.fk_046_pmml_lr_score <= 530 && obj.biz_001_is_inloan_users < 1) {
        return 0;
    }
    return 1


}



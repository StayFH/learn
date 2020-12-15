function rule(str) {
    var obj = JSON.parse(str);
    var ret = {};
    var rfc = {};

    if (obj.biz_089_all_loan_amount_usual > 5000*2000 && checkWhiteListRule(obj, "SI907") == 0) {
        rfc.fk_refuse_code += "|SI907"
    }
    if (obj.biz_074_is_overdue_now > 0 && checkWhiteListRule(obj, "SI903") == 0) {
        rfc.fk_refuse_code += "|SI903"
    }
    if (obj.biz_049_new_user_amount > 2000 * 2000 && obj.biz_001_is_inloan_users < 1 && checkWhiteListRule(obj, "SI905") == 0) {
        rfc.fk_refuse_code += "|SI905"
    }
    if ((obj.biz_007_loan_cnt_sort_usual <= 0
        && (obj.biz_082_loan_amount_in_trans_all + obj.fk_030_trans_money) > 1600000)
        ||
        (obj.biz_007_loan_cnt_sort_usual >= 1
            && obj.biz_007_loan_cnt_sort_usual <= 3
            && (obj.biz_082_loan_amount_in_trans_all + obj.fk_030_trans_money) > 3000000
        )
        ||
        (obj.biz_007_loan_cnt_sort_usual >= 4
            && obj.biz_007_loan_cnt_sort_usual <= 6
            && (obj.biz_082_loan_amount_in_trans_all + obj.fk_030_trans_money) > 5000000
        )
        ||
        (obj.biz_007_loan_cnt_sort_usual >= 7
            && (obj.biz_082_loan_amount_in_trans_all + obj.fk_030_trans_money) > 10000000
        )) {
        if (checkWhiteListRule(obj, "SI906") == 0) {
            rfc.fk_refuse_code += "|SI906"
        }
    }

    if(obj.biz_095_user_loaning_count>3 || obj.biz_097_user_loaning_cnt>6){
        rfc.fk_refuse_code += "|SI909"
    }

    if (JSON.stringify(rfc) == '{}') {
        rfc.fk_refuse_code = "|"
    }
    ret.result = {
        "fk_004_refuse_code": rfc.fk_refuse_code,
        "biz_001_is_inloan_users": obj.biz_001_is_inloan_users,
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
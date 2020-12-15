function rule(str) {
    var obj = JSON.parse(str);
    var ret = {};
    var rfc = {};
    if (obj.dev_051_same_account_android_cnt_3days > 3 && obj.biz_001_is_inloan_users < 1  && checkWhiteListRule(obj, "SI301") == 0) {
        rfc.fk_refuse_code += "|SI301"
    }
    if (obj.dev_047_same_android_credit_rank >= 2 && obj.biz_001_is_inloan_users < 1  && checkWhiteListRule(obj, "SI302") == 0) {
        rfc.fk_refuse_code += "|SI302"
    }

    if (obj.userinfo_004_same_name_birthday_trans_rank >= 2 && obj.biz_001_is_inloan_users < 1 && checkWhiteListRule(obj, "SI304") == 0) {
        rfc.fk_refuse_code += "|SI304"
    }
    if (obj.dev_048_same_regphone_rank > 1 && obj.biz_001_is_inloan_users < 1 && checkWhiteListRule(obj, "SI305") == 0) {
        rfc.fk_refuse_code += "|SI305"
    }
    if (obj.dev_049_same_idcard_rank > 1 && obj.biz_001_is_inloan_users < 1 && checkWhiteListRule(obj, "SI306") == 0) {
        rfc.fk_refuse_code += "|SI306"
    }
    if (obj.dev_001_same_ip_reg_cnt_3days >= 5 && obj.biz_001_is_inloan_users < 1 && checkWhiteListRule(obj, "SI307") == 0) {
        rfc.fk_refuse_code += "|SI307"
    }
    if (obj.dev_011_same_wifimac_reg_cnt_3days >= 2 && obj.biz_001_is_inloan_users < 1 && checkWhiteListRule(obj, "SI308") == 0) {
        rfc.fk_refuse_code += "|SI308"
    }
    if (obj.dev_020_same_wifiname_reg_cnt_3days >= 1 && obj.biz_001_is_inloan_users < 1 && checkWhiteListRule(obj, "SI309") == 0) {
        rfc.fk_refuse_code += "|SI309"
    }
    if (obj.dev_013_same_wifimac_reg_cnt_30days >= 3 && obj.biz_001_is_inloan_users < 1 && checkWhiteListRule(obj, "SI310") == 0) {
        rfc.fk_refuse_code += "|SI310"
    }
    if (obj.dev_014_same_wifimac_reg_cnt_90days >= 5 && obj.biz_001_is_inloan_users < 1 && checkWhiteListRule(obj, "SI311") == 0) {
        rfc.fk_refuse_code += "|SI311"
    }
    if (obj.dev_030_same_gps_reg_cnt_3days_10m >= 3 && obj.biz_001_is_inloan_users < 1 && checkWhiteListRule(obj, "SI312") == 0) {
        rfc.fk_refuse_code += "|SI312"
    }
    if (obj.userinfo_019_same_conphone_reg_cnt > 3 && obj.biz_001_is_inloan_users < 1 && checkWhiteListRule(obj, "SI313") == 0) {
        rfc.fk_refuse_code += "|SI313"
    }
    if (obj.biz_070_same_password_30days >= 10 && obj.biz_001_is_inloan_users < 1 && checkWhiteListRule(obj, "SI315") == 0) {
        rfc.fk_refuse_code += "|SI315"
    }

    if (obj.userinfo_011_conphone_same_conphone_overdue_trans_cnt >= 2 && obj.biz_001_is_inloan_users < 1 && checkWhiteListRule(obj, "SI320") == 0) {
        rfc.fk_refuse_code += "|SI320"
    }
    if (obj.userinfo_005_regphone_same_conphone_overdue_trans_cnt >= 1 && obj.biz_001_is_inloan_users < 1 && checkWhiteListRule(obj, "SI321") == 0) {
        rfc.fk_refuse_code += "|SI321"
    }
    if (obj.userinfo_008_conphone_same_regphone_overdue_trans_cnt >= 1 && obj.biz_001_is_inloan_users < 1 && checkWhiteListRule(obj, "SI322") == 0) {
        rfc.fk_refuse_code += "|SI322"
    }
    if (obj.biz_072_black_a == 1 && obj.biz_001_is_inloan_users < 1 && checkWhiteListRule(obj, "SI326") == 0) {
        rfc.fk_refuse_code += "|SI326"
    }
    if (obj.biz_073_black_b == 1 && obj.biz_001_is_inloan_users < 1 && checkWhiteListRule(obj, "SI327") == 0) {
        rfc.fk_refuse_code += "|SI327"
    }
    if (obj.userinfo_026_same_email_reg_cn_3days > 2 && obj.biz_001_is_inloan_users < 1 && checkWhiteListRule(obj, "SI328") == 0) {
        rfc.fk_refuse_code += "|SI328"
    }

    if ((obj.biz_093_black_c_email_target_2 == 1 || obj.biz_093_black_c_email_target_3 == 1
        || obj.biz_093_black_c_email_target_4 == 1 || obj.biz_093_black_c_phone_target_2 == 1
        || obj.biz_093_black_c_phone_target_3 == 1 || obj.biz_093_black_c_phone_target_4 == 1
        || obj.biz_093_black_c_phone_target_5 == 1 || obj.biz_093_black_c_phone_target_6 == 1
        || (obj.biz_093_black_c_idcard_target_1 == 1 && obj.biz_094_black_c_idcard_target_1_dpd > 10)
        || (obj.biz_093_black_c_phone_target_1 == 1 && obj.biz_094_black_c_phone_target_1_dpd > 10))
        && obj.biz_001_is_inloan_users < 1 && checkWhiteListRule(obj, "SI330") == 0) {
        rfc.fk_refuse_code += "|SI330"
    }


    if(obj.fk_047_app_model_score <500 &&  obj.biz_001_is_inloan_users < 1 && checkWhiteListRule(obj, "SI331") == 0){
        rfc.fk_refuse_code += "|SI331"
    }

    if (obj.userinfo_30_register_all_contact_phone==1 && obj.biz_001_is_inloan_users<1 && checkWhiteListRule(obj, "SI340") == 0) {
        rfc.fk_refuse_code += "|SI340"
    }
    if (obj.biz_064_total_dpd_all >= 30 && checkWhiteListRule(obj, "SI401") == 0) {
        rfc.fk_refuse_code += "|SI401"
    }
    if (obj.biz_005_max_dpd_all >= 15 && checkWhiteListRule(obj, "SI403") == 0) {
        rfc.fk_refuse_code += "|SI403"
    }

    if (((((obj.biz_060_input_manual_check_num == 3 && obj.biz_081_m_audit_is_return == 1) || obj.biz_060_input_manual_check_num > 3) && (obj.kf_user_artificial_audit_end_time < 1597593600)) ||
        ((obj.biz_060_input_manual_check_num == 6 && obj.biz_081_m_audit_is_return == 1) && (obj.kf_user_artificial_audit_end_time >= 1597593600))) && obj.biz_001_is_inloan_users < 1 &&
        checkWhiteListRule(obj, "SI602") == 0 ) {
        rfc.fk_refuse_code += "|SI602"
    }
    if (obj.biz_080_m_audit_is_reject == 1 && obj.biz_001_is_inloan_users < 1 && checkWhiteListRule(obj, "SI603") == 0) {
        rfc.fk_refuse_code += "|SI603"
    }

    if (JSON.stringify(rfc) == '{}') {
        rfc.fk_refuse_code = "|";
        if (obj.biz_001_is_inloan_users == 0) {
            ret.nextRule = nextCode(obj);
        } else {
            ret.nextRule = 1003
        }
    } else {
        ret.nextRule = 1003

    }
    ;
    ret.result = {
        "fk_004_refuse_code": rfc.fk_refuse_code,
        "fk_002_user_current_loan_num": obj.fk_002_user_current_loan_num,
        "biz_001_is_inloan_users": obj.biz_001_is_inloan_users,
        "biz_025_has_debt_all": obj.biz_025_has_debt_all

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

function nextCode(obj) {
    if (obj.fk_020_is_white_user == 0) {
        return 1002;
    }
    var arr = obj.fk_020_external_rule_rejected_code.split(",");
    var filter = 0;
    var list = obj.fk_020_filter_rule_code.split("|");
    for (i = 0; i < arr.length; i++) {
        for (k = 0; k < list.length; k++) {
            if (arr[i] == list[k]) {
                filter = filter + 1;
            }
        }

    }

    if (filter == arr.length) {
        return 1003;
    }
    return 1002;


}
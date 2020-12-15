function rule(str) {
    var obj = JSON.parse(str);
    var ret = {};
    var rfc = {};

    if (checkWhiteListRule(obj,"SI501")==0 && obj.outinfo_013_izi_inquiries_7days > 6 && obj.biz_001_is_inloan_users < 1) {
        rfc.fk_refuse_code += "|SI501"
    }
    if (checkWhiteListRule(obj,"SI503")==0 && obj.outinfo_008_izi_inquiriesscore >= 0 && obj.outinfo_008_izi_inquiriesscore <= 650 && obj.biz_001_is_inloan_users < 1) {
        rfc.fk_refuse_code += "|SI503"
    }


    if (JSON.stringify(rfc) == "{}") {
        rfc.fk_refuse_code = "|"
    }
    if (obj.biz_001_is_inloan_users == 0) {
        ret.nextRule = 1003
    }
    ret.result = {
        "fk_004_refuse_code": rfc.fk_refuse_code,
        "biz_001_is_inloan_users": obj.biz_001_is_inloan_users
    };
    return JSON.stringify(ret)
};
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